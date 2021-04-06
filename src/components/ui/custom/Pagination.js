import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles(() => ({
  root: {
    '& > *': {
        margin: "auto",
        width: "fit-content",
    },
  },
}));

export default function Pager({count, onClick}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Pagination count={count} size="large" count={count} onChange={onClick} variant="outlined" color="primary" />
    </div>
  );
}
