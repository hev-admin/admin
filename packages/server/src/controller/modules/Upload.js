async function upload(ctx) {
  const file = ctx.request.files[0]
  // console.log(file)
  ctx.status = 200
  ctx.body = {
    code: 200,
    success: true,
    message: 'File upload success',
    data: {
      url: `/${import.meta.env.VITE_UPLOAD_PATH || 'upload'}/${file.filename}`,
    },
  }
}

export default {
  'post /upload': {
    handler: upload,
    auth: false,
    upload: true,
  },
}
