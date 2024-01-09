import { useParams } from 'react-router-dom';
import Data from '../../data/Data.json';

const DetailView = () => {
    const { id } = useParams();

    if (!Array.isArray(Data.galleryData)) {
        return <div>데이터가 유효하지 않습니다.</div>;
    }

    const selectedItemGallery = Data.galleryData.find((item) => String(item.id) === id);

    if (selectedItemGallery) {
        return (
            <div>
                <h2>{selectedItemGallery.title}</h2>
                <p>Date: {selectedItemGallery.date}</p>
                <img src={selectedItemGallery.imageSrc} alt="" />
            </div>
        );
    }

    return <div>해당하는 아이템을 찾을 수 없습니다.</div>;
};

export default DetailView;
