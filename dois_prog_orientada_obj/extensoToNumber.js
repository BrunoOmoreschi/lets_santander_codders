var x = "mil novecentos e noventa e nove"

function setEntranceCorrectFormat (x) {
    //Descobre o tipo de variavel a ser ajustada. O rolê...
    const role = typeof x;
    //*Switch para categorizar o problema.
    switch (role) {
      case "undefined":
        throw "Faltam informações";
        break;
      case "boolean":
        throw "Verdadeiro ou falso é muito filosófico para um quadrado";
        break;
      case "number":
        //Bah! Se está certo segue o bonde! *Não sei nem como veio parar aqui..
        return x;
      case "string":
        //Aqui que o bicho pega...
        return kindOfStr(x);
    }
    //Função que vai descobrir se o problema é do tipo "duzentos e vinte" ou "220"
    function kindOfStr(y) {
      //BLOCO DAS FUNÇÕES DE ALTERAÇÃO

      /*Fun spliter em espaços, pega um string de palavras "trinta e três"
        ->["trinta", "e", "três"], da undefined se receber apenas 1 palavra
        */
      function spaceSpliter(y) {
        splited = x.split(" ");
        return splited;
      }

      //*Fun que transforma em numero ("999"-> 999) Recebe um array ["Num", bool]
      function fNStringTonum(x) {
        Nstring = parseInt(x[0]);
        x = x[0]
        return Nstring;
      }

      //Função semelhante a dicionario
      function dictNum (lukeNumWalker){
          //Olha a malandragem... vai que não vem no minusculo... No 1 deserves LOL
          lukeNumWalker = lukeNumWalker.toLowerCase();   
          switch (lukeNumWalker) {
            case "um": {lukeNumWalker = 1;
              return lukeNumWalker}
            case "hum": {lukeNumWalker = 1;
              return lukeNumWalker}
            case "dois": {lukeNumWalker = 2;  
                return lukeNumWalker}
            case "tres": {lukeNumWalker = 3;
              return lukeNumWalker}
            case "três": {lukeNumWalker = 3;
              return lukeNumWalker}
            case "quatro": {lukeNumWalker = 4;
              return lukeNumWalker}
            case "cinco": {lukeNumWalker = 5;
              return lukeNumWalker}
            case "seis": {lukeNumWalker = 6;
                return lukeNumWalker}
            case "sete": {lukeNumWalker = 7;
                return lukeNumWalker}
            case "oito": {lukeNumWalker = 8;
              return lukeNumWalker}
            case "nove": {lukeNumWalker = 9;
              return lukeNumWalker}
            case "dez": {lukeNumWalker = 10;
              return lukeNumWalker}
            case "onze": {lukeNumWalker = 11;
              return lukeNumWalker}
            case "doze": {lukeNumWalker = 12;
              return lukeNumWalker}
            case "treze": {lukeNumWalker = 13;
              return lukeNumWalker}
            case "quatorze": {lukeNumWalker = 14;
              return lukeNumWalker}
            case "catorze": {lukeNumWalker = 14;
              return lukeNumWalker}
            case "quinze": {lukeNumWalker = 15;
              return lukeNumWalker}
            case "dezesseis": {lukeNumWalker = 16;
                return lukeNumWalker}
            case "dezessete": {lukeNumWalker = 17;
                return lukeNumWalker}
            case "dezoito": {lukeNumWalker = 18;
                return lukeNumWalker}
            case "dezenove": {lukeNumWalker = 19;
                return lukeNumWalker}
            case "vinte":{lukeNumWalker = 20;
                return lukeNumWalker}
            case "trinta": {lukeNumWalker = 30;
                return lukeNumWalker}
            case "trinta": {lukeNumWalker = 30;
                return lukeNumWalker}
            case "quarenta": {lukeNumWalker = 40;
                return lukeNumWalker}
            case "cinquenta": {lukeNumWalker = 50;
                return lukeNumWalker}
            case "sessenta": {lukeNumWalker = 60;
                return lukeNumWalker}
            case "setenta": {lukeNumWalker = 70;
                return lukeNumWalker}
            case "oitenta": {lukeNumWalker = 80;
                return lukeNumWalker}
            case "noventa": {lukeNumWalker = 90;
                return lukeNumWalker}
            case "cem": {lukeNumWalker = 100;
                return lukeNumWalker}
            case "cento": {lukeNumWalker = 100;
                return lukeNumWalker}
            case "duzentos": {lukeNumWalker = 200;
                return lukeNumWalker}
            case "trezentos": {lukeNumWalker = 300;
                return lukeNumWalker}
            case "quatrocentos": {lukeNumWalker = 400;
                return lukeNumWalker}
            case "quinhentos": {lukeNumWalker = 500;
                return lukeNumWalker}
            case "seiscentos": {lukeNumWalker = 600;
                return lukeNumWalker}
            case "setecentos": {lukeNumWalker = 700;
                return lukeNumWalker}
            case "oitocentos": {lukeNumWalker = 800;
                return lukeNumWalker}
            case "novecentos": {lukeNumWalker = 900;
                return lukeNumWalker}
            case "mil": {lukeNumWalker = 1000;
                return lukeNumWalker}
            }
        return lukeNumWalker}
                    
        //Função que trabalha com somas... vai realizando as somas de cada item até chegar no final
        //Ainda não está preparada para milhares, mas pra esse exercicio basta
        function komposed (viagem){
          var numArray = viagem[0]
          var summer = 0;
          for (var i = 0; i < numArray.length - 0; i++) {
            if (numArray[i] != "e") {
              var elment = dictNum(numArray[i])
              summer = summer + elment;              
            }
            else if (viagem[i] == "e") {
              summer = summer + 0;
            }
          }
          var winter = [null,null]
          winter[0] = summer
          winter[1] = viagem[1]
          return winter;
        }


      //BLOCO DAS FUNÇÕES DE VERIFICAÇÃO

      //*Verificar se tem espaços na entrada, spliter dá problema se for uma palavra apenas -> bool
      function simplesOrComposto(y) {
        var verificaEspaco = y.indexOf(" ") >= 0;
        return verificaEspaco;
      }

      /*Fun q checa se o primeiro char é um numero
        Tem que passar apenas o elemento do array, não o array
        Retorna um booleano*/
      function istNumer(z) {
        var erstZeichen = z[0];
        var numList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        var ckArray = [];
        var ckBool = false;

        for (var i = 0; i < numList.length; i++) {
          var wereAmI = numList[i];
          if (erstZeichen == wereAmI) {
            ckBool = true;
            ckArray.push(ckBool);
            break;
          } else ckArray.push(false);
        }
        var IsNumber = ckArray.includes(true);
        return IsNumber;
      }

      //BLOCO DE FUNÇÕES DE ROTEIRO

      /*Fun q decide o que fazer com a entrada logo de cara
    Se precisar chama o spliter, se não retorna a propria entrada, 1 palavra. 
    */
      function toSplitOrNotToSlit(k) {
        var obj = [];
        var markComposto = false;
        if (simplesOrComposto(k) == true) {
          //*Salva um array de palavras cortadas por espaços
          splited = spaceSpliter(k);
          //Retorna uma marcação de que é composto e que deverá ser tratado assim
          markComposto = true;
          obj.push(splited);
          obj.push(markComposto);
          return obj;
        } else {
          obj.push(k);
          obj.push(markComposto);
          return obj;
        }
      }

      //Se é apenas uma palavra, podemos traduzir para numero?
      function tratSimpOrComp(viagem) {
            if (viagem[1] == false) {
                var ckNum = istNumer(viagem[0])
                if (ckNum == true){
                    viagem[0] = fNStringTonum(viagem);
                    viagem[1] = true
                    return viagem;
                }else {
                    viagem = dictNum(viagem[0])
                }
                    return viagem;
                
            } if (viagem[1] == true) {
                var composed = komposed (viagem)
              return composed

            }
      }

      //Variavel que chama o processo de tradução de string para numero.
      var viagem = toSplitOrNotToSlit(y);
      viagem = tratSimpOrComp(viagem)
      if (viagem%viagem == 0){
          return viagem
      }if (typeof viagem != Number){
          viagem = viagem[0];
      return viagem}
      else return "É não tem jeito: está quebrado...."
    }


}

console.log(x + " " + typeof x + " Começo line 238");
var test = setEntranceCorrectFormat (x)
console.log(test + " " + typeof test + "  Chegamos aqui");