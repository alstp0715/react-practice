import Notice from './Notice.jsx';
import Slide from './Slide.jsx';
import Data from '../data/Data.json';

const Main = () => {
  const {galleryData} = Data;
  const {noticeData} = Data;

  return (
    <section className="main">
      <Slide galleryData={galleryData} />
      <Notice noticeData={noticeData} />
    </section>
  );
};
export default Main;
