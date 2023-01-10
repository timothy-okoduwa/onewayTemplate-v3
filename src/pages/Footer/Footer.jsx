import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
  return (
    <div style={{ backgroundColor: 'black', paddingTop: '50px', color: 'white', }}>
      <div className='wow'>
        <div className="container">
          <div className='flexx'>
            <div className=' mt-4'>
              <div className='love'>Made With ❤️ In Nigeria</div>
              <div className='vestar'>By VestarPlus</div>
            </div>
            <div className='pftt  mb-4'>
              <div>
                <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
                  <span className='px-4'>Paid Template</span>
                </Link>

                <Link to='/free' style={{ textDecoration: 'none', color: 'white' }}>
                  <span className='px-4'>Free Template</span>
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
