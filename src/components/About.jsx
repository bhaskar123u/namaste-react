import { Component } from "react";
import UserClassComponent from "./UserClassComponent";

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
