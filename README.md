# Criptografias
Trabalho como proposta da disciplina de Auditoria de Sistemas
[Criptografias](https://criptografias.herokuapp.com/ "Clique e acesse agora!")

![cabecalho](https://github.com/JhonatanNobreBarboza/Criptografias/blob/master/imgLayout.PNG)</br>

<p>A criptografia é um conceito técnico usado para codificar uma informação, de tal forma que somente o seu destinatário e o emissor da mensagem consigam acessá-la. O objetivo é evitar que terceiros interceptem e desvendem o código.</p>

<p>Na atualidade, as técnicas de criptografias mais conhecidas envolvem o conceito das chaves criptográficas, que são formadas por bits, com base em algarismos com capacidade de interpretar as informações, ou seja, capaz de decodificar. A chave do emissor deve ser compatível com a do receptor, para assim, as informações serem extraídas.</p>

<p>[TargetHost](https://www.targethost.com.br/importancia-criptografia-seguranca-dados/ "Fonte")</p>

### Tecnologias Utilizadas

- NodeJS
- Express
- HTML5 e CSS3
- Bootstrap
- Jquery
- JavaScript

![tipos de criptografias](https://github.com/JhonatanNobreBarboza/Criptografias/blob/master/tiposCriptografias.PNG)

### Cifra de Cesar
<p>Em criptografia, a Cifra de César, também conhecida como cifra de troca, código de César ou troca de César, é uma das mais simples e conhecidas técnicas de criptografia. É um tipo de cifra de substituição na qual cada letra do texto é substituída por outra, que se apresenta no alfabeto abaixo dela um número fixo de vezes. Por exemplo, com uma troca de três posições, A seria substituído por D, B se tornaria E, e assim por diante. O nome do método é em homenagem a Júlio César, que o usou para se comunicar com os seus generais.</p>
<br/>

![Fonte - wikipedia](https://github.com/JhonatanNobreBarboza/Criptografias/blob/master/esquemaCesar.png) <br/>
[Fonte - wikipedia](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) <br/>


### Cifra de Vigenère

<p>A cifra de Vigenère é um método de criptografia que usa uma série de diferentes cifras de César baseadas em letras de uma senha. Trata-se de uma versão simplificada de uma mais geral cifra de substituição polialfabética, inventada por Leon Battista Alberti cerca de 1465.</p>

<p>A invenção da cifra de Vigenère é erradamente atribuída a Blaise de Vigenère; encontra-se originalmente descrita por Giovan Battista Bellaso no seu livro datado de 1553 com o título La Cifra del Sig. Giovan Battista Bellaso.</p>

<p>Esta cifra é muito conhecida porque é fácil de perceber e de pôr em prática, parecendo, a quem tem pouca prática, que é inquebrável (indecifrável). Consequentemente, muitos programadores implementaram esquemas de criptografia nas suas aplicações que são no essencial cifras de Vigenère, e que são facilmente quebradas por qualquer criptoanalista.</p>

![Fonte - wikipedia](https://github.com/JhonatanNobreBarboza/Criptografias/blob/master/tabulaRetaVigenere.png)

[Fonte - wikipedia](https://pt.wikipedia.org/wiki/Cifra_de_Vigen%C3%A8re)

### Cifra de Transposição

<p>Outro tipo simples de cifra é a de transposição que, diferente da cifra de substituição, consiste em realizar a criptografia através da re-ordenação dos caracteres do texto a ser criptografado. Essa troca dos caracteres deve ser baseada numa chave para que seja possível tanto a cifragem quanto a decifragem.</p>

<p>Uma cifra de transposição simples e bem conhecida é a Cifra das Colunas, onde o texto a ser criptografado é escrito em linhas cujo tamanho é definido por uma chave que corresponderá ao cabeçalho. Os espaços que restarem podem ser deixados em branco ou preenchidos com caracteres sem significado. Ao fim da escrita, o texto estará dividido em colunas e, para que o texto cifrado seja obtido, basta escrever os caracteres de cada coluna tendo como base a ordem alfabética do cabeçalho. Por exemplo, o texto "TROCA DE POSTO" ao ser cifrado com a chave "ZEBRA" teria o seguinte resultado:</>
  
  ![Fonte - Wikibooks](https://github.com/JhonatanNobreBarboza/Criptografias/blob/master/transposicao.PNG)
  
<p>#### Seguindo a ordem alfabética do cabeçalho:</p>

<p>Coluna A -> "AP"</p>

<p>Coluna B -> "OET"</p>

<p>Coluna E -> "RDS"</p>

<p>Coluna R -> "C O"</p>

<p>Coluna Z -> "T O"</p>

<p>#### Escrevendo o texto cifrado completo:</p>

" **APOETRDSC OT O** " <br/>
 [Fonte - Wikibooks](https://pt.wikibooks.org/wiki/Algoritmos/Criptografia)
