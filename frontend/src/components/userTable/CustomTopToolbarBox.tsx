import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Tooltip from "@mui/material/Tooltip";
import Box from '@mui/material/Box';

type CustomTopToolbarProps = {
    handleOpenToAdd: () => void;
}

export function CustomTopToolbarBox(props: Readonly<CustomTopToolbarProps>) {
    return (
        <Box sx={{display: "flex", width: "100%", justifyContent: "flex-start"}}>
            <Tooltip title="Add New User">
                <Button
                    startIcon={
                        <AddIcon/>
                    }
                    variant="contained"
                    onClick={() => props.handleOpenToAdd()}
                >
                    Add
                </Button>
            </Tooltip>
        </Box>
    )
}