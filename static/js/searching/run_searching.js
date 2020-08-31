const runSearching = ()=>{
    disableButtons()
    if (selected_algo === "simple"){
        simpleSearch()
        return
    }
    else if(selected_algo === "bubble"){
        bubbleSort()
        return
    }
    else if(selected_algo === "quick"){
        quickSort()
        return
    }
    else{
        heapSort()
        return
    }
}