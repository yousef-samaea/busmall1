/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
var mainContainer = table.firstElementChild.nextElementSibling;
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  var mainContainer = table.firstElementChild.nextElementSibling;
var parentContainer= mainContainer.parentElement;
parentContainer.removeChild(mainContainer);
var newTbody= document.createElement('tbody');
parentContainer.appendChild(newTbody);
  // console.log(mainContainer.childElementCount);
  // for (var m = 0 ; m < mainContainer.childElementCount;m++){
  // var removeEl = document.getElementsByTagName('tr')[0];
  // var mainContainer = removeEl.parentNode;
  // mainContainer.removeChild(removeEl);
// }
}
// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  var mainContainer = table.firstElementChild.nextElementSibling;
  for (var i = 0; i < cart.items.length; i++) {
    var tr = document.createElement('tr');
    tr.setAttribute('id' ,`${i}`);
    var td1 = document.createElement('td');
    td1.innerHTML = "<a href=# >x</a>";
    tr.appendChild(td1);
    var td2 = document.createElement('td');
    td2.textContent = cart.items[i].product;
    tr.appendChild(td2);
    var td3 = document.createElement('td');
    td3.textContent = cart.items[i].quantity;
    tr.appendChild(td3);
    mainContainer.appendChild(tr);

  }
  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {
  console.log(event.target.parentElement.parentElement.getAttribute('id'));
  cart.removeItem(event);
  cart.saveToLocalStorage();
  clearCart();
  showCart();
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
