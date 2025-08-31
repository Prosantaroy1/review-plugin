import { TextareaControl, TextControl } from '@wordpress/components';
import { updateData } from '../../../../utils/functions';

const FeedbackItemPanel = ({ attributes, setAttributes, index }) => {

    const { feedBackAll = [] } = attributes || {};

    const { title, description } = feedBackAll[index];


    return (
        <>
            {/*content title */}
            <TextControl
                label='Heading Title'
                value={title}
                onChange={(v) => setAttributes({
                    feedBackAll: updateData(feedBackAll, v, index, 'title')
                })}
            />
            {/* content sub title */}
            <TextareaControl
                label='Heading SubTitle'
                value={description}
                onChange={(v) => setAttributes({
                    feedBackAll: updateData(feedBackAll, v, index, 'description')
                })}
            />
        </>
    )
}

export default FeedbackItemPanel;