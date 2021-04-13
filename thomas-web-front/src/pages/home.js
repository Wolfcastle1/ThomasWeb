import React, { useState } from 'react';

import ChessWebApi from 'chess-web-api';

// import Button from '@material-ui/core/Button';





function Home() {
    
            

    var Chess = new ChessWebApi();
    
    const [profile, setProfile] = useState("");
    
    function openProfile() {
    
        setProfile({name: "Sam"});

        Chess.getPlayer('Wolfcastl3')
        .then(function(response){
            console.log(response);
        }, function(err){
            console.log(err);
        });
    
    }

    return (
        <div>
            <div className="home-grid">
                <div className='bubble-div'>
                    <button className="btn">Learning</button>
                </div>

                <div className='bubble-div'>
                    <button>Website Commissions</button>
                </div>

                <div className='bubble-div'>
                    
                    <button>Hobbies</button>
                </div>

                <div className='bubble-div'>
                    <button>More About Me</button>
                </div>
            </div>

            <button onClick={openProfile}>Open my Profile</button>
            <p>Profile: {profile.name} </p>
            <p>: </p>
            <p>: </p>
            
        </div>

    );
}

export default Home; 