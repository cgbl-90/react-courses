import React from "react";

function Courses({ items }) {
  return (
    <section>
      {items.map((single) => {
        return (
          <article key={single.id}>
            <h3>
              {single.title} by {single.author}
            </h3>
            <p>{single.about}</p>
            <h4>
              <span className="badge">${single.price}</span>
              <span className="badge">{single.time} hrs</span>
              <span className="badge">{single.category}</span>
            </h4>
          </article>
        );
      })}
    </section>
  );
}

export default Courses;
