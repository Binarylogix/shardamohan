<<<<<<< HEAD
import React from "react";
import img from "../../assets/img/about.jpg";

const Aboutus = () => {
  return (
    <div>
      
        <div className=" flex flex-col lg:flex-row bg-[url('assets/img/bgAbout.png')] bg-no-repeat bg-cover justify-between items-center lg:px-32 px-5 pt-24 lg:pt-8 gap-5">
          <div className=" w-full lg:w-3/4 space-y-4 ">
            <h1 className=" text-4xl font-semibold text-center lg:text-start">About Us</h1>
            <p className=" text-justify lg:text-start ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
                labore rerum tempore tenetur commodi natus quos itaque voluptatum
                repudiandae nostrum accusantium vero voluptate aspernatur totam,
                laboriosam aut, et quae consequatur?
            </p>
            <p className="text-justify lg:text-start">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quia
                suscipit illum, numquam incidunt nostrum dolor officia doloremque
                cupiditate, placeat explicabo sed iure atque neque quidem ipsam!
                Dolor, minus reiciendis.
            </p>
            <p className="text-justify lg:text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, illum.
                Accusantium ab expedita veniam nobis aut, in rerum repellendus!
                Exercitationem libero recusandae corrupti accusantium reiciendis in
                placeat illo maxime ea.
            </p>
            </div>
            <div className=" w-full lg:w-3/4 mb-10">
            <img className=" rounded-lg" src={img} alt="img" />
            </div>
        </div>
    </div>
  )
}

=======
import React from "react";
import img from "../../assets/img/about.jpg";

const Aboutus = () => {
  return (
    <div>
      
        <div className=" flex flex-col lg:flex-row bg-[url('assets/img/bgAbout.png')] bg-no-repeat bg-cover justify-between items-center lg:px-32 px-5 pt-24 lg:pt-8 gap-5">
          <div className=" w-full lg:w-3/4 space-y-4 ">
            <h1 className=" text-4xl font-semibold text-center lg:text-start">About Us</h1>
            <p className=" text-justify lg:text-start ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
                labore rerum tempore tenetur commodi natus quos itaque voluptatum
                repudiandae nostrum accusantium vero voluptate aspernatur totam,
                laboriosam aut, et quae consequatur?
            </p>
            <p className="text-justify lg:text-start">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quia
                suscipit illum, numquam incidunt nostrum dolor officia doloremque
                cupiditate, placeat explicabo sed iure atque neque quidem ipsam!
                Dolor, minus reiciendis.
            </p>
            <p className="text-justify lg:text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, illum.
                Accusantium ab expedita veniam nobis aut, in rerum repellendus!
                Exercitationem libero recusandae corrupti accusantium reiciendis in
                placeat illo maxime ea.
            </p>
            </div>
            <div className=" w-full lg:w-3/4 mb-10">
            <img className=" rounded-lg" src={img} alt="img" />
            </div>
        </div>
    </div>
  )
}

>>>>>>> 9608b116424ff4f73c1c398beab1314cd0253e9f
export default Aboutus