export default function handler(req, res) {
    res.status(200).json({
        id: 1,
        type: 'Greeting',
        text: 'Hello',
        language: 'English'
    })
  }