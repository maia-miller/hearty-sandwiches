import React from 'react'

function copyTextToClipboard(text) {
  var textArea = document.createElement("textarea");

//styling
  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0;
  textArea.style.width = '2em';
  textArea.style.height = '2em';
  textArea.style.padding = 0;
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';
  textArea.style.background = 'transparent';

//make text appear then disappear
  textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      let successful = document.execCommand('copy');
      let msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copying ' + text+ ' was ' + msg);
    } catch (err) {
      console.log('Oops, unable to copy');
    }
    document.body.removeChild(textArea);
  }


export default (props) => {

  return (
    <form id='contact' className='contact'>
      <div className='hero'>
        <div className='container has-text-centered'>
          <h1 className='title is-2'>Conversations are fun!</h1>
          <p>You should <strong>get in touch with me</strong> through one of the means below:</p>
          <br />
          <br />

          <div className='columns has-text-centered'>
            <div className='column' onClick={() => copyTextToClipboard('maiamiller25@gmail.com')}>
              <img className='icon-img' src="../images/email.png" />
                <a href="#footer"><p>Email</p></a>
            </div>

            <div className='column '>
              <a href="https://github.com/maia-miller">
                <img className='icon-img' src="../images/github.png" />
                <p>GitHub</p>
              </a>
            </div>

            <div className='column '>
              <a href="https://www.linkedin.com/in/maiamiller/">
                <img className='icon-img' src="../images/linkedin.png" />
                <p>LinkedIn</p>
              </a>
            </div>

          </div>

          <input readOnly type="text" value="maiamiller25@gmail.com" id="myInput" />
        </div>
      </div>
    </form>
  )
}
