import React from 'react';
 

 
const Hello = ({name}) => {
  return (
    <React.Fragment> 
     <h2>{name.data.title} </h2>  
    <p>{name.data.description} </p>
    <p> <br/> </p>
     <div> 
     {name.data.related_articles.map(user => (
            <div key={user.aid}>
             <h3> {user.title} </h3>
             <p> {user.ctype} </p>
             <p> {user.type} </p>
            </div>
          ))}
     
     </div>
    </React.Fragment>
  )
}

export default Hello;

// {name.data.map(user => (
//             <div key={user.id}>
//              <h3> {user.title} </h3>
//              <p> {user.description} </p>
            
//             </div>
//           ))}