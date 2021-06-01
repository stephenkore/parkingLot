import React, {useState} from 'react';
//let avaialebleSlots = [1,2,3,4,5,6,7,8];
import parkingSlots from "../data.js";
 
const AddCar = (props) => {  
    const colors = ['Red','Black','White',"Blue"];
    const [err, setErr] = useState('');
    const initialParking = {  slot: null,carNo: '',color: 'White',slotAvil:false };
    const [parkings, setParking] = useState(initialParking);
    
    const handleSubmit = e => {
        e.preventDefault();  
        if (parkings.carNo) {
            parkings.slot = parkingSlots[0];
            parkings.slotAvil= true;           
            props.addParkings(parkings);
            parkingSlots.shift(); 
            props.getAvilableSlots(parkingSlots);
            setParking(initialParking);
        } 
        else{
            setErr("Please Enter Car No.")
        }
    }
    const handleChange = e => {
        setErr('');    
        const {name, value} = e.target;
        setParking({...parkings, [name]: value});
    }  
    return (
        <div className="col-sm-12 col-md-4 col-lg-4">
        <div className="card">
            <div className="card-header bg-success text-white">
                 Add Car/Parking
            </div>
        <div className="card-body">
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                        <label htmlFor="" className="form-label">Car No:</label>
                        <input type="text" className="form-control" id=""  
                        value={parkings.carNo}  name="carNo" onChange={handleChange} />
                        <p className="text-danger">
                            {err}
                        </p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Select Color</label>
                        <select className="form-select" name="color" 
                        value={parkings.color} onChange={handleChange}>
                            {
                                colors.map((color,i)=>(
                                    <option key={color} value={color}>{color}</option>
                                ))
                            }
                        </select>
                    </div>                 
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Add Parking</button>
        </form>
        </div>
        </div>
        
        </div>
    )
}

export default AddCar;