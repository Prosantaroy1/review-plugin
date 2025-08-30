import { __ } from "@wordpress/i18n";
import { PanelBody, SelectControl, TextareaControl, TextControl, ToggleControl } from "@wordpress/components";
import { purposeTypeOptions } from "../../../../utils/options";
import { updateData } from "../../../../utils/functions";

const General = ({ attributes, setAttributes }) => {
  const { HeadingSection = {} } = attributes || {};


  return (
    <>
      {/* Heading input */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Heading Input", "b-blocks")}
        initialOpen={false}
      >
        {/* heading title */}
        <TextControl
          label='Heading Title'
          value={HeadingSection?.headingTitle}
          onChange={(v) => setAttributes({
            HeadingSection: updateData(HeadingSection, v, 'headingTitle')
          })}
        />
        {/* heading sub title */}
        <TextareaControl
          label='Heading SubTitle'
          value={HeadingSection?.headingSubTitle}
          onChange={(v) => setAttributes({
            HeadingSection: updateData(HeadingSection, v, 'headingSubTitle')
          })}
        />
      </PanelBody>
      {/* card input */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Heading Input", "b-blocks")}
        initialOpen={false}
      >
        {/* heading title */}
        <TextControl
          label='Heading Title'
          value={HeadingSection?.headingTitle}
          onChange={(v) => setAttributes({
            HeadingSection: updateData(HeadingSection, v, 'headingTitle')
          })}
        />
        {/* heading sub title */}
        <TextareaControl
          label='Heading SubTitle'
          value={HeadingSection?.headingSubTitle}
          onChange={(v) => setAttributes({
            HeadingSection: updateData(HeadingSection, v, 'headingSubTitle')
          })}
        />
      </PanelBody>
    </>
  );
};

export default General;
