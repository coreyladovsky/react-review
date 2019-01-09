import React from "react";

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      day: "",
      year: "",
      favorite_cuisine: ""
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    debugger
  }

  displayDate() {
    return(
      <div>
        <select name="day" value={this.state.day}>
          <option disabled>day</option>
          {this.displayRange(1, 31)}
        </select>
        <select name="year" value={this.state.year}>
          <option disabled>year</option>
          {this.displayRange(1942, 2019)}
        </select>
      </div>
    )
  }

  displayRange(min, max) {
    let nums = [];
    for(let i = min; i <= max; i++) {
      nums.push(i);
    }
    return nums.map(num => {
      return <option value={num}>{num}</option>
    })
  }

  render() {
    console.log(this.state)
    return (
      <>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <label htmlFor="name"> Name</label>
          <input type="text" id="name" name="name" value={this.state.name} />
          <label htmlFor="email"> Email</label>
          <input type="text" id="email" name="email" value={this.state.email} />
          {this.displayDate()}

          <label htmlFor="chinese"> Chinese</label>
          <input type="radio" name="favorite_cuisine" value="chinese"
          checked={this.state.favorite_cuisine === "chinese"} id="chinese"/>
          <label htmlFor="italian"> Italian</label>
          <input type="radio" name="favorite_cuisine" value="italian"
          checked={this.state.favorite_cuisine === "italian"} id="italian"/>

          <input type="submit" value="SUBMIT" />
        </form>
      </>
    );
  }
}

export default Profile;
