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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let links = document.querySelectorAll('a');
links.forEach((cv, i) => (cv.textContent = Object.values(siteContent.nav)[i]));
links.forEach((cv) => (cv.style.color = "#7CFC00"));

let newNavOne = document.createElement('a');
let media = document.createTextNode("Media");
newNavOne.appendChild(media);
document.querySelector("nav").appendChild(newNavOne);

let newNavTwo = document.createElement('a');
let social = document.createTextNode("Social");
newNavTwo.appendChild(social);
document.querySelector("nav").appendChild(newNavTwo);

let header = document.querySelector('h1');
header.textContent = siteContent["cta"]["h1"];

let headButton = document.querySelector('button');
headButton.textContent = siteContent["cta"]["button"];

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

let headers = document.querySelectorAll('.text-content h4');
let features = headers[0];
features.textContent = siteContent["main-content"]["features-h4"];
let about = headers[1];
about.textContent = siteContent["main-content"]["about-h4"];
let services = headers[2];
services.textContent = siteContent["main-content"]["services-h4"];
let product = headers[3];
product.textContent = siteContent["main-content"]["product-h4"];
let vision = headers [4];
vision.textContent = siteContent["main-content"]["vision-h4"];

let content = document.querySelectorAll('.text-content p');
let featuresCon = content[0];
featuresCon.textContent = siteContent["main-content"]["features-content"];
let aboutCon = content[1];
aboutCon.textContent = siteContent["main-content"]["about-content"];
let servicesCon = content[2];
servicesCon.textContent = siteContent["main-content"]["services-content"];
let productCon = content[3];
productCon.textContent = siteContent["main-content"]["product-content"];
let visionCon = content[4];
visionCon.textContent = siteContent["main-content"]["vision-content"];


let lastImg = document.getElementById("middle-img");
lastImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let contactHead = document.querySelector('.contact h4');
contactHead.textContent = siteContent["contact"]["contact-h4"];

let contact = document.querySelectorAll('.contact p');
contact.forEach((cv, i) => (cv.textContent=Object.values(siteContent.contact)[i + 1]));

let foot = document.querySelector('footer p');
foot.textContent = siteContent["footer"]["copyright"];