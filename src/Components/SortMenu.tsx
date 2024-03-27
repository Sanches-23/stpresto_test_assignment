import React from "react";
import {Box, Paper} from "@mui/material";
import {Dropdown, DropdownOption} from "src/Shared/Dropdown";
import {Input} from "src/Shared/Input";
import {theme} from "src/Utils/theme/theme";
import {makeStyles} from "@mui/styles";


const useSortMenuStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        marginTop: theme.spacing(0),
        marginBottom: theme.spacing(2),
    },
    formControl: {
        marginBottom: theme.spacing(2) + " !important",

    },
    paper: {
        padding: theme.spacing(2),
        marginBottom: theme.spacing(2),
        width: 350
    },
});

type SortMenuProps = {
    searchQuery: string;
    category: string;
    sortBy: string;
    categoryOptions: DropdownOption[];
    onChangeSearchQuery: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeCategory: (event: React.ChangeEvent<{ name?: string; value: string }>) => void;
    onChangeSortBy: (event: React.ChangeEvent<{ name?: string; value: string }>) => void;
}

const SortMenu
    :
    React.FC<SortMenuProps> = ({
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
    const classes = useSortMenuStyles();

    return (
        <Paper className={classes.paper}>
            <Box className={classes.root}>
                <Input
                    type={"text"}
                    placeholder={"Search by name"}
                    value={searchQuery}
                    onChange={onChangeSearchQuery}
                    className={classes.formControl}
                />
                <Dropdown
                    label={"Categories"}
                    value={category}
                    options={[{value: "", label: "All categories"}, ...categoryOptions]}
                    onChange={onChangeCategory}
                    className={classes.formControl}
                />
                <Dropdown
                    label={"Sorting"}
                    value={sortBy}
                    options={sortByOptions}
                    onChange={onChangeSortBy}
                />
            </Box>
        </Paper>
    );
};

export default SortMenu;