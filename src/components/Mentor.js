import React from 'react'
const Mentor = () => {
  return (<div>
<h1>Welcome To Mentor Page</h1>
<button type="button" class="btn btn-info">Get Details of all Mentors</button>
<form>
  <div class="form-row align-items-center">
    <div class="col-auto">
      <label class="sr-only" for="inlineFormInput">Mentor Name</label>
      <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Mentor Name"/>
    </div>
    <div class="col-auto">
      <label class="sr-only" for="inlineFormInput">Assigned Student</label>
      <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Assigned Student"/>
    </div>     
    <div class="col-auto">
      <button type="submit" class="btn btn-primary mb-2">Submit</button>
      <button style={{marginLeft:"6px",paddingTop:"5px"}}type="button" class="btn btn-dark">upadte List of students </button>
    </div>
  </div>
</form>
  </div>  );
}
 
export default Mentor;