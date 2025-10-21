import Dialog from '@mui/material/Dialog';
import {DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import type {UserDto} from "../../client";
import {FormProvider, useForm} from "react-hook-form";
import {Fragment, useState} from "react";
import {UserForm} from "../forms/UserForm";
import {useMutation} from "@tanstack/react-query";
import {updateUserMutation} from "../../client/@tanstack/react-query.gen";
import {zodResolver} from '@hookform/resolvers/zod';
import {type EditedUserFormData, EditedUserSchema, getEditedUserFromUserDto} from "../forms/model/EditedUserSchema.ts";

type EditUserDialogProps = {
    onClose: (success: boolean) => void;
    open: boolean;
    user: UserDto;
}

export function EditUserDialog(props: Readonly<EditUserDialogProps>) {
    const [error, setError] = useState<boolean>(false);
    const methods = useForm<EditedUserFormData>({
        defaultValues: getEditedUserFromUserDto(props.user),
        resolver: zodResolver(EditedUserSchema)
    });

    const updateMutation = useMutation({
        ...updateUserMutation(),
        onSuccess: (): void => {
            props.onClose(true);
        },
        onError: (): void => {
            setError(true);
        }
    });

    const onSubmit = (userDto: UserDto) => {
        const {name, lastName, cardId} = userDto;
        updateMutation.mutate({path: {id: props.user.id!}, body: {name, lastName, cardId}})
    };

    return (
        <Dialog open={props.open} slots={{transition: Fragment}}>
            <DialogTitle>Edit User</DialogTitle>
            <DialogContent dividers={true}>
                {error && <DialogContentText>Server Error</DialogContentText>}
                <FormProvider {...methods}>
                    <UserForm onClose={props.onClose} onSubmit={onSubmit} mode="edit"/>
                </FormProvider>
            </DialogContent>
        </Dialog>
    )
}
