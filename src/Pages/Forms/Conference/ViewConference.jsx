import React from 'react'
import { useEffect, useState } from 'react';
import {getConferences, deleteConference}  from '../../../api/Api';
import { Link } from 'react-router-dom';
import './conferences.css'

const ViewConference = () => {


  const [conferences, setConference]= useState ([]);

  useEffect(()=>{
    getAllConferences();
  },[]);

  const getAllConferences = async()=>{
    let response =  await getConferences();
    setConference(response.data);
 
   }

   const deleteConferenceDetails=async(id)=>{
    alert('data Deleted successfully');
    await deleteConference(id);
    getAllConferences();

  }
  
   
  return (
    <>
    <div className="mt-4">
<table className="table table-striped table-hover border">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Conference Title</th>
      <th scope="col">Conference Start Date</th>
      <th scope="col">Conference Start Time</th>
      <th scope="col">Conference End Date</th>
      <th scope="col">Conference End Time</th>
      <th scope="col">Conference Image</th>
      <th scope="col">Sponsers Email</th>
      <th scope="col">Speakers Email</th>
      <th scope="col">Venue Name</th>
      <th scope="col">Feedback Url</th>
      <th scope="col">Description</th>
      <th scope="col">Manuscript Submission Url</th>
      <th scope='col'>Manuscript Submission Date</th>
      <th scopoe="col">Manuscript End Date</th>
      <th scopoe="col">Online & offline</th>
      <th scopoe="col">Conference Key Points</th>
      <th scopoe="col">Created Date</th>
      <th scopoe="col">Edit</th>
      <th scopoe="col">Delete</th>
    </tr>
  </thead>
  <tbody>
{
  conferences.map(conference=>(
    <tr key={conference._id}>
      <td>{conference._id}</td>
      <td>{conference.conferencetitle}</td>
      <td>{new Date(conference.conferencestartdate).toDateString()}</td>
      <td>{conference.conferencestarttime}</td>
      <td>{new Date(conference.conferencestartdate).toDateString()}</td>
      <td>{conference.conferenceendtime}</td>
      <td>{conference.conferenceimage}</td>
      <td>{conference.sponsersemail}</td>
      <td>{conference.speakersemail}</td>
      <td>{conference.venuename}</td>
      <td>{conference.feedbackurl}</td>
      <td>{conference.description}</td>
      <td>{conference.manuscriptsubmissionurl}</td>
      <td>{conference.manuscriptsubmissiondate}</td>
      <td>{conference.manuscriptenddate}</td>
      <td>{conference.onlineoffline}</td>
      <td>{conference.conferencekeypoints}</td>
      <td>{new Date(conference.createdAt).toDateString()}</td>
      
      <td>
      <Link to={`/dashboard/edit-conference/${conference._id}`}><button className='btn btn-primary' style={{marginRight:5}}>Edit</button></Link>
        </td>
      <td><button type='button' className='btn btn-danger' onClick={()=>deleteConferenceDetails(conference._id)}>Delete</button></td>
      </tr>
  ))
}
   
   
  </tbody>
</table>
</div>
    
    
    </>
  )
}

export default ViewConference