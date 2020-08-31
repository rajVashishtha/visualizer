var speed=10;
var searching_speed = $("#searching_speed");
searching_speed.on("change",vis_speed)
var element_to_search = 1
$("#ele_to_search").on('change',(event)=>{element_to_search = (event.target.value)})
function vis_speed()
{
    var array_speed=searching_speed.val();
    switch(parseInt(array_speed))
    {
        case 1: speed=1;
                break;
        case 2: speed=5;
                break;
        case 3: speed=10;
                break;
        case 4: speed=100;
                break;
        case 5: speed=150;
    }
    
    delay_time=10000/(Math.floor(array_size/10)*speed);  
    console.log("done")      
}

var delay_time=10000/(Math.floor(array_size/10)*speed);        
var c_delay=0;

function div_update(cont,color)
{
    window.setTimeout(function(){
        const style_string = " margin: 5px " + margin_size + "%; width:" + 30 + "px; height:" + 30 + "px; background-color:" + color + ";";
        cont.style=style_string
    },c_delay+=delay_time);
}

function enable_buttons()
{
    window.setTimeout(function(){
        enableButtons()
    },c_delay+=delay_time);
}
