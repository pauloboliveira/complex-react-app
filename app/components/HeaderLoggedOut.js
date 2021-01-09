import React, { useEffect, useState, useContext } from "react";
import Axios from "axios";
import DispatchContext from "../DispatchContext";

function HeaderLoggedOut(props) {
  const appDispatch = useContext(DispatchContext)
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();


  async function handleSubimt(e) {
    e.preventDefault();

    try {
      const response = await Axios.post("/login", {
        username,
        password,
      });
      if (response.data) {
        appDispatch({ type: "login", data: response.data })
        appDispatch({ type: "flashMessage", value: "You have successfully logged in." })
      } else {
        console.log("Incorrect username / password");
        appDispatch({ type: "flashMessage", value: "Invalid username / password." })
      }
    } catch (error) {
      console.log("There was a problem");
    }
  }

  return (
    <form onSubmit={handleSubimt} className="mb-0 pt-2 pt-md-0">
      <div className="row align-items-center">
        <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
          <input
            name="username"
            className="form-control form-control-sm"
            type="text"
            placeholder="Username"
            autoComplete="off"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
          <input
            name="password"
            className="form-control form-control-sm"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="col-md-auto">
          <button type="submit" className="btn btn-success btn-sm">
            Sign in
          </button>
        </div>
      </div>
    </form>
  );
}

export default HeaderLoggedOut;
