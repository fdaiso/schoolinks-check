const text = document.getElementById('test');
const success = document.getElementById('success');
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo1NzU4MDY1LCJleHAiOjE3ODU4ODE4NTYsImF1ZCI6IlB5dGhvbkFwaSIsImlzcyI6IkNha2VQSFAiLCJpYXQiOjE3ODU4Njc0NTYsIm9iamVjdF90eXBlIjpbInN0dWRlbnQiXSwiaGFzaF9wYXNzd29yZCI6IkE4M0JDOEYwMkVCOTlCODRCNURCOEM5M0RCRDQyRDUwIiwib2JqZWN0X2lkIjoyNzAzMjIxfQ.fNfdVnqEIfrmM5AQ9-F-UUdElFAWClITNeGLeqyohLk'
text.textContent = 'hi';
const classes = [{},{},{},{},{},{},{}];
async function getSchedule() {
    const response = await fetch('https://app.schoolinks.com/api/v1/sl_users/students/0/k12-admins/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        }
    });

    const data = await response.json();
    console.log(data);
    for(i = 0; i < data.length; i++) {
    const fullString = data[i].caseloads[0].name;
    classes[Number(fullString.charAt(fullString.length-1))] = fullString;
    }
    console.log(classes);
   /* const name = JSON.parse(data);
    console.log("--------");
    console.log(name);
    text.textContent = name.caseloads[0].name;
    success.textContent = 'yes';*/
}