import React from 'react';
 

 
const Hello = ({name}) => {
  return (
    <div> 
       {name.data.map(user => (
            <div key={user.id}>
             <h3> {user.name} </h3>
             <p> {user.year} </p>
             <p> {user.color} </p>
             <p> {user.pantone_value} </p>
            </div>
          ))}
    
    </div>
  )
}

export default Hello;