import { getBackgroundCSS, getBorderCSS, getBoxCSS, getTypoCSS } from "../../../../bpl-tools/utils/getCSS";

const Style = ({ attributes, id }) => {
	const { Styles } = attributes;

	const { containerSection, headingStyle, cardContent } = Styles || {}; //styles

	const { title, subTitle } = headingStyle || {};  //heading

	const { cardTitle, cardDescription } = cardContent;


	//console.log('title-color', title?.color)

	const mainSl = `#${id}`;
	const blockSl = `${mainSl} .container-prst-main`;

	const headingmainSl = ` ${blockSl} .section-all-card-prst .prst-headingSection`;
	const headingTitleSl = `${headingmainSl} .prst-heading-Title-2`;
	const headingSubTitleSl = `${headingmainSl} .prst-heading-SubTitle-2`;

	const carddivSl = `${blockSl} .prst-single-cards`;
	const contentTitle = ` ${carddivSl} .prst-title `
	const contentDescription = ` ${carddivSl} .prst-descrption `

	return <style dangerouslySetInnerHTML={{
		__html: `
		
		${getTypoCSS("", headingStyle.title.typo).googleFontLink}  
		${getTypoCSS("", headingStyle.subTitle.typo).googleFontLink} 
		${getTypoCSS("", cardContent.cardTitle.typo).googleFontLink} 
		${getTypoCSS("", cardContent.cardDescription.typo).googleFontLink} 

		${getTypoCSS(headingTitleSl, headingStyle.title.typo).styles}  
		${getTypoCSS(headingSubTitleSl, headingStyle.subTitle.typo).styles} 
		
		${getTypoCSS(contentTitle, cardContent.cardTitle.typo).styles}  
		${getTypoCSS(contentDescription, cardContent.cardDescription.typo).styles}  


	    ${blockSl}{
			${getBackgroundCSS(containerSection?.bg)}
			${getBorderCSS(containerSection?.border)}
			padding:${getBoxCSS(containerSection?.padding)};
 	        margin: ${getBoxCSS(containerSection?.margin)};
        }
		${headingTitleSl}{
		    margin: ${getBoxCSS(headingStyle?.title?.margin)};
			color: ${title?.color};
		}
		
		${headingSubTitleSl}{
			color: ${subTitle?.color};
		}

		${contentTitle}{
		  color: ${cardTitle?.color};
		  margin: ${getBoxCSS(cardContent?.cardTitle?.margin)};
		}
		${contentDescription}{
		  color: ${cardDescription?.color};
		  margin: ${getBoxCSS(cardContent?.cardDescription?.margin)};
		}
		

`}} />;
}
export default Style;