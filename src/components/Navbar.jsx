"use client";
import { useContext, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import logoImg from "../asset/logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiHome } from "react-icons/ci";
import { MdAccessTime } from "react-icons/md";
import { TfiStatsUp } from "react-icons/tfi";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <nav className="bg-[#ffffff] shadow sticky top-0  z-50 ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <div className=" font-bold flex gap-2 items-center">
            <Image
              width={180}
              src={logoImg}
              alt="logo.png"
              className="max-w-full"
            />
          </div>
          <ul className="hidden md:flex items-center text-[15px] gap-5 ">
            <li>
              <Link
                className={`flex items-center gap-1 text-gray-500 font-semibold ${
                  pathname === "/"
                    ? "bg-[#244D3F] py-2 text-white px-4 rounded"
                    : ""
                }`}
                href="/"
              >
                <CiHome size={25} />
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`flex items-center gap-1 text-gray-500 font-semibold ${
                  pathname === "/timeline"
                    ? "bg-[#244D3F] py-2 text-white px-4 rounded"
                    : ""
                }`}
                href="/timeline"
              >
                <MdAccessTime size={25} />
                Timeline
              </Link>
            </li>
            <li>
              <Link
                className={`flex items-center gap-1 text-gray-500 font-semibold ${
                  pathname === "/stats"
                    ? "bg-[#244D3F] py-2 text-white px-4 rounded"
                    : ""
                }`}
                href="/stats"
              >
                <TfiStatsUp />
                Stats
              </Link>
            </li>
          </ul>
          <button
            className="md:hidden p-2 rounded-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <IoClose size={25} /> : <IoMdMenu size={25} />}
          </button>
        </div>
        {isOpen && (
          <ul className="md:hidden flex flex-col justify-center items-center gap-5 pb-4 ">
            <li>
              <Link
                className={`flex items-center gap-1 text-gray-500 font-semibold ${
                  pathname === "/"
                    ? "bg-[#244D3F] py-2 text-white px-4 rounded"
                    : ""
                }`}
                href="/"
              >
                <CiHome size={25} />
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`flex items-center gap-1 text-gray-500 font-semibold ${
                  pathname === "/timeline"
                    ? "bg-[#244D3F] py-2 text-white px-4 rounded"
                    : ""
                }`}
                href="/timeline"
              >
                <MdAccessTime size={25} />
                Timeline
              </Link>
            </li>
            <li>
              <Link
                className={`flex items-center gap-1 text-gray-500 font-semibold ${
                  pathname === "/stats"
                    ? "bg-[#244D3F] py-2 text-white px-4 rounded"
                    : ""
                }`}
                href="/stats"
              >
                <TfiStatsUp size={25} />
                Stats
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
