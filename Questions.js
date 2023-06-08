import React ,{useState }from 'react'
import {AiOutlineMinus,AiOutlinePlus} from'react-icons/ai';
const Questions = ({title,info}) => {
    const[showinfo,setShowinfo]=useState(false);
    const[button,changeButton]=useState('+');

    const handleClick=()=>{
        if(button==='+')
        {changeButton('-');
        setShowinfo(true);}
        if(button=='-'){
            changeButton('+');
        setShowinfo(false);
        }
    }
  return (
    <article className='question'>
        <header>
            <h4>{title}</h4>
            <button className='btn' onClick={handleClick} >{button}</button>
        </header>
        {
            showinfo && <p>{info}</p>
        }
        
    </article>
  )
}

export default Questions
