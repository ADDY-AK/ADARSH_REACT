import React from 'react';
class IncrementDecrement extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: this.props.defaultCount,
      };
    }
  
  
    increment() {
      this.setState({
        count: this.state.count + 1
      });
    };
    
    decrement() {
      this.setState({
        count: this.state.count - 1
      });
    };
  
    reset() {
      this.setState({
        count: 0
      });
    };
  
    render() {
      return (
  
     <div className="counter-area">
     <h1>Question-1</h1>
     <hr />
     <h1>{this.state.count}</h1>
     <button className='bnt' onClick={(e) => this.increment(e)}>Increment</button>
     <button className='bnt' onClick={(e) => this.reset(e)}>Reset</button>
    <button className='bnt' onClick={(e) => this.decrement(e)}>Decrement</button>
      
    </div>
      );
    }
  };
  export default IncrementDecrement;