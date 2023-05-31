import React from "react";
import { Grow, Fade, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import MarkunreadMailboxIcon from '@material-ui/icons/MarkunreadMailbox';
import IconButton from '@material-ui/core/IconButton';

import '../index.css';
import '../css/bootstrap.css'
import AboutImage from '../resources/about.jpg';
import { Timeline } from './Timeline';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      color: "#00000",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }
}));

const About = () => {

    const [bannerGrow, setBannerGrow] = useState(false);
    const classes = useStyles();

    useEffect(() => {
        setBannerGrow(true);
    }, []);

    var timeout = 1000;
    var timeout2 = 2500;

    const handleSubmit = (e) => {
        console.log("Sending email");
    };
    
    const email = '';

    return(
        <div className={classes.root}>
            <div className='container'>
                <Grow in={bannerGrow} timeout={timeout}>
                    <div class="site-section">
                    </div>
                </Grow>
                <Grow in={bannerGrow} timeout={timeout}>
                    <div class="row mb-5">
                        <div class="col-md-7">
                            <img src={AboutImage} alt="About Image" class="img-fluid"/>
                        </div>
                        <div class="col-md-4 ml-auto mr-auto" style={{color: "white", padding: "0.5em"}}>
                            <h3 class="text-black"></h3>
                            <p>Mike Serna is a talented and experienced professional in 
                                the fields of video, motion design, and photography. 
                                <br />
                                With over 10 years of experience in these areas, 
                                Mike has developed a strong eye for detail and a deep understanding 
                                of the technical aspects of creating high-quality visual content.
                                Whether working on a commercial video, a branded content piece, 
                                or a personal photography project, Mike consistently delivers 
                                outstanding results that consistently exceed his clients' 
                                expectations. 
                                <br />
                                He is highly skilled in a variety of software and hardware tools, 
                                and is always looking for ways to stay up-to-date with the latest 
                                industry trends and techniques.
                                <br /> 
                                In addition to his technical expertise, Mike is also a creative 
                                thinker with a passion for storytelling and a keen ability to 
                                connect with his audience through the visual medium. Overall, 
                                Mike is a reliable and dedicated professional with a 
                                strong track record of success in the field of video, 
                                motion design, and photography.
                            </p>
                            <br/>
                        </div>
                    </div>
                </Grow>

                <Grow in={bannerGrow} timeout={timeout}>
                    <Timeline></Timeline>
                </Grow>
                <br /><br /><br /><br /><br /><br />
                <Grow in={bannerGrow} timeout={timeout}>
                    <h1 class="site-section-heading text-center">Send me an email</h1>
                </Grow>
                <Grow in={bannerGrow} timeout={timeout}>
                    <IconButton color="white" href={`mailto:${email}`}>
                        <MarkunreadMailboxIcon style={{color: "white"}} />
                    </IconButton>
                </Grow>
            </div>
        </div>
    );
}

export { About };