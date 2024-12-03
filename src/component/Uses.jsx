// import React from 'react'

// const Uses = () => {
//   return (
//     <div>
//       Uses Page
//     </div>
//   )
// }

// export default Uses


import { useLocation } from "react-router-dom";

const Uses = () => {
  const location = useLocation();
  const data = location.state; // Access the passed data

  return (
    <div>
      <h1 className="text-white">Uses Page</h1>
      <p className="text-white" >Data Received: {data?.message}</p>
    </div>
  );
};

export default Uses;
