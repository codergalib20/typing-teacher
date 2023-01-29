import { Grid, Paper, Typography } from "@mui/material";

const ProgressHeader = () => {
    return (
        <Paper style={{ padding: '4px 10px' }} elevation={2} >
            <Grid style={{ maxWidth: '300px' }} container spacing={3} >
                <Grid item xs={4}>
                    <Typography variant="body1">Hello</Typography> 
                </Grid>
                <Grid item xs={4}>2</Grid>
                <Grid item xs={4}>3</Grid>
            </Grid>
        </Paper>
    )
}

export default ProgressHeader;