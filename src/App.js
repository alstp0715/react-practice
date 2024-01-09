import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutView from './views/LayoutView.jsx';
import GalleryList from './views/gallery/GalleryList.jsx';
import GalleryDetail from './views/gallery/GalleryDetail.jsx';
import NoticeDetail from './views/notice/NoticeDetail.jsx';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutView />} />
          <Route path="/gallery" element={<GalleryList />} />
          <Route path="/gallery/:id" element={<GalleryDetail />} />
          <Route path="/notice/:id" element={<NoticeDetail />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
