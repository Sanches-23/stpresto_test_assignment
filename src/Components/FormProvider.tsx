import React from "react";
import {useForm} from "react-hook-form";
import {Button, Grid, TextField} from "@mui/material";
import {FormData} from "src/API/types/FormData";
import {makeStyles} from "@mui/styles";
import {theme} from "src/Utils/theme/theme";

const useFormProviderStyles = makeStyles({
    form: {
        marginTop: theme.spacing(0),
        marginBottom: theme.spacing(2),
    },
    buttonContainer: {
        marginTop: theme.spacing(-1) + "!important",
    },
});

type FormComponentProps = {
    onSubmit: (data: FormData) => void;
    cartItemsCount: number;
}

const FormProvider: React.FC<FormComponentProps> = ({onSubmit, cartItemsCount}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, trigger} = useForm<FormData>();
    const classes = useFormProviderStyles();

    const onFormSubmit = (data: FormData) => {
        onSubmit(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onFormSubmit)} className={classes.form}>
            <TextField
                placeholder="Name"
                {...register("name", {
                    required: "Name is required*",
                    minLength: {
                        value: 3,
                        message: "Name must be at least 3 characters long*",
                    },
                    maxLength: {
                        value: 23,
                        message: "Name must not exceed 23 characters*",
                    },
                    onChange: () => trigger("name"),
                })}
                error={!!errors.name}
                helperText={errors.name?.message}
                fullWidth
                margin="dense"
            />
            <TextField
                placeholder="Email"
                {...register("email", {
                    required: "Email Address is required*",
                    minLength: {
                        value: 8,
                        message: "Email Address must be at least 8 characters long*",
                    },
                    maxLength: {
                        value: 35,
                        message: "Email Address must not exceed 35 characters*",
                    },
                    pattern: {
                        value: /^[a-zA-Z0-9._]{3,}@[a-zA-Z0-9-.]+\.[a-zA-Z]{2,}$/,
                        message: "Email Address must look like this: ааа@аа.аа *",
                    },
                    onChange: () => trigger("email"),
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
                fullWidth
                // margin="normal"
                margin="dense"
            />
            <TextField
                placeholder="Phone"
                {...register("phone", {
                    required: "Phone number is required*",
                    pattern: {
                        value: /^\+380\d{9}$/,
                        message: "Please ensure the phone number is in Ukrainian format  *",
                    },
                    onChange: () => trigger("phone"),
                })}
                error={!!errors.phone}
                helperText={errors.phone?.message}
                fullWidth
                // margin="normal"
                margin="dense"
            />

            <Grid container spacing={2} className={classes.buttonContainer}>
                <Grid item>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={!isValid || cartItemsCount === 0}
                    >
                        Place Order
                    </Button>
                </Grid>
                <Grid item>
                    <Button type="button" onClick={() => reset()}>
                        Clear
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default FormProvider;