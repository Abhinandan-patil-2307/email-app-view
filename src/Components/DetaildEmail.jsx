import './DetaildEmail.css';
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from '../Redux/slice';
import { updateSplit } from '../Redux/splitInfo';
import useDateFixture from '../Hooks/useDateFixture';

const DetaildEmail = ({ data }) => {

    const [discription, setDiscriprion] = useState('');
    const [formatedTime] = useDateFixture(data?.date);
    const dispatch = useDispatch();

    const addToFavorite = (e) => {

        if (e.target.textContent === 'Mark as Favorite') {
            dispatch(addFavorite(data.id));
            dispatch(updateSplit({ isFavorite: true }));
        }
        if (e.target.textContent === 'Remove Favorite') {
            dispatch(removeFavorite(data.id));
            dispatch(updateSplit({ isFavorite: false }));
        }
    }

    useEffect(() => {
        fetch(`https://flipkart-email-mock.now.sh/?id=${data.id}`).then(res => res.json()).then((res) => {
            setDiscriprion(res.body);
        });
    }, []);

    return (
        <div className="DetaildEmail">
            <div className="icon">
                <span>
                    {data.from.email[0].toUpperCase()}
                </span>
            </div>
            <div className="details">
                <div className="upper">
                    <h1 className='subject'><span >{data.subject}</span></h1>
                    <button onClick={(e) => addToFavorite(e)}>{data.isFavorite ? 'Remove Favorite' : 'Mark as Favorite'}</button>
                </div>
                <span className="date">{formatedTime}</span>
                <p className='description'> {discription}</p>
            </div>
        </div>
    )
}

export default DetaildEmail;