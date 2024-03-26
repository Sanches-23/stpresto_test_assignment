import React from "react";
import {SelectChangeEvent} from "@mui/material";
import {Dropdown, DropdownOption} from "src/Shared/Dropdown";
import {Input} from "src/Shared/Input";

interface SortMenuProps {
    searchQuery: string;
    category: string;
    sortBy: string;
    categoryOptions: DropdownOption[];
    onChangeSearchQuery: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeCategory: (event: SelectChangeEvent) => void;
    onChangeSortBy: (event: SelectChangeEvent) => void;
}

const SortMenu: React.FC<SortMenuProps> = ({
                                               searchQuery,
                                               category,
                                               sortBy,
                                               categoryOptions,
                                               onChangeSearchQuery,
                                               onChangeCategory,
                                               onChangeSortBy,
                                           }) => {
    const sortByOptions: DropdownOption[] = [
        {value: "", label: "No sorting"},
        {value: "price-asc", label: "Price (Low to High)"},
        {value: "price-desc", label: "Price (High to Low)"},
        {value: "name-asc", label: "Name (A to Z)"},
        {value: "name-desc", label: "Name (Z to A)"},
    ];
    return (
        <div>
            <Input
                type={"text"}
                placeholder={"Search by name"}
                value={searchQuery}
                onChange={onChangeSearchQuery}
            />
            <Dropdown
                value={category}
                options={[{value: "", label: "All categories"}, ...categoryOptions]}
                onChange={onChangeCategory}
            />
            <Dropdown
                value={sortBy}
                options={sortByOptions}
                onChange={onChangeSortBy}
            />
        </div>
    );
};

export default SortMenu;