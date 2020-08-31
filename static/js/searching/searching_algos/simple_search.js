const simpleSearch = () =>{
    console.log("started", array_size, element_to_search)
    if(element_to_search == ""){
        alert("Enter a element to search")
        enable_buttons()
        return
    }
    for(var i=0;i<parseInt(array_size);i++){
        if(non_random[i] == parseInt(element_to_search)){
            div_update(divs[i],"#F78D6B")
            break
        }
        else{
            div_update(divs[i],"#EA53FC")
            div_update(divs[i],"#53AAFc")
        }
    }
    enable_buttons()
    console.log("ended")
}