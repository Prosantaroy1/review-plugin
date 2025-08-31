
import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';
import { Background, BoxControl, ColorControl, Typography } from "../../../../../../bpl-tools/Components";
import { updateData } from '../../../../utils/functions';
import { BorderControl } from '../../../../../../bpl-tools/Components/Deprecated';

const Style = ({ attributes, setAttributes }) => {
  const { Styles = {} } = attributes || {};

  const { containerSection, headingStyle, cardContent } = Styles || {};

  console.log('card------', cardContent?.cardBoxStyle?.padding)

  return (
    <>
      <PanelBody className='bPlPanelBody' title={__('Container Section Styles', 'b-blocks')} initialOpen={false}>
        {/* container background */}
        <Background
          label="Container Background"
          value={containerSection?.bg}
          onChange={(v) => setAttributes({
            Styles: updateData(Styles, v, 'containerSection', 'bg')
          })}
        />
        {/* container padding */}
        <BoxControl
          label="Padding"
          values={containerSection?.padding}
          onChange={(v) => setAttributes({
            Styles: updateData(Styles, v, 'containerSection', 'padding')
          })}
        />
        {/* container margin */}
        <BoxControl
          label="Margin"
          values={containerSection?.margin}
          onChange={(v) => setAttributes({
            Styles: updateData(Styles, v, 'containerSection', 'margin')
          })}
        />
        {/*container border */}
        <BorderControl
          label='Border'
          value={containerSection?.border}
          onChange={(v) => setAttributes({
            Styles: updateData(Styles, v, 'containerSection', 'border')
          })}
        />
        {/* container border radius
        <BoxControl
          label="Border Radius"
          values={containerSection?.borderRadius}
          onChange={(v) => setAttributes({
            Styles: updateData(Styles, v, 'containerSection', 'borderRadius')
          })}
        /> */}
      </PanelBody>
      <PanelBody className='bPlPanelBody' title={__('Heading Styles', 'b-blocks')} initialOpen={false}>
        {/* typography */}
        <Typography
          label='Title typography'
          value={headingStyle?.title}
          onChange={(v) => setAttributes({
            Styles: updateData(Styles, v, "headingStyle", "title", "typo")
          })}
        />
        {/* colors */}
        <ColorControl
          label='Title color'
          value={headingStyle?.title?.color}
          onChange={(v) => setAttributes({
            Styles: updateData(Styles, v, 'headingStyle', 'title', 'color')
          })}
        />
        {/* title margin */}
        <BoxControl
          label="Title margin"
          values={headingStyle?.title?.margin}
          onChange={(v) => setAttributes({
            Styles: updateData(Styles, v, 'headingStyle', 'title', 'margin')
          })}
        />
        {/*--------
        ---------- sub title-----
        ---- */}
        <Typography
          label='Sub-Title typography'
          value={headingStyle?.subTitle?.typo}
          onChange={(v) => setAttributes({
            Styles: updateData(Styles, v, "headingStyle", "subTitle", "typo")
          })}
        />
        {/* colors */}
        <ColorControl
          label='Sub-Title color'
          value={headingStyle?.subTitle?.color}
          onChange={(v) => setAttributes({
            Styles: updateData(Styles, v, 'headingStyle', 'subTitle', 'color')
          })}
        />
      </PanelBody>
      <PanelBody className='bPlPanelBody' title={__('Card Content Style ', 'b-blocks')} initialOpen={false}>
        {/* card padding */}
        <BoxControl
          label="Card Padding"
          values={cardContent?.cardBoxStyle?.padding}
          onChange={(v) => setAttributes({
            Styles: updateData(Styles, v, 'cardContent', 'cardBoxStyle', 'padding')
          })}
        />
        <BoxControl
          label="Card Padding"
          values={cardContent?.cardBoxStyle?.margin}
          onChange={(v) => setAttributes({
            Styles: updateData(Styles, v, 'cardContent', 'cardBoxStyle', 'margin')
          })}
        />
        {/* typography */}
        <Typography
          label='Title typography'
          value={cardContent?.cardTitle?.typo}
          onChange={(v) => setAttributes({
            Styles: updateData(Styles, v, "cardContent", "cardTitle", "typo")
          })}
        />
        {/* colors */}
        <ColorControl
          label='Title color'
          value={cardContent?.cardTitle?.color}
          onChange={(v) => setAttributes({
            Styles: updateData(Styles, v, 'cardContent', 'cardTitle', 'color')
          })}
        />
        {/* title margin */}
        <BoxControl
          label="Title margin"
          values={cardContent?.cardTitle?.margin}
          onChange={(v) => setAttributes({
            Styles: updateData(Styles, v, 'cardContent', 'cardTitle', 'margin')
          })}
        />
        {/*--------
        ---------- description -----
        ---- */}
        <Typography
          label='Description typography'
          value={cardContent?.cardDescription?.typo}
          onChange={(v) => setAttributes({
            Styles: updateData(Styles, v, "cardContent", "cardDescription", "typo")
          })}
        />
        {/* colors */}
        <ColorControl
          label='Description color'
          value={cardContent?.cardDescription?.color}
          onChange={(v) => setAttributes({
            Styles: updateData(Styles, v, 'cardContent', 'cardDescription', 'color')
          })}
        />
      </PanelBody>
    </>
  )
}

export default Style;



