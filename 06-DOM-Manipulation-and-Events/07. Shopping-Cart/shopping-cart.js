document.addEventListener('DOMContentLoaded', solve);

function solve() {
   let result = {};
   let addButton = Array.from(document.querySelectorAll('.add-product'));
   addButton.forEach(e => e.addEventListener('click', addToCart));

   let textArea = document.querySelector('textarea')

   function addToCart(event) {
      let productContainer = event.target.parentElement.parentElement;
      let productTitle = productContainer.querySelector('.product-title').textContent;
      let productPrice = productContainer.querySelector('.product-line-price').textContent;

      textArea.textContent += `Added ${productTitle} for ${Number(productPrice).toFixed(2)} to the cart.\n`

      if (result.hasOwnProperty(productTitle)) {
         result[productTitle] += Number(productPrice);
         return;
      }
      result[productTitle] = Number(productPrice);
   }

   document.querySelector('.checkout').addEventListener('click', checkOut);

   function checkOut() {
      let productNames = [];
      let totalPrice = 0;

      for (let product in result) {
         productNames.push(product);
         totalPrice += Number(result[product]);
      }

      textArea.textContent += `You bought ${productNames.join(', ')} for ${totalPrice.toFixed(2)}.`

      document.querySelector('.checkout').removeEventListener('click', checkOut);
      addButton.forEach(e => e.removeEventListener('click', addToCart));
   }
}
