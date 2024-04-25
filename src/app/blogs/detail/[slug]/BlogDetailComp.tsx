import React from "react";

type Content = {
  Content: string;
  Title: string;
};

type Props = {
  content: Content[];
};

export default function BlogDetailComp({ content }: Props) {
  return (
    <div>
      <h1 style={{ fontSize: "2em", color: "red" }}>{content[0].Title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content[0].Content }} />
    </div>
  );
}
