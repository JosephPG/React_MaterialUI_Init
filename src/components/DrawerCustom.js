import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { mailFolderListItems, otherMailFolderListItems } from './data/DrawerData';
import { stylesDrawer, drawerLogo } from './style/js/DrawerStyle';
import logo from './img/logo.svg';


class DrawerCustom extends React.Component {  
  render() {
    const { classes, theme, state, handleDrawerClose } = this.props;
    return (
      <Drawer 
        variant="permanent"
        classes={{paper: classNames(classes.drawerPaper, !state.open && classes.drawerPaperClose),}}
        open={state.open}
      >
        <div style={drawerLogo}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>{mailFolderListItems}</List>
        <Divider />
        <List>{otherMailFolderListItems}</List>
      </Drawer>
    );
  }
}
  
DrawerCustom.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,    
  state: PropTypes.object.isRequired,
};
  
export default withStyles(stylesDrawer, { withTheme: true })(DrawerCustom);