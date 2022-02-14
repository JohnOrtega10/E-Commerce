import React from 'react';
import './Footer.styles.css'

const Footer = () => {
    return (
        <footer>
            <h1>ANISE</h1>
            <ul className='social-networks'>
                <li>
                    <button>
                        <i className="fab fa-facebook-f fa-2x"></i>
                    </button>
                </li>
                <li>
                    <button> 
                        <i className="fab fa-pinterest-p fa-2x"></i>
                    </button>
                </li>
                <li>
                    <button>
                        <i className="fab fa-twitter fa-2x"></i>
                    </button>
                </li>
                <li>
                    <button>
                        <i className="fab fa-instagram fa-2x"></i>
                    </button>
                </li>
                <li>    
                    <button>
                        <i className="fab fa-youtube fa-2x"></i>
                    </button>
                </li>
            </ul>
            
        </footer>
    );
};

export default Footer;