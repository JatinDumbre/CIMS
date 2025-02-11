import React, { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import IPNavbar from "./IPNavbar";
import Footer from "../Admin/Footer";

const UpdateProject = () => {
  const projectid = JSON.parse(localStorage.getItem("projectid"));

  const location = useLocation();
  const data = location.state;

  console.log(data);

  const navigate = useNavigate();

  // const watch = useWatch();

  const [projectManagers, setProjectManagers] = useState([]);
  const [siteOperators, setSiteOperators] = useState([]);

  useEffect(() => {
    // Fetch Project Managers
    fetch("http://localhost:8030/ipmanager/allprojectmanager")
      .then((response) => response.json())
      .then((data) => setProjectManagers(data));

    // Fetch Site Operators
    fetch("http://localhost:8030/ipmanager/allsiteoperator")
      .then((response) => response.json())
      .then((data) => setSiteOperators(data));
  }, []);

  const updateProject = async (data) => {
    await fetch(`http://localhost:8030/ipmanager/update-project/${projectid}`, {
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
    watch,
    setValue,
    formState: { errors },
  } = useForm({ defaultValues: data });

  const onSubmit = (data) => {
    console.log("Before Fix:", data);

    // Convert projectManagerId & siteOperatorId to numbers
    const fixedData = {
      ...data,
      projectManagerId: Number(data.projectManagerId),
      siteOperatorId: Number(data.siteOperatorId),
    };
    console.log(data);
    updateProject(data);
    alert("Update successful!");

    navigate("/ipmanager");
  };

  return (
    <div className="bg-primary-subtle">
      <IPNavbar />

      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
          marginBottom: "100px",
        }}
      >
        <div className="card w-50">
          <h1 className="text-center pt-3"> Update Project </h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Project Name */}
            <div className="p-3 pb-2">
              <label className="form-label"> Project Name </label>
              <input
                className={errors.projectName ? "form-control" : "form-control"}
                disabled
                type="text"
                name="projectName"
                {...register("projectName", { required: true })}
              />
              {errors.projectName && (
                <p className="error-msg"> Project Name is required </p>
              )}
            </div>

            {/* Location ID */}
            <div className="p-3 pb-2">
              <label className="form-label"> Location Name </label>
              <input
                className={errors.locationId ? "form-control" : "form-control"}
                disabled
                type="text"
                name="locationName"
                {...register("locationName", { required: true })}
              />
              {errors.locationId && (
                <p className="error-msg"> Location ID is required </p>
              )}
            </div>

            {/* Project Manager (Dropdown) */}
            <div className="p-3 pb-2">
              <label className="form-label"> Project Manager </label>
              <select
                className="form-control"
                {...register("projectManagerId", { required: true })}
                value={watch("projectManagerId") || ""}
                onChange={(e) => setValue("projectManagerId", e.target.value)}
              >
                <option value="">Select Project Manager</option>
                {projectManagers.map((pm) => (
                  <option key={pm.userId} value={pm.userId}>
                    {pm.fname}
                  </option>
                ))}
              </select>
              {errors.projectManagerId && (
                <p className="error-msg"> Project Manager is required </p>
              )}
            </div>

            {/* Site Operator (Dropdown) */}
            <div className="p-3 pb-2">
              <label className="form-label"> Site Operator </label>
              <select
                className="form-control"
                {...register("siteOperatorId", { required: true })}
                value={watch("siteOperatorId") || ""}
                onChange={(e) => setValue("siteOperatorId", e.target.value)}
              >
                <option value="">Select Site Operator</option>
                {siteOperators.map((so) => (
                  <option key={so.userId} value={so.userId}>
                    {so.fname}
                  </option>
                ))}
              </select>
              {errors.siteOperatorId && (
                <p className="error-msg"> Site Operator is required </p>
              )}
            </div>

            {/* Buttons */}
            <div className="d-flex justify-content-center pt-1 pb-3">
              <div className="p-3 pb-2 w-50">
                <button className="btn btn-success w-100">Update</button>
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

export default UpdateProject;
