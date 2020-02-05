let { uploader } = require('./cloudinaryConfig')
let { dataUri } = require('../middleware/multerUpload')

async function uploadFiles(files) {
  return new Promise(async (res, rej) => {
    let allFiles = []
    for(let file of files) {
      const dataUriFile = dataUri(file).content
      allFiles.push(
        await uploader.upload(dataUriFile)
          .then(result => result.url)
          .catch(_ => rej('and error occured while uploading your images'))
      )
    }
    res(allFiles)
  })
}

async function uploadFile(file) {
  return new Promise(async (res, rej) => {
    const dataUriFile = dataUri(file).content
    return await uploader.upload(dataUriFile)
      .then(result => res(result.url))
      .catch(_ => rej('and error occured while uploading your images'))
  })
}

exports.uploadFiles = uploadFiles
exports.uploadFile = uploadFile