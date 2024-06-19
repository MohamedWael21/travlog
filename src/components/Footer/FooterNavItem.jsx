import collapseImg from "@/assets/collapse.png";
import clsx from "clsx";
import { useState } from "react";
const FooterNavItem = ({ links, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between">
        <p className="text-2xl font-bold text-black">{title}</p>
        <div className="md:hidden cursor-pointer">
          <img
            src={collapseImg}
            alt="collapse icon"
            className={clsx({ "rotate-180": isOpen })}
            onClick={() => setIsOpen((prev) => !prev)}
          />
        </div>
      </div>
      <ul
        className={clsx(
          "flex-col gap-8",
          { "md:flex flex": isOpen },
          { "md:flex hidden": !isOpen }
        )}
      >
        {links.map((link, index) => (
          <li key={index} className="text-lg font-bold text-gray-3/4">
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterNavItem;
