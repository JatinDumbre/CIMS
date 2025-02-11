// import React, { useEffect, useState } from "react";
// import SONavbar from "./SONavbar";
// import { useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";

// const AddMaterialForm = () => {
//   const navigate = useNavigate();
//   const userid = JSON.parse(localStorage.getItem("loggedUser")).user_id;

//   const [materials, setMaterials] = useState([]);
//   const [unit, setUnit] = useState();

//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();

//   useEffect(() => {
//     fetch("http://localhost:8030/siteoperator/allmaterialmaster")
//       .then((resp) => resp.json())
//       .then((data) => {
//         console.log(data);
//         setMaterials(data);
//         // setLo(locations.at(-1).projectId + 1);
//         console.log(materials);
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   }, [materials]);

//   const onSubmit = (data) => {
//     console.log(data);
//     setUnit(data.unit_id);
//     const newData = { ...data, soId: userid };
//     console.log(newData);
//     addMaterial(newData);
//     alert("Request sent succesfull !!!");
//     navigate("/siteoperator");
//   };

//   const addMaterial = async (matdata) => {
//     await fetch("http://localhost:8030/siteoperator/addMaterial", {
//       method: "POST",
//       body: JSON.stringify(matdata),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     });
//   };

//   return (
//     <div>
//       <div>
//         <SONavbar />
//         <div
//           className="container"
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             marginTop: "100px ",
//             marginBottom: "100px",
//           }}
//         >
//           <div className="card w-50">
//             <h1 className="text-center pt-3"> Add Material </h1>

//             <form onSubmit={handleSubmit(onSubmit)}>
//               <div className="p-3 pb-2">
//                 <label className="form-label"> Material Name </label>

//                 <select
//                   className={
//                     errors.materialName
//                       ? "acc_id-error form-control"
//                       : "form-control"
//                   }
//                   name="materialName"
//                   {...register("materialName", { required: true })}
//                 >
//                   <option value="">---Select one---</option>
//                   {materials.map((material) => {
//                     return (
//                       <option value={material.m_name}>{material.m_name}</option>
//                     );
//                   })}
//                 </select>

//                 {errors.materialName &&
//                   errors.materialName.type === "required" && (
//                     <p className="error-msg"> Material Name is required </p>
//                   )}
//                 {/* {errors.fname && errors.fname.type === "minLength" && (
//                   <p className="error-msg">
//                     First Name should have min 2 characters
//                   </p>
//                 )} */}
//               </div>

//               <div className="p-3 pb-2">
//                 <label className="form-label"> Unit </label>

//                 <input
//                   className={
//                     errors.unitName
//                       ? "lname-error form-control"
//                       : "form-control"
//                   }
//                   type=""
//                   name="unitName"

//                   {...register("unitName", {
//                     required: true,
//                     // minLength: 1,
//                   })}
//                 />

//                 {/* <select
//                   className={
//                     errors.unitName
//                       ? "acc_id-error form-control"
//                       : "form-control"
//                   }
//                   name="unitName"
//                   {...register("unitName", { required: true })}
//                 >
//                   <option value="">---Select one---</option>
//                   <option value="tons">tons</option>
//                   <option value="Kg">Kg</option>
//                   <option value="gram">gram</option>
//                   <option value="Bag">Bag</option>
//                   <option value="Cu. m.">Cu.m.</option>
//                   <option value="Sq. m.">Sq.m.</option>
//                   <option value="Nos.">Nos.</option>
//                   <option value="Quintall">Quintal</option>
//                   <option value="Ltr">Litres</option>
//                   <option value="ml">mililitres</option>
//                   <option value="Brass">Brass</option>
//                 </select> */}

//                 {errors.unitName && errors.unitName.type === "required" && (
//                   <p className="error-msg"> Role is required </p>
//                 )}
//               </div>

