import React from "react";

function Received() {
  return (
    <>
      <div className="w-full h-screen   flex flex-col items-center justify-center relative gap-5  ">
        <div className=" w-[80%] h-[80%] bg-[#fefaf1] flex  flex-col items-center justify-center rounded bg-hero-pattern bg-cover">
          <p className=" font-garchig text-center w-[60%]  h-[15%] align-middle italic mt-2 pl-2">
            төв номын сангийн урд CU-тэй байрны 3 давхарт
          </p>
          <div className="w-[100%] flex justify-center gap-2">
            <span className=" font-garchig inline-block text-[20px]">07</span>
            <span className=" font-garchig inline-block text-[20px]">:</span>
            <span className=" font-garchig inline-block text-[20px]">15</span>
            <span className=" font-garchig inline-block text-[20px]">:</span>
            <span className=" font-garchig inline-block text-[20px]">
              19:00
            </span>
          </div>
          <iframe
            src="https://giphy.com/embed/SsmefHWnUroNnPrXqb/video"
            width="100"
            height="100"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Received;
