import {
    MaterialReactTable, MRT_ActionMenuItem,
    type MRT_ColumnDef,
    type MRT_TableState,
    useMaterialReactTable
} from "material-react-table";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Tooltip from "@mui/material/Tooltip";
import Box from '@mui/material/Box';
import {useMemo, useState} from "react";
import {type UserDto} from "../../client";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {getUsersOptions, getUsersQueryKey} from "../../client/@tanstack/react-query.gen";
import {AddUserDialog} from "../dialogs/AddUserDialog";
import {EditUserDialog} from "../dialogs/EditUserDialog";
import {DeleteUserDialog} from "../dialogs/DeleteUserDialog";

export function MRUserTable() {
    const [formOpen, setFormOpen] = useState<boolean>(false);
    const [formType, setFormType] = useState<'add' | 'edit' | 'delete' | null>(null);
    const [editedUser, setEditedUser] = useState<UserDto | null>(null);

    const queryClient = useQueryClient();
    const {data = []} = useQuery(getUsersOptions());
    const columns = useMemo<MRT_ColumnDef<UserDto>[]>(
        () => [

            {
                accessorKey: 'id',
                header: 'Id',
                size: 80
            },
            {
                accessorKey: 'name',
                header: 'Name',
            },
            {
                accessorKey: 'lastName',
                header: 'Last Name',
            },
            {
                accessorKey: 'cardId',
                header: 'CardID',
            },
            {
                accessorKey: 'readDateTime',
                header: 'Read Date Time',
            },
        ],
        [],
    );

    const state: Partial<MRT_TableState<UserDto>> = {
        density: "compact"
    }

    const handleOpenToAdd = () => {
        setFormType('add');
        setEditedUser(null);
        setFormOpen(true);
    }

    const handleOpenToEdit = (user: UserDto): void => {
        setFormType('edit');
        setEditedUser(user);
        setFormOpen(true);
    }

    const handleOpenToDelete = (user: UserDto): void => {
        setFormType('delete');
        setEditedUser(user);
        setFormOpen(true);
    }

    const handleClose = (success: boolean): void => {
        setFormType(null);
        setFormOpen(false);
        setEditedUser(null);
        if (success) {
            queryClient.invalidateQueries({queryKey: getUsersQueryKey()})
        }
    }

    const table = useMaterialReactTable({
        columns,
        data,
        state,
        defaultColumn: {minSize: 50, maxSize: 1000, size: 130},
        enableDensityToggle: false,
        layoutMode: 'semantic',
        enableTopToolbar: true,
        enableBottomToolbar: true,
        enableRowSelection: true,
        enableCellActions: true,
        renderTopToolbarCustomActions: () => (
            <Box sx={{display: "flex", width: "100%", justifyContent: "flex-end"}}>
                <Tooltip title="Add New User">
                    <Button
                        startIcon={
                            <AddIcon/>
                        }
                        variant="contained"
                        onClick={() => handleOpenToAdd()}
                    >
                        Add
                    </Button>
                </Tooltip>
            </Box>
        ),
        renderCellActionMenuItems: ({closeMenu, row, table}) => [
            <MRT_ActionMenuItem
                icon={<EditIcon/>}
                key="edit"
                label="Edit"
                onClick={() => {
                    handleOpenToEdit(row.original);
                    closeMenu();
                }}
                table={table}
            />
            ,
            <MRT_ActionMenuItem
                icon={<DeleteIcon/>}
                key="delete"
                label="Delete"
                onClick={() => {
                    handleOpenToDelete(row.original);
                    closeMenu();
                }}
                table={table}
            />
        ]
    });

    const mrt = <MaterialReactTable table={table}/>
    const addUserDialog = formType === 'add' && <AddUserDialog onClose={handleClose} open={formOpen}/>
    const editUserDialog = formType === 'edit' && editedUser != null && <EditUserDialog onClose={handleClose} open={formOpen} user={editedUser}/>
    const deleteUserDialog = formType === 'delete' && editedUser != null && <DeleteUserDialog onClose={handleClose} open={formOpen} user={editedUser}/>

    return (
        <>
            <h2>OpenApi + ReactQuery + MaterialReactTable - Users</h2>
            {mrt}
            {addUserDialog}
            {editUserDialog}
            {deleteUserDialog}
        </>
    );
}


