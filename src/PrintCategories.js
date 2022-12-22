import React from "react";

function PrintCategories({ filterProgram, items }) {
  return (
    <span>
      {items.map((single) => {
        return (
          <button onClick={() => filterProgram({ single })}>{single}</button>
        );
      })}
    </span>
  );
}

export default PrintCategories;

/**
 * Error 1: Don't iterate Sets with .map. Converted Set to Array
 * Error 2: .map goes inside {}
 */
