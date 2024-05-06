import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header className="transparent">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="de-flex sm-pt10">
                                <div className="de-flex-col">
                                    <div className="de-flex-col">

                                        <div id="logo">
                                            <a href="index.html">
                                                <img alt="" className="logo" src="/images/logo.png" />
                                                <img alt="" className="logo-2" src="/images/logo.png" />
                                            </a>
                                        </div>

                                    </div>
                                </div>
                                <div className="de-flex-col header-col-right">
                                    <ul id="mainmenu">
                                        <li><a className="active" href="index.html#top">Home<span></span></a></li>
                                        <li><a href="index.html#section-about">About me<span></span></a></li>
                                        <li><a href="index.html#section-services">What I Do<span></span></a></li>
                                        <li><a href="index.html#section-portfolio">Portfolio<span></span></a></li>
                                        <li><a href="index.html#section-resume">My Resume<span></span></a></li>
                                        <li><a href="index.html#section-blog">Blog<span></span></a></li>
                                        <li><a href="index.html#section-contact">Contact Me<span></span></a></li>
                                    </ul>
                                    <div className="menu_side_area">
                                        <span id="menu-btn"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;