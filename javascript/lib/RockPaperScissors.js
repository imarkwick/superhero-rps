function Player(name) {
	this.name = name;
};

Player.prototype.picks = function(pick) {
	this.pick = pick;
};

function Game(player1, player2) {
	this.player1 = player1;
	this.player2 = player2;
};

Game.prototype.winner = function() {
	if(this.player1.pick === this.player2.pick) {return null}

	if (this._superheroMove(this.player1.pick, this.player2.pick)) {
		return this.player1;
	}
	else {
		return this.player2;
	}
};

Game.prototype.RULES = {
	 	'iron man':  { 'spiderman': 'vaporises', 'black widow': 'breaks' },
	 	'hulk': { 'iron man': 'smashes', 'thor': 'crushes' },
	 	'black widow': { 'thor': 'seduces', 'hulk': 'ass kicks' },
	 	'thor': { 'iron man': 'beats', 'spiderman': 'defeats'  },
	 	'spiderman': { 'hulk': 'fires at', 'black widow': 'shoots' }
};

Game.prototype._superheroMove = function(pick, opponentPick) {
	return this.RULES[pick][opponentPick];
};



