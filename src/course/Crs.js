import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

const Crs = () => {

  const [courses,setCourses]=useState({});
  const [loading,setLoading]=useState(true);
  const[category,setCategory]=useState(filterData[0].title);

  const fetchData = async()=>{
    setLoading(true);
    try{
      const res=await fetch(apiUrl);
      const output= await res.json();
      setCourses(output.data);
    }
    catch(err){
      toast.error("Something is Fishy here...");
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[]);

  console.log(courses);

  return(
    <div className="min-h-[100vh] flex flex-col">
      <Navbar/>
      <div className="bg-bgDark2">
        <Filter filterData={filterData} category={category} setCategory={setCategory}/>
        <div className="w-11/12 max-w-[1200px] mx-auto flex-wrap justify-center items-center min-h-[82vh]">
          {loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)};
        </div>
      </div>
    </div>
  );
};

export default Crs;
