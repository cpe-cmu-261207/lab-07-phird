import { useState } from "react";
import  CourseCard  from "./component/CourseCard";
import Link from 'next/link'
function GpaCal() {
  const grade = ["Grade","A", "B+", "B", "C+", "C", "D+", "D", "F", "W"];
  const credit = ["Credit",1, 2, 3];

  const [myCourses, setMyCourse] = useState([]);
  const [inputData, setInputData] = useState({cId:"", name:"" , grade:"",credit:""});
  const [GPA, setGPA] = useState(0);

  /**
   * Calculate the GPA of current courses
   * @returns the GPA of current courses
   */
  function calculateGPA(course) {
    // TODO
    let e_gpa = 0 
    let e_credit = 0
    let total_gpa = 0 

    course.forEach((items) =>{

      switch(items.grade){

        case 'A' :
          e_gpa = 4
          e_credit += Number(items.credit)
          total_gpa += e_gpa*Number(items.credit)
          break;
        case 'B+' :
          e_gpa = 3.5
          e_credit += Number(items.credit)
          total_gpa += e_gpa*Number(items.credit)
          break;
        case 'B' :
          e_gpa = 3
          e_credit += Number(items.credit)
          total_gpa += e_gpa*Number(items.credit)
          break;
        case 'C+' :
          e_gpa = 2.5
          e_credit += Number(items.credit)
          total_gpa += e_gpa*Number(items.credit)
          break;
        case 'C' :
          e_gpa = 2
          e_credit += Number(items.credit)
          total_gpa += e_gpa*Number(items.credit)
          break;
        case 'D+' :
          e_gpa = 1.5
          e_credit += Number(items.credit)
          total_gpa += e_gpa*Number(items.credit)
          break;
        case 'D' :
          e_gpa = 1
          e_credit += Number(items.credit)
          total_gpa += e_gpa*Number(items.credit)
          break;
        case 'F' :
          e_gpa = 0
          e_credit += Number(items.credit)
          total_gpa += e_gpa*Number(items.credit)
          break;
        default: 
      }
      
    });
    setGPA(total_gpa / e_credit)
  }

  /**
   * Should be called when a course is to be added to the list.
   * After adding the course to the list, the displayed GPA should be updated.
   * @param {*} event
   */
  function addCourse(event) {
    event.preventDefault();
    // TODO
    console.log("Course ID: " + inputData.cId  +" Name: " + inputData.name + " Grade: " + inputData.grade + " Credit: " + inputData.credit);
    if(!isNaN(inputData.cId) && inputData.name !=="" && inputData.grade!=="Grade" && !isNaN(inputData.credit) ){
      const course = [...myCourses,inputData]
      setMyCourse(course)
    // recalculate GPA
      calculateGPA(course);
    }else{
      alert("Please Check Your Data !");
    }
    
    // setInputData({cId:"" , name:"" , grade:"" , credit:""});
  }
  /**
   * Should be called when a course is to be removed from the list.
   * After removing the course from the list, the displayed GPA should be updated.
   * @param {*} id
   */
  function onDeleteCourse(id) {
    //console.log("i'd like to delete this course" + items.cId);
    const course = myCourses.filter(item=>{
      return item.cId !== id
    })
    setMyCourse(course)
    calculateGPA(course);
    // TODO
  }
  const style = {
    backgroundColor: '#957DAD',
    border: 'none',
    color: 'white',
    padding: '10px 10px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '10px 3px',
    cursor: 'pointer',
    }

  return (
    <div className="container mx-auto h-screen" >
        <table id ="Link">
            <tr >
                <td style= {style}><Link href="/">Home</Link></td>
                <td style= {style}><Link href="/gallery">Gallery</Link></td>
                <td style= {style}><Link href="/contact">Contact</Link></td>
                <td style= {style}><Link href="/gpa">GPA calculator</Link></td>
                <td style= {style}><Link href="/post">post</Link></td>
            </tr>
        </table>
        
      <h1 className="text-center text-4xl p-3 tracking-widest">
        GPA CALCULATOR
      </h1>
      <div className="myCourseTitle">
        <h1 className="titleText">MY COURSE</h1>
        {/* TODO display courses */}
      </div>

      <div className='inputForm'>

        <form  className="inputGrid" 
        onSubmit={e => {
          addCourse(e);
          
          }}> 
          
        
          <input 
            type='text' 
            id='courseID' 
            placeholder='Course ID ...'
            onChange={e => { setInputData({...inputData , cId : e.currentTarget.value})}}
          />

          <input 
            type='text' 
            id='courseName' 
            placeholder='Course Name ...'
            onChange={e => { setInputData({...inputData , name : e.currentTarget.value})}}
          />
          
          <select 
            id='gradeSelect' 
            onChange={e => { setInputData({...inputData, grade: e.currentTarget.value})}}>
              {grade.map(items => {return( <option>{items}</option>)})}
          </select>


          <select 
            id='creditSelect'
            onChange={e => { setInputData({...inputData, credit: e.currentTarget.value})}}
            > 
              {credit.map(items => {return( <option>{items}</option>)})} 
          </select>

          <button type='submit'> + </button>

        </form>
      </div>

      <table className="tableCourse">
        <tr id="tableTitle">
          <th>Course Name</th>
          <th>Grade</th>
          <th>Credit</th>
        </tr>
        <div className="addCourseCard"> {myCourses.map((items,index) => 
          {
            return <CourseCard key={index} cId={items.cId} name={items.name} grade={items.grade} credit={items.credit} del={onDeleteCourse} />
          })}
        </div>
      </table>
      <div className="gpaResult">
        <p> Your GPA : {GPA}</p>
      </div>
      
      
      {/* TODO add course input form */}

      {/* TODO display calculated GPA */}
    </div>
  );
}

export default GpaCal;