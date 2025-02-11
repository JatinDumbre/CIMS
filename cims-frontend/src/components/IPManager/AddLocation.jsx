import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../Admin/AdminNavbar";
import Footer from "../Admin/Footer";
import IPNavbar from "./IPNavbar";

const AddLocation = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // const newData = { ...data, status: "Active" };
    // console.log(newData);

    addLocation(data);
    alert("Location Added succesfull !!!");
    navigate("/ipmanager");
  };

  const addLocation = async (locationdetail) => {
    await fetch("http://localhost:8030/ipmanager/addlocation", {
      method: "POST",
      body: JSON.stringify(locationdetail),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).catch((error) => alert("Location Id is already present"));
  };

  return (
    <div>
      <IPNavbar />
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px ",
          marginBottom: "100px",
        }}
      >
        <div className="card w-50">
          <h1 className="text-center pt-3"> Add Location </h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="p-3 pb-2">
              <label className="form-label"> Location Id </label>
              <input
                className={
                  errors.loc_id ? "fname-error form-control" : "form-control"
                }
                type="number"
                name="loc_id"
                {...register("loc_id", {
                  required: true,
                })}
              />
              {errors.loc_id && errors.loc_id.type === "required" && (
                <p className="error-msg"> Location Id is required </p>
              )}
            </div>

            <div className="p-3 pb-2">
              <label className="form-label"> Location Name </label>
              <input
                className={
                  errors.loc_name ? "lname-error form-control" : "form-control"
                }
                type="text"
                name="loc_name"
                {...register("loc_name", {
                  required: true,
                })}
              />
              {errors.loc_name && errors.loc_name.type === "required" && (
                <p className="error-msg"> Location Name is required </p>
              )}
            </div>

            <div className="p-3 pb-2">
              <label className="form-label"> Location Address </label>
              <input
                className={
                  errors.loc_add ? "mobno-error form-control" : "form-control"
                }
                type="text"
                name="loc_add"
                {...register("loc_add", {
                  required: true,
                })}
              />
              {errors.loc_add && errors.loc_add.type === "required" && (
                <p className="error-msg"> Mobile Number is required </p>
              )}
            </div>

            <div className="p-3 pb-2">
              <label className="form-label"> Loacation City </label>
              <input
                className={
                  errors.loc_city ? "email-error form-control" : "form-control"
                }
                type="text"
                name="loc_city"
                {...register("loc_city", {
                  required: true,
                })}
              />
              {errors.loc_city && errors.loc_city.type === "required" && (
                <p className="error-msg"> Email Id is required </p>
              )}
            </div>

            <div className="d-flex justify-content-center pt-1 pb-3">
              <div className="p-3 pb-2 w-50">
                <button className="btn btn-success w-100">Submit</button>
              </div>
              <div className="p-3 pb-2 w-50">
                <button
                  type="button"
                  className="btn btn-warning w-100"
                  onClick={() => navigate("/ipmanager")}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddLocation;
