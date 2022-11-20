import React from "react";
import OutlinedCard from "./components/Card";
import  Card from "./components/Card"
import "./index.css"
function App() {
  return (
    <div style={{display:'flex', justifyContent:'center'}}>
      <div style={{ width:500}}>
     <OutlinedCard />
     </div>
    </div>
  );
}

export default App;
