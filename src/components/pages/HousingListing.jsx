import React, { useEffect, useState } from "react";
import { styles } from "../../styles";
import OverviewCard from "../cards/OverviewCard";
import client from "../../lib/pocketbase";
import { motion } from "framer-motion";

const HousingListing = () => {
    const [housing, setHousing] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [searchKeyword, setSearchKeyword] = useState();
    const [startSearch, setStartSearch] = useState(false);
    const [filteredHousing, setFilteredHousing] = useState([]);

    const [premium, setPremium] = useState(false);
    const [priceRange, setPriceRange] = useState(99999999999999999);
    const [selectedRange, setSelectedRange] = useState();

    useEffect(() => {
        const loadResponse = async () => {
            const response = await client.collection("housing").getFullList({
                sort: "-created",
            });
            if (response) {
            }
            setFilteredHousing(response);
            setHousing(response);
        };
        loadResponse();
    }, []);

    useEffect(() => {
        if (searchKeyword || priceRange) {
            if (searchKeyword) {
                let filter = housing.filter(
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
                setFilteredHousing(filter);
            } else {
                let filter = housing.filter((res) => res.price <= priceRange);
                setFilteredHousing(filter);
            }
        } else {
            setFilteredHousing(housing);
        }
    }, [startSearch]);

    useEffect(() => {
        if (premium) {
            let filter = housing.filter((res) => res.premium == true);
            setFilteredHousing(filter);
        } else {
            setFilteredHousing(housing);
        }
    }, [premium]);

    useEffect(() => {
        if (selectedRange) {
            let filter = housing.filter((res) => res.price <= selectedRange);
            setFilteredHousing(filter);
        } else {
            setFilteredHousing(housing);
        }
    }, [selectedRange]);

    return (
        <>
            <div className="flex flex-col justify-center items-center p-10">
                <h2 className={`${styles.sectionHeadText}`}>
                    Find Your Dream House
                </h2>
                <div className="flex mt-10 md:w-[50vw] w-full">
                    <button
                        id="dropdown-button"
                        data-dropdown-toggle="dropdown"
                        className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-secondary bg-primary  rounded-l-xl hover:bg-gray-200 "
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
                    <div className="relative w-full">
                        <input
                            type="search"
                            id="search-dropdown"
                            className="block p-2.5 w-full z-20 text-sm text-secondary bg-primary rounded-r-xl border-primary border-l-2 border  focus:outline-none"
                            placeholder="Search"
                            onChange={(event) => {
                                event.target.value
                                    ? setSearchKeyword(event.target.value)
                                    : setSearchKeyword();
                            }}
                            required
                        />
                        <button
                            type="submit"
                            className="absolute top-0 right-0 p-2.5 text-sm font-medium text-primary bg-green rounded-r-xl border border-green hover:bg-primary transition hover:text-secondary hover:border-primary"
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
                    </div>
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
                                    className="bg-green outline-none h-10 p-5 flex w-full"
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
                                    className={`inline-flex w-full px-4 py-2 dark:hover:bg-green dark:hover:text-primary  transition-all justify-start ${
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
                                    className={`inline-flex w-full px-4 py-2 dark:hover:bg-green dark:hover:text-primary  transition-all justify-start`}
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
                                    className={`inline-flex w-full px-4 py-2 dark:hover:bg-green dark:hover:text-primary  transition-all justify-start flex-wrap`}
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
                                    className={`inline-flex w-full px-4 py-2 dark:hover:bg-green dark:hover:text-primary  transition-all justify-start`}
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
                {filteredHousing.map((filteredHousing, index) => (
                    <OverviewCard
                        key={`housing-${index}`}
                        index={index}
                        id={filteredHousing.id}
                        title={filteredHousing.title}
                        location={filteredHousing.location}
                        district={filteredHousing.district}
                        price={filteredHousing.price}
                        image={client.getFileUrl(
                            filteredHousing,
                            filteredHousing.image[0]
                        )}
                        status={filteredHousing.status}
                        bedroom={filteredHousing.bedroom}
                        livingRoom={filteredHousing.living_room}
                        kitchen={filteredHousing.kitchen}
                        bathroom={filteredHousing.bathroom}
                        contact={filteredHousing.contact_number}
                        category="housing"
                    />
                ))}
            </div>
        </>
    );
};

export default HousingListing;
