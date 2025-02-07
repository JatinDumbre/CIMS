// import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { useLocation, useNavigate } from "react-router-dom";

// const PMRequest = () => {
//   const mid = JSON.parse(localStorage.getItem("mid"));
//   const userid = JSON.parse(localStorage.getItem("loggedUser")).user_id;

//   const location = useLocation();
//   const matdata = location.state;

//   console.log(matdata);
//   console.log(userid);

//   const navigate = useNavigate();

//   const [projectid, setProjectId] = useState({ });
//   // const [projectName, setProjectName] = useState("");

//   useEffect(() => {
//     // Fetch Project Managers
//     fetch("http://localhost:8033/getprojectIdpm/" + userid)
//       .then((response) => response.json())
//       // .then((data) => setProjectId(data));
//       .then((data) => {
//         console.log(data);
//         setProjectId(data);
//       });
//     // setProjectName(projects[1]?.project?.projectName || "NA");
//     console.log(projectid);
//   }, []);

//   // const matdata1 = { ...matdata, projectId: Number(projectid.projectId) };

//   // console.log(matdata1);

//   const requestMaterial = async (data) => {
//     await fetch(`http://localhost:9034/api/Request`, {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     });
//   };

//   const {
//     register,
//     handleSubmit,
//     watch,
//     setValue,
//     formState: { errors },
//   } = useForm({ defaultValues: matdata });

//   const onSubmit = (data) => {
//     // console.log("Before Fix:", data);

//     // Convert projectManagerId & siteOperatorId to numbers
//     // const fixedData = {
//     //   ...data,
//     //   projectManagerId: Number(data.projectManagerId),
//     //   siteOperatorId: Number(data.siteOperatorId),
//     // };
//     console.log(data);
//     const newData = {
//       ...data,
//       projectId: Number(data.projectId),
//       reqQty: Number(data.reqQty),
//     };
//     requestMaterial(newData);
//     alert("Request sent successful!");

//     navigate("/projectmanager");
//   };

//   return (
//     <div>
//       <div
//         className="container"
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           marginTop: "50px",
//           marginBottom: "100px",
//         }}
//       >
//         <div className="card w-50">
//           <h1 className="text-center pt-3"> Request Material </h1>

//           <form onSubmit={handleSubmit(onSubmit)}>
//             {/* Project Name */}
//             <div className="p-3 pb-2">
//               <label className="form-label"> Material Name </label>
//               <input
//                 className={
//                   errors.materialName ? "form-control" : "form-control"
//                 }
//                 disabled
//                 type="text"
//                 name="materialName"
//                 {...register("materialName", { required: true })}
//               />
//               {errors.materialName && (
//                 <p className="error-msg"> Material Name is required </p>
//               )}
//             </div>

//             {/* Location ID */}
//             <div className="p-3 pb-2">
//               <label className="form-label"> Required Quantity </label>
//               <input
//                 className={errors.locationId ? "form-control" : "form-control"}
//                 type="Number"
//                 name="reqQty"
//                 {...register("reqQty", { required: true })}
//               />
//               {errors.reqQty && (
//                 <p className="error-msg"> Location ID is required </p>
//               )}
//             </div>

//             {/* <div className="p-3 pb-2">
//               <label className="form-label"> Material Unit </label>
//               <input
//                 className={errors.unitName ? "form-control" : "form-control"}
//                 disabled
//                 type="text"
//                 name="unitName"
//                 {...register("unitName", { required: true })}
//               />
//               {errors.unitName && (
//                 <p className="error-msg"> Material Unit is required </p>
//               )}
//             </div> */}

//             {/* <div className="p-3 pb-2">
//               <label className="form-label"> Project Name </label>
//               <input
//                 className={errors.projectName ? "form-control" : "form-control"}
//                 type="text"
//                 name="projectName"
//                 {...register("projectName", { required: true })}
//               />
//               {errors.projectName && (
//                 <p className="error-msg"> Project is required </p>
//               )}
//             </div> */}

//             {/* Buttons */}
//             <div className="d-flex justify-content-center pt-1 pb-3">
//               <div className="p-3 pb-2 w-50">
//                 <button className="btn btn-success w-100">Request</button>
//               </div>

//               <div className="p-3 pb-2 w-50">
//                 <button
//                   type="button"
//                   className="btn btn-warning w-100"
//                   onClick={() => navigate("/projectmanager")}
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

// export default PMRequest;

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

const PMRequest = () => {
  const mid = JSON.parse(localStorage.getItem("mid")) || {};
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser")) || {};
  const userid = loggedUser.user_id || null;

  const location = useLocation();
  const matdata = location.state || {};

  const navigate = useNavigate();

  const [projectid, setProjectId] = useState({});

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ defaultValues: matdata });

  useEffect(() => {
    const fetchProjectId = async () => {
      try {
        const response = await fetch(
          `http://localhost:8033/getprojectIdpm/${userid}`
        );
        if (!response.ok) throw new Error("Failed to fetch project ID");
        const data = await response.json();
        console.log("Fetched Project ID:", data);
        setProjectId(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (userid) fetchProjectId();
  }, [userid]);

  useEffect(() => {
    if (projectid.projectId) {
      setValue("projectId", projectid.projectId);
    }
  }, [projectid, setValue]);

  const requestMaterial = async (data) => {
    try {
      const response = await fetch("https://localhost:9034/api/Request", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });

      if (!response.ok) throw new Error("Failed to send request");

      alert("Request sent successfully!");
      navigate("/projectmanager");
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  const onSubmit = (data) => {
    const newData = {
      ...data,
      projectId: Number(data.projectId),
      reqQty: Number(data.reqQty),
    };
    requestMaterial(newData);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center mt-5 mb-5">
      <div className="card w-50">
        <h1 className="text-center pt-3">Request Material</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-3 pb-2">
            <label className="form-label">Material Name</label>
            <input
              className="form-control"
              disabled
              type="text"
              {...register("materialName", { required: true })}
            />
            {errors.materialName && (
              <p className="error-msg">Material Name is required</p>
            )}
          </div>

          <div className="p-3 pb-2">
            <label className="form-label">Required Quantity</label>
            <input
              className="form-control"
              type="number"
              {...register("reqQty", { required: true })}
            />
            {errors.reqQty && (
              <p className="error-msg">Required Quantity is required</p>
            )}
          </div>

          <div className="d-flex justify-content-center pt-1 pb-3">
            <div className="p-3 pb-2 w-50">
              <button className="btn btn-success w-100" type="submit">
                Request
              </button>
            </div>
            <div className="p-3 pb-2 w-50">
              <button
                type="button"
                className="btn btn-warning w-100"
                onClick={() => navigate("/projectmanager")}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PMRequest;
