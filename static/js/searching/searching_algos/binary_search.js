const binarySearch = (start,end)=>{

    if(start <= end){
        mid = parseInt(start + (end - start)/2)
        console.log(start,end,mid)
        div_update(divs[start],"#6BF773")
        div_update(divs[end],"#6BF773")
        div_update(divs[mid],"#EA53FC")
        if(non_random[mid] == element_to_search){
            div_update(divs[mid],"#F78D6B")
        }
        else if(non_random[mid] > element_to_search){
            div_update(divs[end],"#53AAFc")
            div_update(divs[start],"#53AAFc")
            div_update(divs[mid],"#53AAFc")
            binarySearch(start,mid-1)
        }
        else{
            div_update(divs[start],"#53AAFc")
            div_update(divs[mid],"#53AAFc")
            div_update(divs[end],"#53AAFc")
            binarySearch(mid+1,end)
        }
    }
    enable_buttons() 
    
}