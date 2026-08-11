
import hotpotImg from '../img/wushu_hotpot.png';

export function createHomeTab(){
    const img = document.createElement('img');
    img.src = hotpotImg;
    img.alt = 'hotpot pic';
    document.querySelector('#content').appendChild(img);

    //creates the schedule of restaurant page
    const schedule = document.createElement('ul');
    schedule.innerHTML = `<p>Holiday Hours subject to change </p>
                            <p> Mon-Fri : 9am - 9pm </p>
                            <p> Sat-Sun: 10am - 11pm </p>`;

    schedule.classList.add('schedule-hours');
    document.querySelector('#content').appendChild(schedule);
};

