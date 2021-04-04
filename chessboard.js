//chessboard.js
const prompt = require('prompt-sync')();

function chessBoard(){
  return {
    position: [['R','N','B','Q','K','B','N','R'],
               ['P','P','P','P','P','P','P','P'],
               [' ',' ',' ',' ',' ',' ',' ',' '],
               [' ',' ',' ',' ',' ',' ',' ',' '],
               [' ',' ',' ',' ',' ',' ',' ',' '],
               [' ',' ',' ',' ',' ',' ',' ',' '],
               ['P','P','P','P','P','P','P','P'],
               ['R','N','B','Q','K','B','N','R']],
    move_history : [],
    curr_turn : "white",
    print_position : function(){
      ret = "+---+---+---+---+---+---+---+---+\n";
      for(var i = 0; i < 8; i++){
        ret += "| ";
        for(var j = 0; j < 8; j++){
          ret += this.position[i][j];
          ret += " | ";
        }
        ret += "\n+---+---+---+---+---+---+---+---+\n";
      }
      console.log(ret);
    },
    move : function(){
      move_str = prompt(`enter move for ${this.curr_turn}: `);
      this.position[1][this.move_history.length] = " ";
      //replace this with something that makes sense
      this.move_history.push(move_str);
      if(this.curr_turn == "white"){
        this.curr_turn = "black";
      }
      else{
        this.curr_turn = "white";
      }
    },
    finished : function(){
      return(this.move_history.length >= 8);
    },
    result: function(){
      return("not yet implemented, miles to go before we sleep.")
    }
  }
}

module.exports = chessBoard;
