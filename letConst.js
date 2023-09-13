// to make it so that PI cannot be reassigned, we just use const
// const PI = 3.14;

// var is able to reassign and redeclare but let does not let you redeclare. Var also lets you "hoist"
// which means it is as if the variable is already declared at the beginning of the file. 
// In contrast, let has block scopes which means the variable does not exist outside of the block scope

// With const, you cannot redeclare or reassign
// let, lets you reassign but const does not let you reassign nor redeclare.

// Hoisting is where variables and functions that are declared are moved to the top of the scope during compilation.
// When you use var, you can access the variables before it is used later on.
// Function declarations are naturally hoisted and can be invoked before they are defined.  