import * as vscode from 'vscode';
import axios from 'axios';

export class demoProvider implements vscode.CompletionItemProvider{
        public provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): vscode.CompletionItem[]{

            var completionItems = [];
            var completionItem = new vscode.CompletionItem("aaa");
            completionItem.kind = vscode.CompletionItemKind.Text;
            completionItem.commitCharacters = ["@","."];
            completionItem.detail = "aaa";
            completionItem.filterText = "bb";
            completionItem.insertText = new vscode.SnippetString("aaaa$1bbbb$2cccc");
            completionItems.push(completionItem);
            axios.get('http://restfulapiwebservice0627.azurewebsites.net/uids/csharp_coding_standards'

            ).then(reponse => {
                let data = reponse.data;
                
            }).catch(error => {
                console.log(error);
            })
            return completionItems;
        }
        public resolveCompletionItem(item: vscode.CompletionItem, token: vscode.CancellationToken): any{
            return item;
        }
        dispose(){

        }
    }

    export class httpRequest{

    }