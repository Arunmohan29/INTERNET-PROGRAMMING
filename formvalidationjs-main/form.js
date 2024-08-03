document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const regNo = document.getElementById('regNo').value;
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const dept = document.getElementById('dept').value;
    const yearOfStudy = document.getElementById('yearOfStudy').value;
    const semester = document.getElementById('semester').value;
    const courseid = document.getElementById('courseid').value;
    const academicYear = document.getElementById('academicYear').value;
    const coursename = document.getElementById('coursename').value;
    const coursetype = document.getElementById('coursetype').value;
    const address = document.getElementById('address').value;
    const country = document.getElementById('country').value;
    const pincode= document.getElementById('pincode').value;
    const email = document.getElementById('email').value;
    
    
    if (!regNo || !name || !dob|| !yearOfStudy || !gender|| !dept || !semester || !courseid  || !academicYear ||!coursetype ||!coursename ||!address||!country||!pincode ||!email) {
        alert('Please fill out all fields.');
        return;
    }
    if(regNo.length !=9) {
        alert('Please enter correct Register number');
        regNo.focus();
    }
    if(!Number.isInteger(Number(regNo))) {
        alert('Please enter correct Register number');
        regNo.focus();
    }
    if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
        alert('Enter a valid mail in the correct format busing "@ and "."')
    }
    if(!Number.isInteger(Number(academicYear)) ){
        alert('Please enter Proper Academic Year');
        academicYear.focus();
    }
    if(academicYear.length!=4){
        alert('Please enter Proper Academic Year');
        academicYear.focus();
    }

    if(courseid.length!=7){
        alert('Please enter correct Course Id');
        courseid.focus();
    }
    if(!/^[A-Z a-z]{2}\d+$/.test(courseid)){
        alert('Please enter correct Course Id');
        courseid.focus();
    }
    
    if(!/^[A-Z a-z]+$/.test(country)){
        alert('Enter a correct country name');
        country.focus();

    }






    if(pincode.length !=6) {
        alert('Please enter Valid Pincode');
        pincode.focus();
    }
    if(!Number.isInteger(Number(pincode))) {
        alert('Please enter Valid Pincode');
        pincode.focus();
    }
    
   
    
    
    const formData = {
        regNo,
        name,
        yearOfStudy,
        semester,
        coursetype,
        coursename,
        academicYear,
        courseid,
        gender,
        dept,
        dob,address,
        country,
        pincode,
        email
    };

    console.log('Form Data:', formData);
    alert('Form submitted successfully!');
    
    // Here you might want to send the formData to a server or process it further
});
