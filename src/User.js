import React from 'react';
import Home from './Home';
const User=()=>{

    const User = [
        {name: 'John'},
        {name: 'Ram'},
        {name: 'Jooooo'},
        {name: 'John'},
        {name: 'John'},

        
        
    ]
    return(
       <>
         <div>
        <h1> Hello Irfan</h1>
        </div>
        <Home  user={User}/>
        
       </>
    )
}
export default User;