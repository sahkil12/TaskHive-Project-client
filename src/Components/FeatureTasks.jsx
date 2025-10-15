import { useEffect, useState } from "react";

const FeatureTasks = () => {
    const [tasks,setTasks]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/featuredTasks')
        .then(res=>res.json())
        .then(data=>{
            setTasks(data);
        })  
    },[])
    console.log(tasks);
    return (
        <div>
            
        </div>
    );
};

export default FeatureTasks;