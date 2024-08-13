import React from 'react'

import trim from '../../../Functions/trim';

import './Recommendation.styles.css';

function Recommendation({ data }) {

    return (
        <div className="recommendation" select="false">
            <div className="recommendation-image">
                <img src={data.img} />
            </div>
            <div className="recommendation-details">
                <div className="recommendation-name">{trim(data.name, 16)}</div>
                <div className="recommendation-price">{data.price}</div>
            </div>
        </div>
    )
}

export default Recommendation