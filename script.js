




 var todos = ['dishes', 'laudary', 'walk the dog'];
   console.log(todos);

   var input = prompt('what would like to do?');

   while(input !== 'quit') {
     if(input === 'todos') {
       console.log(todos);
     }  else if (input === 'new') {
         var add = prompt('Add new todo');
         todos.push(add);
     }
    
    var input = prompt('what would you like to do?');
   }
     console.log('you have quit the app');
  

































