import { useRouter } from 'next/router';
import { Container, Paper, Typography, CircularProgress } from '@mui/material';

export const getServerSideProps = (context) => {
  const { id } = context.params;

  const post = { id, title: `Post ${id}`, content: 'Lorem ipsum dolor sit amet...' };

  return {
    props: { post },
  };
}

const Post = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="body1">
          {post.content}
        </Typography>
      </Paper>
    </Container>
  );
}

export default Post;
