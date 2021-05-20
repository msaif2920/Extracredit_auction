import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

function Reroute() {
  const history = useHistory();
  useEffect(() => {
    history.replace("/");
  }, []);
  return <div></div>;
}

export default Reroute;
