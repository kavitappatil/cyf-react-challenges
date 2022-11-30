import React from "react";
import jsonData from "./babyNamesData.json";
import "./childList.css";

const ChildList = () => {
  return (
     <div>
    <p>My favorite Pokemon is Squirtle.</p>
    <div className="container-fluid">
        {
            jsonData.map((baby, index) => (
            <button key={index}
                    className={
                    baby.sex === "f"
                        ? "p-3 mb-2 baby-girl text-white"
                        : "p-3 mb-2 baby-boy text-white"}>
                    {baby.name}
            </button>
            ))
        }
    </div>
    </div>
  );
};

export default ChildList;


