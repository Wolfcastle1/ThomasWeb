import React from 'react';

import BCBackground from '../images/BattleCruiser.jpg';


function Header() {

    return(

        <body className='headBody'>
            <img alt="this is the alt" src={BCBackground} className='headImage'/>
        </body>

    );

}

export default Header; 