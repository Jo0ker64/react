import React from 'react';
import Header from '../fragments/Header';
import Resume from '../fragments/Resume';

class App extends React.Component {
    render() {
        return (
            <div id="wrapper">
            {/* declarer le header */}
            <Header /> 

            <div className="no-bottom no-top" id="content">
                <div id="top"></div>
    
                
                <div id="preloader">
                    <div className="preloader1"></div>
                </div>
                
                <div className="float-text">
                    <div className="de_social-icons">
                        <a href="index.html#"><i className="fa fa-facebook fa-lg"></i></a>
                        <a href="index.html#"><i className="fa fa-twitter fa-lg"></i></a>
                        <a href="index.html#"><i className="fa fa-instagram fa-lg"></i></a>
                    </div>
                    <span>Follow Me</span>
                </div>
               
                <div id="de_modal">
                    <button className="button-close"></button>
                    <div className="d-modal-loader"></div>
                </div>
                
    
                <section aria-label="section" className="jarallax no-top no-bottom text-light">
                    <img src="/images/background/1.jpg" className="jarallax-img" alt=""/>
                    <div className="v-center">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-12">
                                    <h6 className="wow fadeInUp" data-wow-delay=".4s"><span className="id-color">I Am Kyros Noriaki</span></h6>
                                    <div className="spacer-10"></div>
                                    <div className="h1_big text-white wow fadeInUp" data-wow-delay=".6s">
                                        <div className="typed-strings">
                                            <p>Freelancer</p>
                                            <p>Programmer</p>
                                            <p>Photographer</p>
                                        </div>
                                        <div className="typed"></div>
                                    </div>
                                    <div className="spacer-20"></div>
                                    <ul className="list_location wow fadeInUp" data-wow-delay=".8s">
                                        <li><span>France</span>Bodin, Chauveau</li>
                                        <li><span>USA</span>Louisiana, Bayerfurt</li>
                                        <li><span>German</span>Hamburg, Dortmund</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="index.html#section-about" className="mouse-icon-click scroll-to wow fadeInUp" data-wow-delay=".8s">
                        <span className="mouse fadeScroll relative" data-scroll-speed="10">
                            <span className="scroll"></span>
                        </span>
                    </a>
                    <div className="de-gradient-edge-bottom"></div>
                </section>
                <section id="section-about">
                    <div className="container relative">
                        <div className="row">
                            <div className="col-md-12 text-center wow fadeInUp">
                                <h2>About Me</h2>
                                <div className="space-border"></div>
                            </div>
                            <div className="col-md-8 offset-md-2 text-center wow fadeInUp">
                                <p>I am a website designer from Lousiana, with a strong focus in UI/UX design. I love to get new experiences and always learn from my surroundings. I've done more than 285 projects. You can check it through portfolio section on
                                    this website. I looking forward to any opportunities and challenges. </p>
                            </div>
                            <div className="spacer-single"></div>
                            <div className="col-lg-3 position-relative wow fadeIn" data-wow-delay=".2s">
                                <div className="position-relative">
                                    <div className="progressbar" data-animate="false">
                                        <div className="circle" data-percent="90">
                                            <div></div>
                                        </div>
                                        <h4>HTML</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 position-relative wow fadeIn" data-wow-delay=".4s">
                                <div className="position-relative">
                                    <div className="progressbar" data-animate="false">
                                        <div className="circle" data-percent="85">
                                            <div></div>
                                        </div>
                                        <h4>CSS</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 position-relative wow fadeIn" data-wow-delay=".6s">
                                <div className="position-relative">
                                    <div className="progressbar" data-animate="false">
                                        <div className="circle" data-percent="80">
                                            <div></div>
                                        </div>
                                        <h4>PHP</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 position-relative wow fadeIn" data-wow-delay=".8s">
                                <div className="position-relative">
                                    <div className="progressbar" data-animate="false">
                                        <div className="circle" data-percent="75">
                                            <div></div>
                                        </div>
                                        <h4>jQuery</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="section-my-quote" aria-label="section" className="jarallax no-top no-bottom">
                    <div className="de-gradient-edge-top"></div>
                    <img src="/images/background/2.jpg" className="jarallax-img" alt=""/>
                    <div className="v-center">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-10 offset-md-1">
                                    <blockquote className="q-big wow fadeIn" data-wow-duration="3s">
                                        <i className="d-big icon_quotations"></i>
                                        Do more than is required. What is the distance between someone who achieves their goals consistently and those who spend their lives and careers merely following? The extra mile.
                                        <span className="d-quote-by">Kyros Noriaki</span>
                                    </blockquote>
                                    <div className="spacer-double"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="de-gradient-edge-bottom"></div>
                </section>
                <section id="section-services" className="no-bottom">
                    <div className="container relative">
                        <div className="row">
                            <div className="col-md-12 text-center wow fadeInUp">
                                <h2>What I Do</h2>
                                <div className="space-border"></div>
                            </div>
                            <div className="spacer-single"></div>
                            <div className="row g-0">
                                <div className="col-lg-4 wow fadeIn" data-wow-delay=".2s">
                                    <div className="de_3d-box">
                                        <div className="d-inner">
                                            <i className="icon_genius id-color"></i>
                                            <div className="text">
                                                <h3>Branding</h3>
                                                Ex velit cupidatat magna voluptate deserunt quis et dolor adipisicing elit culpa ad exercitation proident irure deserunt irure.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 wow fadeIn" data-wow-delay=".4s">
                                    <div className="de_3d-box">
                                        <div className="d-inner">
                                            <i className="icon_tools id-color"></i>
                                            <div className="text">
                                                <h3>Development</h3>
                                                Ex velit cupidatat magna voluptate deserunt quis et dolor adipisicing elit culpa ad exercitation proident irure deserunt irure.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 wow fadeIn" data-wow-delay=".6s">
                                    <div className="de_3d-box">
                                        <div className="d-inner">
                                            <i className="icon_camera_alt id-color"></i>
                                            <div className="text">
                                                <h3>Photography</h3>
                                                Ex velit cupidatat magna voluptate deserunt quis et dolor adipisicing elit culpa ad exercitation proident irure deserunt irure.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="section-portfolio" className="no-bottom">
                    <div className="container relative">
                        <div className="row">
                            <div className="col-md-12 text-center wow fadeInUp">
                                <h2>Portfolio</h2>
                                <div className="space-border"></div>
                            </div>
                        </div>
                        <div id="gallery" className="row sequence">
                            <div className="col-md-4 item">
                                <div className="de_modal wow" data-url="single-project.html">
                                    <div className="card-image-1 mod-c" data-tilt>
                                        <div className="d-text">
                                            <h3>Single Image</h3>
                                            <h5 className="d-tag">website</h5>
                                        </div>
                                        <img src="/images/gallery/1.jpg" className="img-fluid" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 item">
                                <div className="de_modal wow" data-url="single-project-2.html">
                                    <div className="card-image-1 mod-c" data-tilt>
                                        <div className="d-text">
                                            <h3>Multiple Images</h3>
                                            <h5 className="d-tag">website</h5>
                                        </div>
                                        <img src="/images/gallery/2.jpg" className="img-fluid" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 item">
                                <div className="de_modal wow" data-url="single-project-3.html">
                                    <div className="card-image-1 mod-c" data-tilt>
                                        <div className="d-text">
                                            <h3>Self Hosted Video</h3>
                                            <h5 className="d-tag">website</h5>
                                        </div>
                                        <img src="/images/gallery/3.jpg" className="img-fluid" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 item">
                                <div className="de_modal wow" data-url="single-project.html">
                                    <div className="card-image-1 mod-c" data-tilt>
                                        <div className="d-text">
                                            <h3>Bluetec App</h3>
                                            <h5 className="d-tag">website</h5>
                                        </div>
                                        <img src="/images/gallery/4.jpg" className="img-fluid" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 item">
                                <div className="de_modal wow" data-url="single-project.html">
                                    <div className="card-image-1 mod-c" data-tilt>
                                        <div className="d-text">
                                            <h3>Uhost Hosting</h3>
                                            <h5 className="d-tag">website</h5>
                                        </div>
                                        <img src="/images/gallery/5.jpg" className="img-fluid" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 item">
                                <div className="de_modal wow" data-url="single-project.html">
                                    <div className="card-image-1 mod-c" data-tilt>
                                        <div className="d-text">
                                            <h3>Bolo Creative</h3>
                                            <h5 className="d-tag">website</h5>
                                        </div>
                                        <img src="/images/gallery/6.jpg" className="img-fluid" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

              <Resume />

                <section id="section-fun-facts" aria-label="section" className="jarallax">
                    <div className="de-gradient-edge-top"></div>
                    <img src="/images/background/3.jpg" className="jarallax-img" alt=""/>
                    <div className="container">
                            <div className="row">
                                <div className="col-md-3 wow fadeIn" data-wow-delay="0">
                                    <div className="de_count text-center">
                                        <h3 className="timer" data-to="8240" data-speed="2500">0</h3>
                                        <span>Hours of Works</span>
                                    </div>
                                </div>
    
                                <div className="col-md-3 wow fadeIn" data-wow-delay=".25s">
                                    <div className="de_count text-center">
                                        <h3 className="timer" data-to="315" data-speed="2500">0</h3>
                                        <span>Projects Done</span>
                                    </div>
                                </div>
    
                                <div className="col-md-3 wow fadeIn" data-wow-delay=".5s">
                                    <div className="de_count text-center">
                                        <h3 className="timer" data-to="250" data-speed="2500">0</h3>
                                        <span>Satisfied Customers</span>
                                    </div>
                                </div>
    
                                <div className="col-md-3 wow fadeIn" data-wow-delay=".75s">
                                    <div className="de_count text-center">
                                        <h3 className="timer" data-to="32" data-speed="2500">0</h3>
                                        <span>Awards Winning</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="de-gradient-edge-bottom"></div>
                </section>
                <section id="section-blog" className="no-bottom">
                    <div className="container relative">
                        <div className="row">
                            <div className="col-md-12 text-center wow fadeInUp">
                                <h2>Recent Blog</h2>
                                <div className="space-border"></div>
                            </div>
                        </div>
                        <div id="carousel-blog" className="owl-carousel wow fadeInUp">
                            <div className="bloglist item">
                                <div className="post-content">
                                    <div className="post-image">
                                        <div className="de_modal" data-url="single-blog.html"><img alt="" src="/images/blog/1.jpg" className="lazy grayscale"/></div>
                                    </div>
                                    <div className="post-text">
                                        <h4 className="de_modal" data-url="single-blog.html">How to Make Better User Interface</h4>
                                        <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bloglist item">
                                <div className="post-content">
                                    <div className="post-image">
                                        <div className="de_modal" data-url="single-blog.html"><img alt="" src="/images/blog/2.jpg" className="lazy grayscale"/></div>
                                    </div>
                                    <div className="post-text">
                                        <h4 className="de_modal" data-url="single-blog.html">10 Web Design Tips From Experts</h4>
                                        <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bloglist item">
                                <div className="post-content">
                                    <div className="post-image">
                                        <div className="de_modal" data-url="single-blog.html"><img alt="" src="/images/blog/3.jpg" className="lazy grayscale"/></div>
                                    </div>
                                    <div className="post-text">
                                        <h4 className="de_modal" data-url="single-blog.html">The Importance of Web Design</h4>
                                        <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bloglist item">
                                <div className="post-content">
                                    <div className="post-image">
                                        <div className="de_modal" data-url="single-blog.html"><img alt="" src="/images/blog/4.jpg" className="lazy grayscale"/></div>
                                    </div>
                                    <div className="post-text">
                                        <h4 className="de_modal" data-url="single-blog.html">10 Web Design Tips From Experts</h4>
                                        <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bloglist item">
                                <div className="post-content">
                                    <div className="post-image">
                                        <div className="de_modal" data-url="single-blog.html"><img alt="" src="/images/blog/5.jpg" className="lazy grayscale"/></div>
                                    </div>
                                    <div className="post-text">
                                        <h4 className="de_modal" data-url="single-blog.html">The Importance of Web Design</h4>
                                        <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bloglist item">
                                <div className="post-content">
                                    <div className="post-image">
                                        <div className="de_modal" data-url="single-blog.html"><img alt="" src="/images/blog/6.jpg" className="lazy grayscale"/></div>
                                    </div>
                                    <div className="post-text">
                                        <h4 className="de_modal" data-url="single-blog.html">Tips for Healthy Teeth<span></span></h4>
                                        <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="section-contact" className="jarallax">
                    <div className="de-gradient-edge-top"></div>
                    <img src="/images/background/5.jpg" className="jarallax-img" alt=""/>
                    <div className="container z-index-1000">
                        <div className="row">
                            <div className="col-md-12 text-center wow fadeInUp">
                                <h2>Contact Me</h2>
                                <div className="space-border"></div>
                            </div>
                            <div className="col-lg-8 offset-lg-2 wow fadeInUp">
                                <div className="contact_form_wrapper">
                                    <form name="contactForm" id="contact_form" className="form-border" method="post" action="index.html#">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="field-set">
                                                    <input type="text" name="Name" id="name" className="form-control" placeholder="Your Name" required/>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="field-set">
                                                    <input type="text" name="Email" id="email" className="form-control" placeholder="Your Email" required/>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="field-set">
                                                    <input type="text" name="phone" id="phone" className="form-control" placeholder="Your Phone" required/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <div className="field-set">
                                                <textarea name="message" id="message" className="form-control" placeholder="Your Message" required></textarea>
                                            </div>
                                            <div className="g-recaptcha" data-sitekey="6LdW03QgAAAAAJko8aINFd1eJUdHlpvT4vNKakj6"></div>
                                            <div id='submit' className="mt10">
                                                <input type='submit' id='send_message' value='Send Message' className="btn-main"/>
                                            </div>
    
                                            <div id="success_message" className='success'>
                                                Your message has been sent successfully. Refresh this page if you want to send more messages.
                                            </div>
                                            <div id="error_message" className='error'>
                                                Sorry there was an error sending your form.
                                            </div>
    
                                        </div>
                                    </form>
                                </div>
                                <div className="spacer-double"></div>
                                <div className="row text-center wow fadeInUp">
                                    <div className="col-md-4">
                                        <div className="wm-1"></div>
                                        <h6>Email Me</h6>
                                        <p>contact@kyrosnoriaki.com</p>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="wm-1"></div>
                                        <h6>Call Me</h6>
                                        <p>+1 700 333 92 96</p>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="wm-1"></div>
                                        <h6>Address</h6>
                                        <p>Collins Street West, Louisiana, Bayerfurt, USA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="de-gradient-edge-bottom"></div>
                </section>
            </div>
           
            <a href="index.html#" id="back-to-top"></a>
            
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <a href="index.html">
                                <span className="copy">&copy; Copyright 2022 - Kyros by Designesia</span>
                            </a>
                        </div>
                        <div className="col-md-6">
                            <div className="social-icons">
                                <a href="index.html#"><i className="fa fa-facebook fa-lg"></i></a>
                                <a href="index.html#"><i className="fa fa-twitter fa-lg"></i></a>
                                <a href="index.html#"><i className="fa fa-linkedin fa-lg"></i></a>
                                <a href="index.html#"><i className="fa fa-pinterest fa-lg"></i></a>
                                <a href="index.html#"><i className="fa fa-rss fa-lg"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
           
        </div>
      
        );  
    }
}

export default App;