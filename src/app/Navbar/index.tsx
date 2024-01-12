import Link from "next/link";
import { BsFillGridFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { IoHome } from "react-icons/io5";

type Props = { title: string };

const Navbar = (props: Props) => {
  return (
    <nav className="flex justify-between items-center p-4 fixed text-white top-0 w-screen z-10">
      <div>{/* <BsFillGridFill size={20} /> */}</div>
      <h1 className="text-xl font-bold">{props.title}</h1>
      <div>
        <Link href={"/"}>
          <IoHome size={20} />
        </Link>
      </div>
    </nav>
  );
};

export { Navbar };
