import CodeArea from "@/components/base/CodeArea/CodeArea";
import EditorComponentStyle from "@/components/base/EditorComponentStyle/EditorComponentStyle";
import React from "react";

const Intro = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center py-28">
      <h1 className="text-4xl font-black uppercase mb-4">
        <pre className="max-sm:text-3xl">Reusable Components</pre>
      </h1>
      <CodeArea>
        <EditorComponentStyle styleName="punctuation">
          {"<"}
        </EditorComponentStyle>
        <EditorComponentStyle styleName="class-name">
          strong
        </EditorComponentStyle>
        <EditorComponentStyle styleName="punctuation">
          {">"}
        </EditorComponentStyle>
        <EditorComponentStyle preMode styleName="punctuation">
          <h2 className="inline">
            Seamlessly download and utilize our fully reusable components for
            effortless integration into your projects.
          </h2>
        </EditorComponentStyle>
        <EditorComponentStyle styleName="punctuation">
          {"</"}
        </EditorComponentStyle>
        <EditorComponentStyle styleName="class-name">
          strong
        </EditorComponentStyle>
        <EditorComponentStyle styleName="punctuation">
          {">"}
        </EditorComponentStyle>
      </CodeArea>
    </div>
  );
};

export default Intro;
