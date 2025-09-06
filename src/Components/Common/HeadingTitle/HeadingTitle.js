import './HeadingTitle.css'

const HeadingTitle = ({ attributes, }) => {

    const { HeadingSection = {} } = attributes || {};

    const { headingTitle = "", headingSubTitle = " " } = HeadingSection || {};

    return (
        <div className='prst-headingSection'>
            <h3 className='prst-heading-Title-2'>{headingTitle}</h3>
            <p className='prst-heading-SubTitle-2'>{headingSubTitle} </p>
        </div>
    )
}

export default HeadingTitle;