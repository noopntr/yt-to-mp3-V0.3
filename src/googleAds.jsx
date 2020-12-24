import React, { Component } from 'react'

class googleAds extends Component {
    
    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }

    render() {
        return (
            <ins class="adsbygoogle"
                style={{ display: "block", textAlign: "center" }}
                data-ad-layout="in-article"
                data-ad-format="fluid"
                data-ad-client="ca-pub-4768098912379951"
                data-ad-slot="9623960579">
            </ins>
        )
    }
}

export default googleAds