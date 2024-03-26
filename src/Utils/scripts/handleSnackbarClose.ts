import React from "react";

type HandleSnackbarClose = {
    (setIsSnackbarOpen: React.Dispatch<React.SetStateAction<boolean>>, setClickCount?: React.Dispatch<React.SetStateAction<number>>): (event?: React.SyntheticEvent | Event, reason?: string) => void;
};

export const handleSnackbarClose: HandleSnackbarClose = (setIsSnackbarOpen, setClickCount?) => (event, reason) => {
    if (reason === "clickaway") {
        return;
    }
    setIsSnackbarOpen(false);
    if (setClickCount && reason === "timeout") {
        setClickCount(0);
    }
};