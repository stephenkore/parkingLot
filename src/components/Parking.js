import React, { useState, useEffect } from 'react';
import AddCar from './addCar'; 
import ParkingTable from './parkingTable';
import parkingSlots from "../data.js";

function Parking(){
    const [parkings, setParkings] = useState([]);    
    const [slots,setSlots] = useState([]);  
    useEffect(() => {
        getAvilableSlots();
    }, []);

    const getAvilableSlots = (slot) => {
        console.log(slot);
        setSlots(slot)
        console.log(slots);
       
    }
    const addParkings = (cars) => { 
        if(parkingSlots.length !== 0 ){
            setParkings(parkings => ([...parkings, cars]));  
        }
             
      };
      
      const exitParking = (carNo,slot) => { 
        setParkings(parkings.filter((parking) => parking.carNo !== carNo));
        parkingSlots.push(slot);      
        parkingSlots.sort( function( a , b){
            if(a > b) return 1;
            if(a < b) return -1;
            return 0;
        });       
      };
     
      const handleChange = (e) => {
        if (e.target.value.length > 0) {
          let data =parkings.filter(function(i) {              
              return i.color.toLowerCase().match( e.target.value );
            });
            setParkings(data);
          }         
      }
        return (           
            <div className="row">
                <h4>No Of Parking Slot Available: <span className={`badge bg-${parkingSlots.length === 0 ? 'danger' : 'primary'}`} >
                 {parkingSlots.length}
                {/* {slots === undefined ? 0 : slots.length }  */}
                </span></h4>
                    <div className="row mb-5 mt-2">
                        <div className="col-sm-12">
                           <input type="text"  className="form-control" onChange={handleChange} placeholder="Type here..."/>
                        </div>
                    </div>
                    <AddCar addParkings={addParkings} getAvilableSlots={getAvilableSlots}/>  
                    <ParkingTable parkings={parkings} exitParking={exitParking} />
            </div>            
         );
        
}
 
export default Parking