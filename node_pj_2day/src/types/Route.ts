import Express from "express"

export enum Method {
    GET = 'get',
    POST = 'post',
    PUT = 'put',
    PATCH = 'patch',
    DELETE = 'delete'
}

export interface Route{
    path: string
    method: Method
    handler: (req: Express.Request, res: Express.Response)
        => Promise<void | Express.Response>
}