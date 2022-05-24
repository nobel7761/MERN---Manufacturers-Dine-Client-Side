import React from 'react';
import './Partners.css';

import Partner1 from '../../../../images/partners/client-logo_01.png';
import Partner2 from '../../../../images/partners/client-logo_06.png';
import Partner3 from '../../../../images/partners/client-logo_05.png';
import Partner4 from '../../../../images/partners/client-logo_04.png';
import Partner5 from '../../../../images/partners/client-logo_03.png';
import Partner6 from '../../../../images/partners/client-logo_02.png';

const Partners = () => {
    return (
        <div className='py-16 bg-[#F7F7F7]'>
            <h1 className='text-center pb-6 text-4xl font-extrabold'>OUR SISTER CONCERNS</h1>
            <div className="container partners">
                <img src={Partner1} alt="Partner1" srcset="" />
                <img src={Partner2} alt="Partner2" srcset="" />
                <img src={Partner3} alt="Partner3" srcset="" />
                <img src={Partner4} alt="Partner4" srcset="" />
                <img src={Partner5} alt="Partner5" srcset="" />
                <img src={Partner6} alt="Partner6" srcset="" />
            </div>
        </div>
    );
};

export default Partners;