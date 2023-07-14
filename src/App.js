import "./App.css";
import Invitatoin from "./component/invitation";
import { useState } from "react";
import Received from "./component/received";
import Reject from "./component/reject";
function App() {
  const [response, setResponse] = useState("");
  const handleCheck = (arg) => {
    setResponse(arg);
    console.log(response);
  };
  return (
    <div className="w-full h-screen bg-wite flex justify-center items-center ">
      {response === "зөвшөөрөв" ? (
        <Received />
      ) : response === "татгалзав" ? (
        <Reject />
      ) : (
        <Invitatoin handleCheck={handleCheck} />
      )}
    </div>
  );
}

export default App;
