import {makeStyles} from "@mui/styles";
import {theme} from "src/Utils/theme/theme";

const useCatalogPageStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "row",
        marginBottom: theme.spacing(2),
    },
    sortMenu: {
        flex: "0 0 200px",
        marginRight: theme.spacing(2),
    },
    productGridContainer: {
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: theme.spacing(0, 2),
        marginTop: theme.spacing(2),
    },
    pagination: {
        display: "flex",
        justifyContent: "center",
        marginTop: theme.spacing(2),
    },
});

export {useCatalogPageStyles};