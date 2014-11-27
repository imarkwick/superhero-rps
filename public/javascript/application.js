$(document).ready(function(){

	var remove = function(){
		$(this).remove();
	};
	var render = function(game){
		var html = $('#list-item-template').html();
		var data = {message: game.winningMessage()}
		return Mustache.render(html, data);
	};

	var izzy = new Player("izzy");
	var mishal = new Player("mishal");
	var game = new Game(izzy, mishal);

	$('.choices img').on('click', function(){

	  izzy.picks($(this).data('pick'));
	  mishal.picks(game.computer());
	  $(render(game)).prependTo('#results').fadeIn(800);
	  $('li:nth-child(5)').fadeOut(1500, remove);
	});
})