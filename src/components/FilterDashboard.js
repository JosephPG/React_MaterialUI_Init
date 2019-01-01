import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Send from '@material-ui/icons/Send';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import * as moment from 'moment';

const styles = theme => ({
    button: {
    },
    extendedIcon: {
    },
});


class FilterDashboard extends React.Component {
    state = {
        startDate: moment(),
        endDate: moment().add(7, 'd'),
    }

    handleChange = (e) => {
        if(e.target.name === 'startDate'){
            let startDate = moment(e.target.value);
            let endDate = moment(e.target.value).add(7, 'd');
            this.setState(state => ({ startDate: startDate }));
            this.setState(state => ({ endDate: endDate }));
        }else{
            let endDate = moment(e.target.value);
            this.setState(state => ({ endDate: endDate }));
        }
    };

    render() {
        const classes = this.props.classes;
  
        return (
            <div>
                <h5>Filter</h5>
                <FormGroup row>
                    <Grid item xs={10} sm={5}>
                        <TextField
                            id="startDate"
                            label="Start"
                            type="date"
                            name="startDate"
                            defaultValue={this.state.startDate.format('YYYY-MM-DD')}
                            onChange={this.handleChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={10} sm={5}>
                        <TextField
                            id="endDate"
                            label="End"
                            type="date"
                            name="endDate"
                            value={this.state.endDate.format('YYYY-MM-DD')}
                            onChange={this.handleChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            InputProps={{ 
                                inputProps: { min: this.state.startDate.format('YYYY-MM-DD') } 
                            }}
                        />
                    </Grid>
                    <Grid item xs={2} sm={2}>
                        <IconButton aria-label="Delete" className={classes.button}>
                            <Send />
                        </IconButton>   
                    </Grid>
                </FormGroup>
            </div>
        );
    }
}

FilterDashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FilterDashboard);