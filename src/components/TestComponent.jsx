// simple component that returns a <p> tag

const TestComponent = (props) => {
  console.log("props in TestComponent", props);
    const { firstName, lastName} = props;
    return (
      <>
            <p>{firstName}</p>
            <p>{lastName}</p>
      </>
    );

};

export default TestComponent;
