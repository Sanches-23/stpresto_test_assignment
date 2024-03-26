import {makeStyles} from "@mui/styles";
import {theme} from "src/Utils/theme/theme";

const useProductPageStyles = makeStyles({
    root: {
        padding: theme.spacing(2),
    },
    imageContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
    },
    image: {
        maxWidth: "100%",
        maxHeight: "550px",
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[2],
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
            transform: "scale(1.01)",
        },
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