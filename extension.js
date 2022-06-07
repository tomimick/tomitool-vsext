// The module 'vscode' contains the VS Code extensibility API
const vscode = require('vscode');

// activate() is called when your extension is activated
// your extension is activated the very first time the command is executed

function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "tomitool" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('tomitool.helloWorld', function () {
		hello_command();
	});

	context.subscriptions.push(disposable);
}

// deactivate() is called when your extension is deactivated
function deactivate() {}


// https://code.visualstudio.com/api/references/vscode-api


function hello_command() {

	// sample command to replace selected text with a hello

	// display a message box to the user
	vscode.window.showInformationMessage('Hello World from tomitool!');

	let editor = vscode.window.activeTextEditor;
	if (!editor) {
		vscode.window.showErrorMessage('No active editor');
		return;
	}

	//let text = editor.document.getText();
	//let type = editor.document.languageId;
	//let linepos = editor.selection.active.line;
	//let line = editor.document.lineAt(linepos);

	//console.log(line, type, linepos);

	//const edit = new vscode.WorkspaceEdit();
	let newtext = "Tomitool hello!";
	editor.edit(function (texteditor) {
		//selectedText.replace(editor.selection, newtext);
		//let pos = linepos; //activeEditor.selection;
		// inserts or replaces
		texteditor.replace(editor.selection, newtext);
	});
}

module.exports = {
	activate,
	deactivate
}
