/////////// Start of function ////////////
function matrix(end) {
  
  let str = " ";
  let empty = "  ";
  
  for (let i = 1; i <= end; i++) {
      str = str + empty + i;
    }
   console.table(str);
  
  empty = "  ";
  for (let stroka = 1; stroka <= end; stroka++) {
  	 str = stroka;
       let ar=[str];
       for (let stolb = 1; stolb <= end; stolb++) {
       	   
             str = str + empty + stroka*stolb;
        }
        console.log(str);
   }
   
    
}

/////////// End of function ////////////
//matrix(5);
