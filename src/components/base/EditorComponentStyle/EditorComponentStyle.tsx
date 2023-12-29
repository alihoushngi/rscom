import React from "react";
import { ReactComponent } from "@/types/types";
import { iProps } from "./EditorComponentStyleType";

const EditorComponentStyle: ReactComponent<iProps> = (props) => {
  const { styleName, preMode, children } = props;

  return (
    <>
      {preMode ? (
        <pre className="inline whitespace-pre-wrap">
          <span className={styleName}>{children}</span>
        </pre>
      ) : (
        <span className={styleName}>{children}</span>
      )}
    </>
  );
};

export default EditorComponentStyle;
