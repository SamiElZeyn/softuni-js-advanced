function search() {
   const searchField = document.getElementById('searchText');
   const list = document.getElementById('towns');
   const towns = Array.from(list.children).map(townEl => townEl.textContent);
   let matches = 0;
   
   let resultDiv = document.querySelector('div#result');
   
   let searchText = searchField.value.toLowerCase();

   towns.forEach(townLiElement => {
      let townName = townLiElement.toLowerCase();
      if (searchText && townName.includes(searchText)) {
         townLiElement.innerHTML = `<bold><u>${townName}</u></bold>`;
         matches++;
      }
   });
   resultDiv.textContent = `${matches} matches found`;
   debugger
}
