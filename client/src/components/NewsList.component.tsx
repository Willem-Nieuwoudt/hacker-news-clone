import { INews } from '../interfaces/news.interface';
import Link from 'next/link';

import { NewsListStyles } from '../styles/NewsList.styles';

interface IProps {
  news: INews[];
}

const NewsList = ({ news }: IProps) => {
  return (
    <div className='news-list'>
      {news.map(({ id, url, title, points, comments_count }) => (
        <div className='news-item' key={id}>
          <h2 className='news-item-title'>
            <a href={url}>{title}</a>
          </h2>

          <div className='news-item-details'>
            <span>{points || 0} point(s)</span>

            <Link href='/news/[id]' as={`/news/${id}`}>
              <a>{comments_count || 0} comment(s)</a>
            </Link>
          </div>
        </div>
      ))}

      <style jsx>{NewsListStyles}</style>
    </div>
  );
};

export default NewsList;
