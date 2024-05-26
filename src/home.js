import myImage from './cafe.jpg';

function homeHeader(){
    const header = document.createElement('h2');
    header.textContent = 'Welcome to The Lounge';
    header.classList.add('header_home');

    return header;
};

function homeImg(){
    const img = new Image();
    img.src = myImage;
    img.classList.add('home_img');

    return img;
};

function homeText(){
    const text = document.createElement('p');
    text.textContent = 'Welcome to The Lounge, a cozy café in the heart of the city offering rich coffees, soothing teas, and delectable pastries. Enjoy our inviting atmosphere and friendly service for relaxation or casual meetings.';
    text.classList.add('home_info');

    return text;
};

export { 
    homeHeader,
    homeImg,
    homeText
}