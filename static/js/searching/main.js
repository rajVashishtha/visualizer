$("#array_size").jRange({
    from: 5,
    to: 450,
    step: 5,
    format: '%s',
    theme:"theme-blue",
    width: 200,
    showLabels: true,
    snap: true
})
$("#searching_speed").jRange({
    from: 1,
    to: 5,
    step: 1,
    format: '%s',
    theme:"theme-blue",
    scale: [1,2,3,4,5],
    width: 150,
    showLabels: true,
    snap: true
})
var selected_algo = "simple"
generateArray()
$("#array_size").on("change",()=>{
    array_size = $("#array_size").val()
    non_random = realArray(1,parseInt(array_size))
    shuffleArray(non_random)
    generateArray()
})
$("#reset_array").on("click",()=>{
    array_size = $("#array_size").val()
    non_random = realArray(1,parseInt(array_size))
    shuffleArray(non_random)
    generateArray()
});
$(".sorting_buttons button").on("click",(e)=>{
    const button_text = e.target.innerHTML
    $("#selected_algorithm").text(button_text)
    selected_algo = button_text.toLowerCase()
    $("#binary_search_info, #simple_search_info").css('display','none')
    $("#"+selected_algo+"_search_info").css("display","block")
})
$("#start_searching").on("click",runSearching)
$("#stop_searching").on("click",()=>{
    generateArray()
    enableButtons()
})