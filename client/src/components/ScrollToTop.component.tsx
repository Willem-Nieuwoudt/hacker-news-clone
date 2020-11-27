import { useEffect, useState } from 'react';
import { ScrollToTopStyles } from '../styles/ScrollToTop.styles';

const ScrollToTop = () => {
  const [show, setShow] = useState<boolean>(false);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    const yOffset = window.pageYOffset;

    if (yOffset >= 200) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, []);

  return (
    <div>
      {show && <i className='fas fa-arrow-up' onClick={goToTop}></i>}
      <style jsx>{ScrollToTopStyles}</style>
    </div>
  );
};

export default ScrollToTop;
