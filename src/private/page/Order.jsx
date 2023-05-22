import React from "react";
import { NavLink } from "react-router-dom";
import { order } from "../../data/Data";

export const Order = () => {
  return (
    <>
      {/* <NavLink to="/product">
        <div className="text-end">
          <button type="button" className="btn btn-outline-info">
            Create
          </button>
        </div>
      </NavLink> */}
      <table className="table table-striped  table-hover">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Product Name</th>
            <th scope="col">OrderBy</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col">TotalPrice</th>
            <th scope="col">StatusOrder</th>
            <th scope="col">Delete | Edit</th>
          </tr>
        </thead>
        <tbody>
          {order.map((item, index) => (
            <tr>
              <th scope="row">{item.id}</th>
              <td>{item.ProductName}</td>
              <td>{item.OrderBy}</td>
              <td>{item.Amount}</td>
              <td>{item.Category}</td>
              <td>{item.TotalPrice}</td>
              <td>{item.statusOrder}</td>
              <td>
                <i className="bi bi-trash-fill"></i> |
                <NavLink to="/edit">
                  <i className="bi bi-pencil-square"></i>
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
