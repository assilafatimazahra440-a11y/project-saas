function numbOccur() {
    let table=["C1","C2","C1","C3","C4","C4","C1","C3","C1"];

    let entrer = prompt("enter the c : ")
    let counter=0;
    for (let i = 0; i < table.length; i++) {
        if (entrer ===table[i]) {
            counter++
      
        
    }
    }
    console.log("    the number of     "+ table +"is "+ counter)
}
numbOccur();