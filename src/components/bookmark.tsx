import { Link, useNavigate } from "react-router-dom";
import { BsArrowLeftCircle } from "react-icons/bs";
import { JobType } from "../helpers/dumps";



export const BookmarkComponent = ({data}:any) => {

  return (
    <div>
      <div className="flex px-3 h-16 sm:px-10 item-center justify-start gap-4 border-gray-200 border-b-[1px]">
        <Link to={"/job"}>
          {" "}
          <div className="flex items-center h-full">
            <BsArrowLeftCircle size={21} className="text-gray-600" />
          </div>
        </Link>
        <h2 className="font-bold text-[17px] flex items-center h-full text-gray-600">
          Bookmarked Jobs
        </h2>
      </div>
      <div>{data.name}</div>
    </div>
  );
};
