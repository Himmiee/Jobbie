import React,{useState} from "react"

const PGComponent = ({ totalPosts, postPerPage, setCurrentPage }: any) => {
  let Pages = [];
  const [active, setActive] = useState<number>(0)

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    Pages.push(i);
  }
  return (
    <div className="gap-[4px] sm:gap-2 my-2 flex justify-center">
      {Pages.map((page, index) => {
        return (
          <button
            onClick={() => {
              setCurrentPage(page);
              setActive(index)
            }}
            className={active === index ? "w-8 h-8 text-[12px] hover:bg-teal-700  hover:text-white bg-teal-700  justify-center flex items-center rounded-lg p-2 border-teal-700  border-[1px] text-white font-bold" : "w-8 h-8 text-[12px] hover:bg-teal-700 hover:text-white text-gray-500 justify-center flex  items-center rounded-lg p-2 border-teal-700 border-[1px] font-bold"}
            key={index}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default PGComponent;
