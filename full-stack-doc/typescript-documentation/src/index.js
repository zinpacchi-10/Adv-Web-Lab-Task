"use strict";
// type of operator
// Truthiness and falseiness norrowing idea
// equality oparator using
function printTodos(todos) {
    if (todos) {
        todos.map((todo) => console.log(todo));
    }
    else {
        console.log("no todos");
    }
}
const todos = ['todo1', 'todo2'];
printTodos(todos);
printTodos(null);
// type of operator/gurd
