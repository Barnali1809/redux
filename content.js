import './App.css';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {update} from  "./app/userSlice";

function Content(){
	const[name,setName]=useState("");
	
	const dispatch =useDispatch();
	
	const handleUpdate= (e) => {
		e.preventDefault();
		dispatch(update({name}));
	};
	
    return(
    		<div className="Content">
  			
  			<label>UserName </label><br></br>
  			
  			<input className="userInput" type="text" placeholder="Type Something..." onChange={(e)=>setName(e.target.value )}/>
  			
  			<button className="Update" onClick={handleUpdate}  >Update</button>
  		</div>
     );
}

export default Content;
