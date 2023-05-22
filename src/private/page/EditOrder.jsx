import React, { useState } from "react";
import { Formik, Form } from "formik";
import { ValidateContact } from "../../validate-from/ValidateContact";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";

const statusoptions = [
    { value: "To Pay", label: "To Pay" },
    { value: "To Ship", label: "To Ship" },
    { value: "To Receive", label: "To Receive" },
    { value: "Completed", label: "Completed" },
  ];
  const Productoptions = [
    { value: "Product1", label: "Product1" },
    { value: "Product2", label: "Product2" },
    { value: "Product3", label: "Product3" },
    { value: "Product4", label: "Product4" },
    { value: "Product5", label: "Product5" },
    { value: "Product6", label: "Product6" },
  ];


export const EditOrder =()=> {
    const [startDate, setStartDate] = useState(new Date());
    const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div className="card">
      <div className="row">
        <div className="col-md-12">
          <div className="card-body m-2">
            <Formik
              initialValues={{
                amount: "",
                orderby: "",
                statusorder: "",
                nameproduct: "",
                totalprice: "",
                category:"",

              }}
              validationSchema={ValidateContact}
              onSubmit={(values) => {
                let data = { ...values };
                console.log("data : " + JSON.stringify(data));
              }}
            >
              {({
                values, setFieldValue, errors, touched 
              }) => (
                <Form className="php-email-form">
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label htmlFor="nameproduct">Product Name</label>
                      <Select
                        placeholder="- Select -"
                        name="nameproduct"
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={Productoptions}
                        value={values.nameproduct}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="amount">Amount</label>
                      <input
                        value={values.amount}
                        className="form-control invalid"
                        onChange={(e) => {
                          setFieldValue("amount", e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="orderby">Order By</label>
                      <input
                        value={values.orderby}
                        className="form-control  invalid"
                        onChange={(e) => {
                          setFieldValue("orderby", e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="totalprice">Total Price</label>
                      <input
                        value={values.totalprice}
                        className="form-control  invalid"
                        onChange={(e) => {
                          setFieldValue("totalprice", e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="category">Category</label>
                      <input
                        value={values.category}
                        className="form-control  invalid"
                        onChange={(e) => {
                          setFieldValue("category", e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="statusorder">Status Order</label>
                      <Select
                        placeholder="- Select -"
                        name="statusorder"
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={statusoptions}
                        value={values.statusorder}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="name">Date Buy</label>
                      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                  </div>
                  <div className="row text-center mt-2 m-3">
                    <div className="col-md-12 text-center">
                      <button type="submit" className="btn btn-success btn-md-2">
                        Save
                      </button>
                      <button
                        type="reset"
                        className="btn btn-primary btn-md-2"
                        onClick={() => {}}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

