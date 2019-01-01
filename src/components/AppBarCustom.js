import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Badge from '@material-ui/core/Badge';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { stylesAppBar } from './style/js/AppBarStyle';

class AppBarCustom extends React.Component {   
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };
  
  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  
  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };
  
  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };
  
  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };
  
  render() {
    const { classes, state, handleDrawerOpen, nameTitle } = this.props;
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleClose}>My account</MenuItem>
      </Menu>
    );
    
    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton color="inherit">
            <Badge className={classes.margin} badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <IconButton color="inherit">
            <Badge className={classes.margin} badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );

    return (
      <div>
        <AppBar
          position="absolute"
          className={classNames(classes.appBar, state.open && classes.appBarShift)}
        >
          <Toolbar disableGutters={!state.open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
              className={classNames(classes.menuButton, state.open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              {nameTitle}
            </Typography>
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            <div className={classes.sectionDesktop}>
              <IconButton color="inherit">
                <Badge className={classes.margin} badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <Badge className={classes.margin} badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-owns={isMenuOpen ? 'material-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
      </div>
    );
  }
}
  
AppBarCustom.propTypes = {
  classes: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired,
  nameTitle: PropTypes.string.isRequired,
};
  
  export default withStyles(stylesAppBar, { withTheme: true })(AppBarCustom);