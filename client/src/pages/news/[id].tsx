import Axios from 'axios';
import { GetServerSideProps } from 'next';
import Layout from '../../components/Layout.component';
import { INews, IComment } from '../../interfaces/news.interface';
import Error from 'next/error';
import Comments from '../../components/Comments.component';
import { NewsItemStyles } from '../../styles/NewsItem.styles';

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
      <style jsx>{NewsItemStyles}</style>
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
