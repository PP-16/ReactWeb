import React from "react";
import { NavLink } from "react-router-dom";
import { data } from "../../data/Data";

export const Table = () => {
  return (
    <>
      <NavLink to="/product">
        <div className="text-end">
          <button type="button" className="btn btn-outline-info">
            Create
          </button>
        </div>
      </NavLink>
      <table className="table table-striped table-ligth">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Size</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col">Delete | Edit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr>
              <th scope="row">{item.id}</th>
              <td>{item.Name}</td>
              <td>{item.size}</td>
              <td>{item.Amount}</td>
              <td>{item.Category}</td>
              <td>
                <i className="bi bi-trash-fill"></i> |
                <NavLink to="/product">
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
