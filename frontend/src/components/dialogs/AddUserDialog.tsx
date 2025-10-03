import Dialog from '@mui/material/Dialog';
import {DialogContent, DialogTitle} from "@mui/material";
import type {UserDto} from "../../client";
import {FormProvider, useForm} from "react-hook-form";
import {Fragment} from "react";
import {UserForm} from "../forms/UserForm";
import {useMutation} from "@tanstack/react-query";
import {addUserMutation} from "../../client/@tanstack/react-query.gen";

export type AddUserDialogProps = {
    onClose: (success: boolean) => void;
    open: boolean;
}

export function AddUserDialog(props: Readonly<AddUserDialogProps>) {
    const methods = useForm<UserDto>({
        defaultValues: {
            name: '',
            lastName: '',
            cardId: ''
        }
    });

    const mutation = useMutation({
        ...addUserMutation(),
        onSuccess: () => {
            console.log('Success: User Added');
            props.onClose(true);
        },
        onError: () => {
            console.log('Error: User Not Added');
        }
    });

    const onSubmit = (userDto: UserDto) => {
        const {name, lastName, cardId} = userDto;
        mutation.mutate({body: {name, lastName, cardId}})
    };

    return (
        <Dialog open={props.open} slots={{transition: Fragment}}>
            <DialogTitle>Add New User</DialogTitle>
            <DialogContent dividers={true}>
                <FormProvider {...methods}>
                    <UserForm onClose={props.onClose} onSubmit={onSubmit} mode="add"/>
                </FormProvider>
            </DialogContent>
        </Dialog>
    )
}
