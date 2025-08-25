import React from "react";
import ReactDOM from "react-dom/client"

// React Element using JSX instead of React.createElement()
const heading = (
    <h1 id='heading' className='headingClass'>
        H1 in React Element: JSX
    </h1>
);

// React Component - Function Based
const Title = function () {
    return (
        <h1 id='title' className='title'>H1 in title component</h1>
    );
}

// Component composition
const HeadingComponent = () => {
    const name = "string variable";
    return (
      <div className="container">
        <h1 id="heading" className="headingClass">
          H1 in functional component
        </h1>
        <h1 style={{ textAlign: 'center' }}>{name}</h1>
        <Title />
        {heading}
      </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);