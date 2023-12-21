import React from "react";
import './asidestyle.css';
import Notes from '../../Asssets/notes.png';
import Edit from '../../Asssets/edit.png';
import Archive from '../../Asssets/archive.png';
import Delete from '../../Asssets/delete.png';

function Aside(){
    return(
        <div className="asidemenu">
            <div className="menuopt">
                <div className="logos"> <img alt="n" src={Notes}/></div>
                <div className="hide">Notes</div>
            </div>
            <div className="menuopt">
                <div className="logos"> <img alt="e" src={Edit}/></div>
                <div className="hide">Edit Lables</div>
            </div>
            <div className="menuopt">
                <div className="logos"> <img alt="a" src={Archive}/></div>
                <div className="hide">Archives</div>
            </div>
            <div className="menuopt">
                <div className="logos"> <img alt="t" src={Delete}/></div>
                <div className="hide">Trash</div>
            </div>
        </div>
    )
}

export default Aside;