import {
    MaterialReactTable, MRT_ActionMenuItem,
    type MRT_ColumnDef,
    type MRT_TableState,
    useMaterialReactTable
} from "material-react-table";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {useMemo, useState} from "react";
import {type UserDto} from "../../client";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {getUsersOptions, getUsersQueryKey} from "../../client/@tanstack/react-query.gen";
import {AddUserDialog} from "../dialogs/AddUserDialog";
import {EditUserDialog} from "../dialogs/EditUserDialog";
import {DeleteUserDialog} from "../dialogs/DeleteUserDialog";
import {CustomTopToolbarBox} from "./CustomTopToolbarBox";
import {getTableColumns} from "./tableColumns";

export function UserTable() {
    const [formOpen, setFormOpen] = useState<boolean>(false);
    const [formType, setFormType] = useState<'add' | 'edit' | 'delete' | null>(null);
    const [editedUser, setEditedUser] = useState<UserDto | null>(null);

    const queryClient = useQueryClient();
    const {data : users = []} = useQuery(getUsersOptions());
    const columns = useMemo<MRT_ColumnDef<UserDto>[]>(
        () => getTableColumns(), []
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
        data: users,
        state,
        defaultColumn: {minSize: 50, maxSize: 1000, size: 130},
        enableDensityToggle: false,
        layoutMode: 'semantic',
        enableTopToolbar: true,
        enableBottomToolbar: true,
        enableRowSelection: true,
        enableCellActions: true,
        renderTopToolbarCustomActions: () => <CustomTopToolbarBox handleOpenToAdd={handleOpenToAdd} />,
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


