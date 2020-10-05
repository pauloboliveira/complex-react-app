import React, { useEffect } from "react";
import Container from "./Container";

function Page(props) {
  // when we use '[]' in second parameter
  // it's means that we'll want to run the function only the first time the component is rendered
  useEffect(() => {
    document.title = `${props.title} | ComplexApp`;
    window.scrollTo(0, 0);
  }, []);

  return <Container wide={props.wide}>{props.children}</Container>;
}

export default Page;
