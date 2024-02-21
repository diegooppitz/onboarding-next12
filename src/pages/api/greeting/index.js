 const handler = (req, res) => {
    if (req.method === 'POST') {
      const { name } = req.body;
      res.status(200).json({ message: `Hello, ${name}! Welcome to onboarding of Next.js.` });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }

  export default handler;