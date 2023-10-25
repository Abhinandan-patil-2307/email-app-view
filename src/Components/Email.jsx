import './email.css';
import { useDispatch } from 'react-redux';
import { openSplit } from '../Redux/splitInfo';
import { addRead } from '../Redux/slice';
import useDateFixture from '../Hooks/useDateFixture';

const Email = ({ data, splitInfo }) => {

    const dispatch = useDispatch();
    const [formatedTime] = useDateFixture(data.date);

    const openEmail = () => {
        dispatch(openSplit(data));
        dispatch(addRead(data.id));
    }

    return (
        <div className={splitInfo.id === data.id ? "Email active" : "Email"} onClick={() => openEmail()} style={{ background: `${data.isRead ? 'var(--emailBackground)' : '#fff'}` }}>
            <div className="icon">
                <span>
                    {data.from.email[0].toUpperCase()}
                </span>
            </div>
            <div className="details">
                <h3 className='email'>From: <span >{(data.from.name + '<' + data.from.email + '>')}</span></h3>
                <h3 className='subject'>Subject: <span >{splitInfo.split && data.subject.length > 35 ? data.subject.slice(0, 30) + '...' : data.subject}</span></h3>
                <h3 className='description'> {splitInfo.split ? data.short_description.slice(0, 42) + '...' : data.short_description}</h3>
                <div>
                    <span className="date">{formatedTime}</span>
                </div>
                {data.isFavorite ? (<h4>Favorite</h4>) : (<></>)}
            </div>
        </div>
    );
}

export default Email;