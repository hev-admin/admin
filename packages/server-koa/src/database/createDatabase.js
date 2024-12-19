import { createConnection } from 'mysql2'
import { parseDatabaseURL } from '../scripts/env.js'

export function createDatabase(databaseURL) {
  const { host, user, password, database } = parseDatabaseURL(databaseURL)

  const connection = createConnection({
    host,
    user,
    password,
  })

  connection.connect((err) => {
    if (err) {
      return console.error('连接数据库失败:', err)
    }

    const databaseQuery = `CREATE DATABASE IF NOT EXISTS ${database}`

    connection.query(databaseQuery, (err) => {
      if (err) {
        return console.error('创建数据库失败:', err)
      }
      console.log('数据库创建成功')
    })
  })

  // 关闭连接
  connection.end()
}
