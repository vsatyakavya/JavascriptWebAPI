// var site1El = document.querySelector(".site1");
// var site2El = document.querySelector(".site2");
// var site3El = document.querySelector(".site3");
// var siteTitles= document.querySelectorAll("h4");
// console.log(site1El);

// var sites = ["https://news.ycombinator.com/", "https://twitter.com", "https://instagram.com", "https://google.com", "https://reddit.com/r/webdev"];

// // site1El.children[0].textContent = "site1";

// site1El.children[1].children[0].setAttribute("src","images/image_1.jpg");
// site1El.children[1].children[0].setAttribute("alt","man working");
// site1El.children[1].children[0].setAttribute("style","padding:10px;");



// // site2El.children[0].textContent = "site 2";
// site2El.children[1].setAttribute("href","https://google.com");
// site2El.children[1].setAttribute("target","blank")
// site2El.children[1].children[0].setAttribute("src","images/image_2.jpg");
// site2El.children[1].children[0].setAttribute("alt","group brainstrom")
// site2El.children[1].children[0].setAttribute("style","padding:10px;");


// // site3El.children[0].textContent = "site 3";
// site3El.children[1].setAttribute("href","https://twitter.com");
// site3El.children[1].children[0].setAttribute("src","images/image_3.jpg");
// site3El.children[1].children[0].setAttribute("alt","women working")
// site3El.children[1].children[0].setAttribute("style","padding:10px;");

// for(var i = 0; i< siteTitles.length; i++){
//     siteTitles[i].textContent = "site"+(i+1);
//     siteTitles[i].setAttribute("style","text-decoration : underline;padding-left:10px;margin:0")
// }

// //to get the random website from the sites array to the site1El as a link
// site1El.children[1].setAttribute("href",sites[Math.floor(Math.random()* sites.length)]);

//Dry code
var site1El = document.querySelector(".site1");
var site2El = document.querySelector(".site2");
var site3El = document.querySelector(".site3");


var siteDataList=[
    {
        element : site1El,
        title:"site 1",
        url :"https://google.com",
        imgSrc:"images/image_1.jpg",
        imgAlt :"man working"
    },
    {
        element : site2El,
        title:"site 2",
        url :"https://twitter.com",
        imgSrc:"images/image_2.jpg",
        imgAlt :"group brainstorm"
    },
    {
        element : site3El,
        title:"site 3",
        url :"https://instagram.com",
        imgSrc:"images/image_3.jpg",
        imgAlt :"women working"
    }
];

function renderSite(siteData){
    var titleElement = siteData.element.children[0];
    var linkElement = siteData.element.children[1];
    var imgElement = linkElement.children[0];
    
    titleElement.textContent = siteData.title;
    titleElement.setAttribute(
        "style","text-decoration;padding-left:10px;margin:0"
    );
    linkElement.setAttribute("href",siteData.url)
    imgElement.setAttribute("src",siteData.imgSrc);
    imgElement.setAttribute("alt","siteData.imgAlt");
    imgElement.setAttribute("style","padding:10px")
}




for(let i =0 ;i<siteDataList.length ;i++){
    renderSite(siteDataList[i]);
}