import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import NoDataFound from "../NoDataFound/NoDataFound";
import Grid from "../Grid/Grid";
import Loader from "../Loader/Loader";
import ExportSearchComponent from "../ExportSearchComponent/ExportSearchComponent";
import { useExportData } from "../../hooks/useExportData";
import { CONSTANTS } from "../../utils/constants";
import {
    StyledGridContainer,
    StyledLoaderContainer,
} from "./SearchExportPage.styled";

const SearchExportPage = () => {
    const { selectedTab, dropdownValue, searchValue } = useExportData();
    const [rowsData, setRowsData] = useState([]);
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
        setRowsData(rowsArr);
    };

    const getGridData = useCallback(() => {
        if (searchValue !== "") {
            const dropdown = dropdownValue.toUpperCase();
            setIsLoading(true);
            axios
                .get(
                    `http://3.108.56.179:9000/api/${selectedTab}/filter?${dropdown}=${searchValue}&limit=${limit}&page=${page}`
                )
                .then((data) => {
                    if (data.data.data.length > 0) {
                        setIsData(true);
                        formateRowsData(data.data.data, selectedTab);
                        setTotalCount(data.data.count);
                    }
                })
                .catch((err) => console.log(err))
                .finally(() => {
                    setIsLoading(false);
                });
        }
    }, [dropdownValue, limit, page, searchValue, selectedTab]);

    const handleSearchClick = () => {
        getGridData();
    };

    useEffect(() => {
        getGridData();
    }, [page, limit, getGridData]);

    const handlePageChange = (event, page) => {
        setPage(page);
    };
    const handleLimitChange = (event) => {
        setLimit(event.target.value);
    };

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
