import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Data from '../../data/Data.json';

const NoticeList = () => {
    const { noticeData } = Data; // 객체 비구조화 사용
    useEffect(() => {
        return () => {
            console.log(noticeData);
        };
    }, [noticeData]);

    return (
        <div>
            <ul>
                {noticeData.map((item) => (
                    <li key={item.id}>
                        <Link to={`../notice/${item.id}`}>
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

export default NoticeList;
