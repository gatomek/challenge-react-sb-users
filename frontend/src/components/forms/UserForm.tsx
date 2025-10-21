import {Container, FormControl, InputAdornment, Tooltip} from "@mui/material";
import {type UserDto} from "../../client";
import {Controller, useFormContext} from "react-hook-form";
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import KeyIcon from '@mui/icons-material/PriorityHighOutlined';

type AddUserFormProps = {
    onClose: (success: boolean) => void;
    onSubmit: (data: UserDto) => void;
    mode: 'add' | 'edit';
}

export function UserForm(props: Readonly<AddUserFormProps>) {
    const methods = useFormContext<UserDto>();
    const {errors} = methods.formState;

    return (
        <Container component="form" onSubmit={methods.handleSubmit(props.onSubmit)} maxWidth="xs">
            {props.mode === "edit" &&
                <FormControl fullWidth variant="outlined">
                    <Controller name="id"
                                control={methods.control}
                                render={({field}) =>
                                    <TextField {...field} margin="dense" label="Id" disabled/>
                                }
                    />
                </FormControl>
            }
            <FormControl fullWidth variant="outlined">
                <Controller name="name"
                            control={methods.control}
                            render={({field}) =>
                                <TextField {...field} margin="dense" label="Name *"
                                           error={!!errors.name}
                                           slotProps={errors.name && {
                                               input: {
                                                   endAdornment: (
                                                       <InputAdornment position="end">
                                                           <Tooltip title={errors.name?.message}>
                                                               <KeyIcon color="error"/>
                                                           </Tooltip>
                                                       </InputAdornment>
                                                   ),
                                               },
                                           }}
                                />
                            }
                />
            </FormControl>
            <FormControl fullWidth variant="outlined">
                <Controller name="lastName"
                            control={methods.control}
                            render={({field}) =>
                                <TextField {...field} margin="dense" label="Last Name *"
                                           error={!!errors.lastName}
                                           slotProps={errors.lastName && {
                                               input: {
                                                   endAdornment: (
                                                       <InputAdornment position="end">
                                                           <Tooltip title={errors.lastName?.message}>
                                                               <KeyIcon color="error"/>
                                                           </Tooltip>
                                                       </InputAdornment>
                                                   ),
                                               },
                                           }}
                                />
                            }
                />
            </FormControl>
            <FormControl fullWidth variant="outlined">
                <Controller name="cardId"
                            control={methods.control}
                            render={({field}) =>
                                <TextField {...field} margin="dense" label="Card Id *"
                                           error={!!errors.cardId}
                                           slotProps={errors.cardId && {
                                               input: {
                                                   endAdornment: (
                                                       <InputAdornment position="end">
                                                           <Tooltip title={errors.cardId?.message}>
                                                               <KeyIcon color="error"/>
                                                           </Tooltip>
                                                       </InputAdornment>
                                                   ),
                                               },
                                           }}
                                />
                            }
                />
            </FormControl>

            <Box sx={{display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 2}}>
                <Button type="button" onClick={() => props.onClose(false)}>Cancel</Button>
                <Button type="reset" onClick={() => methods.reset()}>Reset</Button>
                <Button type="submit">{props.mode === 'add' ? 'Add' : 'Update'}</Button>
            </Box>
        </Container>
    )
}
