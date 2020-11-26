import { INews } from '../interfaces/news.interface';
import Link from 'next/link';

import styles from '../styles/NewsList.module.scss';

const NewsList = ({ news }: IProps) => {
  return (
    <div className={styles['news-list']}>
      {news.map(({ id, url, title, points, comments_count }) => (
        <div className={styles['news-item']} key={id}>
          <h2 className={styles['news-item-title']}>
            <a className={styles['news-item-title-a']} href={url}>
              {title}
            </a>
          </h2>

          <div className={styles['news-item-details']}>
            <span className={styles['news-item-details-span']}>{points || 0} point(s)</span>

            <Link href='/news/[id]' as={`/news/${id}`}>
              <a className={styles['news-item-details-a']}>{comments_count || 0} comment(s)</a>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

interface IProps {
  news: INews[];
}

export default NewsList;
