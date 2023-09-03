import React, { useRef, useState } from "react";
import axios from "axios";
import "./homePage.css";
import UserData from "./../useData";
import { AiOutlineSearch } from "react-icons/ai";

// import { Link, useNavigate } from "react-router-dom";
// import DownData from './downData'

const ExportSearchPage = () => {
    const [getImportData, setImportdata] = useState([]);
    const [valState, setValState] = useState("HSN_CODE");
    const [query, setQuery] = useState("");
    const [ivalue, setValue] = useState("import");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerpage] = useState(30);
    const [pagenumberlimit, setpageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

    // const navigate = useNavigate();

    // const getTokenFromLocalstorage = JSON.parse(
    //     localStorage.getItem("customer")
    // );

    // let token = getTokenFromLocalstorage?.token;

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios
            .get(
                `http://35.154.61.242:4002/api/${ivalue}/filter?${valState}=${query}`
            )
            .then((data) => setImportdata(data.data.responce))
            .catch((err) => console.log(err));
    };

    const page = [];
    for (let i = 1; i <= Math.ceil(getImportData.length / itemsPerPage); i++) {
        page.push(i);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    let currentItems = getImportData.slice(indexOfFirstItem, indexOfLastItem);

    let keys = [];
    for (let key in currentItems[0]) {
        keys.push(key);
    }
    const newKey = keys.slice(1, -3);

    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    };

    const handleNextBtn = () => {
        // if (token === undefined) {
        //     // navigate("/login");
        // } else {
        setCurrentPage(currentPage + 1);
        if (currentPage + 1 > maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + pagenumberlimit);
            setMinPageNumberLimit(minPageNumberLimit + pagenumberlimit);
        }
        // }
    };

    const handlePrevBtn = () => {
        setCurrentPage(currentPage - 1);

        if ((currentPage - 1) % pagenumberlimit == 0) {
            setMaxPageNumberLimit(maxPageNumberLimit - pagenumberlimit);
            setMinPageNumberLimit(minPageNumberLimit - pagenumberlimit);
        }
    };

    let pageIncreamentBtn = null;
    if (page.length > maxPageNumberLimit) {
        pageIncreamentBtn = (
            <li
                style={{
                    fontSize: "2.5rem",
                    listStyle: "none",
                    marginLeft: "10px",
                }}
                onClick={handleNextBtn}
            >
                &hellip;
            </li>
        );
    }

    let pageDecreamentBtn = null;
    if (page.length > maxPageNumberLimit) {
        pageDecreamentBtn = (
            <li
                style={{
                    fontSize: "2.5rem",
                    listStyle: "none",
                    marginLeft: "10px",
                }}
                onClick={handlePrevBtn}
            >
                &hellip;
            </li>
        );
    }
    return (
        <>
            <div
                className="d-flex align-items-center justify-ontent-center flex-column"
                style={{ height: "30vh" }}
            >
                <div className=" mt-3 d-flex align-items-center justify-ontent-center">
                    <h1
                        className="mb-2 d-flex align-items-center justify-ontent-center text-white "
                        style={{
                            display: "block",
                            fontSize: "32px",
                            font: "bold",
                        }}
                    >
                        Search import Export Data Of India
                    </h1>
                </div>

                <div className="radioBtn d-flex align-items-center justify-content-center ">
                    <input
                        className="fs-1 text-white m-2"
                        type="radio"
                        value="import"
                        name="data"
                        onChange={(e) => setValue(e.target.value)}
                    />
                    Import
                    <input
                        className="fs-1 text-white m-2"
                        type="radio"
                        value="export"
                        name="data"
                        onChange={(e) => setValue(e.target.value)}
                    />
                    Export
                </div>

                {/* <div className='mt-5 d-flex align-items-center justify-ontent-center'>
                    <input className=" fs-1 " type="radio" value="HSN_CODE" name="data" onChange={e => setValue(e.target.value)} />HSN_CODE
                    <input className="fs-1 ms-3 " type="radio" value="HSN_CODE_DESCRIPTION" name="data" onChange={e => setValue(e.target.value)} />HSN_CODE_DESCRIPTION
                </div> */}

                <div className="mb-3 mt-5">
                    <form
                        onSubmit={handleSubmit}
                        className="d-flex align-items-center justify-content-center mb-3"
                    >
                        <select
                            className="bg-warning  text-bold m-0 p-0"
                            value={valState}
                            name="import"
                            style={{ height: "4.5vh", width: "6vw" }}
                            onChange={(e) => {
                                let selectValue = e.target.value;
                                setValState(selectValue);
                            }}
                        >
                            <option value="HSN_CODE">HSN_CODE</option>
                            <option value="HSN_CODE_DESCRIPTION">
                                HSN_CODE_DESCRIPTION
                            </option>
                            <option value="IMPORTER_NAME">COMPANY NAME</option>
                        </select>
                        <input
                            className=" "
                            style={{
                                display: "inline-block",
                                paddingLeft: "10px",
                                height: "30px",
                                width: "40vw",
                                border: "none",
                            }}
                            type="text"
                            placeholder={valState}
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button
                            type="submit"
                            value="search"
                            className="ms-2 d-inline-block"
                            style={{ height: "30px" }}
                        >
                            <AiOutlineSearch className="fs-3" />
                        </button>
                    </form>
                </div>
            </div>

            <div>
                {currentItems.length > 0 ? (
                    <div className="container ">
                        <div>
                            <h1 className="mt-3 d-flex align-items-start text-black ">
                                Detailed Export Data Of{" "}
                                <span
                                    style={{
                                        display: "block",
                                        marginLeft: "10px",
                                        color: "blue",
                                        fontSize: "32px",
                                        fontWeight: "bold",
                                    }}
                                >
                                    {query}
                                </span>{" "}
                            </h1>
                        </div>

                        <div className="row m-1">
                            <div
                                className="col m-1 "
                                style={{
                                    height: "20vh",
                                    borderRadius: "20px",
                                    backgroundColor: "grey",
                                }}
                            >
                                <h1 className="d-flex justify-content-center mt-3 text-warning font-weight-bold">
                                    {getImportData.length}
                                </h1>
                                <h4 className="d-flex justify-content-center mt-3 text-white">
                                    Export Shipment Records found
                                </h4>
                            </div>

                            <div
                                className="col m-1 bg-secondary"
                                style={{ height: "20vh", borderRadius: "20px" }}
                            >
                                <h2 className="d-flex justify-content-center m-3 text-white">
                                    Detailed Analysis & Trends Of:{" "}
                                </h2>
                                <h3 className="d-flex justify-content-center m-3 text-white">
                                    {" "}
                                    Export Of:{" "}
                                    <span className="text-warning">
                                        {" "}
                                        {query?.slice(0, 50)}
                                    </span>
                                </h3>
                                <div
                                    className="bg-primary mt-5"
                                    style={{ height: "30px" }}
                                >
                                    <h2 className="d-flex justify-content-center align-items-center mt-3 text-white">
                                        CLICK TO VIEW
                                    </h2>
                                </div>
                            </div>

                            <div
                                className="col m-1 bg-secondary"
                                style={{ height: "20vh", borderRadius: "20px" }}
                            >
                                <h2 className="d-flex justify-content-center m-3 text-white">
                                    Customs Duty Of:{" "}
                                    <span
                                        style={{
                                            display: "block",
                                            marginLeft: "5px",
                                            color: "yellow",
                                        }}
                                    >
                                        {" "}
                                        {query}
                                    </span>
                                </h2>

                                <div
                                    className="bg-primary "
                                    style={{
                                        height: "30px",
                                        marginTop: "65px",
                                    }}
                                >
                                    <h2 className="d-flex justify-content-center align-items-center mt-3 text-white">
                                        CLICK TO VIEW
                                    </h2>
                                </div>
                            </div>

                            <div
                                className="col m-1 bg-secondary"
                                style={{ height: "20vh", borderRadius: "20px" }}
                            >
                                <h2 className="d-flex justify-content-center align-items-center mt-3 text-white">
                                    Trademarks{" "}
                                </h2>
                                <h2 className="d-flex justify-content-center align-items-center mt-1 text-white">
                                    On This Page
                                </h2>
                                <div
                                    className="bg-primary "
                                    style={{
                                        height: "30px",
                                        marginTop: "35px",
                                    }}
                                >
                                    <h2 className="d-flex justify-content-center align-items-center mt-3 text-white">
                                        CLICK TO VIEW
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    ""
                )}
            </div>

            <div>
                {currentItems.length > 1 ? (
                    <div className="container">
                        <div
                            style={{
                                paddingTop: "20px",
                                paddingBottom: "20px",
                            }}
                        >
                            <a
                                className="btn btn-primary btn-round"
                                style={{
                                    display: "inline-block",
                                    marginBottom: "0",
                                    fontWeight: "400",
                                    textAlign: "center",
                                    padding: "6px 12px",
                                    fontSize: "14px",
                                }}
                            >
                                Exports Of {query} in India
                            </a>
                            <a
                                className="btn btn-primary btn-round ms-2"
                                style={{
                                    display: "inline-block",
                                    marginBottom: "0",
                                    fontWeight: "400",
                                    textAlign: "center",
                                    padding: "6px 12px",
                                    fontSize: "14px",
                                }}
                            >
                                Manufactures Of {query}
                            </a>
                            <a
                                className="btn btn-primary btn-round ms-2"
                                style={{
                                    display: "inline-block",
                                    marginBottom: "0",
                                    fontWeight: "400",
                                    textAlign: "center",
                                    padding: "6px 12px",
                                    fontSize: "14px",
                                }}
                            >
                                Buyers of {query} in India
                            </a>
                        </div>
                    </div>
                ) : (
                    ""
                )}
            </div>

            <div>
                {currentItems.length > 0 ? (
                    <div className="result">
                        <table>
                            <thead>
                                <tr>
                                    {newKey.map((item, index) => {
                                        return (
                                            <th scope="col" key={index}>
                                                <span>{item}</span>
                                            </th>
                                        );
                                    })}
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems?.length > 0 ? (
                                    <UserData data={currentItems} />
                                ) : (
                                    <div>No data found </div>
                                )}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    ""
                )}
            </div>

            <div className="d-flex align-items-center justify-content-center mt-3">
                {currentItems.length ? (
                    <button
                        disabled={currentPage == page[0] ? true : false}
                        onClick={handlePrevBtn}
                    >
                        Prev
                    </button>
                ) : null}
                {pageDecreamentBtn}
                {page?.map((number, i) => {
                    if (
                        number < maxPageNumberLimit + 1 &&
                        number > minPageNumberLimit
                    ) {
                        return (
                            <>
                                <ul className="pageNumbers " key={i}>
                                    <li
                                        key={number}
                                        id={number}
                                        className={
                                            currentPage == number
                                                ? "active"
                                                : null
                                        }
                                    >
                                        {number}
                                    </li>
                                </ul>
                            </>
                        );
                    } else {
                        return null;
                    }
                })}
                {pageIncreamentBtn}
                {currentItems.length ? (
                    <button
                        disabled={
                            currentPage == page[page.length - 1] ? true : false
                        }
                        className="ms-3"
                        onClick={handleNextBtn}
                    >
                        Next
                    </button>
                ) : null}
            </div>

            {/* {
                currentItems?.length > 0 ?
                    <div className=''>
                        <div className='filter-down'>
                            <div className='filter '>
                                <ul className='d-flex  '>
                                    <p className='mt-3 text-white'>Filter By:</p>
                                    <li className='btn btn-primary btn-round m-2' style={{ display: "inline-block", marginBottom: "0", fontWeight: "400", textAlign: "center", padding: "6px 12px", fontSize: "14px" }}>HSN CODE</li>
                                    <li className='btn btn-primary btn-round m-2' style={{ display: "inline-block", marginBottom: "0", fontWeight: "400", textAlign: "center", padding: "6px 12px", fontSize: "14px" }}>Origin</li>
                                    <li className='btn btn-primary btn-round m-2' style={{ display: "inline-block", marginBottom: "0", fontWeight: "400", textAlign: "center", padding: "6px 12px", fontSize: "14px" }}>Port Of Dscharge</li>
                                    <li className='btn btn-primary btn-round m-2' style={{ display: "inline-block", marginBottom: "0", fontWeight: "400", textAlign: "center", padding: "6px 12px", fontSize: "14px" }}>Month</li>
                                    <li className='btn btn-primary btn-round m-2' style={{ display: "inline-block", marginBottom: "0", fontWeight: "400", textAlign: "center", padding: "6px 12px", fontSize: "14px" }}>Unit Quantity</li>
                                    <li className='btn btn-warning btn-round  d-flex justify-content-end text-white' style={{ display: "inline-block", marginBottom: "0", fontWeight: "400", textAlign: "center", padding: "6px 12px", fontSize: "14px", margin: "5px 0 5px 920px" }}>All</li>
                                </ul>

                            </div>

                            <div className='row mt-3'>
                                <div className='col filters ms-5'>
                                    <div className='filter-list '>
                                        <label className='text-white'>HSN_CODE</label>
                                        <div className='d-flex'>
                                            <input type='text' placeholder='HSN_CODE' className='form-control rounded-0' />
                                            <button className='btn btn-primary'><AiOutlineSearch style={{ width: "20px", height: "20px" }} /></button>
                                        </div>

                                        <div className='dropdown '>
                                            <ul>
                                                <li className='text-decoration-none' ><Link style={{ textDecoration: "none", fontSize: "20px", fontWeight: "bold" }} to="#">{query} ({currentItems?.length})</Link></li>

                                            </ul>

                                        </div>
                                    </div>
                                </div>
                                <div className='col filters ms-3'>
                                    <div className='filter-list '>
                                        <label className='text-white'>Origin</label>
                                        <div className='d-flex'>
                                            <input type='text' placeholder='Origin' className='form-control rounded-0' />
                                            <button className='btn btn-primary'><AiOutlineSearch style={{ width: "20px", height: "20px" }} /></button>
                                        </div>

                                        <div className='dropdown'>
                                            <ul>
                                                {currentItems.length && currentItems?.map((item, index) => {
                                                    console.log(item?.COUNTRY_OF_DESTINATION)
                                                    return (
                                                        <li><Link style={{ textDecoration: "none", fontSize: "18px", }} to="#">{item?.COUNTRY_OF_DESTINATION}</Link></li>
                                                    )
                                                })}


                                            </ul>

                                        </div>
                                    </div>
                                </div>
                                <div className='col filters ms-3'>
                                    <div className='filter-list '>
                                        <label className='text-white'>Port Of Discharge</label>
                                        <div className='d-flex'>
                                            <input type='text' placeholder='Port Of Discharge' className='form-control rounded-0' />
                                            <button className='btn btn-primary'><AiOutlineSearch style={{ width: "20px", height: "20px" }} /></button>
                                        </div>

                                        <div className='dropdown'>
                                            <ul>
                                                {
                                                    currentItems.length && currentItems.map((item, index) => {
                                                        return (
                                                            <li><Link style={{ textDecoration: "none", fontSize: "18px", }} to="#">{item?.PORT_OF_DISCHARGE}</Link></li>
                                                        )
                                                    })
                                                }


                                            </ul>

                                        </div>
                                    </div>
                                </div>
                                <div className='col filters ms-3'>
                                    <div className='filter-list '>
                                        <label className='text-white'>Month</label>
                                        <div className='d-flex'>
                                            <input type='text' placeholder='Month' className='form-control rounded-0' />
                                            <button className='btn btn-primary'><AiOutlineSearch style={{ width: "20px", height: "20px" }} /></button>
                                        </div>

                                        <div className='dropdown'>
                                            <ul>
                                                {
                                                    currentItems.length && currentItems?.map((item, index) => {
                                                        return (
                                                            <li><Link style={{ textDecoration: "none", fontSize: "18px", }}>{item?.DATE}</Link></li>
                                                        )
                                                    })
                                                }


                                            </ul>

                                        </div>
                                    </div>
                                </div>
                                <div className='col filters ms-3 me-5'>
                                    <div className='filter-list '>
                                        <label className='text-white'>Unit Quantity</label>
                                        <div className='d-flex'>
                                            <input type='text' placeholder='Unit Quantity' className='form-control rounded-0' />
                                            <button className='btn btn-primary'><AiOutlineSearch style={{ width: "20px", height: "20px" }} /></button>
                                        </div>

                                        <div className='dropdown'>
                                            <ul>
                                                {
                                                    currentItems.length && currentItems?.map((item, index) => {
                                                        return (
                                                            <li><Link style={{ textDecoration: "none", fontSize: "18px", }}>{item?.QUANTITY}</Link></li>
                                                        )
                                                    })
                                                }
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : ""
            } */}
        </>
    );
};

export default ExportSearchPage;
