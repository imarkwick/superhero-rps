describe("Rock-Paper-Scissors", function() {
  var player1, player2, game;
  
  beforeEach(function() {

    player1 = new Player('Izzy');
    player2 = new Player('Mishal');
    game = new Game(player1, player2);

  });

  describe('winning and losing', function() {

    describe('iron man', function() {

      it('should vaporises spider man', function() {
        player1.picks('iron man');
        player2.picks('spiderman');
        expect(game.winner()).toBe(player1);
      });

      it('should break black widow', function() {
        player1.picks('iron man');
        player2.picks('black widow');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to hulk', function() {
        player1.picks('iron man');
        player2.picks('hulk');
        expect(game.winner()).toBe(player2);
      });

      it('should lose to thor', function() {
        player1.picks('iron man');
        player2.picks('thor');
        expect(game.winner()).toBe(player2);
      });
    });

    describe('hulk', function() {

      it('should smash iron man', function() {
        player1.picks('hulk');
        player2.picks('iron man');
        expect(game.winner()).toBe(player1);
      });

      it('should crush thor', function() {
        player1.picks('hulk');
        player2.picks('thor');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to black widow', function() {
        player1.picks('hulk');
        player2.picks('black widow');
        expect(game.winner()).toBe(player2);
      });

      it('should lose to spiderman', function() {
        player1.picks('hulk');
        player2.picks('spiderman');
        expect(game.winner()).toBe(player2);
      });
    });

    describe('black widow', function() {

      it('should seduce thor', function() {
        player1.picks('black widow');
        player2.picks('thor');
        expect(game.winner()).toBe(player1);
      });

      it('should ass kicks hulk', function() {
        player1.picks('black widow');
        player2.picks('hulk');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to spiderman', function() {
        player1.picks('black widow');
        player2.picks('spiderman');
        expect(game.winner()).toBe(player2);
      });

      it('should lose to iron man', function() {
        player1.picks('black widow');
        player2.picks('iron man');
        expect(game.winner()).toBe(player2);
      });
    });

    describe('thor', function() {

      it('should beat iron man', function() {
        player1.picks('thor');
        player2.picks('iron man');
        expect(game.winner()).toBe(player1);
      });

      it('should defeats spiderman', function() {
        player1.picks('thor');
        player2.picks('spiderman');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to hulk', function() {
        player1.picks('thor');
        player2.picks('hulk');
        expect(game.winner()).toBe(player2);
      });

      it('should lose to black widow', function() {
        player1.picks('thor');
        player2.picks('black widow');
        expect(game.winner()).toBe(player2);
      });
    });

    describe('spiderman', function() {

      it('should fires at hulk', function() {
        player1.picks('spiderman');
        player2.picks('hulk');
        expect(game.winner()).toBe(player1);
      });

      it('should shoots black widow', function() {
        player1.picks('spiderman');
        player2.picks('black widow');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to iron man', function() {
        player1.picks('spiderman');
        player2.picks('iron man');
        expect(game.winner()).toBe(player2);
      });

      it('should lose to thor', function() {
        player1.picks('spiderman');
        player2.picks('thor');
        expect(game.winner()).toBe(player2);
      });
    });
//     describe('paper', function() {

//       it('should beat rock', function() {

//         player1.picks('paper');
//         player2.picks('rock');
//         expect(game.winner()).toBe(player1);

//       });

//       it('should lose to scissors', function() {

//         player1.picks('paper');
//         player2.picks('scissors');
//         expect(game.winner()).toBe(player2);

//       });

//     });

//     describe('scissors', function() {

//       it('should beat paper', function() {

//         player1.picks('scissors');
//         player2.picks('paper');
//         expect(game.winner()).toBe(player1);

//       });

//       it('should lose to rock', function() {

//         player1.picks('scissors');
//         player2.picks('rock');
//         expect(game.winner()).toBe(player2);

//       });

//     });

//   });

//   describe('draws', function() {

//     describe('any identical picks', function() {

//       it('should result in no winner', function() {

//         var drawGameResults = ['rock', 'paper', 'scissors'].map(function(x) {
//           player1.picks(x);
//           player2.picks(x);
//           return game.winner();
//         });

//         expect(drawGameResults).toEqual([null, null, null]);

//       });

//     });

  });

});