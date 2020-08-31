const runSearching = ()=>{
    disableButtons()
    if (selected_algo === "simple"){
        simpleSearch()
        return
    }
    else{
        for(var i = 0;i<array_size;i++){
            non_random[i] = i+1
        }
        generateArray()
        binarySearch(0,parseInt(array_size)-1)
        return
    }
}