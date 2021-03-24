import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/header/Header";

import Home from "./pages/home/Home";
import AllPosts from "./pages/all-posts/AllPosts";
import SinglePost from "./pages/single-post/SinglePost";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/all-posts" component={AllPosts} />
        <Route path="/:slug" component={SinglePost} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
