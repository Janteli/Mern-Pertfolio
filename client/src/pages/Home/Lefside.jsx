import React from "react";

const Lefside = () => {
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:static sm:py-2">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-2 sm:flex-row">
          <i class="ri-facebook-circle-line text-gray-600 cursor-pointer text-xl"></i>
          <i class="ri-instagram-line text-gray-600 cursor-pointer text-xl"></i>
          <i class="ri-linkedin-box-line text-gray-600 cursor-pointer text-xl"></i>
          <a href="https://github.com/">
            <i class="ri-github-line text-gray-600 cursor-pointer text-xl"></i>
          </a>
        </div>
        <div className="w-[1px] h-52 bg-[#355f9e] sm:hidden"></div>
      </div>
    </div>
  );
};

export default Lefside;
