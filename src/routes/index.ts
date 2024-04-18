import { Application, Router } from 'express'
import { AuthRouter } from './auth.router'
import { ChatRouter } from './chat.router'

const _routes: Array<[string, Router]> = [
  ['/api/user', AuthRouter],
  ['/api/chat', ChatRouter]
]

const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, router] = route
    app.use(url, router)
    // ini sama saja dengan app.use("/task", TaskRouter)
  })
}

export default routes
