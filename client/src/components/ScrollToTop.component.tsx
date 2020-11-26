import { useEffect, useState } from 'react';

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
      <style jsx>
        {`
          i {
            padding: 15px;
            border-radius: 10px;
            border: 1px solid black;
            position: fixed;
            top: 50%;
            right: 30px;
          }

          i:hover {
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default ScrollToTop;
