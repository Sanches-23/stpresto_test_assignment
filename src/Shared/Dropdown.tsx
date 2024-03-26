import React from "react";
import {Select, MenuItem, SelectChangeEvent} from "@mui/material";

export type DropdownOption = {
    value: string;
    label: string;
}

type DropdownProps = {
    options: DropdownOption[];
    value: string;
    onChange: (event: SelectChangeEvent) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({options, value, onChange}) => {
    const safeValue = options.some((option) => option.value === value) ? value : '';

    return (
        <Select
            value={safeValue}
            // value={value}
            onChange={onChange}
            variant="outlined"
            displayEmpty
            fullWidth
        >
            {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label[0].toUpperCase() + option.label.slice(1)}
                </MenuItem>
            ))}
        </Select>
    );
};


// import React from "react";
//
// export type DropdownOption = {
//     value: string;
//     label: string;
// }
//
// type DropdownProps = {
//     options: DropdownOption[];
//     onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
// }
//
// export const Dropdown: React.FC<DropdownProps> = ({ options, onChange }) => {
//     return (
//         <select onChange={onChange}>
//             {options.map((option, index) => (
//                 <option key={index} value={option.value}>
//                     {option.label}
//                 </option>
//             ))}
//         </select>
//     );
// };
//
// export default Dropdown;