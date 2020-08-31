const disableButtons = ()=>{
    $(".sorting_buttons button").addClass("disabled_button")
    $(".sorting_buttons button").attr("disabled","true")
    $(".slider_div").css("display","none")
    $("#reset_array").addClass("disabled_button")
    $("#reset_array").attr("disabled","true")
    $("#start_searching").addClass("disabled_button")
    $("#start_searching").attr("disabled","true")
    $("#stop_searching").removeClass("disabled_button")
    $("#stop_searching").removeAttr("disabled")
}

const enableButtons = ()=>{
    $(".sorting_buttons button").removeClass("disabled_button")
    $(".sorting_buttons button").removeAttr("disabled")
    $(".slider_div").css("display","block")
    $("#reset_array").removeClass("disabled_button")
    $("#reset_array").removeAttr("disabled")
    $("#start_searching").removeClass("disabled_button")
    $("#start_searching").removeAttr("disabled")
    $("#stop_searching").addClass("disabled_button")
    $("#stop_searching").attr("disabled","true")
    c_delay = 0
}
