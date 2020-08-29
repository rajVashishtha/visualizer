function quickSort()
{
    c_delay=0;

    quick_sort(0,array_size-1);

    enable_buttons();
}

function quick_partition (start, end)
{
    var i = start + 1;
    var pivot = div_sizes[start] ;
    div_update(divs[start],div_sizes[start],"#EA53FC");

        for(var j =start + 1; j <= end ; j++ )
        {
            if (div_sizes[ j ] < pivot)
            {
                div_update(divs[j],div_sizes[j],"#EA53FC");

                div_update(divs[i],div_sizes[i],"#F78D6B");
                div_update(divs[j],div_sizes[j],"#F78D6B");

                var temp=div_sizes[i];
                div_sizes[i]=div_sizes[j];
                div_sizes[j]=temp;

                div_update(divs[i],div_sizes[i],"#F78D6B");
                div_update(divs[j],div_sizes[j],"#F78D6B");

                div_update(divs[i],div_sizes[i],"#53AAFc");//intead of blue
                div_update(divs[j],div_sizes[j],"#53AAFc");

                i += 1;
            }
    }
    div_update(divs[start],div_sizes[start],"#F78D6B");
    div_update(divs[i-1],div_sizes[i-1],"#F78D6B");
    
    var temp=div_sizes[start];
    div_sizes[start]=div_sizes[i-1];
    div_sizes[i-1]=temp;

    div_update(divs[start],div_sizes[start],"#F78D6B");
    div_update(divs[i-1],div_sizes[i-1],"#F78D6B");
    for(var t=start;t<=i;t++)
    {
        div_update(divs[t],div_sizes[t],"#6BF773");
    }

    return i-1
}

function quick_sort (start, end )
{
    if( start < end )
    {
        var pivot_pos = quick_partition (start, end ) ;     
        quick_sort (start, pivot_pos -1);
        quick_sort (pivot_pos +1, end) ;
    }
 }

