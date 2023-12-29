import { ReactComponent } from "@/types/types";
import React from "react";

const CodeArea: ReactComponent<any> = ({ children }) => {
  return (
    <div className="relative m-2">
      <div className="left-0 right-0 top-0 absolute bg-slate-800 w-full h-8 rounded-t-md"></div>
      <div className="text-sm bg-slate-700 py-14 px-5 rounded-md">
        {children}
      </div>
      <div className="absolute flex gap-1 left-2 top-2">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-600" />
      </div>
    </div>
  );
};

export default CodeArea;