//               <div className="p-3 pb-2">
//                 <label className="form-label"> Quantity </label>
//                 <input
//                   className={
//                     errors.quantity
//                       ? "lname-error form-control"
//                       : "form-control"
//                   }
//                   type="number"
//                   name="quantity"
//                   {...register("quantity", {
//                     required: true,
//                     // minLength: 1,
//                   })}
//                 />
//                 {errors.quantity && errors.quantity.type === "required" && (
//                   <p className="error-msg"> Quantity is required </p>
//                 )}
//               </div>

//               <div className="d-flex justify-content-center pt-1 pb-3">
//                 <div className="p-3 pb-2 w-50">
//                   <button className="btn btn-success w-100">Submit</button>
//                 </div>
//                 <div className="p-3 pb-2 w-50">
//                   <button
//                     type="button"
//                     className="btn btn-warning w-100"
//                     onClick={() => navigate("/siteoperator")}
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddMaterialForm;

// ----------------------------------------------------------------------------------------------------------------------

// import React, { useEffect, useState } from "react";
// import SONavbar from "./SONavbar";
// import { useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";

// const AddMaterialForm = () => {
//   const navigate = useNavigate();
//   const userid = JSON.parse(localStorage.getItem("loggedUser")).user_id;

//   const [materials, setMaterials] = useState([]);
//   const [units, setUnits] = useState([]);
//   const [selectedMaterial, setSelectedMaterialId] = useState("");
//   const [unitName, setUnitName] = useState("");

//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();

//   useEffect(() => {
//     fetch("http://localhost:8030/siteoperator/allmaterialmaster")
//       .then((resp) => resp.json())
//       .then((data) => {
//         console.log(data);

//         setMaterials(data);
//       })
//       .catch((err) => console.log(err.message));

//     fetch("http://localhost:8030/siteoperator/allmaterialunit")
//       .then((resp) => resp.json())
//       .then((data) => {
//         console.log(data);

//         setUnits(data);
//       })
//       .catch((err) => console.log(err.message));
//   }, []);

//   // Handle material selection and update unit
//   const handleMaterialChange = (e) => {
//     const materialUnitId = e.target.value;
//     setSelectedMaterialId(materialUnitId);

//     // Find corresponding unit
//     const unitData = units.find((unit) => unit.unit_id === materialUnitId);
//     setUnitName(unitData ? unitData.unit_name : "");
//     console.log(unitName);
//   };

//   const onSubmit = (data) => {
//     if (!selectedMaterial) {
//       alert("Please select a material!");
//       return;
//     }

//     const newData = { ...data, soId: userid, unitName };
//     addMaterial(newData);
//     alert("Request sent successfully!");
//     navigate("/siteoperator");
//   };

//   const addMaterial = async (matdata) => {
//     await fetch("http://localhost:8030/siteoperator/addMaterial", {
//       method: "POST",
//       body: JSON.stringify(matdata),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     });
//   };

//   return (
//     <div>
//       <SONavbar />
//       <div
//         className="container"
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           marginTop: "100px",
//           marginBottom: "100px",
//         }}
//       >
//         <div className="card w-50">
//           <h1 className="text-center pt-3">Add Material</h1>

//           <form onSubmit={handleSubmit(onSubmit)}>
//             {/* Material Dropdown */}
//             <div className="p-3 pb-2">
//               <label className="form-label">Material Name</label>
//               <select
//                 className={`form-control ${
//                   errors.materialName ? "is-invalid" : ""
//                 }`}
//                 {...register("materialName", { required: true })}
//                 onChange={handleMaterialChange}
//               >
//                 <option value="">---Select one---</option>
//                 {materials.map((material) => (
//                   <option key={material.m_name} value={material.unit_id}>
//                     {material.m_name}
//                   </option>
//                 ))}
//               </select>
//               {errors.materialName && (
//                 <p className="error-msg">Material Name is required</p>
//               )}
//             </div>

//             {/* Unit Field (Read-Only) */}
//             <div className="p-3 pb-2">
//               <label className="form-label">Unit</label>
//               <input
//                 className="form-control"
//                 type="text"
//                 name="unitName"
//                 value={unitName}
//                 readOnly
//               />
//             </div>

