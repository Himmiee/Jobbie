import React, { useState } from "react";
import { JobProto } from "../helpers/dumps";
import { useAppSelector } from "../store/hooks";

const FilterComponent = ({
  data,
  selectedCategory,
  setSelectedCategory,
  setData,
  filterItems,
}: //   handleChange,
any) => {
  const job = useAppSelector((state: any) => state.job.data);
  const [def, setDef] = useState(job);
  const [active, setActive] = useState<string | null>("");
  const categories = data
    .map((item: any) => item.categories.map((cat: any) => cat.name))
    .flat();

  const uniqueCategories = getUniqueCategories(categories);
  const categoryCounts = getDistinctCategoryCounts(data);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    filterContents(category);
  };

  function getDistinctCategoryCounts(data: any[]): { [key: string]: number } {
    const categoryCounts: { [key: string]: number } = {};

    data.forEach((item) => {
      item.categories.forEach((cat: any) => {
        const categoryName = cat.name;
        categoryCounts[categoryName] = (categoryCounts[categoryName] || 0) + 1;
      });
    });

    return categoryCounts;
  }
  function getUniqueCategories(categories: string[]): string[] {
    return categories.filter(
      (category, index) => categories.indexOf(category) === index
    );
  }

  const filterContents = (category: string) => {
    const filteredData = data.filter((item: any) =>
      item.categories.some((cat: any) => cat.name === category)
    );
    setData(filteredData);
  };
  return (
    <div className="filter-component flex gap-2 ">
      <p
        className="w-fit h-8 rounded-full text-[12px] sm:text-[10px] lg:text-[12px] focus:active:bg-blue-800 text-gray-600 border-gray-200 border-[1px] px-3 hover:bg-teal-700 cursor-pointer hover:text-white py-[6px] sm:py-[8px]  lg:py-[6px]"
        onClick={() => {
          setData(def);
          setActive("all");
        }}
      >
        All({def.length})
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
              ? "w-48 flex justify-center items-center sm:w-48 h-8 rounded-full text-[12px] focus:active:bg-teal-700 sm:text-[10px] lg:text-[12px] text-white border-gray-200 border-[1px] px-3 bg-teal-700 cursor-pointer hover:text-white py-[6px] sm:py-[8px]  lg:py-[6px]"
              : "w-48 flex justify-center sm:w-48 h-8 rounded-full text-[12px] focus:active:bg-teal-700 sm:text-[10px] lg:text-[12px] text-gray-600 border-gray-200 border-[1px] px-3 hover:bg-teal-700 cursor-pointer hover:text-white py-[6px] sm:py-[8px]  lg:py-[6px]"
          }
        >
          {category} ({categoryCounts[category]})
        </p>
      ))}
    </div>
  );
};

export default FilterComponent;
