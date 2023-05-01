import React, { useState } from "react";
import { styles } from "../../styles";

const AreaConverter = () => {
    const [ropani, setRopani] = useState("");
    const [aana, setAana] = useState("");
    const [paisa, setPaisa] = useState("");
    const [daam, setDaam] = useState("");
    const [bigha, setBigha] = useState("");
    const [kattha, setKattha] = useState("");
    const [dhur, setDhur] = useState("");

    const [sqFt, setSqFt] = useState("");
    const [sqMeter, setSqMeter] = useState("");

    const convertAllFromRopani = () => {
        const ropaniValue = parseFloat(ropani);
        const aanaValue = ropaniValue * 16;
        const paisaValue = aanaValue * 4;
        const daamValue = paisaValue * 4;
        setAana(aanaValue.toFixed(2));
        setPaisa(paisaValue.toFixed(2));
        setDaam(daamValue.toFixed(2));
    };

    const convertToRopani = () => {
        const aanaValue = parseFloat(aana);
        const ropaniValue = aanaValue / 16;
        setRopani(ropaniValue.toFixed(2));
    };

    const convertToAana = () => {
        const ropaniValue = parseFloat(ropani);
        const aanaValue = ropaniValue * 16;
        setAana(aanaValue.toFixed(2));
    };

    const convertToPaisa = () => {
        const aanaValue = parseFloat(aana);
        const paisaValue = aanaValue * 4;
        setPaisa(paisaValue.toFixed(2));
    };

    const convertToDaam = () => {
        const paisaValue = parseFloat(paisa);
        const daamValue = paisaValue * 4;
        setDaam(daamValue.toFixed(2));
    };

    const convertAllFromBigha = () => {
        const bighaValue = parseFloat(bigha);
        const katthaValue = bighaValue * 20;
        const dhurValue = katthaValue * 20;
        setKattha(katthaValue.toFixed(2));
        setDhur(dhurValue.toFixed(2));
    };

    const convertToBigha = () => {
        const katthaValue = parseFloat(kattha);
        const bighaValue = katthaValue / 20;
        setBigha(bighaValue.toFixed(2));
    };

    const convertToKattha = () => {
        const bighaValue = parseFloat(bigha);
        const katthaValue = bighaValue * 20;
        setKattha(katthaValue.toFixed(2));
    };

    const convertToDhur = () => {
        const katthaValue = parseFloat(kattha);
        const dhurValue = katthaValue * 20;
        setDhur(dhurValue.toFixed(2));
    };

    const convertToSqMeter = () => {
        if (sqFt !== "") {
            const convertedValue = (sqFt / 10.764).toFixed(4);
            setSqMeter(convertedValue);
        }
    };

    const convertToSqFt = () => {
        if (sqMeter !== "") {
            const convertedValue = (sqMeter * 10.764).toFixed(4);
            setSqFt(convertedValue);
        }
    };

    return (
        <>
            <div className="flex justify-center px-5">
                <h2 className={`${styles.sectionHeadText}`}>Area Converter</h2>
            </div>
            <div className="flex lg:flex-row flex-col flex-wrap px-5">
                <div className="mx-auto my-8 bg-green rounded-lg shadow-lg p-6">
                    <div>
                        <label className="block font-bold mb-2 text-xl">
                            Ropani:
                        </label>
                        <input
                            className="appearance-none rounded bg-primary w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                            type="number"
                            value={ropani}
                            onChange={(e) => setRopani(e.target.value)}
                        />
                        <button
                            className="bg-secondary hover:bg-primary text-primary hover:text-secondary font-bold py-2 px-4 rounded mt-4 transition"
                            onClick={convertAllFromRopani}
                        >
                            All
                        </button>
                    </div>
                    <br />
                    <div>
                        <label className="block font-bold mb-2 text-xl">
                            Aana:
                        </label>
                        <input
                            className="appearance-none rounded bg-primary w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                            type="number"
                            value={aana}
                            onChange={(e) => setAana(e.target.value)}
                        />
                        <div className="flex flex-col md:flex-row gap-2">
                            <button
                                className="bg-secondary hover:bg-primary text-primary hover:text-secondary font-bold py-2 px-4 rounded mt-4 transition"
                                onClick={convertToRopani}
                            >
                                Ropani
                            </button>
                            <button
                                className="bg-secondary hover:bg-primary text-primary hover:text-secondary font-bold py-2 px-4 rounded mt-4 transition"
                                onClick={convertToPaisa}
                            >
                                Paisa
                            </button>
                        </div>
                    </div>
                    <br />
                    <div>
                        <label className="block font-bold mb-2 text-xl">
                            Paisa:
                        </label>
                        <input
                            className="appearance-none rounded bg-primary w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                            type="number"
                            value={paisa}
                            onChange={(e) => setPaisa(e.target.value)}
                        />
                        <div className="flex flex-col md:flex-row gap-2">
                            <button
                                className="bg-secondary hover:bg-primary text-primary hover:text-secondary font-bold py-2 px-4 rounded mt-4 transition"
                                onClick={convertToAana}
                            >
                                Aana
                            </button>
                            <button
                                className="bg-secondary hover:bg-primary text-primary hover:text-secondary font-bold py-2 px-4 rounded mt-4 transition"
                                onClick={convertToDaam}
                            >
                                Daam
                            </button>
                        </div>
                    </div>
                    <br />
                    <div></div>
                    <label className="block font-bold mb-2 text-xl">
                        Daam:
                    </label>
                    <input
                        className="appearance-none rounded bg-primary w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        value={daam}
                        onChange={(e) => setDaam(e.target.value)}
                    />
                    <div className="flex flex-col md:flex-row gap-2">
                        <button
                            className="bg-secondary hover:bg-primary text-primary hover:text-secondary font-bold py-2 px-4 rounded mt-4 transition"
                            onClick={convertToAana}
                        >
                            Aana
                        </button>
                        <button
                            className="bg-secondary hover:bg-primary text-primary hover:text-secondary font-bold py-2 px-4 rounded mt-4 transition"
                            onClick={convertToDaam}
                        >
                            Daam
                        </button>
                    </div>
                </div>
                <div className="max-w-lg mx-auto bg-green my-8 rounded-lg shadow-lg p-6">
                    <div>
                        <label className="block font-bold mb-2 text-xl">
                            Sq. Feet:
                        </label>
                        <input
                            className="appearance-none rounded bg-primary w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            value={sqFt}
                            onChange={(e) => setSqFt(e.target.value)}
                        />
                        <div className="flex flex-col md:flex-row gap-2">
                            <button
                                className="bg-secondary hover:bg-primary text-primary hover:text-secondary font-bold py-2 px-4 rounded mt-4 transition"
                                onClick={convertToSqMeter}
                            >
                                Sq. Meter
                            </button>
                        </div>
                    </div>
                    <br />
                    <div>
                        <label className="block font-bold mb-2 text-xl">
                            Sq. Meter:
                        </label>
                        <input
                            className="appearance-none rounded bg-primary w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            value={sqMeter}
                            onChange={(e) => setSqMeter(e.target.value)}
                        />
                        <div className="flex flex-col md:flex-row gap-2">
                            <button
                                className="bg-secondary hover:bg-primary text-primary hover:text-secondary font-bold py-2 px-4 rounded mt-4 transition"
                                onClick={convertToSqFt}
                            >
                                Sq. Feet
                            </button>
                        </div>
                    </div>
                </div>
                <div className="max-w-lg mx-auto bg-green my-8 rounded-lg shadow-lg p-6">
                    <div>
                        <label className="block font-bold mb-2 text-xl">
                            Bigha:
                        </label>
                        <input
                            className="appearance-none rounded bg-primary w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            value={bigha}
                            onChange={(e) => setBigha(e.target.value)}
                        />
                        <button
                            className="bg-secondary hover:bg-primary text-primary hover:text-secondary font-bold py-2 px-4 rounded mt-4 transition"
                            onClick={convertAllFromBigha}
                        >
                            All
                        </button>
                    </div>
                    <br />
                    <div>
                        <label className="block font-bold mb-2 text-xl">
                            Kattha:
                        </label>
                        <input
                            className="appearance-none rounded bg-primary w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            value={kattha}
                            onChange={(e) => setKattha(e.target.value)}
                        />
                        <div className="flex flex-col md:flex-row gap-2">
                            <button
                                className="bg-secondary hover:bg-primary text-primary hover:text-secondary font-bold py-2 px-4 rounded mt-4 transition"
                                onClick={convertToBigha}
                            >
                                Bigha
                            </button>
                            <button
                                className="bg-secondary hover:bg-primary text-primary hover:text-secondary font-bold py-2 px-4 rounded mt-4 transition"
                                onClick={convertToDhur}
                            >
                                Dhur
                            </button>
                        </div>
                    </div>
                    <br />
                    <div>
                        <label className="block font-bold mb-2 text-xl">
                            Dhur:
                        </label>
                        <input
                            className="appearance-none rounded bg-primary w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            value={dhur}
                            onChange={(e) => setDhur(e.target.value)}
                        />
                        <div className="flex flex-col md:flex-row gap-2">
                            <button
                                className="bg-secondary hover:bg-primary text-primary hover:text-secondary font-bold py-2 px-4 rounded mt-4 transition"
                                onClick={convertToBigha}
                            >
                                Bigha
                            </button>
                            <button
                                className="bg-secondary hover:bg-primary text-primary hover:text-secondary font-bold py-2 px-4 rounded mt-4 transition"
                                onClick={convertToKattha}
                            >
                                Kattha
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AreaConverter;
