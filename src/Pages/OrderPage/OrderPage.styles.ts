import {makeStyles} from "@mui/styles";
import {theme} from "src/Utils/theme/theme";

const useOrderPageStyles = makeStyles({
    root: {
        padding: theme.spacing(2),
        textAlign: "center",
    },
    title: {
        marginBottom: theme.spacing(2),
    },
    cardGrid: {
        marginTop: theme.spacing(2),
    },
    card: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: theme.spacing(2),
        height: "100%",
    },
    cardContent: {
        textAlign: "left",
        padding: theme.spacing(2),
    },
    totalPrice: {
        fontWeight: "bold",
        marginTop: theme.spacing(2),
    },
    deleteIcon: {
        width: "40px",
        height: "40px",
    },
});
export { useOrderPageStyles };