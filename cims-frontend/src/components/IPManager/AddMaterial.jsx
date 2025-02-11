// import React from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import IPNavbar from "./IPNavbar";
// import Footer from "../Admin/Footer";

// const AddMaterial = () => {
//   const navigate = useNavigate();

//   const [s, setLocations] = useState();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//     // const newData = { ...data, status: "Active" };
//     // console.log(newData);

//     addMaterial(data);
//     alert("Material Added succesfull !!!");
//     navigate("/ipmanager");
//   };

//   const addMaterial = async (materialdetail) => {
//     await fetch("http://localhost:8030/ipmanager/addmainmat", {
//       method: "POST",
//       body: JSON.stringify(locationdetail),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     }).catch((error) => alert("Location Id is already present"));
//   };

//   const handleMaterialChange = (e) => {
//     const materialName = e.target.value;
//     setSelectedMaterial(materialName);

//     // Find the selected material's unit ID
//     const materialData = materials.find((mat) => mat.m_name === materialName);

//     if (materialData) {
//       // Find the corresponding unit name using the unit ID
//       const unitData = units.find(
//         (unit) => unit.unit_id === materialData.unit_id
//       );
//       setUnitName(unitData ? unitData.unit_name : ""); // Set unit name or empty if not found
//     } else {
//       setUnitName("");
//     }
//   };

//   return (
//     <div>
//       <IPNavbar />
//       <div
//         className="container"
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           marginTop: "100px ",
//           marginBottom: "100px",
//         }}
//       >
//         <div className="card w-50">
//           <h1 className="text-center pt-3"> Add Material </h1>

//           <form onSubmit={handleSubmit(onSubmit)}>
//             <div className="p-3 pb-2">
//               <label className="form-label"> Material Name </label>
//               <input
//                 className={
//                   errors.loc_id ? "fname-error form-control" : "form-control"
//                 }
//                 type="number"
//                 name="loc_id"
//                 {...register("loc_id", {
//                   required: true,
//                 })}
//               />
//               {errors.loc_id && errors.loc_id.type === "required" && (
//                 <p className="error-msg"> Material name is required </p>
//               )}
//             </div>

//             <div className="p-3 pb-2">
//               <label className="form-label"> Category </label>
//               {/* <input
//                 className={
//                   errors.loc_name ? "lname-error form-control" : "form-control"
//                 }
//                 type="text"
//                 name="loc_name"
//                 {...register("loc_name", {
//                   required: true,
//                 })}
//               /> */}

//               <select
//                 className={`form-control ${
//                   errors.materialName ? "is-invalid" : ""
//                 }`}
//                 {...register("materialName", { required: true })}
//                 onChange={handleMaterialChange} // Call function on change
//               >
//                 <option value="">---Select one---</option>
//                 {materials.map((material) => (
//                   <option key={material.m_name} value={material.m_name}>
//                     {material.m_name}
//                   </option>
//                 ))}
//               </select>
//               {errors.loc_name && errors.loc_name.type === "required" && (
//                 <p className="error-msg"> Category is required </p>
//               )}
//             </div>

//             <div className="p-3 pb-2">
//               <label className="form-label"> Unit </label>
//               <input
//                 className={
//                   errors.loc_add ? "mobno-error form-control" : "form-control"
//                 }
//                 type="text"
//                 name="loc_add"
//                 {...register("loc_add", {
//                   required: true,
//                 })}
//               />
//               {errors.loc_add && errors.loc_add.type === "required" && (
//                 <p className="error-msg"> Unit is required </p>
//               )}
//             </div>

//             <div className="p-3 pb-2">
//               <label className="form-label"> Description </label>
//               {/* <input
//                 className={
//                   errors.loc_city ? "email-error form-control" : "form-control"
//                 }
//                 type="text"
//                 name="loc_city"
//                 {...register("loc_city", {
//                   required: true,
//                 })}
//               /> */}

//               <textarea
//                 className={
//                   errors.loc_city ? "email-error form-control" : "form-control"
//                 }
//                 type="text"
//                 name="loc_city"
//                 {...register("loc_city", {
//                   required: true,
//                 })}
//               />
//               {errors.loc_city && errors.loc_city.type === "required" && (
//                 <p className="error-msg"> Description is required </p>
//               )}
//             </div>

