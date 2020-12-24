import React from 'react'

function Faq() {
    return (
        <div className='faq'>
            <h2 style={{
                display: 'flex', 
                justifyContent: 'center',
                padding: '35px'
            }}> 
                    FAQ
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
                <span style={{fontSize: '19px'}}>The conversion got stuck on 
                initializing.</span>
                <br></br>
                <br></br>
                Please delete your browser cache. Restart your browser and 
                try again. If it still does not work, please try to use 
                another browser. Please make also sure to turn off AdBlock 
                (or similar ad blocking extension). AdBlock recently made 
                some changes that might be blocking you from using our service. 
                If the conversion still gets stuck, please send us a message 
                using our contact form with the video URL and your chosen format.
                <br></br>
                <br></br>
                <br></br>
                <span style={{fontSize: '19px'}}>There is no download button. </span>
                <br></br>
                <br></br>
                
                Please be sure to disable your AdBlocker. Your AdBlocker may 
                have removed the download button.
                <br></br>
                <br></br>
                <br></br>
                <span style={{fontSize: '19px'}}>I am getting an error message.</span>
                <br></br>
                <br></br>
                
                This can be due to mutiple reasons. Please be sure:
                <br></br>
                • the video is not longer than the maximum supported video length (8-10 hour)
                <br></br>
                • the video is still available online (you must be able to watch it without any login)
                <br></br>
                <br></br>
                It is not possible to save files to your iPad or iPhone without an app. Please, download the app „Documents by Readdle” from the Apple Store to be able to save files to your device.
                <br></br>
                <br></br>
                <br></br>
                
                <span style={{fontSize: '19px'}}>Is it possible to change the audio quality?</span>
                <br></br>
                <br></br>
                No. The quality of the converted files is always the same.
            </p>
        </div>
    )
}

export default Faq
