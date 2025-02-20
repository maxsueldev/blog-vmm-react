import './style.scss';

export default function ArticleTitle({ title, time, date }) {
    return (
        <>
            <h1>{title}</h1>
            <hr />
            <div className='data-time'>
                <span>{time}</span>
                <span>{date}</span>
            </div>
        </>
    );
}