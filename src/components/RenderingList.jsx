import React, { useState } from "react";
import styles from "../styles/RenderingList.module.css";

const fruits = ["Mango", "Apple", "Orange", "Guava", "Banana"];
const ListRenderer = ({ onClick }) => {
  return (
    <div>
      <ul className="list">
        {fruits.map((fruit, index) => {
          return (
            <li key={fruit} onClick={onClick} className={styles.class}>
              {fruit}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListRenderer;
