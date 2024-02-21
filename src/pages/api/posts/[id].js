// pages/api/posts/[id].js
const handler = (req, res) => {
    const {
      query: { id },
    } = req;
  
    const post = { id, title: `Post ${id}`, content: 'Lorem ipsum dolor sit amet...' };
  
    res.status(200).json(post);
  }
  
export default handler;