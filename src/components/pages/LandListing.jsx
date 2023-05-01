import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { textVariant } from "../../utils/motion";

import OverviewCard from "../cards/OverviewCard";

import client from "../../lib/pocketbase";

const LandListing = () => {
    const [land, setLand] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [searchKeyword, setSearchKeyword] = useState();
    const [startSearch, setStartSearch] = useState(false);
    const [filteredLand, setFilteredLand] = useState([]);

    const [premium, setPremium] = useState(false);
    const [priceRange, setPriceRange] = useState(99999999999999999);
    const [selectedRange, setSelectedRange] = useState();
    const [onRent, setOnRent] = useState(false);
    const [onSale, setOnSale] = useState(false);

    useEffect(() => {
        const loadResponse = async () => {
            const response = await client.collection("land").getFullList({
                sort: "-created",
            });
            if (response) {
            }
            setFilteredLand(response);
            setLand(response);
        };
        loadResponse();
    }, []);

    useEffect(() => {
        if (searchKeyword || priceRange) {
            if (searchKeyword) {
                let filter = land.filter(
                    (res) =>
                        (res.title
                            .toLowerCase()
                            .includes(searchKeyword.toLowerCase()) ||
                            res.location
                                .toLowerCase()
                                .includes(searchKeyword.toLowerCase()) ||
                            res.district
                                .toLowerCase()
                                .includes(searchKeyword.toLowerCase())) &&
                        res.price <= priceRange
                );
                setFilteredLand(filter);
            } else {
                let filter = land.filter((res) => res.price <= priceRange);
                setFilteredLand(filter);
            }
        } else {
            setFilteredLand(land);
        }
    }, [startSearch]);

    useEffect(() => {
        if (premium) {
            let filter = land.filter((res) => res.premium == true);
            setFilteredLand(filter);
        } else {
            setFilteredLand(land);
        }
    }, [premium]);

    useEffect(() => {
        if (onRent) {
            let filter = land.filter((res) => res.status == "Rent");
            setFilteredLand(filter);
        } else {
            setFilteredLand(land);
        }
    }, [onRent]);

    useEffect(() => {
        if (onSale) {
            let filter = land.filter((res) => res.status == "Sale");
            setFilteredLand(filter);
        } else {
            setFilteredLand(land);
        }
    }, [onSale]);

    useEffect(() => {
        if (selectedRange) {
            let filter = land.filter((res) => res.price <= selectedRange);
            setFilteredLand(filter);
        } else {
            setFilteredLand(land);
        }
    }, [selectedRange]);

    return (
        <>
            <div className="flex flex-col justify-center items-center p-10">
                <motion.div variants={textVariant()}>
                    <h2 className={`${styles.sectionHeadText}`}>
                        Find Your Dream Land
                    </h2>
                </motion.div>
                <div className="flex mt-10 md:w-[50vw] w-full">
                    <div className="relative w-full">
                        <input
                            type="search"
                            id="search-dropdown"
                            className="block p-2.5 w-full z-20 text-sm text-secondary bg-primary border-primary border-l-2 border rounded-xl focus:outline-none"
                            placeholder="Search"
                            onChange={(event) => {
                                event.target.value
                                    ? setSearchKeyword(event.target.value)
                                    : setSearchKeyword();
                            }}
                            required
                            onKeyDown={(event) => {
                                if (event.key == "Enter") {
                                    setStartSearch(!startSearch);
                                }
                            }}
                        />
                    </div>
                    <button
                        type="submit"
                        className="top-0 right-0 p-2.5 mx-2 text-sm font-medium text-primary bg-green rounded-xl border border-green hover:bg-primary transition hover:text-secondary hover:border-primary"
                        onClick={() => {
                            setStartSearch(!startSearch);
                        }}
                    >
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            ></path>
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                    <button
                        id="dropdown-button"
                        data-dropdown-toggle="dropdown"
                        className="flex justify-center items-center p-2.5 text-sm font-medium text-primary bg-green rounded-xl border border-green hover:bg-primary transition hover:text-secondary hover:border-primary"
                        type="button"
                        onClick={() => setToggle(!toggle)}
                    >
                        {" "}
                        <svg
                            aria-hidden="true"
                            className="w-4 h-4 ml-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="flex flex-col justify-center">
                    <div
                        id="dropdown"
                        className={`${
                            !toggle ? "hidden" : "flex"
                        } z-10 bg-white rounded-xl shadow mx-10 w-[80vw] lg:w-[20vw] flex flex-col justify-center items-center py-5`}
                    >
                        <ul
                            className="py-2 text-sm text-secondary flex flex-col"
                            aria-labelledby="dropdown-button"
                        >
                            <li className="mb-2">
                                <input
                                    type="number"
                                    className="bg-secondary text-primary outline-none h-10 p-5 flex w-full"
                                    placeholder="Maximum Price"
                                    onChange={(event) => {
                                        event.target.value
                                            ? setPriceRange(event.target.value)
                                            : setPriceRange(99999999999999999);
                                    }}
                                />
                            </li>
                            <li>
                                <button
                                    type="button"
                                    className={`inline-flex w-full px-4 py-2 dark:hover:bg-secondary dark:hover:text-primary  transition-all justify-start ${
                                        premium
                                            ? "bg-secondary text-primary"
                                            : "bg-white text-secondary"
                                    }`}
                                    onClick={() => setPremium(!premium)}
                                >
                                    Premium
                                </button>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    className={`inline-flex w-full px-4 py-2 dark:hover:bg-green dark:hover:text-primary  transition-all justify-start ${
                                        onRent
                                            ? "bg-secondary text-primary"
                                            : "bg-white text-secondary"
                                    }`}
                                    onClick={() => setOnRent(!onRent)}
                                >
                                    Rent Only
                                </button>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    className={`inline-flex w-full px-4 py-2 dark:hover:bg-green dark:hover:text-primary  transition-all justify-start ${
                                        onSale
                                            ? "bg-secondary text-primary"
                                            : "bg-white text-secondary"
                                    }`}
                                    onClick={() => setOnSale(!onSale)}
                                >
                                    Sale Only
                                </button>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    className={`inline-flex w-full px-4 py-2 dark:hover:bg-secondary dark:hover:text-primary  transition-all justify-start`}
                                    onClick={() => {
                                        setSelectedRange(100000000);
                                    }}
                                >
                                    Under Rs.100000000
                                </button>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    className={`inline-flex w-full px-4 py-2 dark:hover:bg-secondary dark:hover:text-primary  transition-all justify-start flex-wrap`}
                                    onClick={() => {
                                        setSelectedRange(50000000);
                                    }}
                                >
                                    Under Rs.50000000
                                </button>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    className={`inline-flex w-full px-4 py-2 dark:hover:bg-secondary dark:hover:text-primary  transition-all justify-start`}
                                    onClick={() => {
                                        setSelectedRange(30000000);
                                    }}
                                >
                                    Under Rs.30000000
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-20 flex flex-wrap justify-center gap-7 px-2">
                {filteredLand.map((filteredLand, index) => (
                    <OverviewCard
                        key={`land-${index}`}
                        index={index}
                        id={filteredLand.id}
                        title={filteredLand.title}
                        location={filteredLand.location}
                        district={filteredLand.district}
                        price={filteredLand.price}
                        image={client.getFileUrl(
                            filteredLand,
                            filteredLand.image[0]
                        )}
                        status={filteredLand.status}
                        landSize={filteredLand.land_size}
                        isLand={true}
                        contact={filteredLand.contact_number}
                        category="land"
                    />
                ))}
            </div>
        </>
    );
};

export default LandListing;
