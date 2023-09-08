import React, { useCallback, useEffect, useRef, useState } from "react";
import _debounce from "lodash/debounce";
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
import { MenuItem, Select, styled } from "@mui/material";
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
    const { selectedTab, dropdownValue, searchValue } = useExportData();
    const dispatchExportData = useExportDispatch();
    const [searchValueState, setSearchValueState] = useState(searchValue);
    const [selectedTabState, setSelectedTabState] = useState(selectedTab);
    const [dropdownValueState, setDropdownValueState] = useState(dropdownValue);
    const [showSearchError, setShowSearchError] = useState(false);
    const selectRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                selectRef.current &&
                !selectRef.current.contains(event.target)
            ) {
                selectRef.current.blur();
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
    };

    const handleDropdownChange = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setDropdownValueState(e.target.value);
    };

    const handleSearchClick = (e) => {
        console.log(
            "🚀 ~ file: ExportSearchComponent.js:79 ~ handleSearchClick ~ e:",
            e
        );
        e.preventDefault();
        if (searchValueState.length < 5) {
            setShowSearchError(true);
        } else {
            setShowSearchError(false);
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
                        {CONSTANTS.SEARCH_DROPDOWN_ITEMS.map((item) => (
                            <MenuItem key={item.value} value={item.value}>
                                {item.label}
                            </MenuItem>
                        ))}
                    </Select>
                </StyledDropdown>
                <StyledSearchInput>
                    <StyledInput
                        type="text"
                        placeholder="Search here..."
                        value={searchValueState}
                        required
                        onChange={(e) => handleSearchChange(e)}
                    />
                </StyledSearchInput>
                <StyledSearchIcon type="submit" onClick={handleSearchClick}>
                    <SearchIcon />
                </StyledSearchIcon>
            </StyledSearchWrapper>
            {showSearchError && (
                <span
                    style={{
                        color: "red",
                        fontSize: "14px",
                        marginTop: "10px",
                    }}
                >
                    {CONSTANTS.SEARCH_ERRORS[dropdownValueState]}
                </span>
            )}
        </StyledContainer>
    );
};

export default ExportSearchComponent;
