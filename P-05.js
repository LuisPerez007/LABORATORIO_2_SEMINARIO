const emailList = [
    "javascript@gmail.com", 
    "abc.com",
    "mydomain.com",
    "Python@hotmail.com",
    "test",
    "anotherEmail@kenkoo.com",
    "typescript@gmail.com",
    "mailOfPikachu@@@@@",
    "elta@kkk.co",
    "user123.....",
    "wrongEmail@gmail.com",
    "kattis.go",
    "java@gamil.com",
  ];
  for(let i=0;i<emailList.length;i++){
    if(emailList[i].includes('@')&& emailList[i].endsWith('.com')){
        console.log(emailList[i]);
    }

  }