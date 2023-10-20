import React from 'react'
import { useEffect, useState } from 'react';
import {getSponsers, deleteSponser}  from '../../../api/Api';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ViewSponser = () => {

const navigate = useNavigate();
  const [sponsers, setSponsers]= useState ([]);

  useEffect(()=>{
getAllSponsers();
  },[]);

  const getAllSponsers = async()=>{
    let response =  await getSponsers();
    setSponsers(response.data);
 
   }
   const deleteSponserDetails=async(id)=>{
    alert('Data Deleted successfully');
    await deleteSponser(id);
    getAllSponsers();

  }
  
   
  return (
    <>
    <div className="mt-4">
<table className="table border table-striped table-hover" >
  <thead className='table-success'>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Full Name</th>
      <th scope="col">Email</th>
      <th scope="col">Contact Number</th>
      <th scope="col">Address</th>
      <th scope="col">Country</th>
      <th scope="col">State</th>
      <th scope="col">City</th>
      <th scope="col">Pin Code</th>
      <th scope="col">Image Url</th>
      <th scope="col">About</th>
      <th scope="col">Key Points</th>
      <th scope='col'>Update</th>
      <th scopoe="col">Delete</th>
    </tr>
  </thead>
  <tbody>
{
  sponsers.map(sponser=>(
    <tr key={sponser._id}>
      <td>{sponser._id}</td>
      <td>{sponser.sponserfullname}</td>
      <td>{sponser.sponseremail}</td>
      <td>{sponser.sponserphonenumber}</td>
      <td>{sponser.sponserimage}</td>
      <td>{sponser.sponseraddress}</td>
      <td>{sponser.sponsercountry}</td>
      <td>{sponser.sponserstate}</td>
      <td>{sponser.sponsercity}</td>
      <td>{sponser.sponserpincode}</td>
      <td>{sponser.sponserkeypoints}</td>
      <td>{sponser.sponserabout}</td>
      <td>
      <Link to={`/dashboard/edit-sponser/${sponser._id}`}><button className='btn btn-primary' style={{marginRight:5}}>Edit</button></Link>
        </td>
      <td><button type='button' className='btn btn-danger' onClick={()=>deleteSponserDetails(sponser._id)}>Delete</button></td>
      </tr>
  ))
}
   
   
  </tbody>
</table>
</div>
    
    
    </>
  )
}

export default ViewSponser