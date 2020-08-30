const runSorting = ()=>{
    disableButtons()
    if (selected_algo === "merge"){
        mergeSort()
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