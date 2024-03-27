import {makeStyles} from "@mui/styles";
import {theme} from "src/Utils/theme/theme";

const useCartPageStyles = makeStyles({
    root: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },
    title: {
        marginBottom: theme.spacing(2),
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: theme.spacing(2),
        height: '100%',
        marginBottom: theme.spacing(2),
    },
    cardContent: {
        textAlign: 'left',
        padding: theme.spacing(2),
    },
    totalPrice: {
        fontWeight: 'bold',
        marginTop: theme.spacing(2),
    },
    checkoutButton: {
        marginTop: theme.spacing(2),
    },
});

export {useCartPageStyles};