import React, { useState } from "react";

const ExpandableText = ({ children, maxCharacters = 100 }) => {
  const [isExpanded, setExpansion] = useState(false);
  return (
    <div>
      {isExpanded ? (
        <p>{children}</p>
      ) : (
        <p>{children.substring(0, maxCharacters)}</p>
      )}
      <button onClick={() => setExpansion(!isExpanded)}>
        {isExpanded ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default ExpandableText;
