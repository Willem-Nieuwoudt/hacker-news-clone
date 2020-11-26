import Head from 'next/head';
import Link from 'next/link';
import ScrollToTop from './ScrollToTop.component';
import Router from 'next/router';

interface IProps {
  children: React.ReactNode;
  tabTitle: string;
  includeBackBtn: boolean;
}

const Layout = ({ children, tabTitle, includeBackBtn }: IProps) => {
  return (
    <div className='layout'>
      <Head>
        <title>{tabTitle}</title>
      </Head>
      <nav>
        {includeBackBtn && (
          <span className='back-btn' onClick={() => Router.back()}>
            &#x2b05;
          </span>
        )}
        <Link href='/'>
          <a>
            <span className='main-title'>Hacker News</span>
          </a>
        </Link>
      </nav>
      <div className='page-content'>
        {children}
        <ScrollToTop />
      </div>
      <style jsx>
        {`
          .layout {
            max-width: 800px;
            margin: 0 auto;
            background: #f6f6ef;
          }

          nav {
            background: #f60;
            padding: 1em;
          }

          nav > * {
            display: inline-block;
            color: black;
          }

          .main-title {
            font-weight: bold;
          }

          .back-btn {
            font-size: 0.9rem;
            padding-right: 1em;
            cursor: pointer;
          }

          .page-content {
            padding: 15px;
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
