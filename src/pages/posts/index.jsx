import Link from 'next/link';
import { Container, Paper, Typography, List, ListItem, ListItemText } from '@mui/material';

export const getServerSideProps = async () => {
  const res = await fetch(`http://localhost:3000/api/posts`);
  const posts = await res.json();

  return {
    props: { posts },
  };
};

const Posts = ({ posts }) => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Posts
        </Typography>
        <List>
          {posts.map((post) => (
            <ListItem key={post.id} component="div" disablePadding>
              <ListItemText
                primary={
                  <Link href={`/posts/${post.id}`} passHref>
                    <Typography variant="body1" component="a" sx={{ textDecoration: 'none', color: 'inherit', '&:hover': { textDecoration: 'underline' } }}>
                      {post.title}
                    </Typography>
                  </Link>
                }
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default Posts;
