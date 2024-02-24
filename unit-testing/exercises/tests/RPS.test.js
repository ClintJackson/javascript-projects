const whoWon = require('../RPS.js');

describe("Rock paper scissors test", function(){
    test("Should return 'TIE!' when the two arguments are equal", function(){
        expect(whoWon("rock", "rock")).toBe("TIE!");
    });
    test("Should return 'Player 2 wins!' if (paper, scissors", function(){
        expect(whoWon("paper", "scissors")).toBe("Player 2 wins!");
    });
    test("Should return 'Player 2 wins!' if (scissors, rock)", function(){
        expect(whoWon("scissors", "rock")).toBe('Player 2 wins!');
    });
    test("Should return 'player 1 wins by default'", function(){
        expect(whoWon("rock", "any")).toBe("player 1 wins by default");
    });
    test("Should return 'player 2 wins by default'", function(){
        expect(whoWon("any", "rock")).toBe("player 2 wins by default");
    })
})