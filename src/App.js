import FunctionalComponents from "./components/FunctionalComponents"
import {ClassComponent,ClassComponent1} from "./components/ClassComponent"
import IncrementDecrement from "./components/IncrementDecrement"
import React from 'react'
import './App.css';
import ShowMoreLess from "./components/ShowMoreLess";
function App() {
  return (
    <div className="App">

      <IncrementDecrement defaultCount={10} /> 
      <br /> 
      <br />
      <br />
      <ShowMoreLess />
     
     </div>
  );
}
export default App;