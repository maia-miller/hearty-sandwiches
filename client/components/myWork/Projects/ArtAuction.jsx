import React from 'react'

export default (props) => {
  return (
    <div className='has-text-centered'>
      <h5 className='subtitle is-5'><strong>Wine and Art Auction</strong></h5>
        <figure className=''>
          <a href="https://www.dropbox.com/home/Work%20Portfolio/TAS%20-%20Wine%20and%20Art%20Auction?preview=Wine+and+Art+Auction+Catalogue+May+20+2015.pdf"><img src="../images/wineAndArt.jpg" /></a>
        </figure>
        <p className="description">I compiled the necessary information, in the correct order and in the appropriate tone, to convey confidence and professionalism to artists considering donating artwork to the auction. Nearly 70 artists applied as a result.</p>
        <div className='buttons is-centered'>
          <span className="tag is-danger">Marketing strategy</span>
          <span className="tag is-danger">Communication</span>
        </div>

        <div className='buttons is-centered'>
          <a href='https://www.dropbox.com/home/Work%20Portfolio/TAS%20-%20Wine%20and%20Art%20Auction?preview=Wine+and+Art+Auction+Catalogue+May+20+2015.pdf' className='button is-primary is-outlined'>View the Registration Package</a>
        </div>

    </div>
  )
}
