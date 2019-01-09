import React from 'react';

class WarmUp extends React.Component {
  constructor() {
    super();
    this.state = {
      data: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

handleChange = (event) => {
  this.setState({ data: event.target.value })
}

reverseWord () {
  return this.state.data.split("").reverse().join("")
}

  render() {
    let {data} = this.state;
    return(
      <>
      Type your words!
        <input onChange={this.handleChange} type="text"
        name="data" value={data}/>

        <p>{this.reverseWord()}</p>
      </>
    )
  }
}

export default WarmUp;
