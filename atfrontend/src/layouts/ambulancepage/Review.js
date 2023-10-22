import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useStateValue } from 'ContextProvider/StateContext';



export default function Review() {
  const [{BookAmbulance},dispatch]=useStateValue();
  return (
    <React.Fragment>
      <Typography className='p-6' variant="h5" gutterBottom>
        Booking summary
      </Typography>
      <List className='p-8' disablePadding>
          <ListItem sx={{ py: 1, px:6 }}>
            <ListItemText primaryTypographyProps={{ style: { fontSize: '1rem' } }} primary="Hospital Name" />
            <Typography  style={{ fontSize: '0.8rem' }} variant="body2">{BookAmbulance.hospital_name}</Typography>
          </ListItem>
          <ListItem sx={{ py: 1, px:6 }}>
            <ListItemText primaryTypographyProps={{ style: { fontSize: '1rem' } }}  primary="Hospital City" />
            <Typography  style={{ fontSize: '0.8rem' }} variant="body2">{BookAmbulance.hospital_city}</Typography>
          </ListItem>
          <ListItem sx={{ py: 1, px:6 }}>
            <ListItemText primaryTypographyProps={{ style: { fontSize: '1rem' } }}  primary="Ambulance Price" />
            <Typography  style={{ fontSize: '0.8rem' }} variant="body2">{BookAmbulance.ambulance_price}</Typography>
          </ListItem>
          <ListItem sx={{ py: 1, px:6 }}>
            <ListItemText primaryTypographyProps={{ style: { fontSize: '1rem' } }}  primary="Ambulance Type" />
            <Typography  style={{ fontSize: '0.8rem' }} variant="body2">{BookAmbulance.ambulance_type}</Typography>
          </ListItem>
      </List>
    </React.Fragment>
  );
}
