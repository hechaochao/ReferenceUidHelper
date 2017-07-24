import axios from 'axios';

export class httpRequestFactory {
    public static callback = function (response) {
        var data = response.data;
                var transformData = JSON.parse(data);
                return transformData;
    }

    private static _client = axios.create({
        headers: { 'Content-type': 'application/json', 'Accept-type': 'application/json' }
    });

    public static getUids(url: string, uid: string): void {
        this._client.get(url + uid)
            .then(response => this.callback(response))
            .catch(error => {
                console.log(error);
            });
    }


}