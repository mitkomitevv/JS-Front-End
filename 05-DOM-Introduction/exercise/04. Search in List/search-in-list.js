function solve() {
   let cities = document.querySelectorAll("li");
   let searched = document.getElementById("searchText").value;
   let counter = 0;

   for (let city of cities) {
      if (city.textContent.includes(searched)) {
         city.style.textDecoration = "underline";
         city.style.fontWeight = "bold";
         city.style.opacity = '1';
         counter++;
      }
   }
   document.getElementById("result").textContent = `${counter} matches found`
}