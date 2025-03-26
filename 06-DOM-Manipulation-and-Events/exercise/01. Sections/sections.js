document.addEventListener('DOMContentLoaded', solve);

function solve() {
   let result = document.getElementById('content');
   let sections = document.querySelector('[type="text"]');
   let genBtn = document.querySelector('[type="submit"]');
   genBtn.addEventListener('click', generate);

   function generate(event) {
      event.preventDefault();
      let text = sections.value.split(', ');

      for (let t of text) {
         let div = document.createElement('div');
         let p = document.createElement('p');
         p.textContent = t;
         p.style.display = 'none';

         div.appendChild(p);
         div.addEventListener('click', (e) => {
            e.target.querySelector('p').style.display = 'block';
        });

         result.appendChild(div);
      }
   }
}