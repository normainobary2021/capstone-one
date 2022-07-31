stickyElement = document.querySelector(".desktop-nav");

speakerContainer = document.getElementById("speakerDiv");

currStickyPos = stickyElement.getBoundingClientRect().top + window.pageYOffset;
window.onscroll = function() {
     
    if(window.pageYOffset > currStickyPos) {
        stickyElement.style.position = "fixed";
        stickyElement.style.top = "0px";
    } else {
        stickyElement.style.position = "relative";
        stickyElement.style.top = "initial";
    }
}


const speakers = [
    {
      name: 'Yochai Benkler',
      photo: './images/p1.jpg',
      role: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptates ipsum corporis nam magnam, quia nisi molestiae temporibus reiciendis officiis?',
    },
    {
      name: 'Kilnam Chon',
      photo: './images/p2.jpg',
      role: '',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptates ipsum corporis nam magnam, quia nisi molestiae temporibus reiciendis officiis?',
    },
    {
      name: 'SohYeong Noh',
      photo: './images/p3.jpg',
      role: 'Director of Art Centre Nabi and Board Member Korea',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptates ipsum corporis nam magnam, quia nisi molestiae temporibus reiciendis officiis?',
    },
    {
      name: 'Julia Leda',
      photo: './images/p4.jpg',
      role: 'System Trainer',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptates ipsum corporis nam magnam, quia nisi molestiae temporibus reiciendis officiis?',
    },
    {
      name: 'Lila Tretikov',
      photo: './images/p5.jpg',
      role: 'Veterinary Doctor',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptates ipsum corporis nam magnam, quia nisi molestiae temporibus reiciendis officiis?',
    },
    {
      name: 'Ryan Merkley',
      photo: './images/p1.jpg',
      role: 'Software Engineer, Google Inc.',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptates ipsum corporis nam magnam, quia nisi molestiae temporibus reiciendis officiis?',
    },
  ];
  
  const createSpeakers = () => {
    let eventSpeakers = '';
    speakers.forEach((eventSpeaker) => {
    eventSpeakers += `<div class="pro-grid-item"><div class="pro-grid-images">
      <img class="trans-grid" src="./images/bg-transparent.jpeg" alt="Transparent">
      <img id="" class="pro-image" src="${eventSpeaker.photo}" alt="${eventSpeaker.name} profile">
        </div>
        <div class="pro-text">
            <h3 id="">${eventSpeaker.name}</h3>
            <h4 id="">${eventSpeaker.role}</h4>
            <div class="gray-line"></div>
            <p id="">${eventSpeaker.text}</p>
        </div></div>`;
    });
    speakerContainer.innerHTML = eventSpeakers;
  };

createSpeakers();
