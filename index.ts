// import Express from 'express'

// interface Server {
//     start: () => Promise<void>
//     getRoutes: (parentRoute: Route) => Route[]
//     getUpTime: () => number
// }

// class ExpressServer implements Server {
//     private readonly app: Express.Application
//     private readonly port = 3000

//     constructor () {
//         this.app = Express()
//     }

//     async start() {
//         this.app.listen(this.port, () => {
//             console.log('server is reuning on port: ', this.port)
//         })
//     }

// }

// interface Route {
//     path: string
//     method: 'get' | 'post' | 'put' | 'patch' | 'delete'
//     handler: (req: Express.Request , res: Express.Response) => Promise<void | Express.Response>
// }

// const signinRoute: Route = {
//     path: '/signin',
//     method: 'post',
//     handler: async (req, res) => {
//         return res.json('')
//         // return res.json('')
//     }
// }

type Student = Record<string, number | string>

function getSutdeniInfo <T extends number> (student: Student, key: T): number | string{
    return student[key]
}

const asd = getSutdeniInfo<number>({age: 1} as Student, 1234124)

// 문법 공부