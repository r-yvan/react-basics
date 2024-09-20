import React, { useState } from "react";
import { categories } from "./App";

const ExpenseForm = () => {

  return (
    <form>
      <div>
        <label htmlFor="description">Description</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="amount">Amount</label>
        <input type="number" />
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <select name="categories" id="categories">
          {categories.map(category => <option key={category} value={category}>{category}</option>)}
        </select>
      </div>
    </form>
  );
};

export default ExpenseForm;
