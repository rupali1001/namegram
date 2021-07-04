import React from "react";
import "./App.css";
import Header from "../Header/Header";
import SearchBox from "../SearchBox/SearchBox";
import ResultContainer from "../ResultsContainer/ResultsContainer";

const name = require("@rstacruz/startup-name-generator");

class App extends React.Component {
  state = {
    headertext: "Namegram ! ",
    headerExpanded: true,
    suggestedNames: [],
  };
  handleInputChange = (e) => {
    const value = e.target.value
    this.setState({
      headerExpanded: !value,
      suggestedNames: value ? name(value) : [],
    });
    console.log(value);
  };

  render() {
    return (
      <div>
        <Header
          headTitle={this.state.headertext}
          headerExpanded={this.state.headerExpanded}
        />
        <SearchBox onInputChange={this.handleInputChange} />
        <ResultContainer suggestedNames={this.state.suggestedNames} />
      </div>
    );
  }
}

export default App;
