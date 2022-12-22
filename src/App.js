import React, { useState } from "react";
// Style
import carmen from "./carmen.svg";
import "./sass/App.css";
//
import Courses from "./Courses";
import PrintCategories from "./PrintCategories";
import data from "./data.js";

const AllCategories = Array.from(
  new Set(data.map((single) => single.category))
);
AllCategories.push("all");

function App() {
  const [program, setProgram] = useState(data);
  const [category, setCategory] = useState(AllCategories);

  const filterProgram = (category) => {
    if (category.single === "all") setProgram(data);
    else {
      const newProgram = data.filter(
        (single) => category.single === single.category
      );
      setProgram(newProgram);
    }
  };

  return (
    <div>
      <header className="flex">
        <img src={carmen} alt="Carmen Lopez" />
        <h3>.react | sass.</h3>
      </header>
      <main>
        <section>
          <span>
            <h1>Our courses</h1>
            <PrintCategories filterProgram={filterProgram} items={category} />
          </span>
          <Courses items={program} />
        </section>
      </main>
      <footer className="flex">
        <a
          href="https://github.com/cgbl-90"
          target="_blank"
          rel="noopener noreferrer"
        >
          .github.
        </a>
        <a href="https://t.me/cg_bl" target="_blank" rel="noopener noreferrer">
          .let's connect on telegram.
        </a>
      </footer>
    </div>
  );
}

export default App;
