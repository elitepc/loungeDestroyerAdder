var soma = 0; 
var numberPattern = /\d+.\d+/g;
$('.tradepoll>.left>.frmbp').each(function(index, value){ 
	var numero = $(this).find('.rarity').text().match(numberPattern);
	numero = parseFloat(numero);
	soma += numero;
	
});

if($('#nopelala123').length == 0){
	$('#satrade').append("<div id='nopelala123' style='padding:5px'>" + soma.toString() + '€' + '</div>');
}
else{
	$('#nopelala123').text(soma + '€');
}