import React from 'react'
const Student = () => {
  return (<div>
    <h1>Welcome to Student Page</h1>
    <button type="button" class="btn btn-info">Get Details of all Students</button>
<h2>Assign Student to a mentor</h2>
<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">Student and Mentor name</span>
  </div>
  <input type="text" aria-label="First name" class="form-control"/>
  <input type="text" aria-label="Last name" class="form-control"/>
</div>
<button style={{marginTop:"10px"}}type="button" class="btn btn-primary">Create Student with mentor</button>
  </div>);
} 
export default Student;