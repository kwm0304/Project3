import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { setContext } from '@apollo/client/link/context'
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//make landing page to hold neccessary components
import Footer from './Pages/Footer'
import Login from './Pages/Login/login';
import Header from './components/Header';
import Home from './Pages/home';
import Signup from './Pages/SignUp';
import Profile from './Pages/Profile';
import CharacterSheet from './pages/CharacterSheet';
import UpdateCharacter from './components/UpdateCharacter';
import DiceRoller from './Pages/DiceRoller';
import NameGenerator from './Pages/NameGenerator'
import { onError } from "@apollo/client/link/error";


const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// Add catch route all later
// https://reactrouter.com/en/main/hooks/use-location
// USE LOCATION ^^
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diceroller" element={<DiceRoller />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile">
            <Route path=":username" element={<Profile />} />
            <Route path="" element={<Profile />} />
          </Route>
          <Route path="/CharacterSheet" element={<CharacterSheet />} />
          <Route path="/NameGenerator" element={<NameGenerator />} />
          <Route path="*" element={<Home />} />
        </Routes>

        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