//             <div className="d-flex justify-content-center pt-1 pb-3">
//               <div className="p-3 pb-2 w-50">
//                 <button className="btn btn-success w-100">Submit</button>
//               </div>
//               <div className="p-3 pb-2 w-50">
//                 <button
//                   type="button"
//                   className="btn btn-warning w-100"
//                   onClick={() => navigate("/ipmanager")}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default AddMaterial;

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import IPNavbar from "./IPNavbar";
import Footer from "../Admin/Footer";

const AddMaterial = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [units, setUnits] = useState([]);
  const [unitName, setUnitName] = useState(""); // Stores selected unit name

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Fetch categories and units from API
  useEffect(() => {
    fetch("http://localhost:8030/ipmanager/allmainmaterialcategory")
      .then((resp) => resp.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));

    fetch("http://localhost:8030/ipmanager/allmainmaterialunit")
      .then((resp) => resp.json())
      .then((data) => setUnits(data))
      .catch((err) => console.log(err));
  }, []);

  // Form submit handler
  const onSubmit = (data) => {
    console.log(data);
    addMaterial(data);
    alert("Material Added Successfully!");
    navigate("/ipmanager");
  };

  // API call to add material
  const addMaterial = async (materialdetail) => {
    await fetch("http://localhost:8030/ipmanager/addmainmat", {
      method: "POST",
      body: JSON.stringify(materialdetail),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).catch((error) => alert("Error: Material ID already exists!"));
  };

  return (
    <div className="bg-primary-subtle">
      <IPNavbar />
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ marginTop: "100px", marginBottom: "100px" }}
      >
        <div className="card w-50">
          <h1 className="text-center pt-3">Add Material</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Material Name */}
            <div className="p-3 pb-2">
              <label className="form-label">Material Name</label>
              <input
                className={`form-control ${errors.m_name ? "is-invalid" : ""}`}
                type="text"
                {...register("m_name", { required: true })}
              />
              {errors.m_name && (
                <p className="error-msg">Material name is required</p>
              )}
            </div>

            {/* Category Dropdown */}
            <div className="p-3 pb-2">
              <label className="form-label">Category</label>
              <select
                className={`form-control ${errors.cat_id ? "is-invalid" : ""}`}
                {...register("cat_id", { required: true })}
              >
                <option value="">---Select Category---</option>
                {categories.map((category) => (
                  <option key={category.cat_id} value={category.cat_id}>
                    {category.cat_name}
                  </option>
                ))}
              </select>
              {errors.cat_id && (
                <p className="error-msg">Category is required</p>
              )}
            </div>

            {/* Unit Dropdown */}
            <div className="p-3 pb-2">
              <label className="form-label">Unit</label>
              <select
                className={`form-control ${errors.unit_id ? "is-invalid" : ""}`}
                {...register("unit_id", { required: true })}
                onChange={(e) => setUnitName(e.target.value)}
              >
                <option value="">---Select Unit---</option>
                {units.map((unit) => (
                  <option key={unit.unit_id} value={unit.unit_id}>
                    {unit.unit_name}
                  </option>
                ))}
              </select>
              {errors.unit_id && <p className="error-msg">Unit is required</p>}
            </div>

            {/* Description */}
            <div className="p-3 pb-2">
              <label className="form-label">Description</label>
              <textarea
                className={`form-control ${
                  errors.description ? "is-invalid" : ""
                }`}
                {...register("description", { required: true })}
              />
              {errors.description && (
                <p className="error-msg">Description is required</p>
              )}
            </div>

            {/* Buttons */}
            <div className="d-flex justify-content-center pt-1 pb-3">
              <div className="p-3 pb-2 w-50">
                <button className="btn btn-success w-100" type="submit">
                  Submit
                </button>
              </div>
              <div className="p-3 pb-2 w-50">
                <button
                  className="btn btn-warning w-100"
                  type="button"
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

export default AddMaterial;
