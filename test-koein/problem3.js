function reverseString(str){
    
    str = str.split(' ')
   
    let reversed = "";
         
        for (let i = str.length-1; i >=0; i--) {
          reversed += str[i];
          if (i > 0) {
            reversed += " ";
          }
        
       }
         return reversed; 
}

let str = "“May the Fourth be with you";
console.log(reverseString(str));