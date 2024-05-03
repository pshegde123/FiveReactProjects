import React from "react";
import ReactDOM from "react-dom/client";
//import "./index.css";
import Accordian from "./components/accordian";
import RandomColorGenerator from "./components/randomcolor";
import WeatherApp from "./components/weatherapp";
import GithubProfileFinder from "./components/GithubProfileFinder";
import ToDoApp from "./components/ToDoApp";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Accordian />
    <RandomColorGenerator />
    <WeatherApp />
    <GithubProfileFinder />
    <ToDoApp />
  </React.StrictMode>
);
