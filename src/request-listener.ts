import { RequestListener, IncomingMessage, ServerResponse } from 'http';

import { ResponseTypes } from './constants/response-types';

export function Listener(req: IncomingMessage, res: ServerResponse) {

    const result = {hello: 'hi'};    
    res.writeHead(200, {'Content-Type': ResponseTypes.app_json })
    res.write(JSON.stringify(result));
    res.end();
    
}