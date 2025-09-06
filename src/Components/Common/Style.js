import { deskBreakpoint, mobileBreakpoint, tabBreakpoint } from '../../../../bpl-tools/utils/data';
import { getBackgroundCSS, getBorderCSS, getBoxCSS, getTypoCSS } from "../../../../bpl-tools/utils/getCSS";

const Style = ({ attributes, id }) => {
	const { Styles = {}, gridLayout = {}, align } = attributes || {};

	const { containerSection, headingStyle, cardContent } = Styles || {}; //styles

	const { title, subTitle } = headingStyle || {};  //heading

	const { cardTitle, cardDescription, cardBoxStyle } = cardContent;


	console.log('grid layout', gridLayout)

	const mainSl = `#${id}`;
	const blockSl = `${mainSl} .container-prst-main`;

	const headingmainSl = ` ${blockSl} .section-all-card-prst .prst-headingSection`;
	const headingTitleSl = `${headingmainSl} .prst-heading-Title-2`;
	const headingSubTitleSl = `${headingmainSl} .prst-heading-SubTitle-2`;

	const cardMainDivSl = ` ${blockSl} .prst-cards-div `
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

		${cardMainDivSl}{
			gap: ${gridLayout?.gap}
		}
		${deskBreakpoint}{
		   ${cardMainDivSl}{
		      grid-template-columns: repeat(${align ? gridLayout?.desktop : 3}, 1fr);
		   }
		}
		${tabBreakpoint}{ 
		   ${cardMainDivSl}{ 
			   grid-template-columns: repeat(${align ? gridLayout?.tablet : 2}, 1fr);
			} 
		}
		${mobileBreakpoint}{ 
		   ${cardMainDivSl}{ 
			   grid-template-columns: repeat(${align ? gridLayout?.mobile : 1}, 1fr);
			} 
		}
		${carddivSl}{
		  ${getBackgroundCSS(cardBoxStyle?.bg)}
		  padding: ${getBoxCSS(cardContent?.cardBoxStyle?.padding)};  
		  border-radius: ${getBoxCSS(cardContent?.cardBoxStyle?.borderRadius)};  
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