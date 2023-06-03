import React, { useEffect, useState } from 'react';
import { Player } from 'video-react';
import CloseIcon from '@mui/icons-material/Close';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import {Media, Video } from '@vidstack/player-react';

const VidStack = () => {
  return (
    <Media>
    <Video loading="visible" poster="https://media-files.vidstack.io/poster.png" controls preload="true">
        <video loading="visible" poster="https://media-files.vidstack.io/poster-seo.png" src="https://media-files.vidstack.io/720p.mp4" preload="none" data-video="0" controls />
    </Video>
    </Media>
  );
}

export { VidStack };