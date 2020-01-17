import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <Grid container spacing={5} className={classes.mainGrid}>
      <img src='/imgs/laptops.png' />
      <Grid item xs={12} sm={6}>
        Hi
      </Grid>
      <Grid item xs={12} sm={6}>
        Bye
      </Grid>
    </Grid>
  )
}
