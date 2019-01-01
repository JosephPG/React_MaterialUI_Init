import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import LocalActivity from '@material-ui/icons/LocalActivity';
import Build from '@material-ui/icons/Build';

const dashboardAvatarStyle = {
    width: '60px',
    height: '60px',
};

export const firstElement = (
    <Grid container wrap="nowrap" spacing={16}>
        <Grid item xs={3}>
            <Avatar style={dashboardAvatarStyle}>
                <LocalActivity />
            </Avatar>
        </Grid>
        <Grid item xs>
            <Typography variant="h4">5</Typography>
            <Typography>Cantidad Grave</Typography>
        </Grid>
    </Grid>    
);

export const secondElement = (
    <Grid container wrap="nowrap" spacing={16}>
        <Grid item xs={3}>
            <Avatar style={dashboardAvatarStyle}>
                <LocalActivity />
            </Avatar>
        </Grid>
        <Grid item xs>
            <Typography variant="h4">10</Typography>
            <Typography>Cantidad Medio</Typography>
        </Grid>
    </Grid>    
);

export const thirdElement = (
    <Grid container wrap="nowrap" spacing={16}>
        <Grid item xs={3}>
            <Avatar style={dashboardAvatarStyle}>
                <LocalActivity />
            </Avatar>
        </Grid>
        <Grid item xs>
            <Typography variant="h4">15</Typography>
            <Typography>Cantidad bajos</Typography>
        </Grid>
    </Grid>    
);

export const fourthElement = (
    <Grid container wrap="nowrap" spacing={16}>
        <Grid item xs={3}>
            <Avatar style={dashboardAvatarStyle}>
                <Build />
            </Avatar>
        </Grid>
        <Grid item xs>
            <Typography variant="h4">5</Typography>
            <Typography>En proceso</Typography>
        </Grid>
    </Grid>    
);