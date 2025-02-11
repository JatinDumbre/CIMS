// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const AllMaterials = () => {
//   const navigate = useNavigate();
//   const userid = JSON.parse(localStorage.getItem("loggedUser")).user_id;
//   const [userData, setUserData] = useState({});
//   const [materials, setMaterials] = useState([]);
//   let count = 0;

//   useEffect(() => {
//     fetch("http://localhost:8030/ipmanager/getallmainmat")
//       .then((resp) => resp.json())
//       .then((data) => {
//         console.log(data);

//         setMaterials(data);
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   }, [materials]);

//   return (
//     <div>
//       <div className="mTable ">
//         <h3 className="text-center mb-3">Material</h3>
//         <table className="table table-hover ms-3 me-3">
//           <thead>
//             <tr className="text-center">
//               <th scope="col ">Sr No</th>

//               <th scope="col">Material Name</th>
//               {/* <th scope="col">Location Name</th> */}
//               <th scope="col"> Category</th>
//               <th scope="col"> Unit</th>
//               <th scope="col"> Description</th>

//               {/* <th scope="col">Project Manager Id</th> */}
//               {/* <th scope="col">Site Operator Id</th> */}
//             </tr>
//           </thead>
//           <tbody>
//             {materials.map((material) => {
//               // console.log(project);

//               count++;
//               return (
//                 <tr className="text-center" key={material.m_id}>
//                   <td>{count}</td>
//                   <td>{material.m_name}</td>
//                   <td>{material.cat_id}</td>
//                   <td>{material.unit_id}</td>
//                   <td>{material.description}</td>

//                   {/* <td>
//                       <button
//                         className="btn btn-danger"
//                         type="button"
//                         name={project.projectId}
//                         onClick={(e) => {
//                           console.log(e.target.name);
//                           localStorage.setItem(
//                             "projectid",
//                             JSON.stringify(e.target.name)
//                           );
//                           confirm("Do you want to update project?")
//                             ? navigate("/updateProject", { state: project })
//                             : alert("not updated");
//                         }}
//                       >
//                         Update
//                       </button>
//                     </td> */}
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AllMaterials;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Admin/Footer";
import IPNavbar from "./IPNavbar";

const AllMaterials = () => {
  const navigate = useNavigate();
  const userid = JSON.parse(localStorage.getItem("loggedUser")).user_id;
  const [materials, setMaterials] = useState([]);
  const [categories, setCategories] = useState({});
  const [units, setUnits] = useState({});
  let count = 0;

  // Fetch all materials
  useEffect(() => {
    fetch("http://localhost:8030/ipmanager/getallmainmat")
      .then((resp) => resp.json())
      .then((data) => {
        setMaterials(data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  // Fetch all categories
  useEffect(() => {
    fetch("http://localhost:8030/ipmanager/allmainmaterialcategory")
      .then((resp) => resp.json())
      .then((data) => {
        // Convert array to object { cat_id: cat_name }
        const categoryMap = data.reduce((acc, category) => {
          acc[category.cat_id] = category.cat_name;
          return acc;
        }, {});
        setCategories(categoryMap);
      })
      .catch((err) => console.log(err.message));
  }, []);

  // Fetch all units
  useEffect(() => {
    fetch("http://localhost:8030/ipmanager/allmainmaterialunit")
      .then((resp) => resp.json())
      .then((data) => {
        // Convert array to object { unit_id: unit_name }
        const unitMap = data.reduce((acc, unit) => {
          acc[unit.unit_id] = unit.unit_name;
          return acc;
        }, {});
        setUnits(unitMap);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="bg-primary-subtle">
      <IPNavbar />
      <div className="container">
        <div className="mTable">
          <h3 className="text-center mb-3">Materials</h3>
          <table className="table table-hover ms-3 me-3">
            <thead>
              <tr className="text-center">
                <th scope="col">Sr No</th>
                <th scope="col">Material Name</th>
                <th scope="col">Category</th>
                <th scope="col">Unit</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              {materials.map((material, index) => (
                <tr className="text-center" key={material.m_id}>
                  <td>{index + 1}</td>
                  <td>{material.m_name}</td>
                  <td>{categories[material.cat_id] || "N/A"}</td>
                  <td>{units[material.unit_id] || "N/A"}</td>
                  <td>{material.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="d-flex justify-content-center pt-1 pb-3">
            <div className="p-3 pb-2 w-10">
              <button
                className="btn btn-success w-100"
                type="button"
                onClick={() => navigate("/addMaterials")}
              >
                Add Material
              </button>
            </div>
            <div className="p-3 pb-2 w-10">
              <button
                type="button"
                className="btn btn-warning w-100"
                onClick={() => navigate("/ipmanager")}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllMaterials;
