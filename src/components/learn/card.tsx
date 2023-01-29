import {  Paper } from "@mui/material"

const Card = ({ index }: { index: any }) => {
    return (
            <Paper style={{ width: '100%' }} elevation={2}>
                {index}
            </Paper>
    )
};

export default Card;