import User from "./User";
import UserClassComponent from "./UserClassComponent";
import { Component } from "react";

// this is a parent class component to UserClassComponent
class About extends Component {
  constructor() {
    super();
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="about-us-container">
        <h1 className="about-page-main-heading">About Us</h1>
        {/* class based component */}
        <UserClassComponent/>
      </div>
    );
  }
}

export default About;
