// Higher-Order Component which wraps incoming component

const Playground = (SomeComponent) => {

  return function WithPlayground(props) {
    return (
      <>
        <p>This is a playground for the developers, write some code which you want to test here 👇</p>
        <hr className="horizontal-line" />
        <p>wrap before playground</p>
        <div className="hoc-child-component">
          <SomeComponent {...props} />
        </div>
        <p>wrap after playground</p>
      </>
    );
  };
};

export default Playground;
