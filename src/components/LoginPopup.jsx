import { useContext, useState } from "react";
import MyContext from "../common/MyContext";

const LoginPopup = () => {
  // fetching modalOn status from context
  const { modalOn, setModalOn, setLoggedInUserName, setLoginKeyword } =
    useContext(MyContext);
  const [userName, setUserName] = useState("");

  return (
    <>
      <div className="backdrop" onClick={() => setModalOn(false)} />
      <div className="modal" role="dialog" aria-modal="true">
        <h2 className="text-2xl">Login</h2>
        <input
          placeholder="Enter your name"
          className="p-2 border border-black mt-6 rounded-lg w-3/4 bg-gray-100"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <div
          style={{
            display: "flex",
            gap: 8,
            justifyContent: "flex-end",
            marginTop: 12,
          }}
        >
          <button className="btn ghost" onClick={() => setModalOn(false)}>
            Cancel
          </button>
          <button
            className="btn primary"
            onClick={(e) => {
              if (userName && userName.length > 0) {
                setLoggedInUserName(userName.trim());
              }
              setModalOn(false);
            }}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginPopup;
