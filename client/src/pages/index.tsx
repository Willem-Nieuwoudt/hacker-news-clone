import Axios from 'axios';
import { GetServerSideProps } from 'next';
import Error from 'next/error';
import Link from 'next/link';
import Layout from '../components/Layout.component';
import NewsList from '../components/NewsList.component';
import { INews } from '../interfaces/news.interface';

interface IProps {
  news: INews[];
  page: number;
}

const Home = ({ news, page }: IProps) => {
  if (news.length === 0) return <Error statusCode={503} />;

  return (
    <Layout tabTitle='Home' includeBackBtn={false}>
      <NewsList news={news} />

      <div className='bottom-nav-btns'>
        <div className='previous-btn'>
          {page > 1 && (
            <Link href={`/?page=${page - 1}`}>
              <a className='previous-page-link'>Previous Page ({page - 1})</a>
            </Link>
          )}
        </div>

        <div className='next-btn'>
          <Link href={`/?page=${page < 1 ? 2 : page + 1}`}>
            <a className='next-page-link'>Next Page ({page < 1 ? 2 : page + 1})</a>
          </Link>
        </div>
      </div>

      <style jsx>
        {`
          .bottom-nav-btns {
            display: flex;
            justify-content: space-between;
            padding: 10px;
          }

          .next-page-link,
          .previous-page-link {
            color: black;
            font-weight: bold;
          }
        `}
      </style>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let news: INews[];
  let page: number;

  try {
    page = Number(query.page) || 1;
    const response = await Axios.get<INews[]>(`https://node-hnapi.herokuapp.com/news?page=${page}`);

    news = response.data;
  } catch (err) {
    news = [];
    page = 1;
  }

  return {
    props: {
      news,
      page,
    },
  };
};

export default Home;
