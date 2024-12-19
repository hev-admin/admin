import { copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { cwd } from 'node:process'

export function parseDatabaseURL(databaseURL) {
  const { username: user, password, pathname, hostname: host, port } = new URL(databaseURL)
  return {
    user,
    password,
    host,
    port,
    database: pathname.slice(1),
  }
}

if (!existsSync(resolve(cwd(), '.env'))) {
  copyFileSync(resolve(cwd(), '_env'), resolve(cwd(), '.env'))
}
