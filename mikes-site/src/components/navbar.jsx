import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { alpha, makeStyles } from '@material-ui/core/styles';
import { Tooltip } from '@material-ui/core';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YoutubeIcon from '@material-ui/icons/YouTube';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import TheatersIcon from '@mui/icons-material/Theaters';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CameraIcon from '@mui/icons-material/Camera';
import DirectorIcon from '@mui/icons-material/Campaign';
import EditorIcon from '@mui/icons-material/CameraRoll';
import AboutMeIcon from '@mui/icons-material/Person';

const pages = ['Director', 'Cinematography', 'Editor', 'About'];
const socials = ['Youtube', 'Instagram', 'Twitter'];

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
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const renderSocialIcons = (social) => {
    switch (social) {
      case 'Youtube':
        return <YoutubeIcon />
      case 'Instagram':
        return <InstagramIcon />
      case 'Twitter':
        return <TwitterIcon />
      default:
      break;
    }
  };

  const renderPageIcons = (page) => {
    switch (page) {
      case 'Director':
        return <DirectorIcon />
      case 'Cinematography':
        return <CameraIcon />
      case 'Editor':
        return <EditorIcon />
      case 'About':
        return <AboutMeIcon />
      default:
      break;
    }
  };

  const redirectToPage = (page) => {
    switch (page) {
      case 'Director':
        return () => navigate('director');
      case 'Cinematography':
        return () => navigate('cinematography');
      case 'Editor':
        return () => navigate('editor');
      case 'About':
        return () => navigate('about');
      default:
      break;
    }
  }

  const redirectToSocial = (social) => {
    switch (social) {
      case "Youtube":
        return () => window.open("https://www.youtube.com/@MikeSerna7");
      case "Instagram":
        return () => window.open('https://www.instagram.com/mike_serna_film');
      case "Twitter":
        return () => window.open('https://twitter.com/themikeyserna');
    }
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {pages.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={redirectToPage(text)}>
              <ListItemIcon>
                {renderPageIcons(text)}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {socials.map((social, index) => (
          <ListItem key={social} disablePadding>
            <ListItemButton onClick={redirectToSocial(social)}>
              <ListItemIcon>
                {renderSocialIcons(social)}
              </ListItemIcon>
              <ListItemText primary={social} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

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
                  <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
                    <TheatersIcon sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1 }} />
                    <Typography
                      variant="h5"
                      noWrap
                      component="a"
                      href=""
                      sx={{
                        mr: 2,
                        display: { xs: 'flex', md: '1' },
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                      }}
                    >
                      Mike Serna
                    </Typography>
                  </Box>

                  <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                    <React.Fragment key={'right'}>
                      <Button style={{color: 'white'}} onClick={toggleDrawer('right', true)}>{<MenuIcon />}</Button>
                      <Drawer
                        anchor={'right'}
                        open={state['right']}
                        onClose={toggleDrawer('right', false)}
                      >
                        {list('right')}
                      </Drawer>
                    </React.Fragment>
                  </Box>
                  
                  <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                      <Button
                        key={page}
                        onClick={redirectToPage(page)}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                      >
                        {page}
                      </Button>
                    ))}
                  </Box>
                  
                  <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
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
                  </Box>

              </Toolbar>
              </AppBar>
          </HideOnScroll>
          <Toolbar />
          </React.Fragment>
      </div>
  );
}

export { NavBar };