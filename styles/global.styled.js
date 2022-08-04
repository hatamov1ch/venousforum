import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	html {
		font-size: 62.5%;
	}
	
	body,
	html {
		width: 100%;
		height: 100%;
	}
	
	*,
	&::before,
	&::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	
	body {
		font-family: ${({ theme }) => theme.fontPrimary}, sans-serif;
		font-size: 1.6rem;
		font-style: normal;
		font-weight: 400;
	}
	
	.container {
		width: 90%;
		max-width: ${({ theme }) => theme.containerWidth};
		margin: 0 auto;
	}
	
	a,
	button,
	input {
		font-size: inherit;
	}
	
	a,button,[role='button'] {
		cursor: pointer;
	}
	
	h2 {
		font-size: 4.5rem;
	}
`;

export default GlobalStyle;