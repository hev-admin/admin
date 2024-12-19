import { createLoading } from './loading'
import { createTitle } from './title'
import { createPermission } from './permission'
import { createHistory } from './history'
import { createAuth } from './auth'
import { createParams } from './params'

export function setupGuards(router) {
  createAuth(router)
  createPermission(router)
  createParams(router)
  createHistory(router)
  createTitle(router)
  createLoading(router)
}
