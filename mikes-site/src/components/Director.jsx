import {React, useState } from 'react';
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
import ModalVideo from 'react-modal-video';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const nDirTiles = 9;
const directorTitles = [
    "DisplayIt - Make It Pop",
    "High Impact - The Artisan",
    "Rallye Mercedes EV Lineup",
    "Rallye Lexus Multicultural",
    "Bearaby x Celsious",
    "Fortify",
    "Central Park",
    "Kalispel Casino",
    "GUS Short Film",
    "Henry Rose",
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
            title: directorTitles[i-1],
            author: 'Mike Serna'
        };

        directorTiles[i] = tile;
    }

    return (
    <div className='container'>
        <ModalVideo autoplay={1} animationSpeed={1} channel='custom' isOpen={isOpen} url={require(`../videos/dir_vid_${index}.mp4`)} onClose={() => setOpen(false)} />

        <GridList cols={3} cellHeight={'auto'} className={classes.gridList} spacing={12}>
            <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
            <div class="site-section">
                <h1 className={classes.header}>
                    <h2 class="site-section-heading text-center">Director</h2>
                </h1>
            </div>
            </GridListTile >
                {directorTiles.map((tile, index) => (
                    <GridListTile >
                        <Card sx={{ maxWidth: 400, maxHeight: 400 }} style={{ backgroundColor: "black", color: "white", fontFamily: "initial" }} >
                            <CardActionArea>
                                <PlayCircleIcon 
                                    className="icon-wrap"
                                    style={{fontSize: '300%'}}
                                    
                                    onClick={() => {
                                        setIndex(index);
                                        setOpen(true);
                                    }}
                                />
                                <CardMedia
                                onClick={() => {
                                    setIndex(index);
                                    setOpen(true);
                                }}
                                component="img"
                                height="140"
                                image={require(`../resources/dir_img_${index}.jpg`)}
                                alt="n/a"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {tile.title}
                                </Typography>
                                <Typography gutterBottom variant="h7" component="div">
                                    Directed by: {tile.author}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                {/* You can add Share or other buttons here */}
                            </CardActions>
                        </Card>
                    </GridListTile>
                ))}
        </GridList>

    </div>
    );
};

export { Director };
