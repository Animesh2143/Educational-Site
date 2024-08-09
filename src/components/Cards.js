import React, { useState } from 'react';
import Card from './Card';

const Cards = ({courses,category}) => {

    const [likedCourses,setLikedCourses]=useState([]);

    let allCourses=[];
    function getCourses(){
        if(category=="All"){
            Object.values(courses).forEach( (courseCategory)=>{
                courseCategory.forEach((courses)=>{
                    allCourses.push(courses);
                })
            })
        }
        else{
            allCourses=courses[category];
        }
        return allCourses;
    }
    getCourses();


  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
        {allCourses.map((course) => {
            return <Card key={course.id} course={course} 
            likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
        })}
    </div>
  )
}

export default Cards