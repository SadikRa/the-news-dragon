import React from 'react';
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'

const QZone = () => {
    return (
        <div className='bg-secondary text-center my-5 rounded py-5'>
            <h1>Q-Zone</h1>
            <div>
                <img src={qzone1} alt="" srcset="" />
                <img className='my-3' src={qzone2} alt="" srcset="" />
                <img src={qzone3} alt="" srcset="" />
            </div>
        </div>
    );
};

export default QZone;