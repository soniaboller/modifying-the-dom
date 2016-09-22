window.onload = function(event) {
    console.log("fuqqqq yaaaaa");

    var checkmark = "(insert check box)";

    // get a list of elements with a specific tag
    var list = document.getElementsByTagName('li');
    var n = list.length; //length
    var paragraph = document.getElementById('target-for-text');
    var name = document.getElementById('name');

    var content = buildParagraph("we could have a taco burrito party!!");
    var addText = buildParagraph("YAAAAAAS");

    // name.innerHTML = "I AM DA SHIT";
    //asks user name and prints it on page
    var username = prompt("what is your name?");
    name.innerHTML = username;
    paragraph.innerHTML = content;

    // console.log(checkmark);
    // console.log(list);
    console.log(paragraph);
    console.log(content);

    //innerHTML allows to edit html within tag ('li' tag in this case)
    for(var i = 0; i < n; i++){
        list[i].innerHTML = list[i].innerHTML + checkmark;
    }

    //loop through ordered list and at the end of the innerHTML of each li add <strong>wish I could w/e</strong>

    // for(var i = n; i > 0; i--){
    //     list[i].innerHTML = list[i].innerHTML + addText;
    // }

};


function buildParagraph(content) {
    var openTag = "<em><strong>";
    var closingTag = "</strong></em>";
    return openTag + content + closingTag;
}