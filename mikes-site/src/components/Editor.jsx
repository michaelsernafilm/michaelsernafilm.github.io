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

const nTiles = 5;
const nMoTiles = 7;
const editTitles = [
    "Edit 1",
    "Edit 2",
    "Edit 3",
    "Edit 4",
    "Edit 5",
]

const motTitles = [
    "Motion 1",
    "Motion 2",
    "Motion 3",
    "Motion 4",
    "Motion 5",
    "Motion 6",
    "Motion 7"
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

const Editor = () => {
    const classes = useStyles();
    const [isEditOpen, setEditOpen] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const [index, setIndex] = useState(1);
    const editTiles = [];
    const motTiles = [];
    
    for(let i = 1; i <= nTiles; ++i) {
        var tile = {
            img: require(`../resources/edi_img_${i}.jpg`),
            title: editTitles[i-1],
            author: 'Mike Serna'
        };

        editTiles[i] = tile;
    }

    for(let i = 1; i <= nMoTiles; ++i) {
        var tile = {
            img: require(`../resources/mot_img_${i}.jpg`),
            title: motTitles[i-1],
            author: 'Mike Serna'
        };

        motTiles[i] = tile;
    }

    return (
    <div className='container'>
        <ModalVideo autoplay={1} animationSpeed={1} channel='custom' isOpen={isEditOpen} url={require(`../videos/edi_vid_${index}.mp4`)} onClose={() => setEditOpen(false)} />
        <ModalVideo autoplay={1} animationSpeed={1} channel='custom' isOpen={isOpen} url={require(`../videos/mot_vid_${index}.mp4`)} onClose={() => setOpen(false)} />

        <GridList cols={3} cellHeight={'auto'} className={classes.gridList} spacing={12}>
            <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
            <div class="site-section">
            </div>
            </GridListTile >
                {editTiles.map((tile, index) => (
                    <GridListTile >
                        <Card sx={{ maxWidth: 400, maxHeight: 400 }} style={{ backgroundColor: "black", color: "white", fontFamily: "initial" }}>
                            <CardActionArea>
                                <PlayCircleIcon 
                                    className="icon-wrap"
                                    style={{fontSize: '300%'}}
                                    
                                    onClick={() => {
                                        setIndex(index);
                                        setEditOpen(true);
                                    }}
                                />
                                <CardMedia
                                onClick={() => {
                                    setIndex(index);
                                    setEditOpen(true);
                                }}
                                component="img"
                                height="140"
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
