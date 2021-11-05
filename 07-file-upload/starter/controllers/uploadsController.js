
const uploadProductImage = async (req, res) => {
    console.log(req.files)
    return res.send('image')
}

module.exports={uploadProductImage}