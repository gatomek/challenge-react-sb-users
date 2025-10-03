import Dialog from '@mui/material/Dialog';
import {DialogContent, DialogTitle} from "@mui/material";
import type {UserDto} from "../../client";
import {FormProvider, useForm} from "react-hook-form";
import {Fragment} from "react";
import {UserForm} from "../forms/UserForm";
import {useMutation} from "@tanstack/react-query";
import {updateUserMutation} from "../../client/@tanstack/react-query.gen";

export type EditUserDialogProps = {
    onClose: (success: boolean) => void;
    open: boolean;
    user: UserDto;
}

export function EditUserDialog(props: Readonly<EditUserDialogProps>) {

    const methods = useForm<UserDto>({
        defaultValues: {
            id: props.user.id,
            name: props.user.name,
            lastName: props.user.lastName,
            cardId: props.user.cardId,
        }
    });

    const mutation = useMutation({
        ...updateUserMutation(),
        onSuccess: () => {
            console.log('Success: User Updated');
            props.onClose(true);
        },
        onError: () => {
            console.log('Error: User Not Updated');
        }
    });

    const onSubmit = (userDto: UserDto) => {
        const {name, lastName, cardId} = userDto;
        mutation.mutate({path: {id: props.user.id ?? -1}, body: {name, lastName, cardId}})
    };

    return (
        <Dialog open={props.open} slots={{transition: Fragment}}>
            <DialogTitle>Edit User</DialogTitle>
            <DialogContent dividers={true}>
                <FormProvider {...methods}>
                    <UserForm onClose={props.onClose} onSubmit={onSubmit} mode="edit"/>
                </FormProvider>
            </DialogContent>
        </Dialog>
    )
}
