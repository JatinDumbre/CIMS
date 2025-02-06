import React from "react";
import SONavbar from "./SONavbar";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const AddMaterialForm = () => {
  const navigate = useNavigate();
  const userid = JSON.parse(localStorage.getItem("loggedUser")).user_id;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const newData = { ...data, soId: userid };
    console.log(newData);
    addMaterial(newData);
    alert("Request sent succesfull !!!");
    navigate("/siteoperator");
  };

  const addMaterial = async (matdata) => {
    await fetch("http://localhost:8033/addMaterial", {
      method: "POST",
      body: JSON.stringify(matdata),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };

  return (
    <div>
      <div>
        <SONavbar />
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
            <h1 className="text-center pt-3"> Add Material </h1>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="p-3 pb-2">
                <label className="form-label"> Material Name </label>
                <input
                  className={
                    errors.materialName
                      ? "fname-error form-control"
                      : "form-control"
                  }
                  type="text"
                  name="materialName"
                  {...register("materialName", {
                    required: true,
                    // minLength: 2,
                  })}
                />
                {errors.materialName &&
                  errors.materialName.type === "required" && (
                    <p className="error-msg"> Material Name is required </p>
                  )}
                {/* {errors.fname && errors.fname.type === "minLength" && (
                  <p className="error-msg">
                    First Name should have min 2 characters
                  </p>
                )} */}
              </div>

              <div className="p-3 pb-2">
                <label className="form-label"> Unit </label>

                <select
                  className={
                    errors.unitName
                      ? "acc_id-error form-control"
                      : "form-control"
                  }
                  name="unitName"
                  {...register("unitName", { required: true })}
                >
                  <option value="">---Select one---</option>
                  <option value="tons">tons</option>
                  <option value="Kg">Kg</option>
                  <option value="gram">gram</option>
                  <option value="Bag">Bag</option>
                  <option value="Cu. m.">Cu.m.</option>
                  <option value="Sq. m.">Sq.m.</option>
                  <option value="Nos.">Nos.</option>
                  <option value="Quintall">Quintal</option>
                  <option value="Ltr">Litres</option>
                  <option value="ml">mililitres</option>
                  <option value="Brass">Brass</option>
                </select>

                {errors.unitName && errors.unitName.type === "required" && (
                  <p className="error-msg"> Role is required </p>
                )}
              </div>

              <div className="p-3 pb-2">
                <label className="form-label"> Quantity </label>
                <input
                  className={
                    errors.quantity
                      ? "lname-error form-control"
                      : "form-control"
                  }
                  type="number"
                  name="quantity"
                  {...register("quantity", {
                    required: true,
                    // minLength: 1,
                  })}
                />
                {errors.quantity && errors.quantity.type === "required" && (
                  <p className="error-msg"> Quantity is required </p>
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
                    onClick={() => navigate("/siteoperator")}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMaterialForm;
