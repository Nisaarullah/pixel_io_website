import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <>
    <div className='footer'>
        <div className='logo'>
        <h3>Pixel.IO</h3>
        </div>
        <div className='footer_content'>
            <div>
              <h3>Contacts</h3>
              <p>abc123@gmail.com </p>
            </div>
            <div className='input'>
                <h3>Follow</h3>
                <p>Sign up to get the latest news on our product</p>
                <input></input>
                <button>Subscribe</button>
            </div>
            <div>
              <h3>Youtube</h3>
              <h3>Facebook</h3>
              <h3>linkedln</h3>

            </div>
        </div>
    </div>
    </>
  )
}

export default Footer