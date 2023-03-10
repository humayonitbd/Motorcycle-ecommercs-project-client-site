import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook , FaTwitter, FaInstagram} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-black'>
            <footer className="footer w-10/12 mx-auto p-10 text-neutral-content">
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
                <span className="footer-title">Contact Us</span> 
                <Link className="link link-hover">Email: humayonforid44@gmail.com </Link>
                <Link className="link link-hover">Phone: 088 17458964556</Link>
                <div className='flex '>
                    <span className='mr-5'><a href="https://www.facebook.com/humayonitbd"><FaFacebook className='text-2xl'/></a></span>
                    <span  className='mr-5'><a href="https://twitter.com/humayonitbd"><FaTwitter className='text-2xl'/> </a></span>
                    <span><a href="https://www.instagram.com/humayonitbd/"><FaInstagram className='text-2xl'/></a></span>
                </div>
            </div>
            </footer>
        </div>
    );
};

export default Footer;