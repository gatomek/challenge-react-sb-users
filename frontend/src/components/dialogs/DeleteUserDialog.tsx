import Dialog from "@mui/material/Dialog";
import {Fragment, useState} from "react";
import {DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import Button from "@mui/material/Button";
import type {UserDto} from "../../client";
import {useMutation} from "@tanstack/react-query";
import {deleteUserMutation} from "../../client/@tanstack/react-query.gen";

type DeleteUserDialogProps = {
    onClose: (confirmation: boolean) => void;
    open: boolean;
    user: UserDto;
}

export function DeleteUserDialog(props: Readonly<DeleteUserDialogProps>) {
    const [error, setError] = useState<boolean>(false);
    const deleteMutation = useMutation({
        ...deleteUserMutation(),
        onSuccess: () => {
            props.onClose(true);
        },
        onError: () => {
            setError(true);
        }
    });

    const deleteUser = (userDto: UserDto) => {
        setError(false);
        deleteMutation.mutate({path: {id: userDto.id!}});
    }

    return (
        <Dialog open={props.open} slots={{transition: Fragment}}>
            <DialogTitle>Confirmation</DialogTitle>
            <DialogContent dividers={true}>
                {error && <DialogContentText>Server Error</DialogContentText>}
                <DialogContentText>
                    Delete user {props.user.name} {props.user.lastName}?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => props.onClose(false)}>Cancel</Button>
                <Button onClick={() => deleteUser(props.user)} type="submit">Delete</Button>
            </DialogActions>
        </Dialog>
    )
}