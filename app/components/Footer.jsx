import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt=""
          className="w-36 mx-auto mb-2"
        />

        <div className="w-max flex items-center gap-2 mx-auto">
          <a
            href="mailto:samuelalvinjonathan@gmail.com"
            target="_blank"
            className="flex items-center gap-2"
          >
            <Image
              src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
              alt="Email Icon"
              className="w-6 h-6"
            />
            samuelalvinjonathan@gmail.com
          </a>
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Samuel Alvin. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://www.instagram.com/lookinforsamll/">
              Instagram
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/lookinforsamll">
              Github
            </a>
          </li>
          <li>
            <a target="_blank" href="https://api.whatsapp.com/send?phone=6281236205872">
              WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
