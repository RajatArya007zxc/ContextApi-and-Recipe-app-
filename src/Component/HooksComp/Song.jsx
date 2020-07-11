import React,{useState} from 'react';
//import uuid from' react-uuid'


const SongList = () => {
    const [song,setFirst]=useState([{title:"Barbie Girl ",id:1},
               {title:"Ginne merea",id:2},
                    {title:"baby",id:3}])

              const  AddSongs=()=>{setFirst([...song,{title:"Gora Gora Rang tera",id:4 }])}
                
                


    return (

        <div>
            <ul>
           {song.map(s=>{
               return (
                  
               <li key={s.id}>{s.title}</li>
              
               )
           })}
           </ul>
           <button onClick={AddSongs}>To Add</button>
        </div>
    );
}

export default SongList;
