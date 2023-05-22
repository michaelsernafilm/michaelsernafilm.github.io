import {React, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import InfoIcon from '@material-ui/icons/Info';

import "../css/video-react.css";
import '../../node_modules/react-modal-video/scss/modal-video.scss';
import { BigPlayButton, Player } from 'video-react';
import ModalVideo from 'react-modal-video'
import TestImg from '../resources/dir_img_1.jpg';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const nDirTiles = 9;
const cdnUrl = "https://d33b2szniyqorc.cloudfront.net/";
const directorTitles = [
    "How To Wash A Weighted Blanket",
    "Henry Rose",
    "Paddler Classic",
    "Fortify",
    "Bearaby Studio Shoot",
    "How to whiten sensitive teeth",
    "Howard House",
    "Central Park",
    "Kalispel Casino",
    "GUS Short Film",
]

const useStyles = makeStyles((theme) => 
({
    root: 
    {
      flexGrow: 'auto',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'auto',
    },
    paper: 
    {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));

const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
};

const Director = () => {
    const classes = useStyles();
    const [isOpen, setOpen] = useState(false);
    const [index, setIndex] = useState(1);
    const directorTiles = [];
    
    for(let i = 1; i <= nDirTiles; ++i) {
        var tile = {
            img: require(`../resources/dir_img_${i}.jpg`),
            title: directorTitles[i],
            author: 'Mike Serna'
        };

        directorTiles[i] = tile;
    }

    return (
    <div className='container'>
        {/* <GridList cellHeight={400} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <div class="site-section">
                <h1 className={classes.header}>
                    <h2 class="site-section-heading text-center">Director</h2>
                </h1>
            </div>
            
            <ModalVideo autoplay={1} isOpen={isOpen} url='../videos/dir_vid_1.mp4' onClose={() => setOpen(false)} />
            </GridListTile>
            {directorTiles.map((tile, index) => (
                <GridListTile key={tile.img} >
                    <Player
                        playsInline={true}
                        onClick={() => play}
                        poster={require(`../resources/dir_img_${1}.jpg`)}
                        src={require(`../videos/dir_vid_${1}.mp4`)}
                    >
                        <BigPlayButton position='center' onClick={() => setOpen(true)} />
                    </Player>

                    
                    <GridListTileBar
                        title={tile.title}
                        subtitle={<span>by: {tile.author}</span>}
                        actionIcon={
                        <IconButton className={classes.icon}>
                            <InfoIcon />
                        </IconButton>
                        }
                    />
                </GridListTile>
            ))}
        </GridList> */}

        {/* New Stuff  */}
        <ModalVideo autoplay={1} animationSpeed={1} channel='custom' isOpen={isOpen} url={require(`../videos/dir_vid_${index}.mp4`)} onClose={() => setOpen(false)} />
            
        <GridList cellHeight={400} className={classes.gridList}>
            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <div class="site-section">
                <h1 className={classes.header}>
                    <h2 class="site-section-heading text-center">Director</h2>
                </h1>
            </div>
            </GridListTile >
                {directorTiles.map((title, index) => (
                    <GridListTile >
                        <Card sx={{ maxWidth: 400, maxHeight: 400 }}>
                            <CardActionArea>
                                <CardMedia
                                onClick={() => {
                                    setIndex(index);
                                    setOpen(true);
                                }}
                                component="img"
                                height="140"
                                image={require(`../resources/dir_img_${index}.jpg`)}
                                alt="green iguana"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {directorTiles.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                Share
                                </Button>
                            </CardActions>
                        </Card>
                    </GridListTile>
                ))}
        </GridList>

    </div>
    );
};

export { Director };
