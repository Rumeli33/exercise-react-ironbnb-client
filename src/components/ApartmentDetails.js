import { useParams } from "react-router-dom";



import { Link} from "react-router-dom";

function ApartmentDetails (props) {
    

    const {apartmentId } = useParams();
    const details = props.apartmentsArr.find(ApartmentDetails =>{
        return ApartmentDetails._id == apartmentId;
      })

      const renderDetails = () => {
        return (
          <div className="box">
          <div className="card">
            <h1>{details.title} </h1>
         <p>Price: {details.pricePerDay} </p> <br />
          
        <p> <img src={details.img} alt ="pic" /></p>
    <br></br>
    
          </div>
          </div>
        );
      };
    

    return(
    
        <>
    <h2>Details of apartment</h2>
    {details && renderDetails()}
  <Link to="/">Back</Link>
 
    
        </>
    )
    
    
    }
    
    export default ApartmentDetails;