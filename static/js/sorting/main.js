$("#array_size").jRange({
    from: 5,
    to: 150,
    step: 5,
    format: '%s',
    theme:"theme-blue",
    width: 200,
    showLabels: true,
    snap: true
})
$("#sorting_speed").jRange({
    from: 1,
    to: 7,
    step: 1,
    format: '%s',
    theme:"theme-blue",
    scale: [1,2,3,4,5,6,7],
    width: 150,
    showLabels: true,
    snap: true
})
generateArray();
$("#input-parser-btn").on('click',()=>{
    const string_temp = $("#input-parser-textarea").val().trim().slice(1,-1)
    console.log(string_temp.split(","))
    const temp_parsing_array = string_temp.split(",")
    var real_parsing_array = []
    for(var i = 0;i<temp_parsing_array.length;i++){
        if(temp_parsing_array[i].trim() != ""){
            real_parsing_array.push(parseInt(temp_parsing_array[i]))
        }
    }
    console.log(real_parsing_array)
    generateArray2(real_parsing_array)
})


$("#array_size").on("change",changeArray)
$("#reset_array").on("click",resetArray)
$(".sorting_buttons button").on("click",(e)=>{
    const button_text = e.target.innerHTML
    $("#selected_algorithm").text(button_text)
    selected_algo = button_text.toLowerCase()
    $("#bubble_sort_info, #merge_sort_info, #quick_sort_info, #heap_sort_info").css('display','none')
    console.log("#"+selected_algo+"_sort_info")
    $("#"+selected_algo+"_sort_info").css('display','block')
})
$("#start_sorting").on("click",runSorting)
$("#stop_sorting").on("click",()=>{
    generateArray()
    enableButtons()
})