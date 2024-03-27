import {makeStyles} from "@mui/styles";
import {theme} from "src/Utils/theme/theme";

const useCartPageStyles = makeStyles({
    root: {
        padding: theme.spacing(2),
        textAlign: "center",
    },
    title: {
        marginBottom: theme.spacing(0) + "!important",
    },
    cartGridContainer: {
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: theme.spacing(0, 2),
        marginTop: theme.spacing(2),
    },
    totalPrice: {
        fontWeight: "bold" + "!important",
        marginTop: theme.spacing(2) + "!important",
    },
});

export {useCartPageStyles};