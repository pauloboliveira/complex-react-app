import React from "react";
import ReactDOM from "react-dom";

function ExampleConponent() {
  return (
    <div>
      <h1>This is our app!!!!!</h1>
      <p>The sky is blue</p>
    </div>
  );
}

ReactDOM.render(<ExampleConponent />, document.querySelector("#app"));
