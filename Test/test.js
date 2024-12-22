// You are tasked with simulating the behavior of a simple text editor that supports three operations:

// "type X": Appends the string X to the current content of the editor.
// "undo": Undoes the most recent type operation, removing the last appended string from the content.
// "redo": Redoes the most recently undone type operation, adding the string back to the content (if available).
// You will be given an array of operations to process, and you need to determine the final content of the editor.
// output : "Hello World !"

let input = ["type Hello", "type World", "undo", "redo", "type !"];

// output
// 'Hello World!';

const editor = (input) => {};

editor(input);
