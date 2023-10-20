import React from 'react'
import { useEffect, useState } from 'react';
import {getSpeakers, deleteSpeaker}  from '../../../api/Api';
import { Link } from 'react-router-dom';


const ViewSpeaker = () => {

  const [speakers, setSpeakers]= useState ([]);

  useEffect(()=>{
getAllSpeakers();
  },[]);

  const getAllSpeakers = async()=>{
    let response =  await getSpeakers();
    setSpeakers(response.data);
 
   }
   const deleteSpeakerDetails=async(id)=>{
    alert('Data Deleted successfully');
    await deleteSpeaker(id);
    getAllSpeakers();

  }
  
   
  return (
    <>
    <div className="mt-4">
<table className="table table-striped table-hover">
  <thead className='table-success'>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Full Name</th>
      <th scope="col">Email</th>
      <th scope="col">Contact Number</th>
      <th scope="col">Designation</th>
      <th scope="col">Department</th>
      <th scope="col">Affilation</th>
      <th scope="col">Speaker Image Url</th>
      <th scope="col">Speaker Key Points</th>
      <th scope="col">Address</th>
      <th scope="col">Country</th>
      <th scope="col">State</th>
      <th scope="col">City</th>
      <th scope="col">Pincode</th>
      <th scope="col">Bio</th>
      <th scope="col">profile Url</th>
      <th scope='col'>Update</th>
      <th scopoe="col">Delete</th>
    </tr>
  </thead>
  <tbody>
{
  speakers.map(speaker=>(
    <tr key={speaker._id}>
      <td>{speaker._id}</td>
      <td>{speaker.speakerfullname}</td>
      <td>{speaker.speakeremail}</td>
      <td>{speaker.speakerphonenumber}</td>
      <td>{speaker.designation}</td>
      <td>{speaker.department}</td>
      <td>{speaker.affilation}</td>
      <td>{speaker.speakerimage}</td>
      <td>{speaker.speakerkeypoints}</td>
      <td>{speaker.speakeraddress}</td>
      <td>{speaker.speakercountry}</td>
      <td>{speaker.speakerstate}</td>
      <td>{speaker.speakercity}</td>
      <td>{speaker.speakerpincode}</td>
      <td><p style={{overflowY:'scroll',textAlign:'left', width:'600px',height:'80px',wordWrap:'break-word'}}>{speaker.bio}</p></td>
      <td>{speaker.profileurl}</td>
      <td>
      <Link to={`/dashboard/edit-speaker/${speaker._id}`}><button className='btn btn-primary ' style={{marginRight:5}}>Edit</button></Link>
        </td>
      <td><button type='button' className='btn btn-danger' onClick={()=>deleteSpeakerDetails(speaker._id)}>Delete</button></td>
      </tr>
  ))
}
   
   
  </tbody>
</table>
</div>
    
    
    </>
  )
}

export default ViewSpeaker