export const getDuration = (minutes) =>{

    // À Refactor parce que c'est immonde !!!!!

    let hour = String(minutes/60);
    const ok = hour.split(".");
    const min = String( Number(ok[1]) *60);
    return ok[0]+" H "+min[0]+min[1];
}