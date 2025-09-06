import { __ } from "@wordpress/i18n";
import { PanelBody, TextareaControl, TextControl, } from "@wordpress/components";
//import { purposeTypeOptions } from "../../../../utils/options";
import { updateData } from "../../../../utils/functions";
import { ItemsPanel } from '../../../../../../bpl-tools/Components';
import FeedbackItemPanel from '../FeedbackItemPanel/FeedbackItemPanel';
//import { useState } from 'react';

const General = ({ attributes, setAttributes }) => {
  const { HeadingSection = {}, activeIndex } = attributes || {};


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
      {/* Feedback card */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Feedback Card", "b-blocks")}
        initialOpen={true} >

        <ItemsPanel
          {...{ attributes, setAttributes }}
          arrKey="feedBackAll"
          activeIndex={activeIndex}
          newItem={{
            "id": 1,
            "title": "Rahim Ahmed",
            "description": "The course was very helpful for beginners. The instructor explained every topic clearly with examples. I gained confidence in coding and problem solving.",
            "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480c-123.5 0-224-100.5-224-224S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224z\"></path></svg>"
          }}
          ItemSettings={FeedbackItemPanel}
          design="sortable"
          title='title'
        />
      </PanelBody>

    </>
  );
};

export default General;
