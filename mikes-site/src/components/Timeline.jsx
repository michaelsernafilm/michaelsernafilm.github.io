import React from "react";

import '../index.css';
import '../css/timeline.css'
import SFSUGif from '../resources/timeline_2.gif';
import LiveStreamGif from '../resources/timeline_1.gif';
import MLBGif from '../resources/timeline_3.gif';
import ComcastGif from '../resources/timeline_4.gif';
import NQGif from '../resources/timeline_5.gif';
import ConstellationGif from '../resources/timeline_6.gif';

const Timeline = () => {
    return(
        <div>
            <h3 class="site-section-heading text-center" id="timeline"></h3>
            <br/>
            <section class="page-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <ul class="timeline">
                                <li>
                                    <div class="timeline-image">
                                    <img class="rounded-circle img-fluid" src={SFSUGif} alt="" />
                                    </div>
                                    <div class="timeline-panel">
                                    <div class="timeline-heading">
                                        <h4>2010-2015</h4>
                                        <h4 class="subheading">Education</h4>
                                    </div>
                                    <div class="timeline-body">
                                        <p class="text-white">I grew up idolizing cinema and what began as a hobby in middle school transformed itself into a career. I studied cinema at San Francisco State University in 2010 where I earned a degree in Broadcast and Communications.</p>
                                    </div>
                                    </div>
                                </li>
                                <li class="timeline-inverted">
                                    <div class="timeline-image">
                                    <img class="rounded-circle img-fluid" src={LiveStreamGif} alt="" />
                                    </div>
                                    <div class="timeline-panel">
                                    <div class="timeline-heading">
                                        <h4>2014-2016</h4>
                                        <h4 class="subheading">Live-Streaming</h4>
                                    </div>
                                    <div class="timeline-body">
                                        <p class="text-white">I began my career working as a producer for a live-stream production company TheCube.com. This eventually led into working on creative content and assisting in the marketing department for the company.</p>
                                    </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="timeline-image">
                                    <img class="rounded-circle img-fluid" src={MLBGif} alt="" />
                                    </div>
                                    <div class="timeline-panel">
                                    <div class="timeline-heading">
                                        <h4>2016-2017</h4>
                                        <h4 class="subheading">MLB.com</h4>
                                    </div>
                                    <div class="timeline-body">
                                        <p class="text-white">I later took a job at MLB.com as a quality control technician where I would monitor and resolve technical issues with Sony's streaming service, Playstation VUE.</p>
                                    </div>
                                    </div>
                                </li>
                                <li class="timeline-inverted">
                                    <div class="timeline-image">
                                    <img class="rounded-circle img-fluid" src={ComcastGif} alt="" />
                                    </div>
                                    <div class="timeline-panel">
                                    <div class="timeline-heading">
                                        <h4>2017-2018</h4>
                                        <h4 class="subheading">Comcast</h4>
                                    </div>
                                    <div class="timeline-body">
                                        <p class="text-white">After my time with MLB, I sought out a more hands-on production workflow with Comcast. I quickly grasped the knowledge to technical direct, audio mix and work in a live-production truck. I developed my editing and video shooting skills at my time with Comcast.</p>
                                    </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="timeline-image">
                                    <img class="rounded-circle img-fluid" src={NQGif} alt="" />
                                    </div>
                                    <div class="timeline-panel">
                                    <div class="timeline-heading">
                                        <h4>2018-2021</h4>
                                        <h4 class="subheading">Producer at Northern Quest</h4>
                                    </div>
                                    <div class="timeline-body">
                                        <p class="text-white">I would move to Spokane, WA in the summer of 2018 and took a job as a Video Producer at Northern Quest Resort & Casino. I currently work on televison commercials, radio spots and digital content for the casino. I also manage digital content of over a dozen internal businesses.</p>
                                    </div>
                                    </div>
                                </li>
                                <li class="timeline-inverted">
                                    <div class="timeline-image">
                                    <img class="rounded-circle img-fluid" src={ConstellationGif} alt="" />
                                    </div>
                                    <div class="timeline-panel">
                                    <div class="timeline-heading">
                                        <h4>2021-</h4>
                                        <h4 class="subheading">Creative at Constellation Agency</h4>
                                    </div>
                                    <div class="timeline-body">
                                        <p class="text-white">I moved to New York in the summer of 2021 where I began working at Constellation Agency as a videographer and motion designer.</p>
                                    </div>
                                    </div>
                                </li>
                                <li class="timeline-inverted">
                                    <div class="timeline-image">
                                        <h4>N<br/>O<br/>W!</h4>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export { Timeline };