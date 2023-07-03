import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MDTypography from "components/MDTypography";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  mbottom: {
    marginTop: '10px',
    marginBottom: '12px',
  },
  fweight:{
    fontWeight: 200,
    fontSize:"0.69rem",
  }
})

export default function Error({res}) {
  const classes = useStyles();
  return (
    <List className={classes.mbottom}>
        {res?.map((e,id)=>(
        <ListItem key={id}>
            <MDTypography className={classes.fweight}  variant="button" color="error">
            {e}
            </MDTypography>
        </ListItem>
        ))}
    </List>
  )
}
