describe("superheroes", function() {
  var player1, player2, game;
  
  beforeEach(function() {

    player1 = new Player('Izzy');
    player2 = new Player('Mishal');
    game = new Game(player1, player2);

  });

  describe('winning and losing', function() {

    describe('iron man', function() {

      it('should vaporises spider man', function() {
        player1.picks('Iron Man');
        player2.picks('Spiderman');
        expect(game.winner()).toBe(player1);
      });

      it('should break black widow', function() {
        player1.picks('Iron Man');
        player2.picks('Black Widow');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to hulk', function() {
        player1.picks('Iron Man');
        player2.picks('Hulk');
        expect(game.winner()).toBe(player2);
      });

      it('should lose to thor', function() {
        player1.picks('Iron Man');
        player2.picks('Thor');
        expect(game.winner()).toBe(player2);
      });
    });

    describe('hulk', function() {

      it('should smash iron man', function() {
        player1.picks('Hulk');
        player2.picks('Iron Man');
        expect(game.winner()).toBe(player1);
      });

      it('should crush thor', function() {
        player1.picks('Hulk');
        player2.picks('Thor');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to black widow', function() {
        player1.picks('Hulk');
        player2.picks('Black Widow');
        expect(game.winner()).toBe(player2);
      });

      it('should lose to spiderman', function() {
        player1.picks('Hulk');
        player2.picks('Spiderman');
        expect(game.winner()).toBe(player2);
      });
    });

    describe('black widow', function() {

      it('should seduce thor', function() {
        player1.picks('Black Widow');
        player2.picks('Thor');
        expect(game.winner()).toBe(player1);
      });

      it('should ass kicks hulk', function() {
        player1.picks('Black Widow');
        player2.picks('Hulk');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to spiderman', function() {
        player1.picks('Black Widow');
        player2.picks('Spiderman');
        expect(game.winner()).toBe(player2);
      });

      it('should lose to iron man', function() {
        player1.picks('Black Widow');
        player2.picks('Iron Man');
        expect(game.winner()).toBe(player2);
      });
    });

    describe('thor', function() {

      it('should beat iron man', function() {
        player1.picks('Thor');
        player2.picks('Iron Man');
        expect(game.winner()).toBe(player1);
      });

      it('should defeats spiderman', function() {
        player1.picks('Thor');
        player2.picks('Spiderman');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to hulk', function() {
        player1.picks('Thor');
        player2.picks('Hulk');
        expect(game.winner()).toBe(player2);
      });

      it('should lose to black widow', function() {
        player1.picks('Thor');
        player2.picks('Black Widow');
        expect(game.winner()).toBe(player2);
      });
    });

    describe('spiderman', function() {

      it('should fires at hulk', function() {
        player1.picks('Spiderman');
        player2.picks('Hulk');
        expect(game.winner()).toBe(player1);
      });

      it('should shoots black widow', function() {
        player1.picks('Spiderman');
        player2.picks('Black Widow');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to iron man', function() {
        player1.picks('Spiderman');
        player2.picks('Iron Man');
        expect(game.winner()).toBe(player2);
      });

      it('should lose to thor', function() {
        player1.picks('Spiderman');
        player2.picks('Thor');
        expect(game.winner()).toBe(player2);
      });
    });
  });

  describe('draws', function() {

    describe('any identical picks', function() {

      it('should result in no winner', function() {

        var drawGameResults = ['Iron Man', 'Hulk', 'Black Widow', 'Thor', 'Spiderman'].map(function(x) {
          player1.picks(x);
          player2.picks(x);
          return game.winner();
        });

        expect(drawGameResults).toEqual([null, null, null, null, null ]);
      });
    });
  });

  describe('victory messages', function() {

    it('should return character\'s name, verb and loser\'s character', function() {
      player1.picks('Iron Man')
      player2.picks('Spiderman')
      expect(game.winningMessage()).toEqual('YOU WIN....  Iron Man vaporises Spiderman');
    });
  });
});