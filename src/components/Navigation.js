import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DrawerCustom from './DrawerCustom';
import AppBarCustom from './AppBarCustom';

class Navigation extends Component {
    state = {
        open: false,
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() {
      const { nameTitle } = this.props;
      return (
        <div className="Navigation">
          <AppBarCustom state={this.state} handleDrawerOpen={this.handleDrawerOpen} nameTitle={nameTitle}/>
          <DrawerCustom state={this.state} handleDrawerClose={this.handleDrawerClose} />
        </div>
      );
    }
  }

  Navigation.propTypes = {
    nameTitle: PropTypes.string.isRequired,
  };
  
  export default Navigation;