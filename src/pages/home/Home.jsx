import React, { useState, useEffect } from 'react';
import "./Home.css"
import { Link } from 'react-router-dom';


const Home = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.nav-menu') && !event.target.closest('.mobile-menu-toggle')) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);
  return (
    <>
        <header>
            <div className='nav-logo'>
                <Link to="#">
                <img src="/react-landing-page/react-landing-page/images/navicon.png" alt='Nexcent Logo' />
                <span>Nexcent</span>
                </Link>
            </div>

            <div className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                <ul>
                    <li><Link to="#" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
                    <li><Link to="#" onClick={() => setIsMobileMenuOpen(false)}>Services</Link></li>
                    <li><Link to="#" onClick={() => setIsMobileMenuOpen(false)}>Feature</Link></li>
                    <li><Link to="#" onClick={() => setIsMobileMenuOpen(false)}>Product</Link></li>
                    <li><Link to="#" onClick={() => setIsMobileMenuOpen(false)}>Testimonial</Link></li>
                    <li><Link to="#" onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link></li>
                </ul>

                <div className='nav-actions'>
                    <ul>
                        <li>
                            <Link to="#" onClick={() => setIsMobileMenuOpen(false)}>Login</Link>
                        </li>
                        <li className='btnLink'>
                            <Link type='button' className='white' to="#" onClick={() => setIsMobileMenuOpen(false)}>Sign up</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>

        <main className='nav-container'> 
            <section className='container-flex'>
                <div className='nav-details'>
                    <h2>Lessons and insights <b style={{color: "green"}}>from 8 years</b></h2>
                    <p>Where to grow your business as a photographer: site or social media?</p>
                    <Link type='button' to="#">Register</Link>
                </div>

                <div className='main-image'>
                    <img src="/react-landing-page/images/mainicon.png" alt="" />
                </div>
            </section>

        </main>

        <main className='second-main'>
            <section className='section-margin'>
                <div className='second-heading'>
                    <h2>Our Clients</h2>
                    <p>We have been working with some Fortune 500+ clients</p>
                </div>
                <div className='second-header-flex-icons'>
                    <img className='icon1' src="/react-landing-page/images/icon1.png" alt="" />
                    <img src="/react-landing-page/images/icon2.png" alt="" />
                    <img src="/react-landing-page/images/icon3.png" alt="" />
                    <img src="/react-landing-page/images/icon4.png" alt="" />
                    <img src="/react-landing-page/images/icon5.png" alt="" />
                    <img src="/react-landing-page/images/icon6.png" alt="" />
                    <img src="/react-landing-page/images/icon7.png" alt="" />
                </div>

                <div style={{marginTop: "40px"}} className='second-heading'>
                    <h2>Manage Your entire community<br></br> in a single system</h2>
                    <p className='p-tag'>Who is Nexcent suitable for?</p>
                </div>

                <div className='second-header-flex'>
                    <div className="card">
                        <img src="/react-landing-page/images/second-icon.png" alt="" />
                        <h3>Membership Organisations</h3>
                        <p>Our membership management software provides full automation of membership renewaks and payment</p>
                    </div>

                    <div className="card">
                        <img src="/react-landing-page/images/second-icon2.png" alt="" />
                        <h3>National Associations</h3>
                         <p>Our membership management software provides full automation of membership renewaks and payment</p>
                    </div>

                    <div className="card">
                        <img src="/react-landing-page/images/second-icon3.png" alt="" />
                        <h3>Clubs And Groups</h3>
                         <p>Our membership management software provides full automation of membership renewaks and payment</p>
                    </div>
    
                    
                </div>

            </section>

        </main>

        <main className='second-section'>
                
                    <img src="/react-landing-page/images/rafiki.png" alt="" />
                
                <div className="side-details">
                    <div>
                        <h2>The unseen of spending three years at Pixelgrade</h2>
                    </div>
                    
                    <div className='paDiv'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur ad accusamus quia maiores saepe magnam quod veniam voluptatum deserunt, odio beatae nobis. Est voluptatibus ullam in earum facere eligendi nobis dolor ut? Distinctio explicabo delectus totam maiores consequatur soluta vel.</p>
                    </div>

                    <div>
                        <Link type='button' to="#">Learn More</Link>
                    </div>
                    
                </div>
        </main>

        <section className='nav-container'>
            <div className='second-container-flex'>
                <div className='third-main-details'>
                    <h2>
                        Helping a local <br /> <big style={{color:"green"}}>business reinvent itself</big>
                    </h2>
                    <p>
                        We reached here with our hard work and dedication
                    </p>
                </div>

                <div className='third-right-side-flex-col'>
                    <div className="inner-flex">
                        <div className="items">
                            <div>
                                <img style={{width: "30px", height:"30px"}} src='/react-landing-page/images/thirdicon1.png' alt=''/>
                            </div>
                            
                            <div className='move-down'>
                                <span><b>2,245,341</b></span>
                                <p className='reduce-size'>Members</p>
                            </div>
                        </div>

                        <div className="items">
                            
                            <div>
                                <img style={{width: "30px", height:"30px"}} src='/react-landing-page/images/thirdicon2.png' alt=''/>
                            </div>
                            
                            <div className='move-down'>
                                <span><b>2,245,341</b></span>
                                <p className='reduce-size'>Club</p>
                            </div>
                        </div>
                    </div>

                    <div className="another-flex">
                        <div className="items">
                            <div>
                                <img style={{width: "30px", height:"30px"}} src='/react-landing-page/images/thirdicon3.png' alt=''/>
                            </div>
                            
                            <div className='move-down'>
                                <span><b>2,245,341</b></span>
                                <p className='reduce-size'>Event Bookings</p>
                            </div>
                        </div>

                        <div className="items">
                            <div>
                                <img style={{width: "30px", height:"30px"}} src='/react-landing-page/images/thirdicon4.png' alt=''/>
                            </div>
                            
                            <div className='move-down'>
                                <span><b>2,245,341</b></span>
                                <p className='reduce-size'>Payments</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>

        <main style={{marginTop: "20px"}} className='second-sections'>
                
                    <img src="/react-landing-page/images/pana.png" alt="" />
                
                <div className="side-details">
                    <div>
                        <h2>How to design your site footer like we did</h2>
                    </div>
                    
                    <div className='paDiv'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur ad accusamus quia maiores saepe magnam quod veniam voluptatum deserunt, odio beatae nobis. Est voluptatibus ullam in earum facere eligendi nobis dolor ut? Distinctio explicabo delectus totam maiores consequatur soluta vel.</p>
                    </div>

                    <div>
                        <Link type='button' to="#">Learn More</Link>
                    </div>
                    
                </div>
        </main>

        <section className='nav-container-fourth'>
            <div className='fourth-container-flex'>
                <div className='fourth-main-details'>
                    <img src='/react-landing-page/images/repimage.png' alt='Section image'/>
                </div>

                <div className="next-side-details">
                    <div>
                        <h2>How to design your site footer like we did</h2>
                    </div>
                    
                    <div className='paDiv'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur ad accusamus quia maiores saepe magnam quod veniam voluptatum deserunt, odio beatae nobis. Est voluptatibus ullam in earum facere eligendi nobis dolor ut? Distinctio explicabo delectus totam maiores consequatur soluta vel.</p>
                    </div>

                    <div>
                        <Link type='button' to="#">Read More</Link>
                    </div>
                    
                </div>

            </div>

        </section>

        <section className='fifth-section'>
            <h2><b style={{color: "green"}}>Caring</b> is the new marketing</h2>
            <div className='wrap-me'>
                <p>The nexcent blog is the best place to read about the latest membership insights, trends and more.See who's joining the community,read about how our community are increasing their membership income and lots more.</p>
            </div>
            <br />
            <br />
            <br />
            <div className='fifth-flex'>
                <div className="card-cover">
                    <div className='fifth-card-img'>
                        <img src="/react-landing-page/images/pos1.png" alt="" />
                    </div>
                    
                    <div className='fifth-card'>
                        <b>
                        Creating Streamlined Safeguarding Processes with OneRen
                    </b>
                    <p>
                        <Link to="#">
                        Read more
                        <span>
                            <img style={{width: "20px"}} src="/react-landing-page/images/arrow.png" alt="" />
                        </span>
                        </Link>
                    </p>
                    </div>
                    
                </div>

                <div className='card-cover'>
                    <div className='fifth-card-img'>
                        <img src="/react-landing-page/images/pos2.png" alt="" />
                    </div>

                    <div className="fifth-card">
                        <b>
                            What are your Safeguarding responsibilities and how can you manage them?
                        </b>
                        <p>
                        <Link to="#">
                        Read more
                        <span>
                            <img style={{width: "20px"}} src="/react-landing-page/images/arrow.png" alt="" />
                        </span>
                        </Link>
                        </p>

                    </div>
                </div>
                
                <div className="card-cover">
                    <div className='fifth-card-img'>
                        <img src="/react-landing-page/images/pos3.png" alt="" />
                    </div>
                    <div className="fifth-card">
                        <b>
                            Revamping the Membership Model with Triathion Australia
                        </b>
                        <p>
                        <Link to="#">
                        Read more
                        <span>
                            <img style={{width: "20px"}} src="/react-landing-page/images/arrow.png" alt="" />
                        </span>
                        </Link>
                        </p>
                    </div>
                </div>
                
            </div>
            
        </section>


        <section className='sixth-section'>

            <div className='sixth-inner'>

            
            <h1><b style={{color: "green"}}>Pellentesque</b> suscipit fringilla libero eu.</h1>
            <p>
                <Link to="#">Get a Demo</Link>
            </p>
            </div>
            <br />
            
            
            
        </section>

        <footer className='footer'>
            <div className='footer-first'>
                <div className='footer-image'>
                    <img src="/react-landing-page/images/footer.png" alt="Company Logo" />
                    <span>Nexcent</span>
                </div>

                <p>Copyright &copy; 2025 Nexcent ltd.
                    <br />All rights reserved
                </p>
                <br /><br />

                <div className="footer-icon">
                    <img src="/react-landing-page/images/igicon.png" alt="" />
                    <img src="/react-landing-page/images/ball.png" alt="" />
                    <img src="/react-landing-page/images/twitter.png" alt="" />
                    <img src="/react-landing-page/images/youtube.png" alt="" />
                </div>
            </div>

        
            <div className="each-footer-section">
                <div>
                    <h3>Company</h3>
                    <div className='link-height'>
                    <div><Link to="#">About us</Link></div>
                    <div><Link to="#">Blog</Link></div>
                    <div><Link to="#">Contact us</Link></div>
                    <div><Link to="#">Pricing</Link></div>
                    <div><Link to="#">Testimonials</Link></div>
                    </div>
                    
                </div>
            </div>

            <div className="each-footer-section">
                <div>
                    <h3>Support</h3>
                    <div className='link-height'>
                    <div><Link to="#">Help center</Link></div>
                    <div><Link to="#">Terms of service</Link></div>
                    <div><Link to="#">Legal</Link></div>
                    <div><Link to="#">Privacy policy</Link></div>
                    <div><Link to="#">Status</Link></div>
                    </div>
                    
                </div>
            </div>

            <div className="each-footer-section grow">
                <div>
                    <h3>Stay up to date</h3>
                    <form className="footer-input">
                        <input type="text"  placeholder='Your email address' />
                        <button className='footer-btn' type='button'>
                            <img src="/react-landing-page/images/send.png" alt="Subscribe Button" />
                        </button>
                    </form>
                    
                </div>
            </div>
            
            <div className="last-footer">
            <p style={{color: "white",opacity: "0.6", textAlign:"center"}}>Copyright &copy; 2025 Nexcent ltd.
                    All rights reserved
                </p>
            </div>
        </footer>
    </>
  )
}

export default Home
