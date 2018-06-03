import React from 'react';
 class ButtonDemo extends React.Component {
  constructor(props){
    super(props);
    this.state={counter:0};
  }
  incCounter(){
    this.setState((prev)=>{return {counter:prev.counter+1}});
    console.log(this.state.counter)
  }
  render(){
  return (
    <div className="Comment">
      <button onClick={this.incCounter.bind(this)}>Increment</button>
      <p>You clicked {this.state.counter} times</p>
    </div>
  );
}

}

export default ButtonDemo;