import React, { useCallback, useEffect, useRef, useState } from "react";
import _debounce from "lodash/debounce";
import { useNavigate } from "react-router-dom";
import {
    StyledContainer,
    StyledDropdown,
    StyledInput,
    StyledSearchIcon,
    StyledSearchInput,
    StyledSearchWrapper,
    StyledTab,
    StyledTabWrapper,
    StyledTitle,
    StyledTitleContainer,
} from "./ExportSearchComponent.styled";
import { CONSTANTS } from "../../utils/constants";
import { MenuItem, Select, TextField, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useExportData } from "../../hooks/useExportData";
import { useExportDispatch } from "../../hooks/useExportDispatch";
import { ACTIONS } from "../../context/Export/action";
const CustomSelectStyle = styled(Select)(({ theme }) => ({
    "& .MuiOutlinedInput-notchedOutline": {
        border: "none !important",
    },
}));

const ExportSearchComponent = (props) => {
    // const navigate = useNavigate();
    const { selectedTab, dropdownValue, searchValue } = useExportData();
    const dispatchExportData = useExportDispatch();
    const [searchValueState, setSearchValueState] = useState(searchValue);
    const [selectedTabState, setSelectedTabState] = useState(selectedTab);
    const [dropdownValueState, setDropdownValueState] = useState(dropdownValue);
    const [showSearchError, setshowSearchError] = useState(false);
    const selectRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                selectRef.current &&
                !selectRef.current.contains(event.target)
            ) {
                // Click occurred outside the Select, close it
                selectRef.current.blur(); // This will blur the Select and close the dropdown
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // const handleDebounceFn = (value) => {
    //     dispatchExportData({
    //         type: ACTIONS.SET_SEARCH_VALUE,
    //         payload: {
    //             searchValue: value,
    //         },
    //     });
    // };
    // const debounceFn = useCallback(_debounce(handleDebounceFn, 1000), []);

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchValueState(value.trim());
        // debounceFn(e.target.value);
    };

    const handleTabChange = (data) => {
        setSelectedTabState(data);
        // dispatchExportData({
        //     type: ACTIONS.SET_SELECTED_TAB,
        //     payload: {
        //         selectedTab: data,
        //     },
        // });
    };

    const handleDropdownChange = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setDropdownValueState(e.target.value);
        // dispatchExportData({
        //     type: ACTIONS.SET_DROPDOWN_VALUE,
        //     payload: {
        //         dropdownValue: e.target.value,
        //     },
        // });
    };

    const handleSearchClick = () => {
        console.log({
            searchValueState: searchValueState,
            dropdownValueState: dropdownValueState,
            selectedTabState: selectedTabState,
        });
        if (searchValueState !== "") {
            setSearchValueState("");
            setshowSearchError(false);
            dispatchExportData({
                type: ACTIONS.SET_SEARCH_VALUE,
                payload: {
                    searchValue: searchValueState,
                },
            });
            dispatchExportData({
                type: ACTIONS.SET_SELECTED_TAB,
                payload: {
                    selectedTab: selectedTabState,
                },
            });
            dispatchExportData({
                type: ACTIONS.SET_DROPDOWN_VALUE,
                payload: {
                    dropdownValue: dropdownValueState,
                },
            });
            props.handleSearch();
        } else {
            setshowSearchError(true);
        }
    };

    return (
        <StyledContainer>
            <StyledTitleContainer>
                <StyledTitle>{CONSTANTS.HERO_SECTION_TITTLE}</StyledTitle>
                <StyledTitle>{CONSTANTS.SEARCH_TITTLE}</StyledTitle>
            </StyledTitleContainer>
            <StyledTabWrapper>
                {CONSTANTS.TABS.map((item) => (
                    <StyledTab
                        item={item}
                        isActive={item === selectedTabState}
                        onClick={() => handleTabChange(item)}
                    >
                        {item}
                    </StyledTab>
                ))}
            </StyledTabWrapper>
            <StyledSearchWrapper>
                <StyledDropdown>
                    <Select
                        ref={selectRef}
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={dropdownValueState}
                        onChange={handleDropdownChange}
                        input={<CustomSelectStyle />}
                        sx={{ width: 150, border: "none" }}
                    >
                        {CONSTANTS.EXPORT_DROPDOWN_ITEMS.map((item) => (
                            <MenuItem key={item.value} value={item.value}>
                                {item.label}
                            </MenuItem>
                        ))}
                    </Select>
                </StyledDropdown>
                <StyledSearchInput>
                    {/* <TextField
                        id="standard-basic"
                        variant="standard"
                        hiddenLabel
                        InputProps={{
                            disableUnderline: true,
                        }}
                        sx={{ width: "100%" }}
                        className={classes.autofillFix}
                        placeholder="Search here..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    /> */}
                    <StyledInput
                        type="text"
                        placeholder="Search here..."
                        value={searchValueState}
                        required
                        onChange={(e) => handleSearchChange(e)}
                    />
                    {/* {showSearchError && (
                        <span style={{ color: "red" }}>
                            Please enter a value.
                        </span>
                    )} */}
                </StyledSearchInput>
                <StyledSearchIcon>
                    <SearchIcon onClick={handleSearchClick} />
                </StyledSearchIcon>
            </StyledSearchWrapper>
        </StyledContainer>
    );
};

export default ExportSearchComponent;
