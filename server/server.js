const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { authMiddleware } = require("../");
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

// Initialize Apollo server with type defs, resolvers, and middleware
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

// db.dropDatabase();

// Initialize express server
const app = express();
const PORT = process.env.PORT || 3001;

// Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));

const root = require("path").join(__dirname, "../client", "build");
app.use(express.static(root));

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile("index.html", { root });
  });
}

// Start apollo server function
const startApolloServer = async () => {
  // waits for server to start before applying middleware
  await server.start();
  server.applyMiddleware({ app });

  // Once db is open open server and log to console
  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
      console.log(`🌍 Now listening on http://localhost:${PORT}`);
    });
  });
};

// start apollo server
startApolloServer();