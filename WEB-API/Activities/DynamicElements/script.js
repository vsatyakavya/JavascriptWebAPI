var tagName = prompt("please enter an HTML tag(eg:h1, h2, p, div):","enter tag");

if(tagName !== "h1" && tagName !== "h2" &&tagName !== "p"  && tagName !== "div"){
    alert("enter valid tag Name")
}
else{
    var tag = document.createElement(tagName);
    tag.textContent = "This tag.. is  "+ tagName;
    document.body.appendChild(tag);
}



    execute();
function execute(){
    var nextTag = confirm("Would you like to add another Tag");
     if(nextTag){
    var secondTag = prompt("Enter second tag");
    if(secondTag !== "h1" && secondTag !== "h2" && secondTag !== "p" && secondTag !=="div"&& secondTag !== "h3"&& secondTag !== "h4"){
        alert("enter valid Tag Name")
    }
    else{
        var secondTagName = document.createElement(secondTag);
        secondTagName.textContent = "this tag is " + secondTag;
        document.body.appendChild(secondTagName);
    }
    execute();

}
}
