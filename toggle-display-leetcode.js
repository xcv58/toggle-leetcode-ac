(function()
{
    var filter = new RegExp("=\"ac");
    var list=document.getElementById("problemList").childNodes[3].childNodes;
    for (var i=1;i<list.length;i+=2){
        if (filter.test(list[i].children[0].innerHTML)) {
            if (list[i].style.display == "none") {
                list[i].style.display="";
            } else {
                list[i].style.display="none";
            }
        }
    }
    return;
})();
