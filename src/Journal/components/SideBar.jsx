import { TurnedInNot } from '@mui/icons-material';
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, Toolbar, Typography, Grid, ListItemText } from '@mui/material';
import { Box } from '@mui/system'

export const SideBar = ({ drawerWidth = 240}) => {
  return (
    <Box component='nav' sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
      <Drawer
        variant='permanent'
        open
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant='h6' noWrap component='div'>
            Alex Colombo
          </Typography>
        </Toolbar>
        <Divider />

        <List>
          {['enero', 'febrero', 'marzo', 'abril'].map((month) => (
            <ListItem key={month} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                <ListItemText primary={month} />
                <ListItemText secondary={'lorem ipsum lambda'} />
                </Grid>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
