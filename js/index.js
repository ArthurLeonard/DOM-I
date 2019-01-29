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

// // Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"]);

const linkarray = ['Services', 'Product', 'Vision', 'Features', 'About', 'Contact'];

const as = document.getElementsByTagName('a');
console.log(as[0]);
as[0].textContent = linkarray[0];
as[1].textContent = linkarray[1];
as[2].textContent = linkarray[2];
as[3].textContent = linkarray[3];
as[4].textContent = linkarray[4];
as[5].textContent = linkarray[5];


const h1 = document.getElementsByTagName('h1');
console.log(h1[0]);
h1[0].textContent = "DOM IS AWESOME";
h1[0].style.color = "gray";

const bttn = document.getElementsByTagName('button');
bttn[0].textContent = "Get Started";


const h4 = document.getElementsByTagName('h4');
console.log(h4[0]);

h4[0].textContent = "FEATURES";
h4[1].textContent = "ABOUT";
h4[2].textContent = "SERVICES";
h4[3].textContent = "PRODUCT";
h4[4].textContent = "VISION";
h4[5].textContent = "CONTACT";

const ptags = document.getElementsByTagName('p');
console.log(ptags.length);

for ( i = 0; i < ptags.length - 4; i++){
  ptags[i].textContent = linkarray[i] + " content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
}

ptags[5].textContent = "123 Way 456 Street Somewhere, USA";
ptags[6].textContent = "1 (888) 888-8888";
ptags[7].textContent = "sales@greatidea.io";
ptags[8].textContent = "Copyright Great Idea! 2018";



ptags.forEach( element => {
  // console.log(element);
  element.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
});

const logo = document.getElementById('logo-img');
logo.src = img/logo.png;


const ctaImg = document.getElementById('cta-img');
// // const bumID = document.getElementById('a');
// console.log(ctaImg);
ctaImg.src = img/header-img.png;

const midImg = document.getElementById('middle-img');
// // const bumID = document.getElementById('a');
// console.log(midImg);
midImg.src = img/mid-page-accent.jpg;


