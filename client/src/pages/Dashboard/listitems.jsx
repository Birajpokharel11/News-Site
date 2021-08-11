import React, { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Box } from '@material-ui/core';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Avatar, Divider, Typography, makeStyles } from '@material-ui/core';
import test from './Account/test.jpg';
import { connect } from 'react-redux';

const MainListItems = ({ open, auth: { success, data } }) => {
  return (
    <div>
      {console.log(data)}
      <Box alignItems="center" display="flex" flexDirection="column" p={2}>
        <Avatar
          style={{ cursor: 'pointer', width: '64', height: '64' }}
          component={RouterLink}
          src={test}
          to="/app/account"
        />
        {open && (
          <>
            <Typography cx color="textPrimary" variant="h5">
              {data.name}
            </Typography>
            <Typography color="textSecondary" variant="body2">
              {data.email}
            </Typography>
          </>
        )}
      </Box>
      <Divider />
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Orders" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Customers" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Integrations" />
      </ListItem>
      <ListSubheader inset>Saved reports</ListSubheader>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Current month" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Last quarter" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Year-end sale" />
      </ListItem>
    </div>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth.user
});
export default connect(mapStateToProps, null)(MainListItems);
