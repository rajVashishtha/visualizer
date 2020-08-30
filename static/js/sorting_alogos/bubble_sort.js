function bubbleSort()
{
    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            div_update(divs[j],div_sizes[j],"#EA53FC");//Color update

            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[j],div_sizes[j], "#F78D6B");//Color update
                div_update(divs[j+1],div_sizes[j+1], "#F78D6B");//Color update

                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                div_update(divs[j],div_sizes[j], "#F78D6B");//Height update
                div_update(divs[j+1],div_sizes[j+1], "#F78D6B");//Height update
            }
            div_update(divs[j],div_sizes[j], "#53AAFC");//Color update
        }
        div_update(divs[j],div_sizes[j], "#6BF773");//Color update
    }
    div_update(divs[0],div_sizes[0], "#6BF773");//Color update

    enable_buttons();
}
