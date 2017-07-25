import { Auth } from "./Auth";

export class QueriesClient {
    private auth = new Auth();

    public getQueries(
        accountName: string,
        projectId: string,
        onload: (this: XMLHttpRequestEventTarget, ev: Event) => any,
        folderPath?: string,
        $depth?: 0,
    ) {
        let url =`https://${accountName}.visualstudio.com/${projectId}/_apis/wit/queries?api-version=1.0`;
        url += `&$depth=1`;
        url += `&$expand=minimal`;


        let myPatToken = this.auth.personalAccessToken;
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.setRequestHeader('Authorization', 'Basic ' + btoa("" + ":" + myPatToken));
        xhr.responseType = 'json';
        
        xhr.onload = onload;
        xhr.send();

    }
}