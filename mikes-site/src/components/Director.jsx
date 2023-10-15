import {React, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageListItem from '@material-ui/core/ImageListItem';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import CloseIcon from '@mui/icons-material/Close';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { CardActionArea, CardActions } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import 'vidstack/styles/defaults.css';
import { MediaOutlet, MediaCaptions, MediaPoster, MediaPlayer, useMediaStore } from '@vidstack/react';
import Carousel from 'react-material-ui-carousel';

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
      fontSize: '1000%',
      color: theme.palette.text.secondary,
    },
}));

const Director = () => 
{
    const classes = useStyles();
    const [isOpen, setOpen] = useState(false);
    const [index, setIndex] = useState(1);
    const [displayMode, setDisplayMode] = useState(false);
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
    ];

    const handleChange = () => {
        setDisplayMode(displayMode ? false : true);
    };

    useEffect(() => console.log(displayMode), [displayMode]);

    var tiles = [];

    const style = {
        border: '0',
        borderRadius: '4px',
        bottom: 'auto',
        minHeight: '10rem',
        left: '50%',
        padding: '2rem',
        position: 'fixed',
        right: 'auto',
        top: '50%',
        transform: 'translate(-50%,-50%)',
        minWidth: '20rem',
        width: '80%',
        maxWidth: '60rem'
    };

    const handleOpen = (index) => 
    {
        setIndex(index);
        setOpen(true);
    };

    const handleClose = () => setOpen(false);
    
    for(let i = 0; i < nDirTiles; ++i) {
        var tile = {
            img: require(`../resources/dir_img_${i}.jpg`),
            title: directorTitles[i],
            author: 'Mike Serna'
        };

        tiles[i] = tile;
    }

    return (
    <div>
        <Modal
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <CloseIcon className={"CloseButton"} sx={{color: "black", backgroundColor: "white", position: "relative"}} onClick={handleClose}/>
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
        <ImageListItem key="Subheader" cols={3} style={{ height: 'auto' }}>
            <FormGroup >
                <FormControlLabel style={{color: 'white'}} value="start" control={<Switch  />} onChange={handleChange} label="Show All Tiles" />
            </FormGroup>
        </ImageListItem >
        <div>
            {displayMode ?
                tiles.map((tile, index) => (
                    <VideoTile
                    tile={tile}
                    index={index}
                    handleOpen={handleOpen}
                    handleClose={handleClose}
                    style={style}
                ></VideoTile>
                ))
            :
                <Carousel
                    navButtonsAlwaysVisible={true}
                    autoPlay={false}
                >
                    {
                        tiles.map((tile, index) => (
                        <VideoTile
                            tile={tile}
                            index={index}
                            handleOpen={handleOpen}
                            handleClose={handleClose}
                            style={style}
                        ></VideoTile>
                        ))
                    }
                </Carousel>
            }
        </div>
    </div>
    );
};

const VideoTile = (props) =>
{
    return (
    <div className="container">
        <ImageListItem >
            <Card style={{ backgroundColor: "black", color: "white", fontFamily: "initial" }} >
                <CardContent>
                    <CardActionArea>
                        <PlayCircleIcon 
                            className="icon-wrap"
                            style={{fontSize: "1000%"}}
                            onClick={() => props.handleOpen(props.index)}
                        />
                        <CardMedia
                        onClick={() => props.handleOpen(props.index)}
                        component="img"
                        height="600"
                        width="600"
                        image={require(`../resources/dir_img_${props.index}.jpg`)}
                        alt="n/a"
                        />
                        <VideoDescription tile={props.tile}></VideoDescription>
                    </CardActionArea>
                </CardContent>
                <CardActions>
                    {/* <Accolades></Accolades> */}
                </CardActions>
            </Card>
            
        </ImageListItem>
    </div>
    );
}

const VideoDescription = (props) =>
{
    return(
        <div>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.tile.title}
                </Typography>
                <Typography gutterBottom variant="h7" component="div">
                    Directed by: {props.tile.author}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                </Typography>
            </CardContent>
        </div>
    );
}

const Accolades = () =>
{
    return(
        <img src={require('../resources/gus_laurels_1.png')}></img>
    );
}

export { Director };
