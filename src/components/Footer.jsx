import React from "react";
import Email from "@iconscout/react-unicons/icons/uil-envelope";
import Wsp from "@iconscout/react-unicons/icons/uil-whatsapp";

const Footer = () => {
  return (
    <footer
      id="Contact"
      className="mt-10 grid grid-cols-1 gap-3 py-6 h-30 bg-slate-50 place-content-end place-items-center"
    >
      <div className="flex gap-5">
        <a href="mailto:josephangelo_guerrero@hotmail.com">
          <Email />
        </a>
        <a href="https://wa.me/51936506629" target="_blank" rel="noreferrer">
          <Wsp />
        </a>
      </div>
      <div>
        Made with ❤️ by
        <a
          href="https://github.com/JosephJS123"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Joseph Guerrero
        </a>
      </div>
    </footer>
  );
};

export default Footer;
