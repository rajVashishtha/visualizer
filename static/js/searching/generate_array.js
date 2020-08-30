var divs = []
var array_size = $("#array_size").val();
const realArray = (start,end) => {
    let to_return = []
    for(var i = start;i<end+1;i++){
        to_return.push(i)
    }
    return to_return
}


function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
var non_random = realArray(1,parseInt(array_size))
shuffleArray(non_random)
const generateArray = ()=>{
    var array_cont = $("#array_container_searching")
    const css_property = {
        'display':"flex",
        "flex-direction":'row',
        'flex-wrap':'wrap',
        'justify-content':'center',
        'text-align':'center',
        'color':'white',
        'vertical-align':'middle',
        'line-height':'30px'
    }
    array_cont.css(css_property)
    array_cont.html("")
    for(var i = 0 ;i<array_size;i++){
        divs[i] = document.createElement("div")
        divs[i].innerHTML = non_random[i]
        array_cont.append(divs[i])
        margin_size = 0.2
        divs[i].style=" margin: 5px " + margin_size + "%; background-color:#53AAFc; width:" + 30 + "px; height:" + (30) + "px;";
    }
}