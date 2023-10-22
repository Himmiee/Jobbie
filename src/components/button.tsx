import React from "react";
type click = (event: React.MouseEvent<HTMLButtonElement>) => void;
type ButtonType = {
  className: string;
  title: string;
  icon: React.ReactNode;
  onClick: any | null;
};
const ButtonComponent = ({ className, title, icon, onClick }: ButtonType) => {
  return (
    <div onClick={onClick} className="flex items-center justify-center">
      <div className={className}>
        {title} {icon}
      </div>
    </div>
  );
};

export default ButtonComponent;
