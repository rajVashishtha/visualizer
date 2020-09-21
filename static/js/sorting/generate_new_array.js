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
        divs[i].style=" margin:0% " + margin_size + "%; background-color:#53AAFc;border-radius:5px; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}
const generateArray2 = (array)=>{
    var array_cont = $("#array_container")
    array_cont.css('flex-direction','row')
    array_cont.html("")
    array_size = array.length
    const maintain = ((screen.height)/7)
    console.log(maintain)
    for(var i = 0 ;i<array_size;i++){
        if(array[i] > maintain){
            div_sizes[i] = array[i]%(maintain)
        }
        else{
            div_sizes[i] = array[i]
        }
        divs[i] = document.createElement("div")
        array_cont.append(divs[i])
        margin_size = 0.2
        divs[i].style=" margin:0% " + margin_size + "%; background-color:#53AAFc; border-radius:5px; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}

const changeArray = ()=>{
    array_size = $("#array_size").val()
    generateArray()
}
const resetArray = ()=>{
    $("#array_size").val(80)
    generateArray()
}
var selected_algo = "merge"