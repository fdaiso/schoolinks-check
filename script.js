const scheduleContainer = document.querySelector('.schedule-container');
const userInput = document.getElementById('user-input');
let schedule = [{},{},{},{},{},{},{}];

async function getSchedule() {
    scheduleContainer.replaceChildren();
    schedule = [{},{},{},{},{},{},{}];
    const rawJSON = userInput.value;
    const data = JSON.parse(rawJSON);
    if (data.detail==="Authentication credentials were not provided.") {
        alert('Error, try signing in again');
        return false;
    };
    console.log(data);
    for(i = 0; i < data.length; i++) {
        const classTeacherPeriod = data[i].caseloads[0].name;
        schedule[Number(classTeacherPeriod.charAt(classTeacherPeriod.length-1))] = classTeacherPeriod;
        
    };
    console.log(schedule);
    schedule.forEach(period => {
        if ((typeof period === "string")) {
            createClassCard(period.substring(0,period.indexOf('-')-1), period.substring(period.indexOf('-')+2, period.length-4), period.charAt(period.length-1));
        }
    });
    userInput.value = '';
};

function createClassCard(classSubject, teacherName, classPeriod) {
    const classContainer = document.createElement('div');
    classContainer.className = 'class-container';

    const period = document.createElement('h2');
    period.textContent = classPeriod;

    const teacher = document.createElement('p');
    teacher.textContent = teacherName;
    teacher.className = 'teacher-name';

    const subject = document.createElement('p');
    subject.textContent = classSubject;

    const nonPeriod = document.createElement('span');
    nonPeriod.className = 'non-period';

    nonPeriod.appendChild(teacher);
    nonPeriod.appendChild(subject);
    
    classContainer.appendChild(period);
    classContainer.appendChild(nonPeriod);

    scheduleContainer.appendChild(classContainer);
};