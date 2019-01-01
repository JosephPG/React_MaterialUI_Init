import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { stylesDashBoard } from './style/js/DashBoardStyle';
import FirstChart from './FirstChart';
import SecondChart from './SecondChart'
import { firstElement, secondElement, thirdElement, fourthElement } from './AccesoriesDashboard';
import PanelDashboard from './PanelDashboard';
import FilterDashboard from './FilterDashboard';


class Dashboard extends Component {
    render() {
        const classes = this.props.classes;
        const spacingData = 24;
        return (
            <div>
                <Grid container spacing={spacingData}>
                    <Grid item xs={12} md={12}>
                        <Grid container spacing={spacingData}>
                            <Grid item xs={12} md={3}>
                                <Paper className={classes.paper}>
                                    {firstElement}
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Paper className={classes.paper}>
                                    {secondElement}
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Paper className={classes.paper}>
                                    {thirdElement}
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Paper className={classes.paper}>
                                    {fourthElement}
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Grid container spacing={spacingData}>
                            <Grid item xs={12}>
                                <Paper className={classes.paper}>
                                    <FilterDashboard />
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                                                   
                                    <PanelDashboard />
                                
                            </Grid>
                        </Grid>    
                    </Grid>    
                    <Grid item xs={12} md={8}>
                        <Grid container spacing={spacingData}>
                            <Grid item xs={12}>
                                <Paper className={classes.paper}>
                                    <FirstChart />
                                </Paper>
                            </Grid> 
                            <Grid item xs={12}>
                                <Paper className={classes.paper}>
                                    <SecondChart />
                                </Paper>
                            </Grid> 
                        </Grid> 
                    </Grid>                    
                </Grid>
            </div>
        );
    }
}
  
Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(stylesDashBoard, { withTheme: true })(Dashboard);