import {React, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import CloseIcon from '@mui/icons-material/Close';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { CardActionArea, CardActions } from '@mui/material';

import 'vidstack/styles/defaults.css';
import { MediaOutlet, MediaCaptions, MediaPoster, MediaPlayer } from '@vidstack/react';

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

const Director = () => {
    const classes = useStyles();
    const [isOpen, setOpen] = useState(false);
    const [index, setIndex] = useState(1);
    const directorTiles = [];
    const [width, setWidth] = useState(window.innerWidth);
    var w = 600;

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        maxWidth: w,
        transform: 'translate(-50%, -50%)',
        boxShadow: 24,
        p: 4,
    };
    
    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 380;

    useEffect(()=> {
        w = 400;
        console.log("is mobile");
    }, [isMobile]);

    const handleOpen = (index) => 
    {
        setIndex(index);
        setOpen(true);
    };

    const handleClose = () => setOpen(false);
    
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
        
        <Modal
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <CloseIcon sx={{color: "black", backgroundColor: "white", position: "relative"}} onClick={handleClose}/>
                <MediaPlayer
                    autoplay
                    title={tile.title}
                    src={require(`../videos/dir_vid_${index}.mp4`)}
                    poster={require(`../resources/dir_img_${index}.jpg`)}
                    controls
                >
                    <MediaOutlet>
                        <MediaPoster />
                        <MediaCaptions />
                    </MediaOutlet>
                </MediaPlayer>
            </Box>
        </Modal>
        <GridList cols={3} cellHeight={'auto'} className={classes.gridList} spacing={12}>
            <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
            <div class="site-section" />
            </GridListTile >
                {directorTiles.map((tile, index) => (
                    <GridListTile >
                        <Card sx={{ maxWidth: 400, maxHeight: 400 }} style={{ backgroundColor: "black", color: "white", fontFamily: "initial" }} >
                            <CardActionArea>
                                <PlayCircleIcon 
                                    className="icon-wrap"
                                    style={{fontSize: '300%'}}
                                    onClick={() => handleOpen(index)}
                                />
                                <CardMedia
                                onClick={() => handleOpen(index)}
                                component="img"
                                height="280"
                                width="300"
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
