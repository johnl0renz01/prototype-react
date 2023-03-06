import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call and get new date from the server
    }
  }

  componentWillUnmount() {
    console.log("Counter - Unmounted");
  }

  render() {
    console.log("Counter - Rendered");
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;

// <React.Fragment *DISABLE creating new div*
// <span>{this.formatCount()}</span>
// Inside bracket -> {}, variable must be put
//  return count === 0 ? 'Zero' : count; * CONDITIONAL*
//   'Zero' can be replace with <h1>Zero</h1> etc.
//    or const x = <h1>Zero</h1>;

//CLASS NAME
//<span className="badge badge-primary m-2"> </span>

//CLASS in constant
// render() {
// let classes = "badge m-2 badge-";
// classes += this.state count === 0 ?"warning" : "primary";

// STYLE
// styles = {
//    fontSize : 13
// };

// STYLE Inline
// style={ { fontSize: 30} }

// COMBINE
// <span style={this.styles} className="badge badge-primary m-2"></span>

// imageUrl: 'https://picsum.photos/200'
//  <img src={this.state.imageUrl} alt=""></img>

// const { count } = this.state; *DECLUTTER*
// span/button etc. is used for variables

//Rendering lists
/*
state = {
    tags: ["tag1", "tag2", "tag3"]
 };

 renderTags() {
  if (this.state.tags.length === 0)  <p>There are no tags!</p>;

  return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
 }

 render () {
  return (
    <div>
      {this.renderTags()}
    </div>
  )
 }


 */

//console.log("Increment Clicked", this);

/* SOME CODE
    handleIncrement = () => {
    this.setState({ count: this.state.count + 1})
  }
 */

/* CODECODE

    handleIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.doHandleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }




  ANOTHER CODE


   handleIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
  */

/*
  Render CHILDREN PROPS 

  return (
      <div>
        {this.props.children}
      </div>


  DIRECT WAY id
  return (
      <div>
        <h4>{this.props.id}</h4>
      </div>
  
  */

/*
  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  */

/* 

  ==========BEFORE SINGLE SOURCE==========
  class Counter extends Component {
  state = {
    value: this.props.counter.value,
  };

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}




==========AFTER SINGLE SOURCE======================

*/
