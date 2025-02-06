import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import SONavbar from "./SONavbar";
import Footer from "../Admin/Footer";

const UpdateMaterial = () => {
  const mid = JSON.parse(localStorage.getItem("mid"));

  const location = useLocation();
  const data = location.state;

  console.log(data);

  const navigate = useNavigate();

  const updateQuantity = async (data) => {
    await fetch("http://localhost:8033/update-quantity/" + mid, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({ defaultValues: data });

  const onSubmit = (data) => {
    console.log(data);

    const newData = {
      matId: data.matId,
      projectId: data.projectId,
      newQuantity: data.quantity,
    };
    console.log(newData);

    updateQuantity(newData);
    alert("Update succesfull !!!");
    // alert("Profile will update after relogin.");
    navigate("/siteoperator");
  };

  return (
    <div className="">
      <SONavbar />

      <div
        className="container  "
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px ",
          marginBottom: "100px",
        }}
      >
        <div className="card w-50">
          <h1 className="text-center pt-3"> Update Material </h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="p-3 pb-2">
              <label className="form-label"> Material Name </label>
              <input
                className={
                  errors.materialName ? " form-control" : "form-control"
                }
                disabled
                type="text"
                name="materialName"
                {...register("materialName", {
                  required: true,
                })}
              />
              {errors.materialName &&
                errors.materialName.type === "required" && (
                  <p className="error-msg"> Material Name is required </p>
                )}
            </div>

            {/* <div className="p-3 pb-2">
              <label className="form-label"> Material Name </label>

              <select
                className={
                  errors.materialName
                    ? "acc_id-error form-control"
                    : "form-control"
                }
                name="materialName"
                {...register("materialName", { required: true, minLength: 1 })}
              >
                <option value="">---Select one---</option>
                <option value="Red Brick">Red Brick</option>
                <option value="">Copper Wire</option>
                <option value="2">IP Manager</option>
                <option value="4">Project Manager</option>
                <option value="5">Site Operator</option>
              </select>

              {errors.role && errors.role.type === "required" && (
                <p className="error-msg"> Role is required </p>
              )}
              {errors.role && errors.role.type === "minLength" && (
                <p className="error-msg"> Role should be selected </p>
              )}
            </div> */}

            <div className="p-3 pb-2">
              <label className="form-label"> Project Id </label>
              <input
                className={
                  errors.projectId ? "mobno-error form-control" : "form-control"
                }
                disabled
                type="text"
                name="projectId"
                {...register("projectId", {
                  required: true,
                })}
              />
              {errors.projectId && errors.projectId.type === "required" && (
                <p className="error-msg"> Mobile Number is required </p>
              )}
            </div>

            <div className="p-3 pb-2">
              <label className="form-label"> Quantity </label>
              <input
                className={
                  errors.quantity ? "lname-error form-control" : "form-control"
                }
                type="number"
                name="quantity"
                {...register("quantity", {
                  required: true,
                })}
              />
              {errors.quantity && errors.quantity.type === "required" && (
                <p className="error-msg"> Last Name is required </p>
              )}
            </div>

            <div className="p-3 pb-2">
              <label className="form-label"> Units </label>
              <input
                className={
                  errors.unitName ? "mobno-error form-control" : "form-control"
                }
                disabled
                type="text"
                name="unitName"
                {...register("unitName", {
                  required: true,
                })}
              />
              {errors.unitName && errors.unitName.type === "required" && (
                <p className="error-msg"> Mobile Number is required </p>
              )}
            </div>

            <div className="d-flex justify-content-center pt-1 pb-3">
              <div className="p-3 pb-2 w-50">
                <button className="btn btn-success w-100">Update</button>
              </div>

              <div className="p-3 pb-2 w-50">
                <button
                  type="button"
                  className="btn btn-warning w-100"
                  onClick={() => navigate("/siteoperator")}
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

export default UpdateMaterial;
