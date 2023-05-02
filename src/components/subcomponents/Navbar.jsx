import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { styles } from "../../styles";
import { navLinks } from "../../constants";
import { GJCLogo, menu, close } from "../../assets";

const Navbar = ({ isHomePage }) => {
    const navigate = useNavigate();

    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);

    const handleNavigation = () => {
        navigate("/", { replace: true });
    };

    const handleHomeNavigation = () => {
        navigate("/", { replace: true });
    };

    return (
        <nav
            className={`${styles.paddingX} ${
                isHomePage == "/" ? "absolute" : "relative"
            } w-full flex items-center py-5 top-0 z-40 bg-transparent`}
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <div
                    onClick={() => {
                        handleHomeNavigation();
                    }}
                >
                    <img
                        src={GJCLogo}
                        alt="GJC logo"
                        className="h-[50px] md:h-[60px] object-contain cursor-pointer"
                    />
                </div>
                <ul className="list-none hidden xl:flex flex-row gap-10">
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className={`${
                                active === nav.title
                                    ? "text-green"
                                    : "text-primary"
                            } hover:text-green transition-colors text-[18px] font-medium cursor-pointer`}
                            onClick={() => {
                                setActive(nav.title);
                                handleNavigation();
                            }}
                        >
                            <a href={`${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>

                <div className="xl:hidden flex flex-1 justify-end items-center">
                    <img
                        src={toggle ? close : menu}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain"
                        onClick={() => setToggle(!toggle)}
                    />

                    <div
                        className={`${
                            !toggle ? "hidden" : "flex"
                        } p-6 bg-white absolute top-20 mt-10 right-0 my-2 min-w-full z-10`}
                    >
                        <ul className="list-none flex justify-end items-center flex-1 flex-col gap-4">
                            {navLinks.map((nav) => (
                                <li
                                    key={nav.id}
                                    className={`font-medium cursor-pointer text-[16px] ${
                                        active === nav.title
                                            ? " text-secondary"
                                            : "text-secondary"
                                    }`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(nav.title);
                                    }}
                                >
                                    <a href={`${nav.id}`}>{nav.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
