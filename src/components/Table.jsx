import React from "react";

const RenderTable = ({ expenses }) => {
  return (
    <table>
      <thead>
        <tr>
          <td>Description</td>
          <td>Amount</td>
          <td>Category</td>
          <td>Delete</td>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense, index) => (
          <tr key={index}>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>{expenses.reduce((acc, expense) => acc + expense.amount, 0)}</td>
          <td>All Categories</td>
          <td>Delete</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default RenderTable;
