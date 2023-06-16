import * as React from 'react';

import { Card, CardContent, Container,IconButton, Typography, } from '@mui/material';
import { Check, Delete, Edit, } from '@mui/icons-material';

const Todo = ({ title, checkTodo, id, editTodo, deleteTodo, completed}) => {
    const markComplete =() => checkTodo(id);
    const delTodo = () => deleteTodo(id);

    //Todostyle having text decoration of  line through
    const todoStyle = completed ? { textDecoration : "line-through"}: {textDecoration: 'none'}

    return (
        <>
            <Container>
                <Card 
                variant='outlined'
                sx={{marginTop:'15px', background:"Lightgray"}}
                >
                    <CardContent>
                        <Typography variant='h5' component={"h2"} sx={todoStyle}>
                            <IconButton onClick={markComplete} >
                                <Check sx={{color:'green'}} />
                            </IconButton>
                            {title}
                            <IconButton sx={{float:'right'}}>
                                <Edit />
                            </IconButton>
                            <IconButton sx={{float:'right'}} onClick={delTodo}>
                                <Delete sx={{color:'red'}} />
                            </IconButton>
                        </Typography> 
                    </CardContent>
                </Card> 
            </Container>

        </>
    )
}

export default Todo