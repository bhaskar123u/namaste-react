import React from "react";

class UserClassComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  // returns a JSX -> converted into HTML and rendered in web page
  render() {
    const {name, location, contact} = this.props
    return (
      <div className="user-card">
        <p>Name: {name}</p>
        <p>Location: {location}</p>
        <p>Contact: {contact}</p>
      </div>
    );
  }
}

export default UserClassComponent;