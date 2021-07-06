var i;
    for(i = rightIndex ; i > 0 && array[i] > value; i--) {
        println(i);
        array[i + 1] = array[i];   
    }
    array[i] = value;
