import Dialog from '@mui/material/Dialog';
import {DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import {FormProvider, useForm} from "react-hook-form";
import {Fragment, useState} from "react";
import {UserForm} from "../forms/UserForm";
import {useMutation} from "@tanstack/react-query";
import {addUserMutation} from "../../client/@tanstack/react-query.gen";
import {zodResolver} from '@hookform/resolvers/zod';
import {UserSchema, type UserFormData, getDefaultUser} from "../forms/model/UserSchema.ts";

type AddUserDialogProps = {
    onClose: (success: boolean) => void;
    open: boolean;
}

export function AddUserDialog(props: Readonly<AddUserDialogProps>) {
    const [error, setError] = useState<boolean>(false);
    const methods = useForm<UserFormData>({
        defaultValues: getDefaultUser(),
        resolver: zodResolver(UserSchema)
    });

    const addMutation = useMutation({
        ...addUserMutation(),
        onSuccess: (): void => {
            props.onClose(true);
        },
        onError: (): void => {
            setError(true);
        }
    });

    const onSubmit = (userFormData: UserFormData) => {
        setError(false);
        const {name, lastName, cardId} = userFormData;
        addMutation.mutate({body: {name, lastName, cardId}})
    };

    return (
        <Dialog open={props.open} slots={{transition: Fragment}}>
            <DialogTitle>Add New User</DialogTitle>
            <DialogContent dividers={true}>
                {error && <DialogContentText>Server Error</DialogContentText>}
                <FormProvider {...methods}>
                    <UserForm onClose={props.onClose} onSubmit={onSubmit} mode="add"/>
                </FormProvider>
            </DialogContent>
        </Dialog>
    )
}
