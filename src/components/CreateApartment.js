import { useState } from "react";
import { useNavigate } from "react-router-dom";


function CreateApartment (props) {
    const [title,setTitle] = useState("");
    const [pricePerDay,setpricePerDay] = useState(0);
    const [img,setimg] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        
        
        const newApartment = {
         
          "title": title,
          "pricePerDay": pricePerDay,
          "img":img
         
        };
    
        props.callbackToCreate(newApartment);
    
    //clear form */
    setTitle("");
    
    setpricePerDay(0);
    setimg("");
    navigate("/apartments")
    
    }
    


return(

    <>
<h2>Create apartment</h2>
<form onSubmit={handleSubmit}>
<label>
Title: 
  <input type="text" name = "title"
  
   placeholder="enter the title" 
   value={title}  
   onChange={(e) => { setTitle(e.target.value) }} />

</label>

<label>
pricePerDay:
<input type= "number" name ="pricePerDay" 
placeholder="pricePerDay"
 min ={ 0 }max = {100} 
 value ={pricePerDay}
onChange = {(e) =>{setpricePerDay(e.target.value)}} />
</label>
<label>
Image:
<input type ="url" name = "img"
placeholder="Enter a URL for image"
 value ={img}
onChange = {(e) =>{setimg(e.target.value)}} />
</label>

  <button>Create Apartment</button>
</form>

    </>
)


}

export default CreateApartment;