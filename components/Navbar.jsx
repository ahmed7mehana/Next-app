import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import AddCourse from "./AddCourse";
import Admin from "./Admin";

const Navba = () => {
  const { t, i18n } = useTranslation();

  const [nav, setNav] = useState(false);
  const [show, setshow] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 60) {
        setColor("#205295");
        setTextColor("#2C74B3");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-3 text-white">
        <Link href="/">
          <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl">
          {t('Baradise')}
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex font-bold">
          <li className="p-2  ">
            <Link  className=" hover:text-[white]" href="/" >{t('Home')}</Link>
          </li>
          <li className="p-2">
            <Link  className=" hover:text-[white]"  href="/About">{t('About')}</Link>
          </li>
          <li className="p-2">
          <Link  className=" hover:text-[white]"  href="/SC">SC</Link>
        </li>
        <li className="p-2">
        <Link  className=" hover:text-[white]"  href="/Bexcerpts">BQ</Link>
      </li>
      <li className="p-2">
      <Link  className=" hover:text-[white]"  href="/Advices">AD</Link>
    </li>
    <li className="p-2">
<p onClick={()=>setshow(!show)}>Admin</p>
{show?(
  <Admin/>
):""}
  </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/">{t('Home')}</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
            <Link href="/About">{t('About')}</Link>
            </li>
            <li
            onClick={handleNav}
            className="p-4 text-4xl hover:text-gray-500"
          >
          <Link href="/SC">SC</Link>
          </li>

          <li
          onClick={handleNav}
          className="p-4 text-4xl hover:text-gray-500"
        >
        <Link href="/Bexcerpts">BQ</Link>
        </li>
        <li
        onClick={handleNav}
        className="p-4 text-4xl hover:text-gray-500"
      >
      <Link href="/Advices">AD</Link>
      </li>
      <li className="p-2">
      <p onClick={()=>setshow(!show)}>Admin</p>
      {show?(
        <Admin/>
      ):""}
        </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navba;
