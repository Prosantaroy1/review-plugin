import { useBlockProps } from "@wordpress/block-editor";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import { withSelect } from "@wordpress/data";
import '../../editor.scss';
import FeedbackSection from '../Common/theme/FeedbackSection';

const Edit = (props) => {
  const { attributes, setAttributes, clientId, device } = props;


  return (
    <>
      <Settings {...{ attributes, setAttributes, device }} />

      <div {...useBlockProps({ draggable: false })}>
        <Style attributes={attributes} id={`block-${clientId}`} device={device} />


        <div className='feedbackMainContainer'>
          <FeedbackSection {...{ attributes, setAttributes }} />
        </div>


      </div>
    </>
  );
};

export default withSelect((select) => {
  const { getDeviceType } = select("core/editor");
  return { device: getDeviceType()?.toLowerCase() };
})(Edit);
