import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';

// local imports

const useStyles = makeStyles((theme) => 
({
    root: 
    {
      // flexGrow: 1,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'auto',
    },
    paper: 
    {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));

const Home = () =>
{
    const classes = useStyles();

    return(
        <>
        <div classes={classes.root}>
            
        </div>
        </>
    );
}

export { Home };