import React from "react";
import { TextField } from "@mui/material";

type Props = {
    type?: string;
    label?: string;
    placeholder?: string;
    value: string;
    className?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<Props> = ({
                                           type = "text",
                                           label = "",
                                           placeholder = "",
                                           value,
                                           className = "",
                                           onChange,
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





// import React from 'react';
//
//
// type Props = {
//     type?: string
//     label?: string
//     placeholder?: string
//     value: string
//     className?: string
//     onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
// }
//
// export const Input: React.FC<Props> = ({
//                                            type="text",
//                                            label= "",
//                                            placeholder = "",
//                                            value,
//                                            className = "",
//                                            onChange,
//                                        }) => {
//     return (
//         <div className="field">
//             <label
//                 htmlFor="inputText"
//             >
//                 { label }
//             </label>
//             <input
//                 type ={type}
//                 placeholder={placeholder}
//                 value={value}
//                 onChange={onChange}
//             />
//         </div>
//     );
// };