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

const nNumEditTiles = 5;
const nNumMotTiles = 5;

const editTitles = [
    "BMW 7 Series",
    "BMW X5",
    "Susan Ciminelli",
    "Why H&M is Recycling Clothes?",
    "Quest Sunday Fest",
]

const motTitles = [
    "Bearaby Nappling Promo",
    "Ferrari Canvas",
    "NorthenQuest Halloween",
    "NorthernQuest Present: Outdoor Summer Concerts",
    "NorthernQuest RV Resort",
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

const Editor = () => {
    const classes = useStyles();

    const [isEditOpen, setEditOpen] = useState(false);
    const [editIdx, setEditIndex] = useState(1);

    const [isMotOpen, setMotOpen] = useState(false);
    const [motIdx, setMotIndex] = useState(1);

    const editTiles = [];
    const motTiles = [];
    
    for(let i = 1; i <= nNumEditTiles; ++i) {
        var tile = {
            img: require(`../resources/edi_img_${i}.jpg`),
            title: editTitles[i-1],
            author: 'Mike Serna'
        };

        editTiles[i] = tile;
    }

    for(let i = 1; i <= nNumMotTiles; ++i) {
        var tile = {
            img: require(`../resources/mot_img_${i}.jpg`),
            title: motTitles[i-1],
            author: 'Mike Serna'
        };

        motTiles[i] = tile;
    }

    const handleEditOpen = (index) => 
    {
        setEditIndex(index);
        setEditOpen(true);
    };

    const handleMotOpen = (index) => 
    {
        setMotIndex(index);
        setMotOpen(true);
    };

    const handleEditClose = () => setEditOpen(false);
    const handleMotClose = () => setMotOpen(false);

    return (
    <div className='container'>
        <Modal
            open={isEditOpen}
            onClose={handleEditClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <CloseIcon sx={{color: "black", backgroundColor: "white", position: "relative"}} onClick={handleEditClose}/>
            
                <MediaPlayer
                    autoplay
                    title={tile.title}
                    src={require(`../videos/edi_vid_${editIdx}.mp4`)}
                    poster={require(`../resources/edi_img_${editIdx}.jpg`)}
                    controls
                >
                    <MediaOutlet>
                    </MediaOutlet>
                </MediaPlayer>
            </Box>
        </Modal>
        <Modal
            open={isMotOpen}
            onClose={handleMotClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <CloseIcon sx={{color: "black", backgroundColor: "white", position: "relative"}} onClick={handleMotClose}/>
            
                <MediaPlayer
                    autoplay
                    title={tile.title}
                    src={require(`../videos/mot_vid_${motIdx}.mp4`)}
                    poster={require(`../resources/mot_img_${motIdx}.jpg`)}
                    controls
                >
                    <MediaOutlet>
                    </MediaOutlet>
                </MediaPlayer>
            </Box>
        </Modal>
        <GridList cols={3} cellHeight={'auto'} className={classes.gridList} spacing={12}>
            <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
            <div class="site-section" />
            </GridListTile >
                {editTiles.map((tile, index) => (
                    <GridListTile >
                        <Card sx={{ maxWidth: 400, maxHeight: 400 }} style={{ backgroundColor: "black", color: "white", fontFamily: "initial" }}>
                            <CardActionArea>
                                <PlayCircleIcon 
                                    className="icon-wrap"
                                    style={{fontSize: '300%'}}
                                    onClick={() => handleEditOpen(index)}
                                />
                                <CardMedia
                                    onClick={() => handleEditOpen(index)}
                                    component="img"
                                    height="280"
                                    width="300"
                                    image={require(`../resources/edi_img_${index}.jpg`)}
                                    alt="n/a"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {tile.title}
                                </Typography>
                                <Typography gutterBottom variant="h7" component="div">
                                    Edited by: {tile.author}
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
                {motTiles.map((tile, index) => (
                    <GridListTile >
                        <Card sx={{ maxWidth: 400, maxHeight: 400 }} style={{ backgroundColor: "black", color: "white", fontFamily: "initial" }}>
                            <CardActionArea>
                                <PlayCircleIcon 
                                    className="icon-wrap"
                                    style={{fontSize: '300%'}}
                                    onClick={() => handleMotOpen(index)}
                                />
                                <CardMedia
                                onClick={() => handleMotOpen(index)}
                                component="img"
                                height="280"
                                width="300"
                                image={require(`../resources/mot_img_${index}.jpg`)}
                                alt="n/a"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {tile.title}
                                </Typography>
                                <Typography gutterBottom variant="h7" component="div">
                                    Motion by: {tile.author}
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

export { Editor };
