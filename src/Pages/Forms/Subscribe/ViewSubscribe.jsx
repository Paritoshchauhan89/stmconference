import React from 'react'
import { useEffect, useState } from 'react';
import {getSubscribers}  from '../../../api/Api';
import Sidebar from '../../../components/Sidebar/Sidebar';

const ViewSubscribe = () => {

    
  const [subscribers, setSubscriber]= useState ([]);

  useEffect(()=>{
    getAllContacts();
  },[]);

  const getAllContacts = async()=>{
    let response =  await getSubscribers();
    setSubscriber(response.data);
 
   }

  
   
  return (
    <>
   <div className="d-flex">
    <Sidebar/>
   <div className="mt-5 container"> <h3 className='text-center mb-4'>All Subscribers Data</h3>
<table className="table border table-striped table-hover " >
  <thead className='table-success' >
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Email </th>
    </tr>
  </thead>
  <tbody>
{
  subscribers.map(subscribe=>(
    <tr key={subscribe._id}>
      <td>{subscribe._id}</td>
      <td>{subscribe.user_email}</td>
      
      
    
      </tr>
  ))
}
   
   
  </tbody>
</table>
</div>
   </div>
    
    
    </>
  )
}

export default ViewSubscribe