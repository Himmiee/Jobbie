import { BsFilter } from "react-icons/bs";
import { IoFlame } from "react-icons/io5";
export const InputHeader = ({}) => {
  return (
    <section>
      <div>
        <div className="top lg:flex gap-6 w-full justify-between text-teal-700 italic text-xl">
          <p className="hidden sm:flex">All-Jobs.</p>
          <div className="flex gap-6">
            <input
              type="text"
              placeholder="search jobs here..."
              className="outline-none w-full lg:w-[650px] my-2 lg:my-0 h-8 text-gray-500 rounded-md font-light text-[13px] px-2 italic bg-gray-100 "
            />
            <div className="w-8 h-8 hover:bg-teal-600 flex my-2 lg:my-0 cursor-pointer justify-center rounded-md text-white  item-center bg-teal-700">
              <div className="mt-2">
                <BsFilter />
              </div>
            </div>
          </div>
          <div className="sm:w-56 absolute top-[68px] rounded-full  sm:top-[90px] mx-8 right-0 sm:mx-24 lg:mx-0 lg:top-0 lg:relative  sm:bg-teal-50 h-8 sm:rounded-md flex justify-center items-center gap-1 text-sm">
            <p className="text-[13px] text-black">
              {" "}
              <span className="text-[16px] text-teal-700 italic font-bold">
                {" "}
                Over 300{" "}
              </span>{" "}
              registered jobs{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="filters my-8 flex gap-4 overflow-x-auto sm:overflow-x-hidden tbl">
        <p className="w-fit h-8 rounded-full text-[12px]  sm:text-[10px] lg:text-[12px] text-gray-600 border-gray-200 border-[1px] px-3 hover:bg-teal-700 cursor-pointer hover:text-white py-[6px] sm:py-[8px]  lg:py-[6px]">
          All(12)
        </p>
        <p className="w-fit h-8 rounded-full text-[12px] sm:text-[10px] lg:text-[12px] text-gray-600 border-gray-200 border-[1px] px-3 hover:bg-teal-700 cursor-pointer hover:text-white py-[6px] sm:py-[8px]  lg:py-[6px]">
          Tech(12)
        </p>
        <p className="w-fit h-8 rounded-full text-[12px] sm:text-[10px] lg:text-[12px] text-gray-600 border-gray-200 border-[1px] px-3 hover:bg-teal-700 cursor-pointer hover:text-white py-[6px] sm:py-[8px]  lg:py-[6px]">
          Education(12)
        </p>
        <p className="w-fit h-8 rounded-full text-[12px] sm:text-[10px] lg:text-[12px] text-gray-600 border-gray-200 border-[1px] px-3 hover:bg-teal-700 cursor-pointer hover:text-white py-[6px] sm:py-[8px]  lg:py-[6px]">
          Science(12)
        </p>
        <p className="w-fit h-8 rounded-full text-[12px] sm:text-[10px] lg:text-[12px] text-gray-600 border-gray-200 border-[1px] px-3 hover:bg-teal-700 cursor-pointer hover:text-white py-[6px] sm:py-[8px]  lg:py-[6px]">
          Realtor(12)
        </p>
        <p className="w-fit h-8 rounded-full text-[12px] sm:text-[10px] lg:text-[12px] text-gray-600 border-gray-200 border-[1px] px-3 hover:bg-teal-700 cursor-pointer hover:text-white py-[6px] sm:py-[8px]  lg:py-[6px]">
          Engineering(12)
        </p>
      </div>
    </section>
  );
};