//             {/* Quantity Input */}
//             <div className="p-3 pb-2">
//               <label className="form-label">Quantity</label>
//               <input
//                 className={`form-control ${
//                   errors.quantity ? "is-invalid" : ""
//                 }`}
//                 type="number"
//                 {...register("quantity", { required: true })}
//               />
//               {errors.quantity && (
//                 <p className="error-msg">Quantity is required</p>
//               )}
//             </div>

//             {/* Submit & Cancel Buttons */}
//             <div className="d-flex justify-content-center pt-1 pb-3">
//               <div className="p-3 pb-2 w-50">
//                 <button className="btn btn-success w-100">Submit</button>
//               </div>
//               <div className="p-3 pb-2 w-50">
//                 <button
//                   type="button"
//                   className="btn btn-warning w-100"
//                   onClick={() => navigate("/siteoperator")}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddMaterialForm;

//-------------------------------------------------------------------

// import React, { useEffect, useState } from "react";
// import SONavbar from "./SONavbar";
// import { useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";

// const AddMaterialForm = () => {
//   const navigate = useNavigate();
//   const userid = JSON.parse(localStorage.getItem("loggedUser")).user_id;

//   const [materials, setMaterials] = useState([]);
//   const [units, setUnits] = useState([]);
//   const [selectedMaterial, setSelectedMaterial] = useState("");
//   const [unitName, setUnitName] = useState("");

//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();

//   useEffect(() => {
//     // Fetch all materials
//     fetch("http://localhost:8030/siteoperator/allmaterialmaster")
//       .then((resp) => resp.json())
//       .then((data) => setMaterials(data))
//       .catch((err) => console.log(err.message));

//     // Fetch material-unit mapping
//     fetch("http://localhost:8030/siteoperator/allmaterialunit")
//       .then((resp) => resp.json())
//       .then((data) => setUnits(data))
//       .catch((err) => console.log(err.message));
//   }, []);

//   // Handle dropdown change & update input field
//   const handleMaterialChange = (e) => {
//     const materialName = e.target.value;
//     setSelectedMaterial(materialName);

//     // Find the corresponding unit for the selected material
//     const unitData = units.find((unit) => unit.m_name === materialName);
//     setUnitName(unitData ? unitData.unit_name : ""); // Set unit name or empty if not found
//   };

//   const onSubmit = (data) => {
//     if (!selectedMaterial) {
//       alert("Please select a material!");
//       return;
//     }

//     const newData = { ...data, soId: userid, unitName };
//     addMaterial(newData);
//     alert("Request sent successfully!");
//     navigate("/siteoperator");
//   };

//   const addMaterial = async (matdata) => {
//     await fetch("http://localhost:8030/siteoperator/addMaterial", {
//       method: "POST",
//       body: JSON.stringify(matdata),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     });
//   };

//   return (
//     <div>
//       <SONavbar />
//       <div
//         className="container"
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           marginTop: "100px",
//           marginBottom: "100px",
//         }}
//       >
//         <div className="card w-50">
//           <h1 className="text-center pt-3">Add Material</h1>

//           <form onSubmit={handleSubmit(onSubmit)}>
//             {/* Material Dropdown */}
//             <div className="p-3 pb-2">
//               <label className="form-label">Material Name</label>
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
//               {errors.materialName && (
//                 <p className="error-msg">Material Name is required</p>
//               )}
//             </div>

//             {/* Prepopulated Unit Field */}
//             <div className="p-3 pb-2">
//               <label className="form-label">Unit</label>
//               <input
//                 className="form-control"
//                 type="text"
//                 name="unitName"
//                 value={unitName} // Prepopulate based on selection
//                 readOnly // Make it non-editable
//               />
//             </div>

//             {/* Quantity Input */}
//             <div className="p-3 pb-2">
//               <label className="form-label">Quantity</label>
//               <input
//                 className={`form-control ${
//                   errors.quantity ? "is-invalid" : ""
//                 }`}
//                 type="number"
//                 {...register("quantity", { required: true })}
//               />
//               {errors.quantity && (
//                 <p className="error-msg">Quantity is required</p>
//               )}
//             </div>

