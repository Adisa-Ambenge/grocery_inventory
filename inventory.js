const inventoryItems = ["oranges","pineapples","watermelon","avacado","tomatoes"];
const stockQuantity = [100,200,500,100,1000];

const addNewItem = (itemName,quantity)=>{
  inventoryItems.push(itemName);
  stockQuantity.push(quantity);
console.log(`${itemName} ${quantity}`);

}
addNewItem("mango",400);
console.log(inventoryItems,stockQuantity);


const updateInventory = (itemName,newquantity)=>{
    const i = inventoryItems.indexOf(itemName);
    if(i!== -1){
        stockQuantity[i]=newquantity;
    }
   
}
updateInventory("grapes",200)
console.log(updateInventory(inventoryItems,stockQuantity));


const total = () =>{
    let total = 0;
    for(quantity in stockQuantity){
        total +=quantity;
    }
    return total;
}
console.log(total());

const lowestQuantity = () =>{
    let lowestQuantity = stockQuantity[0];
    let lowestItem = "";
    for(i=0; i<inventoryItems.length; i++) {
        if(stockQuantity[i]< lowestQuantity){
            lowestQuantity= stockQuantity[i];
            lowestItem = stockQuantity[i];
        }
    }
    return lowestItem;
}
console.log(lowestQuantity());

//declare a const variable to hold the inventory items
//declare a const variable to hold the quantity of the items
//create an arrow function to push the values of the new items to the initial const variables
