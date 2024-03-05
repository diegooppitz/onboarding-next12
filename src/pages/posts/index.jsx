import Link from 'next/link';
import { Grid, Card } from "@ui-propulsion/react-components";

export const getServerSideProps = async () => {
  const res = await fetch(`http://localhost:4000/api/posts`);
  const posts = await res.json();
  const limitedPosts = posts.slice(0, 10);

  return {
    props: { posts: limitedPosts },
  };
};

const Posts = ({ posts }) => {
  console.log("posts", posts)
  return (
    <Card>
      <Grid spacing={2} container>
        <Grid item xs={12}>
          <h1>Posts</h1>
        </Grid>

        {posts.map((post, index) => (
          <Grid xs={12} key={index} item>
            <Link href={`/posts/${post.id}`} passHref>
              <a className='p-body post-link'>{post.title}</a>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};

export default Posts;
