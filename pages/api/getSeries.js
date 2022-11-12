import { dbquery } from '../../lib/db'

export default async function handler(req, res) {
    const id = req.body.id;
  
    
    if (req.method == 'GET') {
        try {
            const query1 = "SELECT * FROM `series` WHERE (`image_path` != '') ORDER BY timestamp DESC"
            const valuesParams = []
            const query2 = "SELECT * FROM `series` ORDER BY timestamp DESC LIMIT 8"
            const query3 = "SELECT * FROM `writtensermon` WHERE `topic` !='' ORDER BY timestamp DESC"
            
            const data = await dbquery({ query: query1, values: valuesParams })
            const data2 = await dbquery({ query: query2, values: valuesParams })
            const data3= await dbquery({ query: query3, values: valuesParams })

            res.status(200).json({
                series: data,
                relatedPost: data2,
                recentPost: data3
            })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
    if (req.method === 'POST') {
        
        try {
            const query2 = "SELECT * FROM `series` WHERE `checker` = ?"
            const values2Params = [id]
            const data2 = await dbquery({ query: query2, values: values2Params })
            res.status(200).json({                
                seriesByID: data2,
            })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

}