//             {/* Submit & Cancel Buttons */}
//             <div className="d-flex justify-content-center pt-1 pb-3">
//               <div className="p-3 pb-2 w-50">
//                 <button className="btn btn-success w-100">Submit</button>
//               </div>
//               <div className="p-3 pb-2 w-50">
//                 <button
//                   type="button"
//                   className="btn btn-warning w-100"
//                   onClick={() => navigate("/siteoperator")}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddMaterialForm;

import React, { useEffect, useState } from "react";
import SONavbar from "./SONavbar";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Footer from "../Admin/Footer";

const AddMaterialForm = () => {
  const navigate = useNavigate();
  const userid = JSON.parse(localStorage.getItem("loggedUser")).user_id;

  const [materials, setMaterials] = useState([]);
  const [units, setUnits] = useState([]);
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [unitName, setUnitName] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    // Fetch all materials
    fetch("http://localhost:8030/siteoperator/allmaterialmaster")
      .then((resp) => resp.json())
      .then((data) => setMaterials(data))
      .catch((err) => console.log(err.message));

    // Fetch all units
    fetch("http://localhost:8030/siteoperator/allmaterialunit")
      .then((resp) => resp.json())
      .then((data) => setUnits(data))
      .catch((err) => console.log(err.message));
  }, []);

  // Handle material selection change
  const handleMaterialChange = (e) => {
    const materialName = e.target.value;
    setSelectedMaterial(materialName);

    // Find the selected material's unit ID
    const materialData = materials.find((mat) => mat.m_name === materialName);

    if (materialData) {
      // Find the corresponding unit name using the unit ID
      const unitData = units.find(
        (unit) => unit.unit_id === materialData.unit_id
      );
      setUnitName(unitData ? unitData.unit_name : ""); // Set unit name or empty if not found
    } else {
      setUnitName("");
    }
  };

  const onSubmit = (data) => {
    if (!selectedMaterial) {
      alert("Please select a material!");
      return;
    }

    const newData = {
      ...data,
      soId: userid,
      unitName,
    };

    addMaterial(newData);
    alert("Request sent successfully!");
    navigate("/siteoperator");
  };

  const addMaterial = async (matdata) => {
    await fetch("http://localhost:8030/siteoperator/addMaterial", {
      method: "POST",
      body: JSON.stringify(matdata),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };

  return (
    <div className="bg-primary-subtle">
      <SONavbar />
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
          marginBottom: "100px",
        }}
      >
        <div className="card w-50">
          <h1 className="text-center pt-3">Add Material</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Material Dropdown */}
            <div className="p-3 pb-2">
              <label className="form-label">Material Name</label>
              <select
                className={`form-control ${
                  errors.materialName ? "is-invalid" : ""
                }`}
                {...register("materialName", { required: true })}
                onChange={handleMaterialChange} // Call function on change
              >
                <option value="">---Select one---</option>
                {materials.map((material) => (
                  <option key={material.m_name} value={material.m_name}>
                    {material.m_name}
                  </option>
                ))}
              </select>
              {errors.materialName && (
                <p className="error-msg">Material Name is required</p>
              )}
            </div>

            {/* Prepopulated Unit Field */}
            <div className="p-3 pb-2">
              <label className="form-label">Unit</label>
              <input
                className="form-control"
                type="text"
                name="unitName"
                value={unitName} // Prepopulate based on selection
                readOnly // Make it non-editable
              />
            </div>

            {/* Quantity Input */}
            <div className="p-3 pb-2">
              <label className="form-label">Quantity</label>
              <input
                className={`form-control ${
                  errors.quantity ? "is-invalid" : ""
                }`}
                type="number"
                {...register("quantity", { required: true })}
              />
              {errors.quantity && (
                <p className="error-msg">Quantity is required</p>
              )}
            </div>

            {/* Submit & Cancel Buttons */}
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
      <Footer />
    </div>
  );
};

export default AddMaterialForm;
