import { dbquery } from '../../lib/db'

export default async function handler(req, res) { 

    try {
        const query1 = "SELECT * FROM `sermon` WHERE (`video_path` != '') ORDER BY timestamp DESC";
        const valuesParams = [];

        const query2 = "SELECT * FROM `portfolio` ORDER BY timestamp DESC "

       
        const data =  await dbquery({ query: query1, values: valuesParams })
        const data2 =  await dbquery({ query: query2, values: valuesParams })

       
        res.status(200).json({            
            sermons: data, 
            portfolio: data2          
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    } 
}
