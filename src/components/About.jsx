import User from "./User";
import UserClassComponent from "./UserClassComponent";

const About = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-page-main-heading">About Us</h1>
      <User
        name="Bhaskar Sharan(functional component)"
        location="Bihar(functional component)"
        contact="+91-7739230633(functional component)"
      />
      <UserClassComponent
        name="Bhaskar Sharan(class component)"
        location="Bihar(class component)"
        contact="+91-7739230633(class component)"
      />
    </div>
  );
};

export default About;
