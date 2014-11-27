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

Game.prototype.winningMessage = function() {
	var result;
	if(this.winner()) {
		result=[this.message(),
		this.winner().pick,
		this._victoryVerb(this.winner().pick, this.loser().pick),
		this.loser().pick].join(' ');
	} else {
		result = "DRAW";
	}

	return result;

};

Game.prototype.loser = function() {
	return (this.winner() === this.player1 ? this.player2 : this.player1);
};

Game.prototype._victoryVerb = function(pick, opponentPick) {
	return this.RULES[pick][opponentPick];
};

Game.prototype.computer = function() {
	var random = ["iron man", "hulk", "black widow", "thor", "spiderman"];
	var opponentPick = random[Math.floor(Math.random()*random.length)];
	return opponentPick;
};

Game.prototype.message = function() {
	if(this.winner() === this.player1){
		return "YOU WIN.... "
	} else {
		return "YOU LOSE...."
	}
};

