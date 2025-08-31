const User = (props) => {
  // returns a JSX -> converted into HTML and rendered in web page
  const name = props.name;
  const location = props.location;
  const contact = props.contact;
  return (
    <div className="user-card">
      <p>Name: {name}</p>
      <p>Location: {location}</p>
      <p>Contact: {contact}</p>
    </div>
  );
}

export default User;