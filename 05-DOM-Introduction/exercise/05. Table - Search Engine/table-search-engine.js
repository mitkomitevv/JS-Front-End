function solve() {
   document.querySelectorAll(".select").forEach(el => el.classList.remove("select"));

   let searchFields = document.querySelectorAll("tbody tr");
   let searchText = document.getElementById("searchField");

   if (!searchText.value.trim()) {
      searchText.value = '';
      return;
   }

   for (let field of searchFields) {
      if (field.textContent.toLowerCase().includes(searchText.value.toLowerCase())) {
         field.classList.add("select");
      }
   }

   searchText.value = '';
}