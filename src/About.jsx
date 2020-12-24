import React from 'react'

function Faq() {
    return (
        <div className='about'>
            <h2 style={{
                display: 'flex', 
                justifyContent: 'center',
                padding: '35px'
            }}> 
                    Youtube to mp3/mp4
            </h2>
            <p style={{
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'left',
                paddingLeft: '50px',
                paddingRight: '50px',
                paddingBottom: '50px',
                textOverflow: 'ellipsis',
                maxWidth: '75ch',
                margin: 'auto',
            }}>
                By using our converter you can easily convert YouTube videos to 
                mp3 (audio) or mp4 (video) files and download them for free - 
                this service works for computers, tablets and mobile devices.
                The videos are always converted in the highest available quality. 
                Please note that we can only convert videos up to a length of 8-10 hour - 
                the limitation is necessary, so the conversion of any video will not 
                take more than a couple of minutes.
                Our service is for free and does not require any software or 
                registration. By using our service you are accepting our terms of use.
                To convert a video, copy the YouTube video URL into our converter, 
                choose a format and click the convert button. As soon as the 
                conversion is finished you can download the file by clicking on 
                the download button.
                Enjoy! We hope you like our service.
            </p>
        </div>
    )
}

export default Faq
