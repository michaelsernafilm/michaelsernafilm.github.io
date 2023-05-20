import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { alpha, makeStyles } from '@material-ui/core/styles';
import { Grid, Tooltip, Paper } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YoutubeIcon from '@material-ui/icons/YouTube';
import EmailIcon from '@material-ui/icons/Email';
import DescriptionIcon from '@material-ui/icons/Description';

const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    linksSection: {
      marginLeft: 'auto',
    }
  }));

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const NavBar = (props) => {
    const classes = useStyles();

    const onResumeClick = () => {
      window.open();
    };

    var sectionStyle = {
      backgroundRepeat: 'no-repeat',
      backgroundColor: '#000000',
      backgroundSize: 'contain',
      minHeight: 50
    }

    return (
        <div className={classes.root}>
            <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar style={sectionStyle}>
                <Toolbar className={classes.customizeToolbar}>
                    <div>
                      <Grid>
                          <p>Mike Serna</p>
                      </Grid>
                    </div>
                    <div className={classes.linksSection}>
                      <Tooltip title="Youtube Channel - @MikeSerna7" arrow>
                        <IconButton color="inherit" onClick={() => window.open("https://www.youtube.com/@MikeSerna7")}>
                          <YoutubeIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Instagram - @mike_serna_film" arrow>
                        <IconButton color="inherit" onClick={() => window.open('https://www.instagram.com/mike_serna_film')}>
                          <InstagramIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Twitter - @themikeyserna" arrow>
                        <IconButton  color="inherit" onClick={() => window.open('https://twitter.com/themikeyserna')}>
                          <TwitterIcon />
                        </IconButton>
                      </Tooltip>
                    </div>
                </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
            </React.Fragment>
        </div>
    );
}

export { NavBar };