chessBoard = require('./chessboard.js');

board = chessBoard();
console.log(board.finished());
while(!board.finished()){
  board.print_position();
  board.move();
}
board.print_position();
console.log(board.result());
