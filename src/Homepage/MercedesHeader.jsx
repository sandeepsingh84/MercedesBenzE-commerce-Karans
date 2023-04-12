import React from "react";

const MercedesHeader = () => {
  return (
    <div className="w-full ">
      <div className="w-full bg-black flex justify-between h-24 px-14">
        <div className="flex items-center">
          <div className="flex items-center">
            <div>
              <h3 className="text-slate-600 hover:text-white hover:animate-pulse ">
                Duetsch
              </h3>
            </div>
            <div className="h-4 border border-slate-600 mx-2 "></div>
            <div>
              <h3 className="text-white hover:animate-pulse">English</h3>
            </div>
          </div>

          <div className="flex items-center  hover:text-white  ml-24">
            <div className="text-slate-600  hover:text-white hover:animate-pulse ">
              <h3>Provider</h3>
            </div>
            <div className="text-slate-600  hover:text-white hover:animate-pulse">
              /
            </div>
            <div className="text-slate-600  hover:text-white hover:animate-pulse">
              <h3>privacy</h3>
            </div>
          </div>
        </div>

        <div className="flex items-center mr-48">
          <img
            className="h-14 w-16"
            src="https://www.mercedes-benz.com/content/dam/brandhub/global/logos/MB-star_n_web.svg"
            alt=""
          />
        </div>

        <div className="flex items-center hover:text-white">
          <div>
            <h3 className="text-slate-600 hover:text-white hover:animate-pulse">
              Search
            </h3>
          </div>
          <div>
            <svg
              className="hover:text-white text-slate-600"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="text-slate-600"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </div>

          <div className="ml-16">
            <h3 className="text-slate-600 hover:text-white hover:animate-pulse">
              Login
            </h3>
          </div>
          <div className="ml-4 ">
            <svg
              className="text-slate-600 hover:text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="text-slate-600 "
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MercedesHeader;
