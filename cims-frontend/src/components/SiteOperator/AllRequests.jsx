// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const AllRequests = () => {
//   //const projectid = JSON.parse(localStorage.getItem("projectid"));
//   const navigate = useNavigate();
//   const [requests, setRequests] = useState([]);
//   let count = 0;

//   // console.log(projectid);

//   useEffect(() => {
//     const fetchProjectId = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:8033/getprojectId/${userid}`
//         );
//         if (!response.ok) throw new Error("Failed to fetch project ID");
//         const data = await response.json();
//         console.log("Fetched Project ID:", data);
//         setProjectId(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     if (userid) fetchProjectId();
//   }, [userid]);

//   useEffect(() => {
//     if (projectid.projectId) {
//       setValue("projectId", projectid.projectId);
//     }
//   }, [projectid, setValue]);

//   useEffect(() => {
//     fetch("https://localhost:9034/api/Request/getByProject/" + projectid)
//       .then((resp) => resp.json())
//       .then((data) => {
//         console.log(data);

//         setRequests(data);
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   }, []);

//   return (
//     <div>
//       <div className="locTable ">
//         <h3 className="text-center mb-3">All Requests</h3>
//         <table className="table table-hover ms-3 me-3">
//           <thead>
//             <tr className="text-center">
//               <th scope="col ">Sr No</th>
//               <th scope="col">Location Name</th>
//               <th scope="col">Location Address</th>
//               <th scope="col">Location City</th>
//             </tr>
//           </thead>
//           <tbody>
//             {requests.map((req) => {
//               count++;
//               return (
//                 <tr className="text-center" key={req.loc_id}>
//                   <td>{count}</td>
//                   <td>{req.loc_name}</td>
//                   <td>{req.loc_add}</td>

//                   <td>{req.loc_city}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//       <div className="d-flex justify-content-center pt-1 pb-3">
//         {/* <div className="p-3 pb-2 w-10">
//           <button
//             className="btn btn-success w-100"
//             type="button"
//             onClick={() => navigate("/addLocation")}
//           >
//             Add Location
//           </button>
//         </div> */}
//         <div className="p-3 pb-2 w-10">
//           <button
//             type="button"
//             className="btn btn-warning w-100"
//             onClick={() => navigate("/siteoperator")}
//           >
//             Back
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllRequests;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllRequests = () => {
  const navigate = useNavigate();
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser")) || {};
  const userid = loggedUser.user_id || null;

  const [projectid, setProjectId] = useState({});
  const [requests, setRequests] = useState([]);

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
      fetch(
        `http://localhost:9034/api/Request/getByProject/${projectid.projectId}`
      )
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          setRequests(data);
        })
        .catch((err) => {
          console.error("Error fetching requests:", err);
        });
    }
  }, [projectid.projectId]); // Added dependency for when projectId updates

  return (
    <div>
      <div className="locTable">
        <h3 className="text-center mb-3">All Requests</h3>
        <table className="table table-hover ms-3 me-3">
          <thead>
            <tr className="text-center">
              <th scope="col">Sr No</th>
              <th scope="col">Location Name</th>
              <th scope="col">Location Address</th>
              <th scope="col">Location City</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req, index) => (
              <tr className="text-center" key={req.loc_id}>
                <td>{index + 1}</td>
                <td>{req.loc_name}</td>
                <td>{req.loc_add}</td>
                <td>{req.loc_city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="d-flex justify-content-center pt-1 pb-3">
        <div className="p-3 pb-2 w-10">
          <button
            type="button"
            className="btn btn-warning w-100"
            onClick={() => navigate("/siteoperator")}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllRequests;
