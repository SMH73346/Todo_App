import * as React from 'react';

import { Button, FormControl, Grid, TextField } from '@mui/material';
import { Add, } from '@mui/icons-material';
import { useState } from 'react';

const Todos = ({addTodo}) => {
    const [text, setText] = useState("");
    const handleSubmit = (e) =>{
        (e).preventDefault();
        addTodo(text);
        setText("");

    }
 
    return (
        <Grid
            container
            marginTop={"20px"}
        >
            <Grid item lg={4}>
            </Grid>
            <Grid item lg={4} >
                <form onSubmit={handleSubmit}>
                    <FormControl sx={{ display: "flex", justifyContent: "center", alignItems: 'center', border: '1px solid grey', borderRadius: 1, padding: '5px', }}>
                        <TextField fullWidth label="Enter Your Text" required={true} sx={{ marginRight: '5px' }}
                            variant="standard" value={text} onChange={(e)=>setText(e.target.value)} />

                        <Button variant="contained" fullWidth sx={{ marginTop: 1, }} type='submit'>
                            <Add />
                        </Button>
                    </FormControl>
                </form>
            </Grid>
            <Grid item lg={4}></Grid>

        </Grid>

    );
}
export default Todos