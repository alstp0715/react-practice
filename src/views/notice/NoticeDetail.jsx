import { useParams } from 'react-router-dom';
import Data from '../../data/Data.json';

const DetailView = () => {
    const { id } = useParams();

    if (!Array.isArray(Data.noticeData)) {
        return <div>데이터가 유효하지 않습니다.</div>;
    }

    const selectedItemNotice = Data.noticeData.find((item) => String(item.id) === id);

    if (selectedItemNotice) {
        return (
            <div>
                <h2>{selectedItemNotice.title}</h2>
                <p>Date: {selectedItemNotice.date}</p>
                <p>{selectedItemNotice.content}</p>
            </div>
        );
    }
    return <div>해당하는 아이템을 찾을 수 없습니다.</div>;
};

export default DetailView;
