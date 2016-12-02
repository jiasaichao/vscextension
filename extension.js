// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
let vscode = require('vscode');
const Range = vscode.Range;
const p = vscode.Position;
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    //console.log('Congratulations, your extension "jscextension" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerTextEditorCommand('extension.action.Comments', function (textEditor, edit) {
        //console.log(textEditor, edit);
        // The code you place here will be executed every time your command is executed
        const startPosition = textEditor.selection.start;
        const endPosition = textEditor.selection.end;
         edit.insert(startPosition, '{/*');
         edit.insert(endPosition, '*/}');
        // const line = textEditor.document.lineAt(startPosition);

        // if (line.text[line.text.length - 1] === ';') {
        //     edit.delete(new Range(
        //         line.range.end.translate(0, -1),
        //         line.range.end
        //     ));
        // } else {
        //     edit.insert(line.range.end, ';');
        // }
        // Display a message box to the user
        //vscode.window.showInformationMessage('Hello World!');
    });

    context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;