import React from 'react';
import Experiences from './partials/Experiences';

class Resume extends React.Component {
    render() {
        return(
            <section id="section-resume">
            <div className="container relative">
                <div className="row">
                    <div className="col-md-12 text-center wow fadeInUp">
                        <h2>My Resume</h2>
                        <div className="space-border"></div>
                    </div>
                </div>
                <div className="row gh-5">
                    <div className="col-lg-6 wow fadeInUp">
                        <div className="p-4">
                            <h3 className="s_border">Experiences</h3>
                            <ul className="d_timeline">

                               <Experiences />

                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp">
                        <div className="p-4">
                            <h3 className="s_border">Education</h3>
                            <ul className="d_timeline">
                                <li className="d_timeline-item">
                                    <h3 className="d_timeline-title">2004 - 2008</h3>
                                    <p className="d_timeline-text"><span className="d_title">Master in Design</span><span className="d_company">New York University</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.</p>
                                </li>
                                <li className="d_timeline-item">
                                    <h3 className="d_timeline-title">2004 - 2008</h3>
                                    <p className="d_timeline-text"><span className="d_title">Bachelor of Arts</span><span className="d_company">University of London</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.</p>
                                </li>
                                <li className="d_timeline-item">
                                    <h3 className="d_timeline-title">2006 - 2004</h3>
                                    <p className="d_timeline-text"><span className="d_title">Artist of College</span><span className="d_company">University of Sydney</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}

export default Resume;