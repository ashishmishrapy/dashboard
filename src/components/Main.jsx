import React from "react";
import Header from "./Main/Header";
import UpperDiv from "./Main/UpperDiv";
import LowerDiv from "./Main/LowerDiv";

const Main = () => {
  return (
    <div className="flex flex-col gap-2">
      <Header />
      <div className="bg-(--bg-white) px-3 py-2 rounded-2xl">
        <UpperDiv />
        <LowerDiv />
      </div>
    </div>
  );
};

export default Main;
