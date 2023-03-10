import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import MissionCard from '../MissionCard';
import { Typography } from '@mui/material';

export default function ListCards({ launches }) {
  return (
    <List
      sx={{             
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        width: '100%',
        maxHeight: '70vh',        
        '& ul': { padding: 0 },        
        alignContent: 'stretch',
      }}
      subheader={<li />}
    >
      <ul>
        <ListSubheader sx={{ backgroundColor: '#4B56D2',}}>
          <Typography variant='h5' sx={{ padding: '12px', color: '#f2f2f2' }}>
            Last Launches
          </Typography>
        </ListSubheader>
        { launches.length > 0 && launches.map(launch =>
          <ListItem key={`item-${launch.flight_number}`}>
            <MissionCard 
              key={launch.flight_number}  
              data={launch}
            />
          </ListItem>
        )} 
      </ul>
    </List>
  );
}