import React,{useState,useEffect} from 'react';
import uuid from 'react-uuid'


const SongList = () => {
    const [song,setFirst]=useState([{title:"Barbie Girl ",id:1}, {title:"Ginne merea",id:2},{title:"baby",id:3}])
    const [changeState,setChangeState]=useState('');
  const [age,setAge]=useState(23);
    const  AddSongs=(w)=>{setFirst([...song,{title:w,id:uuid()}])}
             
         const handleSubmit=(r)=>{
     
             r.preventDefault();
             AddSongs(changeState);
             setChangeState('');
         } 
         
         useEffect(() => {
            console.log('songs ',song)

         }, [song]);

         useEffect(() => {
            console.log("age increment",age);
         }, [age]);

    return (

        <div>
            <ul>
           {song.map(s=>{
               return (
                  
               <li key={s.id}>{s.title}</li>
              
               )
           })}
           </ul>
           
           <form onSubmit={handleSubmit}>
               <input type="text" value={changeState} onChange={(e)=>setChangeState(e.target.value)} required/>
              <input type="submit" value="hey"/>
           </form>
           <button onClick={()=>setAge(age+1)}>Add 1</button>
        </div>
    );
}

export default SongList;
