// import React from "react";
// import { Link } from "react-router-dom";



// const BlogCard = ({ img, headlines, id  }) => {
//   return (
//     <div className=" w-full p-6 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] space-y-2 rounded-lg cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
//       <img
//         className=" h-64 md:h-auto lg:h-40 w-full rounded-lg"
//         src={img}
//         alt="img"
//       />
//       <h2 className=" text-lg text-center font-semibold">{headlines}</h2>
//       <p className=" text-center text-sm">
//       Homeopathic remedies are selected based on the patient’s specific symptoms and overall condition. Below are detailed remedies for common cold and flu:
//       </p>

//       <Link
//         to={`/details/${id}`}
//         className="text-center underline text-backgroundColor cursor-pointer hover:text-[#ade9dc] transition duration-300 ease-in-out"
//       >
//         Learn more
//       </Link>
//     </div>
//   );
// };

// export default BlogCard;
import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ img, headlines, id }) => {
  return (
    <div className="w-full p-6 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] space-y-2 rounded-lg cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
      <img
        className="h-64 md:h-auto lg:h-40 w-full rounded-lg"
        src={img}
        alt="img"
      />
      <h2 className="text-lg text-center font-semibold">{headlines}</h2>
      <p className="text-center text-sm">
        Homeopathic remedies are selected based on the patient’s specific symptoms and overall condition.
      </p>
      <Link
        to={`/details/${id}`}
        className="text-center underline text-backgroundColor cursor-pointer hover:text-[#ade9dc] transition duration-300 ease-in-out"
      >
        Learn more
      </Link>
    </div>
  );
};

export default BlogCard;
