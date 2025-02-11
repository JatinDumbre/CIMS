import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Footer from "../Admin/Footer";
import IPNavbar from "./IPNavbar";

const AddProject = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState();
  const [locations, setLocations] = useState();

  const [projectManagers, setProjectManagers] = useState([]);
  const [siteOperators, setSiteOperators] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch("http://localhost:8030/ipmanager/allprojects")
      .then((resp) => resp.json())
      .then((data) => {
        // console.log(data);
        setLocations(data);
        setLocation(locations.at(-1).projectId + 1);
        console.log(location);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [locations]);

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

  const onSubmit = (data) => {
    console.log(data);

    // const newData = { ...data, loc_id: location };

    console.log(data);

    addProject(data);

    alert("Project Added succesfull !!!");
    navigate("/ipmanager");
  };

  const addProject = async (projectDetails) => {
    await fetch("http://localhost:8030/ipmanager/addprojectdas", {
      method: "POST",
      body: JSON.stringify(projectDetails),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).catch((error) => alert("Project Id is already present"));
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
          marginTop: "100px ",
          marginBottom: "100px",
        }}
      >
        <div className="card w-50">
          <h1 className="text-center pt-3"> Add Project </h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="p-3 pb-2">
              <label className="form-label"> Project Name </label>
              <input
                className={
                  errors.projectName
                    ? "lname-error form-control"
                    : "form-control"
                }
                type="text"
                name="projectName"
                {...register("projectName", {
                  required: true,
                })}
              />
              {errors.projectName && errors.projectName.type === "required" && (
                <p className="error-msg"> Project Name is required </p>
              )}
            </div>

            <div className="p-3 pb-2">
              <label className="form-label"> Location Name </label>
              <input
                className={
                  errors.locName ? "lname-error form-control" : "form-control"
                }
                type="text"
                name="locName"
                {...register("locName", {
                  required: true,
                })}
              />
              {errors.locName && errors.locName.type === "required" && (
                <p className="error-msg"> Location Name is required </p>
              )}
            </div>

            <div className="p-3 pb-2">
              <label className="form-label"> Location Address </label>
              <input
                className={
                  errors.locAdd ? "mobno-error form-control" : "form-control"
                }
                type="text"
                name="locAdd"
                {...register("locAdd", {
                  required: true,
                })}
              />
              {errors.locAdd && errors.locAdd.type === "required" && (
                <p className="error-msg"> Location Address is required </p>
              )}
            </div>

            <div className="p-3 pb-2">
              <label className="form-label"> Location City </label>
              <input
                className={
                  errors.locCity ? "email-error form-control" : "form-control"
                }
                type="text"
                name="locCity"
                {...register("locCity", {
                  required: true,
                })}
              />
              {errors.locCity && errors.locCity.type === "required" && (
                <p className="error-msg"> Location City is required </p>
              )}
            </div>

            <div className="p-3 pb-2">
              <label className="form-label"> Project Manager </label>
              <select
                className="form-control"
                {...register("projectManagerId", { required: true })}
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

            <div className="p-3 pb-2">
              <label className="form-label"> Site Operator </label>
              <select
                className="form-control"
                {...register("siteOperatorId", { required: true })}
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

export default AddProject;
