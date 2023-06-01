import {React, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

import "../css/video-react.css";
import '../../node_modules/react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const nDirTiles = 11;
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

const Cinematography = () => {
    const classes = useStyles();
    const [isOpen, setOpen] = useState(false);
    const [index, setIndex] = useState(1);
    const directorTiles = [];
    
    for(let i = 1; i <= nDirTiles; ++i) {
        var tile = {
            img: require(`../resources/cine_img_${i}.jpg`),
            title: cineTiles[i-1],
            author: 'Mike Serna'
        };

        directorTiles[i] = tile;
    }

    return (
    <div className='container'>
        <ModalVideo autoplay={1} animationSpeed={1} channel='custom' isOpen={isOpen} url={require(`../videos/cine_vid_${index}.mp4`)} onClose={() => setOpen(false)} />

        <GridList cols={3} cellHeight={'auto'} className={classes.gridList} spacing={12}>
            <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
            <div class="site-section">
            </div>
            </GridListTile >
                {directorTiles.map((tile, index) => (
                    <GridListTile >
                        <Card sx={{ maxWidth: 400, maxHeight: 400 }} style={{ backgroundColor: "black", color: "white", fontFamily: "initial" }}>
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
