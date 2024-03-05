const postHandler = (req, res) => {
  const {
    query: { id },
  } = req;

  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  console.log("id", id)

  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(error => {
      console.error('Error on search the posts:', error);
      res.status(500).json({ error: "Error fetching posts" });
    });
};

export default postHandler;