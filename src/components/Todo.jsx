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
            <Demo>
            <List dense={dense}>
              {generate(
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>,
              )}
            </List>
          </Demo>
            </Grid>
            <Grid item lg={4}></Grid>

        </Grid>

    );
}