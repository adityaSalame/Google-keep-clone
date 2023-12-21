import React, { useEffect, useState } from "react";
import Aside from "../aside/Aside";
import Newnote from "../Newnote/Newnote";
import GridNotes from "../Notes/GridNotes";
import Listview from "../Notes/Listview";


function MainPage (){

   const [edit,setshowedit]=useState("false");
   const [editidx,setEditidx]=useState(-1); 
   let [notesarray,setNotesarray]=useState([]);
   const [editnote, seteditNote]=useState({
      title:"",
      content:"",
  
      color:"white",
   });
   useEffect(()=>{
      let arr=localStorage.getItem("allNotes");
      if(!arr) localStorage.setItem("allNotes",JSON.stringify(arr));
      setshowedit(false);


   },[])

    const added=(note)=>{
   
         setNotesarray(prev=>{
             return [note, ...prev];
         });
         
         console.log(notesarray);
         localStorage.setItem("allNotes", JSON.stringify(notesarray));
    }

    const removeNote=(id)=>{
      
         
          setNotesarray((prevlist)=>prevlist.filter((item,idx)=> {return idx!==id}));
         
         console.log(notesarray);
         
       
     };
    
     const updatedColor=(id,color)=>{
      setNotesarray(prevNotes => {
         return prevNotes.map((note, idx) => {
           if (idx === id) {
             return { ...note, color: color }; 
           }
           return note; 
         });
       });
     }

     const updateText=(id,title,content,color)=>{
      setEditidx(id);
         setshowedit(true);
         seteditNote(prev=>{return {...prev,
            title:title, color:color, content:content
         }})
     }

     function changeText(e){
      const {name, value}=e.target;
      seteditNote((prev)=>{
          return{...prev,[name]:value}
      })
      console.log(editnote);
     }

     function editedList(){
      setNotesarray(prevNotes => {
         return prevNotes.map((note, idx) => {
           if (idx === editidx) {
             return { ...note, color:editnote.color, title:editnote.title, content:editnote.content }; 
           }
           return note; 
         });
       });
       setshowedit(false);
     }



    return(
       <div className="main">
         <Aside/>
         <div className="notes_section">
            <Newnote notes={added}/>
            {edit?
            (<div className="edit" style={{backgroundColor:editnote.color}}>
               <div className="noteTitle">
                  <input type="text" name="title" placeholder="Title" value={editnote.title} onChange={(e)=>changeText(e)}></input>
               </div>
               <div className="noteinput"> 
                  <textarea  id="txt" col={50} placeholder="Edit the note.." name="content" value={editnote.content} onChange={(e)=>changeText(e)}></textarea> 
               </div>
               <div className="options">
                  
                  <button  onClick={editedList}>Close</button>
               </div>
            </div>)
            :
            (<div></div>)
            }
            <div className="listview">
            {
               notesarray.map((note,idx)=>{
                  return <Listview
                     key={idx}
                     id={idx}
                     title={note.title}
                     content={note.content}
                     remove={removeNote}
                     col={note.color}
                     colorupdate={updatedColor}
                     update={updateText}
                     />
               })
            }
            </div>
            
           
         </div>
       </div>
    )
}

export default MainPage;