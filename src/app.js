import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

export default function AppLayout() {
  return (
    <div className="page">
      <div className="container">
        <Header />
        <Body />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(AppLayout());
