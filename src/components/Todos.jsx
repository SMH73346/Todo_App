import * as React from 'react';

import { Box, Button, Divider, Grid, TextField } from '@mui/material';
import { Add, } from '@mui/icons-material';

export default function CustomizedInputBase() {
    return (
        <Grid
            container
            marginTop={"20px"}
        >
            <Grid item lg={4}>
            </Grid>
            <Grid item lg={4} >
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: 'center', border: '1px solid grey', borderRadius:1,padding: '5px', }}>
                    <TextField fullWidth label="Enter Your Text" sx={{ marginRight: '5px' }}
                        variant="standard" />

                    <Divider sx={{ height: 50, m: 0.5 }} orientation="vertical" />

                    <Button variant="contained" sx={{ height: 57,}}>
                        <Add />
                    </Button>
                </Box>
            </Grid>
            <Grid item lg={4}></Grid>

        </Grid>

    );
}