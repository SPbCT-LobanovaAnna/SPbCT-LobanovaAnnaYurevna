function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  let input, output,key;
  let inp, k;
  
  input = prompt("Введите исходный текст");
  key = prompt("Введите ключ");
  
  if ((key.length) < (input.length)) {
      alert("Данный ключ короче сообщения. Скопируйте новый сгенерированный ключ из консоли.");
  
      key = "";
  
      for (let i = 0; i < input.length; i++) {
          key += String.fromCharCode(getRandomInt(0,66535));
      }
  
      
      console.log("Скопируйте сгенерированный ключ");
      console.log(key);
  
  }	
  
  
  output = "";
  for (i = 0; i < input.length; i++) {
  
      inp = input.charCodeAt(i);
      k = key.charCodeAt(i);
  
      output += String.fromCharCode(inp ^ k); 
  }
  
  
  console.log("Результат шифрования данных в режиме однократного гаммирования");
  console.log(output);
