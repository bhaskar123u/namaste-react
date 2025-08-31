import React from "react";

class UserClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseCompletedCount: 1,
      someVariable: null
    };
  }
  // returns a JSX -> converted into HTML and rendered in web page
  render() {
    const { name, location, contact } = this.props
    const {courseCompletedCount
  } = this.state;
    return (
      <div className="user-card">
        <p>Name: {name}</p>
        <p>Location: {location}</p>
        <p>Contact: {contact}</p>
        <p>CourseCompleted: {courseCompletedCount}</p>
      </div>
    );
  }
}

export default UserClassComponent;
// 1. Whenever an instance of class was created, the state was created.
// 2. Loading a class based component on web page means we are creating an instance of the class - constructor is called and we can create state variables here.