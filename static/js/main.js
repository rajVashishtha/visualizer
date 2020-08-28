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
$("#array_size").on("change",changeArray)
$("#reset_array").on("click",resetArray)
$(".sorting_buttons button").on("click",(e)=>{
    const button_text = e.target.innerHTML.toLowerCase()
    selected_algo = button_text
    alert("selected -->"+selected_algo)
})
$("#start_sorting").on("click",runSorting)
$("#stop_sorting").on("click",()=>{
    generateArray()
    enableButtons()
})