import { createGlobalStyle } from "styled-components"

export const  GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    mall, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
	    margin: 0;
	    padding: 0;
	    border: 0;
	    font-size: 100%;
	    font: inherit;
	    vertical-align: baseline;
}
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
	    display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
button {
	cursor: pointer;
}
h1, h2, h3, h4, h5, h6, p, span, li, button, input, select, option{
    font-family: 'Inter', sans-serif;
}
:root {
    --color-primary: #27AE60;
    --color-primary-50: #93D7AF;
    --color-secondary: #EB5757;
    --color-grey-100: #333333;
    --color-grey-50: #828282;
    --color-grey-20: #E0E0E0;
    --color-grey-0: #F5F5F5;
    --color-negative: #E60000;
    --color-warning: #FFCD07;
    --color-sucess: #168821;    
    --color-infomation: #155BCB;
}

.title {
    font-weight: 700;
}
.title.one {
    font-size: 1.125rem;
}
.title.two {
    font-size: 0.875rem;
}

.subTitle{
    font-weight: 600;
}
.subTitle.one{
    font-size: 1rem;
}
.subTitle.two{
    font-size: 0.875rem;
}

.text {
    font-weight: 500;
}
.text.one {
    font-size: 0.875rem;
}
.text.two{
    font-size: 0.75rem;
}

.paragraph {
    font-weight: 400;
}
.paragraph.one {
    font-size: 1rem;
}
.paragraph.two{
    font-size: 0.75rem;
}
`