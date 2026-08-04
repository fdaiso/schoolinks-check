const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo1NzU4MDY1LCJleHAiOjE3ODU4ODE4NTYsImF1ZCI6IlB5dGhvbkFwaSIsImlzcyI6IkNha2VQSFAiLCJpYXQiOjE3ODU4Njc0NTYsIm9iamVjdF90eXBlIjpbInN0dWRlbnQiXSwiaGFzaF9wYXNzd29yZCI6IkE4M0JDOEYwMkVCOTlCODRCNURCOEM5M0RCRDQyRDUwIiwib2JqZWN0X2lkIjoyNzAzMjIxfQ.fNfdVnqEIfrmM5AQ9-F-UUdElFAWClITNeGLeqyohLk'
const scheduleContainer = document.querySelector('.scheduleContainer');

const schedule = [{},{},{},{},{},{},{}];
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
        const classTeacherPeriod = data[i].caseloads[0].name;
        schedule[Number(classTeacherPeriod.charAt(classTeacherPeriod.length-1))-1] = classTeacherPeriod;
    }
    console.log(schedule);
    
}

function createClassCard(classSubject, teacherName, classPeriod) {
    const classContainer = document.createElement('div');
    classContainer.className = 'classContainer';

    const period = document.createElement('h2');
    period.textContent = classPeriod;

    const teacher = document.createElement('p');
    teacher.textContent = teacherName;

    const subject = document.createElement('p');
    subject.textContent = classSubject;

    classContainer.appendChild(period);
    classContainer.appendChild(teacher);
    classContainer.appendChild(subject);

    scheduleContainer.appendChild(classContainer);
}