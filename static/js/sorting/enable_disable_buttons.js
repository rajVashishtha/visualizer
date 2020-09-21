const disableButtons = ()=>{
    $(".sorting_buttons button").addClass("disabled_button")
    $(".sorting_buttons button").attr("disabled","true")
    $(".slider_div").css("display","none")
    $("#enter_input").attr("disabled","true")
    $("#enter_input").addClass("disabled_button")
    $("#reset_array").addClass("disabled_button")
    $("#reset_array").attr("disabled","true")
    $("#start_sorting").addClass("disabled_button")
    $("#start_sorting").attr("disabled","true")
    $("#stop_sorting").removeClass("disabled_button")
    $("#stop_sorting").removeAttr("disabled")
}

const enableButtons = ()=>{
    $(".sorting_buttons button").removeClass("disabled_button")
    $(".sorting_buttons button").removeAttr("disabled")
    $(".slider_div").css("display","block")
    $("#reset_array").removeClass("disabled_button")
    $("#reset_array").removeAttr("disabled")
    $("#enter_input").removeAttr("disabled","true")
    $("#enter_input").removeClass("disabled_button")
    $("#start_sorting").removeClass("disabled_button")
    $("#start_sorting").removeAttr("disabled")
    $("#stop_sorting").addClass("disabled_button")
    $("#stop_sorting").attr("disabled","true")
}
