import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral text-neutral-content">
            <div>
                <span className="footer-title">Services</span> 
                <Link className="link link-hover">Suzuki Brand</Link>
                <Link className="link link-hover">Hero Brand</Link>
                <Link className="link link-hover">Honda Brand</Link>
                <Link className="link link-hover">Yamaha Brand</Link>
            </div> 
            <div>
                <span className="footer-title">Link</span> 
                <Link to='/' className="link link-hover">Home</Link>
                <Link to='/blog' className="link link-hover">Blog</Link>
                <Link className="link link-hover"><a href="https://www.facebook.com/humayonitbd">Contact us</a></Link>
                <Link className="link link-hover">Press kit</Link>
            </div> 
            <div>
                <span className="footer-title">Our Category</span> 
                <Link className="link link-hover">Suzuki</Link>
                <Link className="link link-hover">Privacy policy</Link>
                <Link className="link link-hover">Cookie policy</Link>
            </div>
            </footer>
        </div>
    );
};

export default Footer;