import React from "react";
import './nav.css';
import Notes from '../../Asssets/notes.png';
import Search from '../../Asssets/search.png';
import MenuHam from '../../Asssets/menu.png';
import Refresh from '../../Asssets/refresh.png';
import Apps from '../../Asssets/apps.png';
import Keepicon from '../../Asssets/keepicon.png';

function Navbar(){
    return(
        <div className="nav"> 
        <div className="nav1section">
            <div className="ham navlogo">
                <img alt="=" src={MenuHam}/>
            </div>
            <div className="hometitle">
            <div className="keep-logo navlogo">
            <img alt="O" src={Keepicon}/>
            </div>
            <div className="pagename">Keep</div>
            </div>
        </div>
        <div className="nav2section">
            <div className="search-box">
                <div className="search-logo navlogo">
                    <img alt="o" src={Search}/>
                </div>
                <div><input className="search-input" type="text" placeholder="Search"/></div>
                
            </div>
        </div>
        
        
        <div className="nav3section">
            <div className="refresh navlogo"><img alt="ref" src={Refresh}/></div>
            {/* <div className="settings"><img alt="set" src=""/></div> */}
        </div>

        <div className="nav4section">
            <div className="apps navlogo"><img alt=":::" src={Apps}/></div>
            {/* <div className="profile">
                <img alt="img" src=""/>
            </div> */}
        </div>
        </div>
    )
}

export default Navbar;


