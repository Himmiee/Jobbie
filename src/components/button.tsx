
type ButtonType = {
  className: string;
  title: string;
  icon: React.ReactNode;
};
const ButtonComponent = ({ className, title, icon }: ButtonType) => {
  return (
    <div className="flex items-center justify-center">
      <div className={className}>
        {title} {icon}
      </div>
    </div>
  );
};

export default ButtonComponent;
