import React from "react";
import First from "./components/first";
import Second from "./components/second";
import Third from "./components/third";
class App extends React.Component{

  render(){
    return <>
    <First/>
    <Second/>
    <Third/>
    </>
  }
}

export default App