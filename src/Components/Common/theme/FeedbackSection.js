import HeadingTitle from '../HeadingTitle/HeadingTitle';
import './feedbackSec.css';

const FeedbackSection = ({ attributes, setAttributes }) => {

    const { feedBackAll = [] } = attributes || {};

    //console.log(feedBackAll);

    return (
        <div className='container-prst-main'>
            <div className='section-all-card-prst'>
                <HeadingTitle {...{ attributes, setAttributes }} />
                <div className='prst-cards-div'>
                    {
                        feedBackAll.length > 0 && feedBackAll.map((item, idx) => {
                            return (
                                <div key={idx} className='prst-single-cards'>
                                    <h3 className='prst-title'>{item.title}</h3>
                                    <p className='prst-descrption'>{item.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default FeedbackSection;