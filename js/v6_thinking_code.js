var list = {
    todos: [],
    showTodos: function(){
        if(this.todos.length === 0){
            console.log('Your todo list is empty!!');
        } else {
            for(var i = 0; i < this.todos.length; i++){
                if (this.todos[i].completed === true){
                    console.log(this.todos[i].description, '(x)');
                }else {
                    console.log(this.todos[i].description, '( )');
                }
            }            
        }
    },
    addTodo: function(description){
        this.todos.push({
            description: description,
            completed: false
        });
        //this.showTodos();
    },
    amendTodo: function(pos, description){
        this.todos[pos].description = description;
        //this.showTodos();
    },
    delTodo: function(pos){
        this.todos.splice(pos, 1);
        //this.showTodos();
    },
    toggleCompleted: function(pos){
        this.todos[pos].completed = !this.todos[pos].completed;
        //this.showTodos();
    },
    toggleAll: function(){
        var totalTodos = this.todos.length;
        var completedTodos = 0;
        // Count the number of todos that are completed
        for(i = 0; i < totalTodos; i++){
            if(this.todos[i].completed === true){
                completedTodos++;
            }
        }
        // if all completed todos = total todos, make all false
        if(completedTodos === totalTodos){
            // make everything false
            for(i = 0; i < totalTodos; i++){
                this.todos[i].completed = false;
            }
        // if all completed todos do not = total todos
        } else {
        // loop through the items
            for(i = 0; i < totalTodos; i++){
            // make everything true that is currently false
                this.todos[i].completed = true;
            }
        }
    }
}
//list.addTodo('item 1');
//list.addTodo('item 2');
//list.addTodo('item 2');
//list.addTodo('item 3');
//list.addTodo('item 4');
//list.addTodo('item 5');
//list.addTodo('item 6');
//list.addTodo('item 7');
//list.addTodo('item 8');
//list.addTodo('item 9');
//list.addTodo('item 10');
//list.amendTodo(0, 'first');
//list.toggleCompleted(0);
//list.toggleCompleted(1);
//list.toggleAll();
//list.toggleAll();
//list.showTodos();

/*var displayTodosButton = document.getElementById('displayTodosButton');
displayTodosButton.addEventListener('click', function(){
    list.showTodos();
})
var toggleAllButton = document.getElementById('toggleAllButton');
toggleAllButton.addEventListener('click', function(){
    list.toggleAll();
})*/

var handlers = {
    showTodos: function(){
        list.showTodos();
    },
    toggleAll: function(){
        list.toggleAll();
    }
};






