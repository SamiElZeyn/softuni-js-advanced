function sortArr (arr) {
    return arr.sort((a, b) => {
            return a.length - b.length || a.localeCompare(b);
        }).join("\n")    
}
sortArr (['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George'])