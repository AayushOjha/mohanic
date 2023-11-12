import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function Home() {
  return (
    <div className="bg-[#353b48] h-screen flex justify-center items-center">
      <div>
        <h1 className="text-white font-semibold text-3xl mb-4">COMING SOON</h1>
        <p className="text-white font-semibold text-5xl mb-8">MOHANNIC.COM</p>
        <Link href={`https://mohannic.com/diwali-jokes`}>
          <button className="text-white w-full bg-transparent px-6 py-2 rounded-md border border-white flex items-center justify-center">
            Continue to App
            <FiArrowRight className="ml-2" />
          </button>
        </Link>
      </div>
    </div>
  );
}
