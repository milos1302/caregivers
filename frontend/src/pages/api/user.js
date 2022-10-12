// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })

  if (req.method === "POST") {
    // Process a POST request
  } else {
      // Handle any other HTTP method
  }
}
