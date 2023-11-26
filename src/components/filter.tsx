import React, { useEffect, useState } from "react";
import { JobType } from "../helpers/dumps";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { getData } from "../store/jobSlice";

type FilterComponentType = {
  setSelectedCategory: (category: string) => void;
  defaultData: JobType[];
};

const FilterComponent = ({
  setSelectedCategory,
  defaultData,
}: FilterComponentType) => {
  const job = useAppSelector((state: any) => state.job.data);
  const [filteredData, setFilteredData] = useState<JobType[]>(job);
  const [active, setActive] = useState<string | null>("");
  const dispatch = useAppDispatch();

  const categories = defaultData
    ?.map((item: any) => item.categories.map((cat: any) => cat.name))
    .flat();

  const uniqueCategories = Array.from(new Set(categories));

  const handleCategoryChange = (category: string) => {
    // setSelectedCategory(category);
    filterContents(category);
  };

  useEffect(() => {
    setFilteredData(job);
  }, [job]);

  const getDistinctCategoryCounts = (
    data: JobType[]
  ): { [key: string]: number } => {
    const categoryCounts: { [key: string]: number } = {};

    data?.forEach((item: any) => {
      item.categories.forEach((cat: any) => {
        const categoryName = cat.name;
        categoryCounts[categoryName] = (categoryCounts[categoryName] || 0) + 1;
      });
    });

    return categoryCounts;
  };

  const categoryCounts = getDistinctCategoryCounts(defaultData);

  const filterContents = (category: string) => {
    const filteredData = defaultData?.filter((item: any) =>
      item.categories.some((cat: any) => cat.name === category)
    );

    setFilteredData(filteredData);
    dispatch(getData(filteredData));
  };

  const handleGetData = () => {
    setFilteredData(defaultData);
    dispatch(getData(defaultData));
    setActive("all");
  };

  return (
    <div className="filter-component flex gap-2 w-full">
      <p
        className="w-fit h-8 rounded-full text-[12px] sm:text-[10px] lg:text-[12px] focus:active:bg-blue-800 text-gray-600 border-gray-200 border-[1px] px-3 hover:bg-teal-700 cursor-pointer hover:text-white py-[6px] sm:py-[8px]  lg:py-[6px]"
        onClick={handleGetData}
      >
        All({defaultData?.length || 0})
      </p>
      {uniqueCategories.map((category: any, index: number) => (
        <p
          key={category}
          onClick={() => {
            handleCategoryChange(category);
            setActive(category);
          }}
          className={
            active === category
              ? "w-48 flex justify-center items-center sm:max-w-full h-8 rounded-full text-[12px] focus:active:bg-teal-700 sm:text-[10px] lg:text-[12px] text-white border-gray-200 border-[1px] px-3 bg-teal-700 cursor-pointer hover:text-white py-[6px] sm:py-[8px]  lg:py-[6px]"
              : "w-48 flex justify-center sm:max-w-full h-8 rounded-full text-[12px] focus:active:bg-teal-700 sm:text-[10px] lg:text-[12px] text-gray-600 border-gray-200 border-[1px] px-3 hover:bg-teal-700 cursor-pointer hover:text-white py-[6px] sm:py-[8px]  lg:py-[6px]"
          }
        >
          {category.slice(0, 22)} ({categoryCounts[category]})
        </p>
      ))}
    </div>
  );
};

export default FilterComponent;

