import {makeStyles} from "@mui/styles";
import {theme} from "src/Utils/theme/theme";

const useProductPageStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: theme.spacing(2),
    },
    image: {
        width: "30px",
        height: "30px",
    },
    title: {
        marginTop: theme.spacing(2),
    },
    category: {
        marginTop: theme.spacing(1),
    },
    description: {
        marginTop: theme.spacing(1),
    },
    price: {
        marginTop: theme.spacing(1),
    },
    addToCartButton: {
        marginTop: theme.spacing(2),
    },
});

export { useProductPageStyles };