import React from "react";


interface Props {
    onClick?: () => void
    disabled?: boolean;
    className?: string
    children: React.ReactNode;
}

export const Button: React.FC<Props> = ({
                                            onClick = () => {},
                                            disabled = false,
                                            className = "",
                                            children,
                                        }) => {
    return (
        <button
            className={`${className}`}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
};