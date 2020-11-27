import Head from 'next/head';
import Link from 'next/link';
import ScrollToTop from './ScrollToTop.component';
import Router from 'next/router';
import { LayoutStyles } from '../styles/Layout.styles';

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

      <style jsx>{LayoutStyles}</style>
    </div>
  );
};

export default Layout;
