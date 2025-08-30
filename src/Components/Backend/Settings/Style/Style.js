
import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';
import { Background, BoxControl, ColorsControl } from "../../../../../../bpl-tools/Components";
import { updateData } from '../../../../utils/functions';

const Style = ({ attributes, setAttributes }) => {
  const { Styles = {} } = attributes || {};

  const { containerSection } = Styles || {};

  console.log('bg---', containerSection?.padding)

  return (
    <>
      <PanelBody className='bPlPanelBody' title={__('Container Section', 'b-blocks')} initialOpen={false}>
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
        {/* container border radius */}
        <BoxControl
          label="Border Radius"
          values={containerSection?.borderRadius}
          onChange={(v) => setAttributes({
            Styles: updateData(Styles, v, 'containerSection', 'borderRadius')
          })}
        />
      </PanelBody>
      <PanelBody className='bPlPanelBody' title={__('', 'b-blocks')} initialOpen={false}>
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
        {/* container border radius */}
        <BoxControl
          label="Border Radius"
          values={containerSection?.borderRadius}
          onChange={(v) => setAttributes({
            Styles: updateData(Styles, v, 'containerSection', 'borderRadius')
          })}
        />
      </PanelBody>
    </>
  )
}

export default Style;



