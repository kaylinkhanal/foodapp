import React from "react"

const Cards=(props)=>{
  return(
    <>
      <div className="cardComponent">
        <img/>
        <div>
          <h2>{props.name}</h2>
          <p>Category:{props.category}</p>
          <p>Address:{props.location}</p>
          <p>Rating:{props.rating}</p>
          
        </div>
      </div>
    </>
  )
}

export default Cards;



// import React from "react";
// import { useState, useEffect } from "react";

// import image from "../productImages/pizza.jpg";

// const Cards = () => {
//   const [details, setDetails] = useState([]);
//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const response = await fetch("http://localhost:4000/restaurants/");

//     const data = await response.json();
//     //console.log(data.resturantsList);
//     setDetails(data.resturantsList);
//   };
//   console.log(details);

//   return (
//     <>
//       <div className="container">
//         {details.map((value) => {
//           return (
//             <div className="card">
//               <div className="image">
//                 <img src={image} />
//               </div>
//               <div className="cardDetails">
//                 <h3 className="title">{value.name}</h3>
//                 <span className="category">Category:{value.category}</span>
//                 <h6 className="location">Address:{value.location}</h6>
//                 <p className="rating">Rating:{value.rating}</p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default Cards;
