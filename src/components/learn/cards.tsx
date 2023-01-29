import { Box, Grid, Typography } from "@mui/material";
import Card from "./card";

const Cards = () => {
    const isSuccess = true;
    const isError = false;
    const isLoading = false;
    let content;
    if (isLoading) {
        content = <Box></Box>
    }
    if (isError) content = <Box></Box>
    if (isSuccess) {
        content = (
            <Grid container gap={2}  style={{ maxWidth: '900px' }}>
                {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
                    <Grid key={index} xs={2}>
                        <Card index={index} />
                    </Grid>
                ))}
            </Grid>
        )
    }

    return (
        <Box style={{ padding: '15px 0' }}>
            <Typography variant="h4">Home Row</Typography>
            <>
                {content}
            </>
        </Box>
    )
};

export default Cards;