import { Link } from 'react-router-dom';

const Notice = ({ noticeData }) => {
    return (
        <div className="item notice">
            <p className="title">일정표</p>
            <ul>
                {noticeData &&
                    noticeData.map((item) => (
                        <li key={item.id}>
                            <p>
                                <span className="date">
                                    {item.date.split('-').slice(1).join('-')}
                                </span>
                                <Link to={`../notice/${item.id}`}>
                                    {item.title}
                                </Link>
                            </p>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default Notice;
