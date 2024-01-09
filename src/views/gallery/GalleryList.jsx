import { Link } from 'react-router-dom';
import Data from '../../data/Data.json';

const GalleryList = () => {
    const { galleryData } = Data; // 객체 비구조화 사용

    return (
        <div>
            <ul>
                {galleryData.map((item) => (
                    <li key={item.id}>
                        <Link to={`../gallery/${item.id}`}>
                            <p>{item.title}</p>
                            <p>{item.date}</p>
                            <p>{item.imageSrc}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GalleryList;
