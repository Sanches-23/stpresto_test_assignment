import React from "react";
import {TextField} from "@mui/material";


type Props = {
    type?: string;
    label?: string;
    placeholder?: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

export const Input: React.FC<Props> = ({
                                           type = "text",
                                           label = "",
                                           placeholder = "",
                                           value,
                                           onChange,
                                           className = "",
                                       }) => {
    return (
        <TextField
            type={type}
            label={label}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            variant="outlined"
            fullWidth
            className={className}
        />
    );
};
