import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Navigation from './components/Navigation';
import './components/style/css/App.css';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    backgroundColor: '#eeeeee',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
});

const handleTitleAppbar = (namePath) => {
  if(namePath === '/'){
    return 'Dashboard';
  } else if (namePath === '/Registrar'){
    return 'Registrar';
  } else {
    return 'Not Found';
  }
};

class App extends Component {
  render() {
    const { classes, children, location } = this.props;
    const childName = handleTitleAppbar(location.pathname) ;
    return (
      <div className={classes.root}>
        <Navigation nameTitle={childName}/>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles, { withTheme: true })(App));
