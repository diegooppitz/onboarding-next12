import { useRouter } from 'next/router';
import { CircularProgress } from '@mui/material';
import { Card } from "@ui-propulsion/react-components";

export const getServerSideProps = async (context) => {
  const { id } = context.params;

  const res = await fetch(`http://localhost:4000/api/posts/${id}`);
  const post = await res.json();

  return {
    props: { post },
  };
}

const Post = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Card className="card-center">
        <CircularProgress />
      </Card>
    );
  }

  return (
      <Card>
        <div className='p-title'>
          {post.title}
        </div>
        <p className='p-body'>
          {post.body}
        </p>
      </Card>
  );
}

export default Post;
