import React, { useEffect, useState } from "react";
import Edit from '../../Asssets/edit.png';
import Delete from '../../Asssets/delete.png';
import palette from '../../Asssets/palette.png';
import './list.css';


function Listview (props){
    let [edit,setEdit]=useState(false);
    let [show,setshow]=useState(false);
    let [colored, setColour]=useState("white");
    let colorarray=["white","pink","grey","yellow","cyan"];

    function deleteNote(){
        props.remove(props.id);
    }

    function startEdit(){
        props.update(props.id);
    }
    
    async function changeColour(i){
        let c=colorarray[i];
        setColour(c);
        await props.colorupdate(props.id,colored);
        console.log(colored);

    }

    function showoption(condition){
        if(condition==="t")setshow(true);
        else setshow(false);
    }

    return(
        <>
                    <div className="item " style={{backgroundColor:props.col}} >
                        <div className="title">{props.title}</div>
                        <div className="content">{props.content}</div>
                        <div className="opt">
                            <div className="actionbutton" onClick={()=>showoption("t")}><img src={palette}/></div>
                            <div className="actionbutton" onClick={()=>startEdit()}><img src={Edit}/></div>
                            <div className="actionbutton" onClick={deleteNote}><img src={Delete}/></div>
                            
                            
                            
                            
                        </div>
                        
                    </div>
                    {show?( <div className="hidecolor ">
                            <div style={{backgroundColor:colorarray[0]}} onClick={()=>changeColour(0)}></div>
                            <div style={{backgroundColor:colorarray[1]}} onClick={()=>changeColour(1)}></div>
                            <div style={{backgroundColor:colorarray[2]}} onClick={()=>changeColour(2)}></div>
                            <div style={{backgroundColor:colorarray[3]}} onClick={()=>changeColour(3)}></div>
                            <div style={{backgroundColor:colorarray[4]}} onClick={()=>changeColour(4)}></div>
                            <div className="close" onClick={()=>showoption("f")}>close</div>
                        </div>):(<div></div>)}             
        </>            
    )
}

export default Listview;