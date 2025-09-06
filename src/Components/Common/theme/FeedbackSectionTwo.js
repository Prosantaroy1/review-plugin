//import HeadingTitle from '../HeadingTitle/HeadingTitle';
import './feedbackSec.css';

const FeedbackSectionTwo = ({ attributes, setAttributes }) => {
    const { feedBackAll = [] } = attributes || {};

    return (
        <>
            {feedBackAll.length > 0 && feedBackAll.map((item, idx) => (
                <div key={idx} className='swiper-slide prst-single-cards' onClick={() => setAttributes({ activeIndex: idx })}>
                    <p className='prst-descrption'>{item.description}</p>
                    <h3 className='prst-title'>{item.title}</h3>
                </div>
            ))}
        </>
    );
}

export default FeedbackSectionTwo;
