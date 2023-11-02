import React, { useState } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
type PGType = {
  totalPosts: number;
  postPerPage: number;
  setCurrentPage: (value: number) => void;
  currentPage: number;
};
const PGComponent = ({
  totalPosts,
  postPerPage,
  setCurrentPage,
  currentPage,
}: // onPageChange,
PGType) => {
  const [active, setActive] = useState<number>(0);
  const maxVisiblePages = 6;
  const totalPage = Math.ceil(totalPosts / postPerPage);
  const [visiblePage, setVisiblePage] = useState(
    Array.from({ length: maxVisiblePages }, (_, i) => i + 1)
  );
  const handlePageNumbers = (start: number, end: number) => {
    const newVisiblePages = [];
    for (let i =  start; i <= end; i++) {
      newVisiblePages.push(i);
    }
    setVisiblePage(newVisiblePages);
  };
  const handleNext = () => {
    const lastVisiblePage = visiblePage[visiblePage.length - 1];
    const newStart = lastVisiblePage + 1;
    const newEnd = lastVisiblePage + maxVisiblePages;
    if (newEnd > totalPage) {
      handlePageNumbers(totalPage - maxVisiblePages + 1, totalPage);
    } else {
      handlePageNumbers(newStart, newEnd);
    }
  };

  const handlePrevious = () => {
    const firstVisiblePage = visiblePage[0];
    const newEnd = firstVisiblePage - 1;
    const newStart = newEnd - maxVisiblePages + 1;
    if (newStart < 1) {
      handlePageNumbers(1, maxVisiblePages);
    } else {
      handlePageNumbers(newStart, newEnd);
    }
  };

  return (
    <div className="gap-[4px] sm:gap-2 my-2 flex items-center justify-center">
      <div className="flex items-center">
        <button onClick={handlePrevious} disabled={currentPage === 1}>
          <IoIosArrowDropleft size={24} className="text-teal-700 " />
        </button>
      </div>
      {visiblePage.map((page, index) => {
        return (
          <button
            onClick={() => {
              // onPageChange(page);
              setCurrentPage(page);
              setActive(index);
            }}
            className={
              currentPage === page
                ? "w-8 h-8 text-[12px] hover:bg-teal-700  hover:text-white bg-teal-700  justify-center flex items-center rounded-lg p-2 border-teal-700  border-[1px] text-white font-bold"
                : "w-8 h-8 text-[12px] hover:bg-teal-700 hover:text-white text-gray-500 justify-center flex  items-center rounded-lg p-2 border-teal-700 border-[1px] font-bold"
            }
            key={page}
          >
            {page}
          </button>
        );
      })}
      <div className="flex items-center">
        <button onClick={handleNext} disabled={currentPage === totalPage}>
          <IoIosArrowDropright size={24} className="text-teal-700 " />
        </button>
      </div>
    </div>
  );
};

export default PGComponent;
