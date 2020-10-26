import React, { Component } from "react";
import "./HappyMessage.css";
import axios from "axios";

export default class HappyMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hi there, resy for a funny thing?"
    };
  }

  generateRandomQuote = () => {
    axios.get("https://type.fit/api/quotes").then(res => {
      // console.log(res.data);
      const randomNumber = Math.floor(Math.random() * 100 + 1);
      const quote = res.data[randomNumber];
      this.setState({ message: quote.text });
    });
  };

  render() {
    return (
      <div className="message">
        <h1> FUN facts?! </h1>

        <h2>{this.state.message}</h2>
        <button onClick={this.generateRandomQuote}>CLICK ME</button>
        <footer>
          React Lesson of CODER ACADEMY &copy; SyedaIsmatFarjana 2020
        </footer>
      </div>
    );
  }
}
