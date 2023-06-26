var wordSearch = function(grid, word) {
  const rows = grid.length;
  const cols =  grid[0].length;

  const dfs = (row, col, index) => {
    if (row < 0 || col < 0 || row >= rows || col >= cols ||  grid[row][col] !== word[index]) {
      return false;
    }

    if (index === word.length - 1) {
      return true;
    }

    const temp =  grid[row][col];
     grid[row][col] = null;

    const found =
      dfs(row + 1, col, index + 1) ||
      dfs(row - 1, col, index + 1) ||
      dfs(row, col + 1, index + 1) ||
      dfs(row, col - 1, index + 1);

     grid[row][col] = temp;

    return found;
  };

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if ( grid[row][col] === word[0] && dfs(row, col, 0)) {
        return true;
      }
    }
  }

  return false;
};


grid = [ ['A','B','C','E'],
['S','F','C','S'],
['A','D','E','E']];
word = "BCS"; 
console.log(wordSearch(grid, word));