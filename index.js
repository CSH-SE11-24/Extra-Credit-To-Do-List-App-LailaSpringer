// Create an empty array called 'todoList' to store your to-do list items.
let todolist = []

// You will be implementing a loop that repeatedly displays possible options, takes user input, and performs actions accordingly. 
// Print "Welcome to the To-Do List App"
let todolist2 =prompt("Welcome to your to do list!")

// Print the options 
// 1 - display the list
// 2 - add new task to end
// 3 - add new task to beginning
// 4 - delete first task
// 5 - exit
let options = ["display the list", "add new task to end","add new task to beginning","delete first task","exit"]
console.log(options)
// Define a variable called userChoice and set it to 0
let userChoice = 0

// Create a while loop that runs while the user doesn't type in 5
let user = prompt("Choose a number")
user = parseInt(user)
while (user !== 4){
  if( user ==1 ){
    console.log(options)
  }else if (user ==2){
    let user =prompt( "enter task")
    const count = options.push('new task');
      console.log(options)
  }else if( user ==3){
    console.log(options)
  }else if (user ==4){
    console.log(options)
    
// In the loop, use conditionals to match the action to the option 
// 1 - display the list
// 2 - add new task to end
// 3 - add new task to beginning
// 4 - delete first task
// 5 - exit





}



