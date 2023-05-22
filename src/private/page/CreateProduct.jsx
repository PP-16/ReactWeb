import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Formik, Form } from "formik";
import { ValidateContact } from "../../validate-from/ValidateContact";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const sizeoptions = [
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
];
const categoryoptions = [
  { value: "Hockey", label: "Hockey" },
  { value: "Basketball", label: "Basketball" },
  { value: "Baseball", label: "Baseball" },
];


export const CreateProduct =()=> {
    const { getRootProps, getInputProps } = useDropzone();
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedOption1, setSelectedOption1] = useState(null);
    const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="card">
      <div className="row">
        <div className="col-md-4">
          <div className="card-body">
            <div {...getRootProps()} className="dropzone">
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <Formik
              initialValues={{
                amount: "",
                size: "",
                detail: "",
                name: "",
                category: "",
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
                    <div className="form-group col-md-3 m-2">
                      <label htmlFor="name">NameProduct</label>
                      <input
                        value={values.name}
                        className="form-control invalid"
                        onChange={(e) => {
                          setFieldValue("name", e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group col-md-3 m-2">
                      <label htmlFor="size">Size</label>
                      <Select
                        placeholder="- Select -"
                        name="Size"
                        defaultValue={selectedOption1}
                        onChange={setSelectedOption1}
                        options={sizeoptions}
                        value={values.size}
                      />
                    </div>
                    <div className="form-group col-md-3 m-2">
                      <label htmlFor="category">Category</label>
                      <Select
                        placeholder="- Select -"
                        name="Category"
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={categoryoptions}
                        value={values.category}
                      />
                    </div>
                    <div className="form-group col-md-3  m-2">
                      <label htmlFor="name">Amount</label>
                      <input
                        value={values.amount}
                        className="form-control invalid"
                        onChange={(e) => {
                          setFieldValue("amount", e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group col-md-6  m-2">
                      <label htmlFor="name">Details</label>
                      <textarea
                        value={values.detail}
                        className="form-control  invalid"
                        onChange={(e) => {
                          setFieldValue("detail", e.target.value);
                        }}
                      />
                    </div>

                    <div className="form-group col-md-3">
                      <label htmlFor="name">วันเดือนปี</label>
                      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                  </div>
                  <div className="row text-center">
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

