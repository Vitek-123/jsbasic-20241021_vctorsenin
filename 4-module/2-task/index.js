function makeDiagonalRed(table) {
  for (let i = 0; i < table.rows.length; i++){
    // console.log(table.rows.cells[i])
    for(let j = 0; j < table.rows.length; j++){
      if( i == j){
        table.rows[i].cells[j].style.backgroundColor = 'red';
      }
    }
  }
}
