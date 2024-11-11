import React from "react";

const Footer = () => {
  return (
    <>
      <div className="mx-auto footer bg-gray-300 mt-4 p-5">
        <div className=" w-[75vw] mx-auto m-5 ">
          <div className="flex gap-2 font-bold text-2xl m-4 items-center justify-center">
            <span className="font-bold md:text-xl text-lg text-gray-600">
              For Better Experience,Download the Swiggy app now.
            </span>
            <div className="md:flex gap-4 items-center">
              <img
                src="images/play_store.png"
                className="lg:w-[10vw]  w-[170px] h-[45px]"
                alt=""
              />
              <img src="images/app_store.png" className="lg:w-[10vw] w-[170px] h-[45px]" alt="" />
            </div>
          </div>
          <div className=" flex md:flex-row flex-col gap-4 justify-center items-center">
            <div className="w-[100px] mb-4">
              <img src="images/logo.png" alt="" className="w-[40px]" />
              <span className="text-sm text-gray-700 font-bold">
                &copy; 2024 Swiggy Limited
              </span>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-col-1 md:gap-9 gap-5 ">
              <div className="">
                <span className=" font-semibold ">Company</span>
                <ul className="text-gray-600">
                  <li className="">About Us</li>
                  <li className="">Swiggy Corporate</li>
                  <li className="">Careers</li>
                  <li className="">Team</li>
                  <li className="">Swiggy One</li>
                </ul>
              </div>
              <div className="">
                <span className=" font-semibold">Legal</span>
                <ul className="text-gray-600">
                  <li className="">Terms & Conditions</li>
                  <li className="">Cookie Policy</li>
                  <li className="">Privacy Policy</li>
                  <li className="">Investor Relations</li>
                </ul>
              </div>
              <div className="">
                <span className=" font-semibold">Available in:</span>
                <ul className="text-gray-600">
                  <li className="">Bangalore</li>
                  <li className="">Gurgaon</li>
                  <li className="">Hyderabad</li>
                  <li className="">Delhi</li>
                  <li className="">Mumbai</li>
                </ul>
              </div>
              <div className="">
                <span className=" font-semibold">Contact us</span>
                <ul className="text-gray-600">
                  <li className="">Help & Support</li>
                  <li className="">Partner with us</li>
                  <li className="">Ride with us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
