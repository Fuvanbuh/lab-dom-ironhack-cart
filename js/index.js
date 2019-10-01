function deleteItem(event){

}

function getPriceByProduct(itemNode){
  let totalSuma = 0; 
 let arrayPrecios = [...document.getElementsByClassName('precio')];
 let cantproduct = [...document.getElementsByClassName("productname")];

 for (let i = 0; i < arrayPrecios.length; i++){
  totalSuma = (parseFloat(cantproduct[i].value)* parseFloat(arrayPrecios[i]).innerText);
 }
 return totalSuma;
 }
  



function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
let total = [...document.getElementsByClassName('preciototal')];
for (let i = 0; i < total.length; i++){
  parseFloat((total[i] += total[i]).value).innerText;

}
  console.log(total)
}
getTotalPrice()

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
