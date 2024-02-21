const handler = (req, res) => {
    res.status(200).json([
        { id: '1', title: 'Post 1', content: 'Post 1 content' },
        { id: '2', title: 'Post 2', content: 'Post 2 content' },
    ]);
}

export default handler