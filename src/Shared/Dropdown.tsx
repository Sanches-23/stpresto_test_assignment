import React from "react";
import {Select, MenuItem, SelectChangeEvent, InputLabel, FormControl} from "@mui/material";

export type DropdownOption = {
    value: string;
    label: string;
}

type DropdownProps = {
    label?: string;
    options: DropdownOption[];
    value: string;
    onChange: (event: SelectChangeEvent) => void;
    className?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({label = "", options, value, onChange, className = ""}) => {
    const safeValue = options.some((option) => option.value === value) ? value : "";

    return (
        <FormControl variant="outlined"
                     fullWidth
                     className={className}>
            <InputLabel>{label}</InputLabel>
            <Select
                value={safeValue}
                onChange={onChange}
            >
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};