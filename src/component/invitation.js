import React from "react";

function Invitatoin({ handleCheck }) {
  return (
    <div className="w-[100%] h-[100%] border shadow-gray-600] flex flex-col items-center bg-hero-pattern bg-cover justify-center">
      <h1 className="font-garchig text-2xl text-center w-[70%] h-[40%] align-middle italic  pl-9 ">
        Таныг оройн хоолонд уриж байна
      </h1>
      <div className="w-[100%]  flex justify-center items center gap-1  ">
        <button
          className=" font-garchig border rounded w-[30%]"
          onClick={() => {
            handleCheck("зөвшөөрөв");
          }}
        >
          Зөвшөөрөх
        </button>
        <button
          className=" font-garchig border rounded w-[30%]"
          onClick={() => {
            handleCheck("татгалзав");
          }}
        >
          Татгалзах
        </button>
      </div>
    </div>
  );
}

export default Invitatoin;
