import React from "react";
import { MenuItem, FormControl, TextField} from "@mui/material";


export type DropdownOption = {
    value: string;
    label: string;
}

type DropdownProps = {
    label?: string;
    options: DropdownOption[];
    value: string;
    onChange: (event: React.ChangeEvent<{ name?: string; value: string }>) => void;
    className?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({label = "", options, value, onChange, className = ""}) => {
    const safeValue = options.some((option) => option.value === value) ? value : "";

    return (
        <FormControl variant="outlined" fullWidth className={className}>
            <TextField
                select
                label={label}
                value={safeValue}
                onChange={onChange}
                variant="outlined"
                fullWidth
                InputLabelProps={{ shrink: true }}
            >
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
        </FormControl>

    );
};