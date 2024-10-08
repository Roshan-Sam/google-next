import Link from "next/link";
import Image from "next/image";
import SearchBox from "./SearchBox";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchHearderOptions from "./SearchHearderOptions";

export default function SearchHearder() {
  return (
    <div className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center justify-between">
        <Link href="/">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
            width={120}
            height={40}
            alt="Google Logo"
            priority
            style={{ width: "auto" }}
          />
        </Link>
        <div className="flex-1">
          <SearchBox />
        </div>
        <div className="hidden md:inline-flex space-x-2">
          <RiSettings3Line className="bg-transparent hover:bg-gray-200 p-2 text-4xl rounded-full cursor-pointer" />
          <TbGridDots className="bg-transparent hover:bg-gray-200 p-2 text-4xl rounded-full cursor-pointer" />
        </div>
        <button className="bg-blue-600 px-6 py-2 font-medium rounded-md text-white hover:brightness-110 hover:shadow-md transition-shadow ml-2">
          Sign in
        </button>
      </div>
      <SearchHearderOptions />
    </div>
  );
}
