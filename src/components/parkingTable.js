import React, {useState} from 'react';
const ParkingTable = (props) => {

	const exitParking = e => {
		console.log(e);
 	 }   
    return (
       <div className="col-sm-8 col-md-8">
			<div className="card mb-1"> 
			<div className="card-header bg-success text-white">
                Parking Table
            </div>               
				<div className="card-body">
					<table className="table table-sm">
						<thead>
							<tr>
								<th>Sr. No</th>
								<th>Car No.</th>
								<th>Color</th>
								<th>Slot</th>
								<th>Exit</th>
							</tr>
						</thead>
					<tbody>				
					{ props.parkings.length > 0 ? (                   
                    props.parkings.map((parking,i) => {
							const {carNo, slot, color} = parking;
							return (
								<tr key={i+1}>
								<td>{i+1}</td>		
								<td>{carNo}</td>								
								<td>{color}</td>
								<td>{slot}</td>
								<td><button className="btn btn-sm btn-info" onClick={() => props.exitParking(carNo,slot)}>Exit</button></td>
							</tr>
							)
							
						  })
					)
					: (
                    <tr>
                        <td colSpan={5}>No users found</td>
                    </tr>
                )   
				}
					</tbody>					
					
					</table>
				</div>
			</div>        
			</div>
        )
        
    }
export default ParkingTable;