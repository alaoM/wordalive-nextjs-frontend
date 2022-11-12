import { dbquery } from '../../lib/db'

export default async function handler(req, res) {

    try {
        const query1 = "SELECT * FROM `events` ORDER BY timestamp DESC limit 1"
        const valuesParams = []


        const query2 = "SELECT * FROM `sermon` ORDER BY timestamp DESC limit 1"
        const values2 = []

        const query3 = "SELECT * FROM `portfolio` ORDER BY timestamp DESC LIMIT 8"
        const values3 = []


        const data = await dbquery({ query: query1, values: valuesParams })
        const data2 = await dbquery({ query: query2, values: values2 })
        const data3 = await dbquery({ query: query3, values: values3 })
        /*  const data2 = query(query2, values2)
         const data3 = query(query3, values3) */


        res.status(200).json({
            events:  data ,
            sermons: data2,
            portfolio: data3
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
