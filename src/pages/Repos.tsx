import { useState } from "react";
import "../App.css";
// import SecondFetchExampleAxios from '../Components/SecondFetchExampleAxios/SecondFetchExampleAxios'
// import ThirdFetchHook from '../Components/ThirdFetchHook/ThirdFetchHook'
// import FirstFetchExample from '../Components/FirstFetchExample/FirstFetchExample'
import QueryComponent from "../Components/QueryComponent/QueryComponent";

export function Repos() {  
  return (
    <>
      <header className="top_bar">API Fetch Trainning</header>
      <div className="container">
        {/* <FirstFetchExample/> 
        <SecondFetchExampleAxios/> 
        <ThirdFetchHook/> */}
        <QueryComponent/>
      </div>
    </>
  );
}
