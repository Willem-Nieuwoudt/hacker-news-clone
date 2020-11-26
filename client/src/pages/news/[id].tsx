import Axios from 'axios';
import { GetServerSideProps } from 'next';
import Layout from '../../components/Layout.component';
import { INews, IComment } from '../../interfaces/news.interface';
import Error from 'next/error';
import Comments from '../../components/Comments.component';

interface IProps {
  newsItem: INewsItem | null;
}

const NewsItem = ({ newsItem }: IProps) => {
  if (!newsItem) {
    return <Error statusCode={503} title='News item could not be found.' />;
  }

  return (
    <Layout tabTitle={newsItem.title} includeBackBtn>
      <h1 className='news-item-title'>
        <a href={newsItem.url}>{newsItem.title}</a>
      </h1>

      <div className='news-item-details'>
        <strong>{newsItem.points || 0} points</strong>
        <strong>{newsItem.comments_count || 0} comments</strong>
        <strong>{newsItem.time_ago}</strong>
      </div>

      <Comments comments={newsItem.comments} />
      <style jsx>
        {`
          .news-item-title {
            font-size: 1.2rem;
            padding: 0.5em;
            margin: 0;
            font-weight: 300;
          }

          .news-item-title a {
            color: #333;
          }

          .news-item-title a:hover {
            text-decoration: underline;
          }

          .news-item-details {
            font-size: 0.8rem;
            padding: 0.5em;
            padding-bottom: 1em;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            margin-bottom: 1em;
          }

          .news-item-details strong {
            margin-right: 1em;
          }
        `}
      </style>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const newsItemId = query.id;

  let newsItem: INewsItem | null;

  try {
    const response = await Axios.get<INewsItem>(`https://node-hnapi.herokuapp.com/item/${newsItemId}`);
    newsItem = response.data;
  } catch (err) {
    newsItem = null;
  }

  return {
    props: {
      newsItem,
    },
  };
};

interface INewsItem extends INews {
  time_ago: string;
  comments: IComment[];
}

export default NewsItem;
