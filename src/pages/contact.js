import forbiddenMap from '../img/forbidden_map.png';

export function createContactTab(){
    const img = document.createElement('img');
    img.classList.add("map");
    img.src = forbiddenMap;
    img.alt = "hotpot location";
    document.querySelector("#content").append(img);

    const address = document.createElement('div');
    address.classList.add("address");
    address.innerHTML = "Location: 88 Dragon Gate Lane · Wulin District · Beyond the Jade Mountains · Forbidden Kingdom 88888"
    document.querySelector("#content").append(address);

    const telephone = document.createElement('div');
    telephone.classList.add("telephone");
    address.innerHTML = "Telephone: (888) 569-1337";
    document.querySelector("#content").append(telephone);

    const schedule = document.createElement('ul');
    schedule.innerHTML = `<p>Holiday Hours subject to change: </p>
                            <p> Mon-Fri : 9am - 9pm </p>
                            <p> Sat-Sun: 10am - 11pm </p>`;

    schedule.classList.add('schedule-hours');
    document.querySelector('#content').appendChild(schedule);
};



