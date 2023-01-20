import { Link } from 'react-router-dom';
import '../App.css';
function ApartmentList (props) {


    return(
    
        <>
        <div>
        {props.apartmentsArr.map((apartment) => (
                <div className="card">
                <h3>{apartment.title}</h3>
                <p> price: {apartment.pricePerDay}</p>
               
                <Link to={"/apartments/" + apartment._id}>More Details</Link>
                </div>
           
              ))}
              </div>
        </>
    )
    
    
    }
    
    export default ApartmentList;