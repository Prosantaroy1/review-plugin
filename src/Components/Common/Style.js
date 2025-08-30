import { getBackgroundCSS, getBoxCSS, getColorsCSS } from "../../../../bpl-tools/utils/getCSS";

const Style = ({ attributes, id }) => {
	const { colors, Styles } = attributes;

	const { containerSection } = Styles || {};

	const mainSl = `#${id}`;
	const blockSl = `${mainSl} .container-prst-main`;

	return <style dangerouslySetInnerHTML={{
		__html: `
		
		${blockSl}{
			${getBackgroundCSS(containerSection?.bg)}
			padding: ${getBoxCSS(containerSection?.padding)};
			margin: ${getBoxCSS(containerSection?.margin)};
			border-radius: ${getBoxCSS(containerSection?.borderRadius)};
		}

	`}} />;
}
export default Style;