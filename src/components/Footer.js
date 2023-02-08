import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css';
import { Button } from './Button';


function Footer() {
  return (
    <div className='footer-container'>
    <section className='footer-subscription'>
      <p className='footer-subscription-heading'>
        Join the Adventure newsletter to receive our best vacation deals
      </p>
      <p className='footer-subscription-text'>
        You can unsubscribe at any time.
      </p>
      <div className='input-areas'>
        <form>
          <input
            className='footer-input'
            name='email'
            type='email'
            placeholder='Your Email'
          />
          <Button buttonStyle='btn--outline'>Subscribe</Button>
        </form>
      </div>
    </section>
    <div className='footer-links'>
      <div className='footer-link-wrapper'>
        <div className='footer-link-items'>
          <h2>About Us</h2>
          <Link to='/sign-up'>How it works</Link>
          <Link to='/'>Testimonials</Link>
          <Link to='/'>Careers</Link>
          <Link to='/'>Investors</Link>
          <Link to='/'>Terms of Service</Link>
        </div>
        <div className='footer-link-items'>
          <h2>Contact Us</h2>
          <Link to='/'>Contact</Link>
          <Link to='/'>Support</Link>
          <Link to='/'>Destinations</Link>
          <Link to='/'>Sponsorships</Link>
        </div>
      </div>
      <div className='footer-link-wrapper'>
        <div className='footer-link-items'>
          <h2>Videos</h2>
          <Link to='/'>Submit Video</Link>
          <Link to='/'>Ambassadors</Link>
          <Link to='/'>Agency</Link>
          <Link to='/'>Influencer</Link>
        </div>
        <div className='footer-link-items'>
          <h2>Social Media</h2>
          <Link target='_blank' to='https://www.instagram.com/'>Instagram</Link>
          <Link target='_blank' to='https://www.facebook.com/'>Facebook</Link>
          <Link target='_blank' to='https://www.youtube.com/'>Youtube</Link>
          <Link target='_blank' to='https://www.twitter.com/'>Twitter</Link>
        </div>
      </div>
    </div>
    <section className='social-media'>
      <div className='social-media-wrap'>
        <div className='footer-logo'>
          <Link to='/' className='social-logo'>
            TRVL
            <i className='fab fa-typo3' />
          </Link>
        </div>
        <Link to='https://ve-react.netlify.app/' target='_blank' aria-label='Valentin E. Portfolio'><small className='website-rights'>Valentin E. © 2023</small></Link>
        <div className='social-icons'>
          <Link
            className='social-icon-link facebook'
            to='https://www.facebook.com/'
            target='_blank'
            aria-label='Facebook'
          >
            <i className='fab fa-facebook-f' />
          </Link>
          <Link
            className='social-icon-link instagram'
            to='https://www.instagram.com/'
            target='_blank'
            aria-label='Instagram'
          >
            <i className='fab fa-instagram' />
          </Link>
          <Link
            className='social-icon-link youtube'
            to='https://www.youtube.com/'
            target='_blank'
            aria-label='Youtube'
          >
            <i className='fab fa-youtube' />
          </Link>
          <Link
            className='social-icon-link twitter'
            to='https://www.twitter.com/'
            target='_blank'
            aria-label='Twitter'
          >
            <i className='fab fa-twitter' />
          </Link>
          <Link
            className='social-icon-link twitter'
            to='https://www.linkedin.com/'
            target='_blank'
            aria-label='LinkedIn'
          >
            <i className='fab fa-linkedin' />
          </Link>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Footer