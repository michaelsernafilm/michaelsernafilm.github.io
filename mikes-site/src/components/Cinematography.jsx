import {React, useState } from 'react';
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

const nNumCineTiles = 11;
const cineTiles = [
    "Ford Puente Hills Brand Video",
    "Bearaby Studio Shoot",
    "Foodtown: Shop Online",
    "Rallye Motor Company Brand Video",
    "Porsche of Englewood: Restoration Challenge",
    "Foodtown: Quality Meals",
    "Foodtown: 3 Ingredients Challenge",
    "F.I.R.M.",
    "Riverbank Taphouse",
    "Susan Ciminelli",
    "STAX",
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

const Cinematography = () => {
    const classes = useStyles();
    const [isOpen, setOpen] = useState(false);
    const [index, setIndex] = useState(1);
    const tiles = [];

    const handleOpen = (index) => 
    {
        setIndex(index);
        setOpen(true);
    };

    const handleClose = () => setOpen(false);
    
    for(let i = 1; i <= nNumCineTiles; ++i) {
        var tile = {
            img: require(`../resources/cine_img_${i}.jpg`),
            title: cineTiles[i-1],
            author: 'Mike Serna'
        };

        tiles[i] = tile;
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
                    src={require(`../videos/cine_vid_${index}.mp4`)}
                    poster={require(`../resources/cine_img_${index}.jpg`)}
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
                {tiles.map((tile, index) => (
                    <GridListTile >
                        <Card sx={{ maxWidth: 400, maxHeight: 400 }} style={{ backgroundColor: "black", color: "white", fontFamily: "initial" }}>
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
                                image={require(`../resources/cine_img_${index}.jpg`)}
                                alt="n/a"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {tile.title}
                                </Typography>
                                <Typography gutterBottom variant="h7" component="div">
                                    Cinematography by: {tile.author}
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

export { Cinematography };
