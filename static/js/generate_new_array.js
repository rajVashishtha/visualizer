var div_sizes = []
var divs = []
var array_size = $("#array_size").val()
const generateArray = ()=>{
    var array_cont = $("#array_container")
    array_cont.css('flex-direction','row')
    array_cont.html("")
    for(var i = 0 ;i<array_size;i++){
        div_sizes[i] = Math.floor(Math.random()*0.5*(200 - 5)) + 10
        divs[i] = document.createElement("div")
        array_cont.append(divs[i])
        margin_size = 0.2
        divs[i].style=" margin:0% " + margin_size + "%; background-color:#53AAFc; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}

const changeArray = ()=>{
    generateArray()
}
const resetArray = ()=>{
    $("#array_size").val(80)
    generateArray()
}
var selected_algo = "merge"