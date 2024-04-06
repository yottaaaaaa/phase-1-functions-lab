// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    const hqLocation = 42; 
    return Math.abs(blocks - hqLocation); 
}

function distanceFromHqInFeet(blocks) {
    const blockInFeet = 264; 
    const hqLocation = 42; 
    
   
    const distanceInFeet = Math.abs(blocks - hqLocation) * blockInFeet;

    return distanceInFeet;
}
function distanceTravelledInFeet(startBlock, endBlock) {
    const blockInFeet = 264; 
    
    const distanceInFeet = Math.abs(startBlock - endBlock) * blockInFeet;

    return distanceInFeet;
}
function calculatesFarePrice(start, destination) {
    const distance = Math.abs(start - destination); 

    let farePrice 

    if (distance <= 1) {
        farePrice = 0; 
    } else if (distance <= 2) {
        farePrice = 2.56; 
    } else if (distance <= 3) {
        farePrice = 2.56; 
    } else if (distance <= 4) {
        farePrice = 3.10; 
    } else if (distance <= 2000) {
        farePrice = 25  
    } else if (distance > 2000 && distance <= 2500) {
        farePrice = 25; 
    } else if(farePrice = 'cannot travel that far'){
    }
    
        return farePrice;
    
    
   
    
}
