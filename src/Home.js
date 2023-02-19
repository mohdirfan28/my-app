import React from "react";

const Home = (props)=> { 

    return (
        <>
<h1>Name</h1>
{
    props.user.map((item,i)=>{
        return <ul key={i}><li>{item.name}</li></ul>

    })
}

        </>
        
        
    )
}

export default Home;