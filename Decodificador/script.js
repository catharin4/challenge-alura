var textArea = document.querySelector(".text-area");
var mensagem = document.querySelector(".mensagem");




function botaoCripto(){
	var textoCripto = criptografar(textArea.value);
	mensagem.value = textoCripto;
	textArea.value = "";
}	

function criptografar(stringCriptada){
	let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
	stringCriptada = stringCriptada.toLowerCase();
	for(let i = 0; i < matrizCodigo.length; i++){
		if(stringCriptada.includes(matrizCodigo[i][0])){
			stringCriptada = stringCriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
		}
	}
	return stringCriptada;
}	

function botaoDecripto(){
	var textoDecripto = decriptografar(textArea.value);
	mensagem.value = textoDecripto;
	textArea.value = "";
}	

function decriptografar(stringDecriptada){
	let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
	stringDecriptada = stringDecriptada.toLowerCase();
	for(let i = 0; i < matrizCodigo.length; i++){
		if(stringDecriptada.includes(matrizCodigo[i][1])){
			stringDecriptada = stringDecriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
		}
	}
	return stringDecriptada;
}	





