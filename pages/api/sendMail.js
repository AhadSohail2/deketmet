import { MongoClient } from 'mongodb'

const uri = process.env.mongo_key;

async function sendEmail(req, res) {
  try {
    const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    const db = client.db('data')

    const data = req.body // Assumes incoming data is in JSON format

    const result = await db.collection('data').insertOne(data)

    res.status(201).json({ message: 'Data stored successfully!' })

    client.close()

  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "", message: "Email Sent" });
}

export default sendEmail;