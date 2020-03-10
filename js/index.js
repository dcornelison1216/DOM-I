const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const codeImg = document.getElementById('cta-img');
codeImg.setAttribute('src', siteContent["cta"]["img-src"])

const snippetsImg = document.getElementById('middle-img');
snippetsImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

const navList = document.querySelectorAll('a');
navList[0].innerHTML = siteContent['nav']['nav-item-1'];
navList[1].innerHTML = siteContent['nav']['nav-item-2'];
navList[2].innerHTML = siteContent['nav']['nav-item-3'];
navList[3].innerHTML = siteContent['nav']['nav-item-4'];
navList[4].innerHTML = siteContent['nav']['nav-item-5'];
navList[5].innerHTML = siteContent['nav']['nav-item-6'];
for(let i = 0; i < navList.length; i++) {
  navList[i].style.color = 'green';
}

const h1 = document.querySelector('h1');
h1.innerHTML = `DOM<br>Is<br>Awesome`;

const button = document.querySelector('button');
button.innerHTML = siteContent['cta']['button'];

const h4List = document.querySelectorAll('h4');
h4List[0].innerHTML = siteContent['main-content']['features-h4'];
h4List[1].innerHTML = siteContent['main-content']['about-h4'];
h4List[2].innerHTML = siteContent['main-content']['services-h4'];
h4List[3].innerHTML = siteContent['main-content']['product-h4'];
h4List[4].innerHTML = siteContent['main-content']['vision-h4'];
h4List[5].innerHTML = siteContent['contact']['contact-h4'];

const pList = document.querySelectorAll('p');
pList[0].innerHTML = siteContent['main-content']['features-content'];
pList[1].innerHTML = siteContent['main-content']['about-content'];
pList[2].innerHTML = siteContent['main-content']['services-content'];
pList[3].innerHTML = siteContent['main-content']['product-content'];
pList[4].innerHTML = siteContent['main-content']['vision-content'];
pList[5].innerHTML = `123 Way 456 Street<br>Somewhere, USA`;
pList[6].innerHTML = siteContent['contact']['phone'];
pList[7].innerHTML = siteContent['contact']['email'];
pList[8].innerHTML = siteContent['footer']['copyright'];

const nav = document.querySelector('nav');

const appended = document.createElement('a');
appended.textContent = "Appended";
nav.appendChild(appended);
appended.style = "color: green";

const prepended = document.createElement('a');
prepended.textContent = "Prepended";
nav.prepend(prepended);
prepended.style = "color: green";

// Stretch work

for(let i = 0; i < h4List.length; i++) {
  h4List[i].style = "color: green";
}
for(let i = 0; i < pList.length; i++) {
  pList[i].style = "color: darkgreen";
}
button.style = "border-color: green; color: green";
button.hover(function() {
  $(this).css("background-color", "green");
} function() {
  $(this).css("color", "white");
});
// const mainContent = document.getElementByClassName('main-content');
// mainContent.style = "border-color: green";
