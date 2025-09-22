function occurence() {
    table = ["C2","C2","C1","C2","C1","C1","C2"];
    let num = prompt("enter your C: ");
    let counter = 0;
    for(i = 0; i <= table.length; i++){
        if(num === table[i]){
            counter++;
        }
    }
    console.log("the number of C is " + counter);
}
occurence();