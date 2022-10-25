export const getKeyOfTreailer = (list) =>{

    let key ="";
    let i = 0;
    while (i < list.results.length){
        if (list.results[i].type ==="Trailer"){
            key= list.results[i].key;
            i = list.results.length +10;
        }
        else{
            i++;
        }

    }
    return key;
}