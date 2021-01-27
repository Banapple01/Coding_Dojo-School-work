function minimumBribes(q) {
    let i=0,j=i+1,bribes=0,totb=0
    while(i < q.length-1){
        if(q[i] > q[j]){
            bribes++
        }else{
            i++
            j++
        }
        if(bribes < 3){
            totb += bribes
            bribes = 0
        }else{return "Too chaotic"}
        if(j == q.length-1){
            i++
            j=i+1
        }else{j++}
    }
    return totb
}