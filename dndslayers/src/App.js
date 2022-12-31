import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { setContext } from '@apollo/client/link/context'
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
//make landing page to hold neccessary components
import Footer from './pages/Footer'
import Login from './pages/Login';
import Header from './components/Header';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import CharacterSheet from './pages/CharacterSheet';
import Character from './components/Characters/index';
// import UpdateCharacter from './components/UpdateCharacter';
import DiceRoller from './pages/DiceRoller';
import NameGenerator from './pages/NameGenerator'
import { onError } from "@apollo/client/link/error";
// import { ReactSession } from 'react-client-session'


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
  // ReactSession.setStoreType("localStorage")
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
          <Route path="/Character" element={<Character />} />
          <Route path="*" element={<Home />} />
        </Routes>

        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
