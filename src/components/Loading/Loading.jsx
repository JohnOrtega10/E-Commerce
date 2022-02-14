import React from 'react';
import './Loading.styles.css'

const Loading = () => {

    
    return (
        <div className='loading-container'>
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    );
};

export default Loading;  