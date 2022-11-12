import axios from "axios"
export default function handler(req, res) {

    const body = req.body;   

    try {
        axios.post(process.env.WORD_ALIVE_API_PROD, body.data)
        .then((response) => {
            res.status(200).json({            
                data: response.data,                      
            })
        });   
        
    } catch (error) {
        res.status(500).json({ error: error.data })
       
    }    
  }


