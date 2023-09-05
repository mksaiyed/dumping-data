import React, { useCallback, useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import axios from "axios";
import ExportSearchComponent from "../ExportSearchComponent/ExportSearchComponent";
import { useExportData } from "../../hooks/useExportData";
import { useExportDispatch } from "../../hooks/useExportDispatch";
import { CONSTANTS } from "../../utils/constants";
import Grid from "../Grid/Grid";
import {
    StyledGridContainer,
    StyledLoaderContainer,
} from "./SearchExportPage.styled";
import ContactUs from "../ContactUs/ContactUs";
import Loader from "../Loader/Loader";
import NoDataFound from "../NoDataFound/NoDataFound";
const EXPORT_DATA = [
    {
        _id: "64e4e8ce4ff4a571e02be80c",
        DATE: "01-Jun-23",
        EXPORTER_NAME: "xxxxxxxxxxxxxxxxxxxx",
        EXPORTER_CITY_STATE: "Chennai",
        IMPORTER_NAME: "STELCORE MANAGEMENT SERVICES LLC",
        COUNTRY_OF_DESTINATION: "United States",
        PORT_OF_DISCHARGE: "New York",
        HSN_CODE: "50072010",
        HSN_CODE_DESCRIPTION: "SILK SAREEAWB-8145048940WED31052324",
        QUANTITY: "4",
        UQC: "NOS",
        INV_VALUE_FC: "10805.25",
        TOTAL_VALUE_FC: "43221",
        CURRENCY: " INR ",
        PORT_OF_LOADING: "CHENNAI AIR",
        __v: 0,
        createdAt: "2023-08-22T16:57:00.308Z",
        updatedAt: "2023-08-22T16:57:00.308Z",
    },
    {
        _id: "64e4e8ce4ff4a571e02be81c",
        DATE: "01-Jun-23",
        EXPORTER_NAME: "xxxxxxxxxxxxxxxxxxxx",
        EXPORTER_CITY_STATE: "N/A",
        IMPORTER_NAME: "HANDLOOM HOUSE HEAD OFFICE LLC",
        COUNTRY_OF_DESTINATION: "United Arab Emirates",
        PORT_OF_DISCHARGE: "Dubai",
        HSN_CODE: "50072010",
        HSN_CODE_DESCRIPTION: "DYED 86%SILK X 14%MET.YARN SAREES",
        QUANTITY: "20",
        UQC: "PCS",
        INV_VALUE_FC: "107.67",
        TOTAL_VALUE_FC: "2153.4",
        CURRENCY: " USD ",
        PORT_OF_LOADING: "JNPT/ NHAVA SHEVA SEA",
        __v: 0,
        createdAt: "2023-08-22T16:57:00.308Z",
        updatedAt: "2023-08-22T16:57:00.308Z",
    },
    {
        _id: "64e4e8ce4ff4a571e02be82c",
        DATE: "01-Jun-23",
        EXPORTER_NAME: "xxxxxxxxxxxxxxxxxxxx",
        EXPORTER_CITY_STATE: "Chennai",
        IMPORTER_NAME: "STELCORE MANAGEMENT SERVICES LLC",
        COUNTRY_OF_DESTINATION: "United States",
        PORT_OF_DISCHARGE: "New York",
        HSN_CODE: "50072010",
        HSN_CODE_DESCRIPTION: "SILK SAREEAWB-8145048402WED31052308",
        QUANTITY: "1",
        UQC: "NOS",
        INV_VALUE_FC: "41339",
        TOTAL_VALUE_FC: "41339",
        CURRENCY: " INR ",
        PORT_OF_LOADING: "CHENNAI AIR",
        __v: 0,
        createdAt: "2023-08-22T16:57:00.309Z",
        updatedAt: "2023-08-22T16:57:00.309Z",
    },
];
const IMPORT_DATA = [
    {
        _id: "64e4eb604ff4a571e02f37a9",
        DATE: "01-Jun-23",
        IMPORTER_NAME: "xxxxxxxxxxxxxxxxxxxxxx",
        IMPORTER_CITY_STATE: "Uttar Pradesh",
        EXPORTER_NAME: "SUZHOU INTOOL CO LIMITED",
        COUNTRY_OF_ORIGIN: "China",
        HSN_CODE: "84672100",
        HSN_CODE_DESCRIPTION:
            "254MM LASER WELDING CORE BITCODE:F DCB 254BRAND FOORTE",
        QUANTITY: "20",
        UQC: "NOS",
        UNT_PRICE_FC: "335.79",
        INV_VALUE_FC: "6,715.80",
        CURRENCY: " CNY ",
        PORT_OF_DISCHARGE: "JNPT/ NHAVA SHEVA SEA",
        __v: 0,
        createdAt: "2023-08-22T17:08:24.963Z",
        updatedAt: "2023-08-22T17:08:24.963Z",
    },
    {
        _id: "64e4eb604ff4a571e02f3885",
        DATE: "01-Jun-23",
        IMPORTER_NAME: "xxxxxxxxxxxxxxxxxxxxxx",
        IMPORTER_CITY_STATE: "Uttar Pradesh",
        EXPORTER_NAME: "SUZHOU INTOOL CO LIMITED",
        COUNTRY_OF_ORIGIN: "China",
        HSN_CODE: "84672100",
        HSN_CODE_DESCRIPTION:
            "254MM LASER WELDING CORE BITCODE:F DCB 254BRAND FOORTE",
        QUANTITY: "20",
        UQC: "NOS",
        UNT_PRICE_FC: "335.79",
        INV_VALUE_FC: "6,715.80",
        CURRENCY: " CNY ",
        PORT_OF_DISCHARGE: "JNPT/ NHAVA SHEVA SEA",
        __v: 0,
        createdAt: "2023-08-22T17:08:24.968Z",
        updatedAt: "2023-08-22T17:08:24.968Z",
    },
    {
        _id: "64e4eb604ff4a571e02f3d38",
        DATE: "01-Jun-23",
        IMPORTER_NAME: "xxxxxxxxxxxxxxxxxxxxxx",
        IMPORTER_CITY_STATE: "Uttar Pradesh",
        EXPORTER_NAME: "HUALI ELECTRICAL APPLIANCE MANUFACTURING CO LIMITED",
        COUNTRY_OF_ORIGIN: "China",
        HSN_CODE: "84672100",
        HSN_CODE_DESCRIPTION:
            "3KG/26MM COMBINATION HAMMER 1010WCODE:F CM 3-26 SDS+REMAKE:3 SDS DRILL BIT+2 CHISELSBRAND FORTE",
        QUANTITY: "102",
        UQC: "NOS",
        UNT_PRICE_FC: "228.55",
        INV_VALUE_FC: "23,312.10",
        CURRENCY: " CNY ",
        PORT_OF_DISCHARGE: "JNPT/ NHAVA SHEVA SEA",
        __v: 0,
        createdAt: "2023-08-22T17:08:25.006Z",
        updatedAt: "2023-08-22T17:08:25.006Z",
    },
];

const SearchExportPage = () => {
    const { selectedTab, dropdownValue, searchValue } = useExportData();
    const dispatchExportData = useExportDispatch();
    const [rowsData, setRowsData] = useState([]);
    const [headerData, setHeaderData] = useState([]);
    const [listItems, setListItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isData, setIsData] = useState(false);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(20);
    const [totalCount, setTotalCount] = useState(0);

    const formateRowsData = (data, selectedTab) => {
        const rowsArr = [];
        const grid_parameters =
            selectedTab === CONSTANTS.TABS[0]
                ? CONSTANTS.IMPORT_GRID_PARAMETERS
                : CONSTANTS.EXPORT_GRID_PARAMETERS;
        data.forEach((item) => {
            const data = [];
            grid_parameters.forEach(({ key }) => {
                data.push(item[key]);
            });
            rowsArr.push(data);
        });
        console.log(rowsArr);
        setRowsData(rowsArr);
    };

    const getGridData = () => {
        if (searchValue !== "") {
            const dropdown = dropdownValue.toUpperCase();
            setIsLoading(true);
            axios
                .get(
                    `http://3.108.56.179:9000/api/${selectedTab}/filter?${dropdown}=${searchValue}&limit=${limit}&page=${page}`
                )
                .then((data) => {
                    if (data.data.data.length > 0) {
                        formateRowsData(data.data.data, selectedTab);
                        setIsData(true);
                        setTotalCount(data.data.count);
                        setHeaderData(listItems);
                    }
                })
                .catch((err) => console.log(err))
                .finally(() => {
                    setIsLoading(false);
                });
        }
    };

    const handleSearchClick = () => {
        getGridData();
    };

    useEffect(() => {
        getGridData();
    }, []);

    useEffect(() => {
        getGridData();
    }, [page, limit]);

    const handlePageChange = (event, page) => {
        console.log("handlePageChange", event, page);
        setPage(page);
    };
    const handleLimitChange = (event) => {
        console.log("handleLimitChange", event, event.target.value);
        setLimit(event.target.value);
    };

    // useEffect(() => {
    //     if (isData) {
    //         setListItems(
    //             selectedTab === CONSTANTS.TABS[0]
    //                 ? CONSTANTS.IMPORT_GRID_PARAMETERS
    //                 : CONSTANTS.EXPORT_GRID_PARAMETERS
    //         );
    //     }
    // }, [isData, selectedTab]);

    return (
        <>
            <Navbar />
            <ExportSearchComponent handleSearch={handleSearchClick} />
            <StyledGridContainer>
                {searchValue === "" ? (
                    <StyledLoaderContainer>
                        <NoDataFound />
                    </StyledLoaderContainer>
                ) : !isLoading ? (
                    <StyledLoaderContainer>
                        <Loader />
                    </StyledLoaderContainer>
                ) : selectedTab === CONSTANTS.TABS[0] ? (
                    <Grid
                        rows={rowsData}
                        headerData={CONSTANTS.IMPORT_GRID_PARAMETERS}
                        isData={isData}
                        page={page}
                        totalCount={totalCount}
                        limit={limit}
                        handlePageChange={handlePageChange}
                        handleLimitChange={handleLimitChange}
                    />
                ) : (
                    <Grid
                        rows={rowsData}
                        headerData={CONSTANTS.EXPORT_GRID_PARAMETERS}
                        isData={isData}
                        page={page}
                        totalCount={totalCount}
                        limit={limit}
                        handlePageChange={handlePageChange}
                        handleLimitChange={handleLimitChange}
                    />
                )}
            </StyledGridContainer>
            <Footer />
        </>
    );
};

export default SearchExportPage;
