import {pool} from '../db.js'

export const getIcecreams = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM flavors')
    res.json(rows)
}

export const getIcecream = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM flavors WHERE id = ?', [req.params.id])
    
    if(rows.length <= 0) return res.status(404).json({
        message: "ice cream not found"
    })

    res.json(rows[0])
}

export const createIcrecream = async (req, res) => {
    const {flavor, price} = req.body
    const [rows] = await pool.query('insert into flavors (flavor, price) values (?, ?)', [flavor, price])
    res.send({
        id: rows.insertId,
        flavor,
        price,
    })
}

export const updateIcecream = async (req, res) => {
    const {id} = req.params
    const {flavor, price} = req.body

    const [result] = await pool.query('UPDATE flavors SET flavor = IFNULL(?, flavor), price = IFNULL(?, price) WHERE id = ?', [flavor, price, id])

    console.log(result)

    if(result.affectedRows === 0) return res.status(404).json({
        message: "Ice cream not found"
    })

    const [rows] = await pool.query('SELECT * FROM flavors WHERE id = ?', [id])
    res.json(rows[0])
}

export const deleteIcecream = async (req, res) =>{
    const [result] = await pool.query('DELETE FROM flavors WHERE id = ?', [req.params.id])
    
    if (result.affectedRows <= 0) return res.status(404).json({
        message: "Ice cream not found"
    })
    res.sendStatus(204)
}