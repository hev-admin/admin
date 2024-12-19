import { join } from 'node:path'
import { cwd } from 'node:process'
import { createHash } from 'node:crypto'
import Multer from '@koa/multer'

export function genMulter() {
  const storage = Multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, join(cwd(), 'www', import.meta.env.VITE_UPLOAD_PATH || 'upload'))
    },
    filename: (req, file, cb) => {
      // console.log(file)
      const hash = createHash('MD5')
      hash.update(`${file.originalname}${new Date().getTime()}`)
      const hashValue = hash.digest('hex')

      if (file.originalname.includes('.')) {
        const filenameArr = file.originalname.split('.')
        const ext = filenameArr[filenameArr.length - 1]
        cb(null, `${hashValue}.${ext}`)
      }
      else {
        cb(null, hashValue)
      }
    },
  })

  return Multer({ storage }).any()
}
