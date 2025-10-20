import {Container, FormControl} from "@mui/material";
import {type UserDto} from "../../client";
import {useFormContext, Controller} from "react-hook-form";
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

type AddUserFormProps = {
    onClose: (success: boolean) => void;
    onSubmit: (data: UserDto) => void;
    mode: 'add' | 'edit';
}

export function UserForm(props: Readonly<AddUserFormProps>) {
    const methods = useFormContext<UserDto>();

    return (
        <Container component="form" onSubmit={methods.handleSubmit(props.onSubmit)} maxWidth="xs">
            {props.mode === "edit" &&
                <FormControl fullWidth variant="outlined">
                    <Controller name="id"
                                control={methods.control}
                                render={({field}) =>
                                    <TextField {...field} margin="dense" label="Id" helperText="DB Id" disabled/>
                                }
                    />
                </FormControl>
            }
            <FormControl fullWidth variant="outlined">
                <Controller name="name"
                            control={methods.control}
                            render={({field}) =>
                                <TextField {...field} margin="dense" label="Name" helperText="Your name"/>
                            }
                />
            </FormControl>
            <FormControl fullWidth variant="outlined">
                <Controller name="lastName"
                            control={methods.control}
                            render={({field}) =>
                                <TextField {...field} margin="dense" label="Last Name" helperText="Your last name"/>
                            }
                />
            </FormControl>
            <FormControl fullWidth variant="outlined">
                <Controller name="cardId"
                            control={methods.control}
                            render={({field}) =>
                                <TextField {...field} margin="dense" label="Card Id" helperText="Your Card Id"/>
                            }
                />
            </FormControl>

            <Box sx={{display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 2}}>
                <Button type="button" onClick={() => props.onClose( false)}>Cancel</Button>
                <Button type="reset" onClick={() => methods.reset()}>Reset</Button>
                <Button type="submit">{props.mode === 'add' ? 'Add' : 'Update'}</Button>
            </Box>
        </Container>
    )
}
