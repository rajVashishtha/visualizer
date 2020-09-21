var speed=100;
var sorting_speed = $("#sorting_speed");
sorting_speed.on("change",vis_speed)

function vis_speed()
{
    var array_speed=sorting_speed.val();
    switch(parseInt(array_speed))
    {
        case 1: speed=5;
                break;
        case 2: speed=10;
                break;
        case 3: speed=100;
                break;
        case 4: speed=1000;
                break;
        case 5: speed=10000;
                break;
        case 6: speed = 100000;
                break;
        case 7:speed = 1000000;
                break;
    }
    
    delay_time=10000/(Math.floor(array_size/10)*speed);        
}

var delay_time=10000/(Math.floor(array_size/10)*speed);        
var c_delay=0;

function div_update(cont,height,color)
{
    window.setTimeout(function(){
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";border-radius:5px;";
    },c_delay+=delay_time);
}

function enable_buttons()
{
    window.setTimeout(function(){
        enableButtons()
    },c_delay+=delay_time);
}
