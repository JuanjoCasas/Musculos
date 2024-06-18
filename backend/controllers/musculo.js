const Musculo = require('../models/musculo')

const getMusculos = async (req, res) => {
    try {
        const musculos = await Musculo.findAll()
        res.json(musculos)
    } catch (error) {
        return res.status(500).json({message : error.message})
    }
}

module.exports = getMusculos