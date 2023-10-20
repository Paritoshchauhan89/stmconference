import React from 'react'
import { useEffect, useState } from 'react';
import {getNewss, deleteNews}  from '../../../api/Api';
import { Link} from 'react-router-dom';

const ViewNews = () => {


  const [newss, setNewss]= useState ([]);


  useEffect(()=>{
    getAllNewss();
  },[]);

  const getAllNewss = async()=>{
    let response =  await getNewss();
    setNewss(response.data);
 
   }
   const deleteNewsDetails=async(id)=>{
    alert('Data Deleted successfully');
    await deleteNews(id);
    getAllNewss();


  }
  
  return (
    <>
    <div className="mt-4">
<table className="table border table-striped table-hover" style={{ textAlign:'justify'}} >
  <thead className='table-success'>
    <tr className='text-center'>
      <th scope="col" >ID</th>
      <th scope="col ">Title</th>
      <th scope="col ">Image  url</th>
      <th scope="col">Key Points</th>
      <th scope="col">decription1</th>
      <th scope="col">description2</th>
      <th scope='col'>Update</th>
      <th scopoe="col">Delete</th>
    </tr>
  </thead>
  <tbody style={{overflow:'auto'}}>
{
  newss.map(news=>(
    <tr  key={news._id} >
      <td>{news._id}</td>
      <td><p style={{width:'400px',wordWrap:'break-word'}}>{news.title}</p></td>
      <td><p style={{textAlign:'left', width:'400px',height:'80px',wordWrap:'break-word',overflowY:'scroll'}}>{news.image}</p></td>
      <td><p style={{wordWrap:'break-word',width:'300px'}}>{news.keypoints}</p></td>
      <td><p style={{overflowY:'scroll',textAlign:'left', width:'600px',height:'80px',wordWrap:'break-word',whiteSpace: 'pre-line'}}>{news.description1}</p></td>
      <td><p style={{overflowY:'scroll',textAlign:'left', width:'600px',height:'80px',wordWrap:'break-word'}} >{news.description2}</p></td>
     
      <td>
      <Link to={`/dashboard/edit-news/${news._id}`}><button className='btn btn-primary' style={{marginRight:5}}>Edit</button></Link>
        </td>
      <td><button type='button' className='btn btn-danger' onClick={()=>deleteNewsDetails(news._id)}>Delete</button></td>
      </tr>
  ))
}
   
   
  </tbody>
</table>
</div>
    
    
    </>
  )
}

export default ViewNews