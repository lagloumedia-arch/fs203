import React from "react";
import Cptst from "./Cptst";

function App() {
  return (
    <div>
      <Cptst
        increment={2}
        couleurs={["red", "blue", "green", "purple"]}
      />
    </div>
  );
}

export default App;