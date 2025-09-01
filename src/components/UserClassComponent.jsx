import {Component} from "react";

class UserClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: null,
      userCompany: null,
      userBio: null,
      image: null,
      totalCompanySwitched: 6
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/bhaskar123u");
    const json = await data.json();
    const { name, company, bio, avatar_url } = json;
    this.setState({
      userName: name,
      userCompany: company,
      userBio: bio,
      image: avatar_url
    });
    console.log('this.state in componentDidMount',this.state);
  }

  // returns a JSX -> converted into HTML and rendered in web page
  render() {
    const { userName, userCompany, userBio, totalCompanySwitched, image } = this.state;
    console.log("this.state in render", this.state);
    return (
      <div className="user-card">
        <p>Name: {userName}</p>
        <img className="github-image" src={image} style={{ width: '100px', height: '100px', border: '1px solid black', borderRadius: '10px'}} />
        <p>Company: {userCompany}</p>
        <p>Bio: {userBio}</p>
        <button
          onClick={() => {
            this.setState({
              totalCompanySwitched: this.state.totalCompanySwitched + 1,
            });
          }}
          className="update-course-count-btn"
        >
          Update Company Count
        </button>
        <p>CompanySwitched: {totalCompanySwitched}</p>
      </div>
    );
  }
}

export default UserClassComponent;
// 1. Whenever an instance of class was created, the state was created.
// 2. Loading a class based component on web page means we are creating an instance of the class - constructor is called and we can create state variables here.
