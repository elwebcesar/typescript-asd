
import { ITikerResponse } from './interface/itiker';

export default async function getTickers(): Promise<ITikerResponse> {
    try {
        const response = await fetch('https://api.wazirx.com/sapi/v1/tickers/24hr', {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            }),
        });

        const data = await response.json();
        // console.log(data[0])

        if (data.message) {
            return {
                message: data.message,
                data: []
            }
        }

        return {
            data: data,
            message: null
        }
    }
    catch (error) {
        // console.log('error function getTickers');
        return {
            data: [],
            message: 'error loading fetching data'
        }
    }
}
