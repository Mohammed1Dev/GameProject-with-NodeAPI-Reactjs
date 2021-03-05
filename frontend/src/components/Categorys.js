import React, { useState,useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

 function Categorys() {
    const [category,setCategory] = useState([]);


    useEffect(() => {   
        axios.get('http://127.0.0.1:3000/api/category')
          .then(res =>{
            setCategory(
                res.data
                )
              //  console.log(res.data);
          }
		  )
}); 

   

	
	return (
	
        <div className="row mt-5">

          {category.map(item =>(

             <div className="col-lg-4 col-12 mb-3 " key={item._id}>
               <Link to={`/quiz/${item._id}`} class="text-center d-block">
            <div className="card carts p-5">
              <div className="card-body">
                <h3 className="card-title text-center">{item.name}</h3>
              </div>
            </div>
            </Link>
          </div>
        
        



          )

          )}
          

        </div>
    
      
	)
}

export default Categorys