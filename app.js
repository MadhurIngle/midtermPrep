const nameIP = document.getElementById('name');
const ageIP = document.getElementById('age');
const phoneIP = document.getElementById('phone');

const button = document.getElementById('sendData');

button.addEventListener('click', playtime);

function playtime(){
    const nameval = nameIP.value;
    const ageval = ageIP.value;
    const phoneval = Number(phoneIP.value);

    const field1 = document.getElementById('spaceforname');
    const field2 = document.getElementById('spaceforage');
    const field3 = document.getElementById('spaceforphone');

    field1.innerHTML = '<p>' + nameval + '</p>';
    field2.innerHTML = '<p>' + ageval + '</p>';
    field3.innerHTML = '<p>' + phoneval + '</p>';
}