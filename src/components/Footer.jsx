"use client";
import Image from "next/image";
import footerLogo from "../asset/logo-xl.png";
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-[#244D3F]">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center py-10 space-y-3 ">
          <Image
            width={200}
            src={footerLogo}
            alt="footerLogo"
            className="mx-auto"
          ></Image>
          <p className="text-white text-center">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <h5 className="text-white my-2">Social Links</h5>
          <div className="flex gap-3 text-white">
            <IoLogoInstagram size={30} />
            <CiFacebook size={30} />
            <RiTwitterXFill size={30} />
          </div>
        </div>
        <hr className="border-white/30 " />

        <div className="flex flex-col lg:flex-row lg:justify-between items-center my-4 gap-3 ">
          <div>
            <p className="text-white">
              &copy; 2025 KeenKeeper. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <p className="text-white">Privacy Policy </p>
            <p className="text-white">Terms of Service </p>
            <p className="text-white">Cookies</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
