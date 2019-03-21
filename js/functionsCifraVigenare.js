let alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];


// Criptografar mensagem
function criptografar(letra, valorLetra){
	for(let i = 0; i < letra.length; i++){
		for(let j = 0; j < alfabeto.length; j++){
			if(alfabeto[j] == letra[i]){
				return alfabeto[(j + valorLetra)%26];
			}
		}
	}
}

// Descriptografar mensagem
function descriptografar(letra, valorLetra){
	for(let i = 0; i < letra.length; i++){
		for(let j = 0; j < alfabeto.length; j += 1){
			if(letra[i] == alfabeto[j]){
				return alfabeto[((j - valorLetra)+25)%26];
			}
		}
	}
}