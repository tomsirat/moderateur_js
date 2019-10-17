var textarea = document.getElementById("text");
var result = document.getElementById("result");
var btn = document.getElementsByClassName("btn")[0];
var smiley = [":')", ":)", ":D"];
i = 0;

btn.addEventListener("click", function(){
    var text = textarea.value;
    
for (var i = 0; i < smiley.length ; i++) {
    while(text.indexOf(smiley[i]) != -1) 
    text = text.replace(smiley[i], "--")
};
    
    // if (document.getElementById(text) == smiley[i]) {
    //     result.innerHTML == textarea.value.replace(smiley, "--");
    // }
    
    
    result.innerHTML = text;

});