import * as React from "react";
import Name from "../assets/name.svg";

import {
  all,
  highlightg,
  highlighto,
  headingOne,
  paragraphStyle,
  articleStyle,
  blogButton,
  logo,
} from "./content.module.css";

const Content = ({ children }) => {
  const discName = "!{chukky}";
  return (
    <main className={all}>
      <article className={articleStyle}>
        <h1 className={headingOne}>
          MOSTLY CONTAINING <span className={highlighto}>CODE</span> &{" "}
          <span className={highlighto}>DESIGN</span>
        </h1>
        <p className={paragraphStyle}>
          I am a Computer Science Student at Newcastle University. I am a
          passionate self taught developer and designer. I have a passion for
          creating and building things that are useful and beautiful. I am
          currently lookig to collaborate on any projects that I can get my
          hands on, and I am always open to discussing new ideas. You can reach
          reach me on Discord with <code>{discName}#5111</code>
        </p>
      </article>
      {children}
    </main>
  );
};

export default Content;
