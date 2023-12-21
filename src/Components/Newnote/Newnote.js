import React, { useState } from "react";
import './newnote.css';
import palette from '../../Asssets/palette.png';
import Listview from "../Notes/Listview";

function Newnote (props){
    const [count,setCount]=useState(0);
    let [colored, setColour]=useState("white");
    let [show,setshow]=useState(false);

    let colorarray=["white","pink","grey","yellow","cyan"];
     const [note, setNote]=useState({
        title:"",
        content:"",
    
        color:"white",
     });

     function changeColour(i){
        let c=colorarray[i];
        setColour(c);
        
        setNote((prev)=>{
            return{...prev,color:colored}
        })
        console.log(c);
    }

    function showoption(condition){
        if(condition==="t")setshow(true);
        else setshow(false);
    }
    
    function newText(e){
        const {name, value}=e.target;
        setNote((prev)=>{
            return{...prev,[name]:value,id:count}
        })
        console.log(note);
    }

    async function addList(){
        if(note.title==="" && note.content==="") return;
        
        setCount(count+1);
        await props.notes(note);
         setNote({ 
            title:"",
         content:"",
         
         color:"white",
        });
        
        
    }

    return(
        <>
        <div className="newnote" style={{backgroundColor:note.color}}>
            <div className="noteTitle">
                <input type="text" className="titleinput" name="title" placeholder="Title" value={note.title} onChange={(e)=>newText(e)}/>
            </div>
             <div className="noteinput"> 
                 <textarea  id="txt" col={50} placeholder="Take a note.." name="content" value={note.content} onChange={(e)=>newText(e)}></textarea> 
            </div>
            <div className="options">
                <div className="colorslogo" onClick={()=>showoption("t")}>
                    <img src={palette} alt="colors"/>
                </div>
                <button  onClick={addList}>Add</button>
            </div>
           {show?( <div className="hidecolor ">
                            <div style={{backgroundColor:colorarray[0]}} onClick={()=>changeColour(0)}></div>
                            <div style={{backgroundColor:colorarray[1]}} onClick={()=>changeColour(1)}></div>
                            <div style={{backgroundColor:colorarray[2]}} onClick={()=>changeColour(2)}></div>
                            <div style={{backgroundColor:colorarray[3]}} onClick={()=>changeColour(3)}></div>
                            <div style={{backgroundColor:colorarray[4]}} onClick={()=>changeColour(4)}></div>
                            <div className="close" onClick={()=>showoption("f")}>close</div>
                        </div>):(<div></div>)}
        </div>
        
        </ >

    )
}

export default Newnote;
{/*aria-placeholder="Take a note" role="textbox"  tabIndex={0}  onChange={(e)=>newText(e.val())} contentEditable="true" aria-multiline="true"  >
              */}