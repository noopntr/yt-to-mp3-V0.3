import React from 'react'

function Footer() {
    return (
        <div className='footer' style={{
                position: "fixed",
                left: "0",
                bottom: "0",
                width: "100%",
                backgroundColor: "#078fff",
                color: "black",
                font: 'bold',
                fontSize: '12px',
                textAlign: "center",
              }
        }>
            <p>All rights reserved © NOOPDEV - 2020</p>
        </div>
    )
}

export default Footer
