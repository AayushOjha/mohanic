import { BsFillGridFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

type Props = { title: string };

const Navbar = (props: Props) => {
  return (
    <div className="flex justify-between items-center p-4 fixed text-white top-0 w-screen z-10">
      <div>
        <BsFillGridFill size={20} />
      </div>
      <h1 className="text-xl font-bold">{props.title}</h1>
      <div>
        <FaUserCircle size={23} />
      </div>
    </div>
  );
};

export { Navbar };
