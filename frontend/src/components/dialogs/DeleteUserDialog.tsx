import Dialog from "@mui/material/Dialog";
import {Fragment} from "react";
import {DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import Button from "@mui/material/Button";
import type {UserDto} from "../../client";
import {useMutation} from "@tanstack/react-query";
import {deleteUserMutation} from "../../client/@tanstack/react-query.gen";

export type DeleteUserDialogProps = {
    onClose: (confirmation: boolean) => void;
    open: boolean;
    user: UserDto;
}

export function DeleteUserDialog(props: Readonly<DeleteUserDialogProps>) {

    const mutation = useMutation({
        ...deleteUserMutation(),
        onSuccess: () => {
            console.log('Success: User Deleted');
            props.onClose(true);
        },
        onError: () => {
            console.log('Error: User Not Deleted');
        }
    });

    const deleteUser = (userDto: UserDto) => {
        mutation.mutate({path: {id: userDto.id ?? -1}});
    }

    return (
        <Dialog open={props.open} slots={{transition: Fragment}}>
            <DialogTitle>Delete User</DialogTitle>
            <DialogContent dividers={true}>
                <DialogContentText>
                    Are you sure?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => props.onClose(false)}>Cancel</Button>
                <Button onClick={() => deleteUser(props.user)}>Delete</Button>
            </DialogActions>
        </Dialog>
    )
}