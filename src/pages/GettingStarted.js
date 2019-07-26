import React, {Component} from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown/with-html';
import CodeBlock from '../Markdown-Render/CodeBlock';
import InlineCode from "../Markdown-Render/InlineCode";

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 500px;
  transition: all 0.2s ease-in-out;
  color: white;
  display: flex;
  flex-flow: column;
  position:fixed;
  top: 56px;
  overflow-x: hidden;
  overflow-y: auto;
  padding-bottom: 100px;
  -webkit-overflow-scrolling: touch;
  @media(max-width: 500px){
  	overflow-y: scroll;
  }
  blockquote{
    margin: 5px;
    padding-left: 2em;
    border-left: 0.2em white solid;
  }
  h3{
  	margin-top: 30px;
  	margin-bottom: 30px;
  }
  h1{
  	margin-top: 30px;
  	margin-bottom: 30px;  
  }
  h2{
  	margin-top: 30px;
  	margin-bottom: 30px; 
  }
  @media(max-width: 450px){
	display: block;
  }
`;

const SectionHeader = styled.div`
`;
const SectionBody = styled.div`
  
`;

const Section = styled.div`
  position: relative;
  margin-top: 20px;
  margin-left: 50px;
  margin-bottom: 10px;
  width: 80%;
  // change these for custom link formatting
  & a{
    text-decoration: underline;
    color: #b3d7ff;
    -webkit-transition: all 0.3s;-moz-transition: all 0.2s ease-in-out;-ms-transition: all 0.2s ease-in-out;-o-transition: all 0.2s ease-in-out;transition: all 0.2s ease-in-out;
  }
  & a:hover{
    font-weight: 500;
  }
  @media(max-width: 500px){
  	margin-left: 25px;
  }
`;

// You can code your own start page using JSX, this format, and styled components
const JSXGettingStarted = () => {
	return (
		<div>
			<Section>
				<SectionHeader>
					<h1>
						Introduction
					</h1>
				</SectionHeader>
				<SectionBody>
					<h3>{this.props.briefDescription}</h3>
				</SectionBody>
			</Section>
			<Section>
				<SectionHeader>
					<h3>
						Installation
					</h3>
				</SectionHeader>
				<SectionBody>
					<p>Installation instructions</p>
				</SectionBody>
			</Section>
		</div>
	)
};

// alternatively, write your start page in markdown (suggested method).
const MarkdownExample = "[Markdown Here Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet)\n" +
	"\n" +
	"This is intended as a quick reference and showcase. For more complete info, see [John Gruber's original spec](http://daringfireball.net/projects/markdown/) and the [Github-flavored Markdown info page](http://github.github.com/github-flavored-markdown/).\n" +
	"\n" +
	"This cheatsheet is specifically *Markdown Here's* version of Github-flavored Markdown. This differs slightly in styling and syntax from what Github uses, so what you see below might vary a little from what you get in a *Markdown Here* email, but it should be pretty close.\n" +
	"\n" +
	"You can play around with Markdown on our [live demo page](http://www.markdown-here.com/livedemo.html).\n" +
	"\n" +
	"(If you're not a Markdown Here user, check out the [Markdown Cheatsheet](./Markdown-Cheatsheet) that is not specific to MDH. But, really, you should also use Markdown Here, because it's awesome. http://markdown-here.com)\n" +
	"\n" +
	"##### Table of Contents  \n" +
	"[Headers](#headers)  \n" +
	"[Emphasis](#emphasis)  \n" +
	"[Lists](#lists)  \n" +
	"[Links](#links)  \n" +
	"[Images](#images)  \n" +
	"[Code and Syntax Highlighting](#code)  \n" +
	"[Tables](#tables)  \n" +
	"[Blockquotes](#blockquotes)  \n" +
	"[Inline HTML](#html)  \n" +
	"[Horizontal Rule](#hr)  \n" +
	"[Line Breaks](#lines)  \n" +
	"[YouTube Videos](#videos)  \n" +
	"[TeX Mathematical Formulae](#tex)  \n" +
	"\n" +
	"<a name=\"headers\"/>\n" +
	"\n" +
	"## Headers\n" +
	"\n" +
	"```\n" +
	"# H1\n" +
	"## H2\n" +
	"### H3\n" +
	"#### H4\n" +
	"##### H5\n" +
	"###### H6\n" +
	"\n" +
	"Alternatively, for H1 and H2, an underline-ish style:\n" +
	"\n" +
	"Alt-H1\n" +
	"======\n" +
	"\n" +
	"Alt-H2\n" +
	"------\n" +
	"```\n" +
	"\n" +
	"# H1\n" +
	"## H2\n" +
	"### H3\n" +
	"#### H4\n" +
	"##### H5\n" +
	"###### H6\n" +
	"\n" +
	"Alternatively, for H1 and H2, an underline-ish style:\n" +
	"\n" +
	"Alt-H1\n" +
	"======\n" +
	"\n" +
	"Alt-H2\n" +
	"------\n" +
	"\n" +
	"<a name=\"emphasis\"/>\n" +
	"\n" +
	"## Emphasis\n" +
	"\n" +
	"```markdown\n" +
	"Emphasis, aka italics, with *asterisks* or _underscores_.\n" +
	"\n" +
	"Strong emphasis, aka bold, with **asterisks** or __underscores__.\n" +
	"\n" +
	"Combined emphasis with **asterisks and _underscores_**.\n" +
	"\n" +
	"Strikethrough uses two tildes. ~~Scratch this.~~\n" +
	"```\n" +
	"\n" +
	"Emphasis, aka italics, with *asterisks* or _underscores_.\n" +
	"\n" +
	"Strong emphasis, aka bold, with **asterisks** or __underscores__.\n" +
	"\n" +
	"Combined emphasis with **asterisks and _underscores_**.\n" +
	"\n" +
	"Strikethrough uses two tildes. ~~Scratch this.~~\n" +
	"\n" +
	"\n" +
	"<a name=\"lists\"/>\n" +
	"\n" +
	"## Lists\n" +
	"\n" +
	"```markdown\n" +
	"1. First ordered list item\n" +
	"2. Another item\n" +
	"  * Unordered sub-list. \n" +
	"1. Actual numbers don't matter, just that it's a number\n" +
	"  1. Ordered sub-list\n" +
	"4. And another item.  \n" +
	"   \n" +
	"   Some text that should be aligned with the above item.\n" +
	"\n" +
	"* Unordered list can use asterisks\n" +
	"- Or minuses\n" +
	"+ Or pluses\n" +
	"```\n" +
	"\n" +
	"1. First ordered list item\n" +
	"2. Another item\n" +
	"  * Unordered sub-list. \n" +
	"1. Actual numbers don't matter, just that it's a number\n" +
	"  1. Ordered sub-list\n" +
	"4. And another item.  \n" +
	"   \n" +
	"   Some text that should be aligned with the above item.\n" +
	"\n" +
	"* Unordered list can use asterisks\n" +
	"- Or minuses\n" +
	"+ Or pluses\n" +
	"\n" +
	"<a name=\"links\"/>\n" +
	"\n" +
	"## Links\n" +
	"\n" +
	"There are two ways to create links.\n" +
	"\n" +
	"```markdown\n" +
	"[I'm an inline-style link](https://www.google.com)\n" +
	"\n" +
	"[I'm a reference-style link][Arbitrary case-insensitive reference text]\n" +
	"\n" +
	"[You can use numbers for reference-style link definitions][1]\n" +
	"\n" +
	"Or leave it empty and use the [link text itself]\n" +
	"\n" +
	"URLs and URLs in angle brackets will automatically get turned into links. \n" +
	"http://www.example.com or <http://www.example.com> and sometimes \n" +
	"example.com (but not on Github, for example).\n" +
	"\n" +
	"Some text to show that the reference links can follow later.\n" +
	"\n" +
	"[arbitrary case-insensitive reference text]: https://www.mozilla.org\n" +
	"[1]: http://slashdot.org\n" +
	"[link text itself]: http://www.reddit.com\n" +
	"```\n" +
	"\n" +
	"[I'm an inline-style link](https://www.google.com)\n" +
	"\n" +
	"[I'm a reference-style link][Arbitrary case-insensitive reference text]\n" +
	"\n" +
	"[You can use numbers for reference-style link definitions][1]\n" +
	"\n" +
	"Or leave it empty and use the [link text itself]\n" +
	"\n" +
	"URLs and URLs in angle brackets will automatically get turned into links. \n" +
	"http://www.example.com or <http://www.example.com> and sometimes \n" +
	"example.com (but not on Github, for example).\n" +
	"\n" +
	"Some text to show that the reference links can follow later.\n" +
	"\n" +
	"[arbitrary case-insensitive reference text]: https://www.mozilla.org\n" +
	"[1]: http://slashdot.org\n" +
	"[link text itself]: http://www.reddit.com\n" +
	"\n" +
	"<a name=\"images\"/>\n" +
	"\n" +
	"## Images\n" +
	"\n" +
	"```markdown\n" +
	"Here's our logo (hover to see the title text):\n" +
	"\n" +
	"Inline-style: \n" +
	"![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png \"Logo Title Text 1\")\n" +
	"\n" +
	"Reference-style: \n" +
	"![alt text][logo]\n" +
	"\n" +
	"[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png \"Logo Title Text 2\"\n" +
	"```\n" +
	"\n" +
	"Here's our logo (hover to see the title text):\n" +
	"\n" +
	"Inline-style: \n" +
	"![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png \"Logo Title Text 1\")\n" +
	"\n" +
	"Reference-style: \n" +
	"![alt text][logo]\n" +
	"\n" +
	"[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png \"Logo Title Text 2\"\n" +
	"\n" +
	"<a name=\"code\"/>\n" +
	"\n" +
	"## Code and Syntax Highlighting\n" +
	"\n" +
	"Code blocks are part of the Markdown spec, but syntax highlighting isn't. However, many renderers -- like Github's and *Markdown Here* -- support syntax highlighting. *Markdown Here* supports highlighting for dozens of languages (and not-really-languages, like diffs and HTTP headers); to see the complete list, and how to write the language names, see the [highlight.js demo page](http://softwaremaniacs.org/media/soft/highlight/test.html).\n" +
	"\n" +
	"```\n" +
	"Inline `code` has `back-ticks around` it.\n" +
	"```\n" +
	"\n" +
	"Inline `code` has `back-ticks around` it.\n" +
	"\n" +
	"Blocks of code are either fenced by lines with three back-ticks <code>```</code>, or are indented with four spaces. I recommend only using the fenced code blocks -- they're easier and only they support syntax highlighting.\n" +
	"\n" +
	"\n" +
	"\n" +
	"\n" +
	"```javascript\n" +
	"var s = \"JavaScript syntax highlighting\";\n" +
	"alert(s);\n" +
	"```\n" +
	"\n" +
	"```python\n" +
	"s = \"Python syntax highlighting\"\n" +
	"print s\n" +
	"```\n" +
	"\n" +
	"```\n" +
	"No language indicated, so no syntax highlighting in Markdown Here (varies on Github). \n" +
	"But let's throw in a <b>tag</b>.\n" +
	"```\n" +
	"\n" +
	"Again, to see what languages are available for highlighting, and how to write those language names, see the [highlight.js demo page](http://softwaremaniacs.org/media/soft/highlight/test.html).\n" +
	"\n" +
	"<a name=\"tables\"/>\n" +
	"\n" +
	"## Tables\n" +
	"\n" +
	"Tables aren't part of the core Markdown spec, but they are part of GFM and *Markdown Here* supports them. They are an easy way of adding tables to your email -- a task that would otherwise require copy-pasting from another application.\n" +
	"\n" +
	"```\n" +
	"Colons can be used to align columns.\n" +
	"\n" +
	"| Tables        | Are           | Cool  |\n" +
	"| ------------- |:-------------:| -----:|\n" +
	"| col 3 is      | right-aligned | $1600 |\n" +
	"| col 2 is      | centered      |   $12 |\n" +
	"| zebra stripes | are neat      |    $1 |\n" +
	"\n" +
	"The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.\n" +
	"\n" +
	"Markdown | Less | Pretty\n" +
	"--- | --- | ---\n" +
	"*Still* | `renders` | **nicely**\n" +
	"1 | 2 | 3\n" +
	"```\n" +
	"\n" +
	"Colons can be used to align columns.\n" +
	"\n" +
	"| Tables        | Are           | Cool |\n" +
	"| ------------- |:-------------:| -----:|\n" +
	"| col 3 is      | right-aligned | $1600 |\n" +
	"| col 2 is      | centered      |   $12 |\n" +
	"| zebra stripes | are neat      |    $1 |\n" +
	"\n" +
	"The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.\n" +
	"\n" +
	"Markdown | Less | Pretty\n" +
	"--- | --- | ---\n" +
	"*Still* | `renders` | **nicely**\n" +
	"1 | 2 | 3\n" +
	"\n" +
	"<a name=\"blockquotes\"/>\n" +
	"\n" +
	"## Blockquotes\n" +
	"\n" +
	"```\n" +
	"> Blockquotes are very handy in email to emulate reply text.\n" +
	"> This line is part of the same quote.\n" +
	"\n" +
	"Quote break.\n" +
	"\n" +
	"> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote. \n" +
	"```\n" +
	"\n" +
	"> Blockquotes are very handy in email to emulate reply text.\n" +
	"> This line is part of the same quote.\n" +
	"\n" +
	"Quote break.\n" +
	"\n" +
	"> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote. \n" +
	"\n" +
	"<a name=\"html\"/>\n" +
	"\n" +
	"## Inline HTML\n" +
	"\n" +
	"You can also use raw HTML in your Markdown, and it'll mostly work pretty well. \n" +
	"\n" +
	"```html\n" +
	"<dl>\n" +
	"  <dt>Definition list</dt>\n" +
	"  <dd>Is something people use sometimes.</dd>\n" +
	"\n" +
	"  <dt>Markdown in HTML</dt>\n" +
	"  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>\n" +
	"</dl>\n" +
	"```\n" +
	"\n" +
	"<dl>\n" +
	"  <dt>Definition list</dt>\n" +
	"  <dd>Is something people use sometimes.</dd>\n" +
	"\n" +
	"  <dt>Markdown in HTML</dt>\n" +
	"  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>\n" +
	"</dl>\n" +
	"\n" +
	"<a name=\"hr\"/>\n" +
	"\n" +
	"## Horizontal Rule\n" +
	"\n" +
	"```\n" +
	"Three or more...\n" +
	"\n" +
	"---\n" +
	"\n" +
	"Hyphens\n" +
	"\n" +
	"***\n" +
	"\n" +
	"Asterisks\n" +
	"\n" +
	"___\n" +
	"\n" +
	"Underscores\n" +
	"```\n" +
	"\n" +
	"Three or more...\n" +
	"\n" +
	"---\n" +
	"\n" +
	"Hyphens\n" +
	"\n" +
	"***\n" +
	"\n" +
	"Asterisks\n" +
	"\n" +
	"___\n" +
	"\n" +
	"Underscores\n" +
	"\n" +
	"<a name=\"lines\"/>\n" +
	"\n" +
	"## Line Breaks\n" +
	"\n" +
	"My basic recommendation for learning how line breaks work is to experiment and discover -- hit &lt;Enter&gt; once (i.e., insert one newline), then hit it twice (i.e., insert two newlines), see what happens. You'll soon learn to get what you want. \"Markdown Toggle\" is your friend. \n" +
	"\n" +
	"Here are some things to try out:\n" +
	"\n" +
	"```\n" +
	"Here's a line for us to start with.\n" +
	"\n" +
	"This line is separated from the one above by two newlines, so it will be a *separate paragraph*.\n" +
	"\n" +
	"This line is also a separate paragraph, but...\n" +
	"This line is only separated by a single newline, so it's a separate line in the *same paragraph*.\n" +
	"```\n" +
	"\n" +
	"Here's a line for us to start with.\n" +
	"\n" +
	"This line is separated from the one above by two newlines, so it will be a *separate paragraph*.\n" +
	"\n" +
	"This line is also begins a separate paragraph, but...  \n" +
	"This line is only separated by a single newline, so it's a separate line in the *same paragraph*.\n" +
	"\n" +
	"(Technical note: *Markdown Here* uses GFM line breaks, so there's no need to use MD's two-space line breaks.)\n" +
	"\n" +
	"<a name=\"videos\"/>\n" +
	"\n" +
	"## YouTube Videos\n" +
	"\n" +
	"They can't be added directly but you can add an image with a link to the video like this:\n" +
	"\n" +
	"```\n" +
	"<a href=\"http://www.youtube.com/watch?feature=player_embedded&v=YOUTUBE_VIDEO_ID_HERE\n" +
	"\" target=\"_blank\"><img src=\"http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg\" \n" +
	"alt=\"IMAGE ALT TEXT HERE\" width=\"240\" height=\"180\" border=\"10\" /></a>\n" +
	"```\n" +
	"\n" +
	"Or, in pure Markdown, but losing the image sizing and border:\n" +
	"\n" +
	"```\n" +
	"[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)\n" +
	"```\n" +
	"\n" +
	"<a name=\"tex\"/>\n" +
	"\n" +
	"## TeX Mathematical Formulae\n" +
	"\n" +
	"A full description of TeX math symbols is beyond the scope of this cheatsheet. Here's a [good reference](https://en.wikibooks.org/wiki/LaTeX/Mathematics), and you can try stuff out on [CodeCogs](https://www.codecogs.com/latex/eqneditor.php). You can also play with formulae in the Markdown Here options page.\n" +
	"\n" +
	"Here are some examples to try out:\n" +
	"\n" +
	"```\n" +
	"$-b \\pm \\sqrt{b^2 - 4ac} \\over 2a$\n" +
	"$x = a_0 + \\frac{1}{a_1 + \\frac{1}{a_2 + \\frac{1}{a_3 + a_4}}}$\n" +
	"$\\forall x \\in X, \\quad \\exists y \\leq \\epsilon$\n" +
	"```\n" +
	"\n" +
	"The beginning and ending dollar signs (`$`) are the delimiters for the TeX markup.\n";


class GettingStarted extends Component {
	constructor(props) {
		super(props);
		this.createContent = this.createContent.bind(this);
		this.markdownGettingStarted = this.markdownGettingStarted.bind(this);
	}

	markdownGettingStarted = () => {
		return (
			<Section>
				<ReactMarkdown source={this.props.MDGettingStarted} escapeHtml={false}
				               renderers={{inlineCode: InlineCode, code: CodeBlock}}/>
			</Section>
		);
	};
	createContent = (useMarkDown) => {
		if (useMarkDown) {
			return this.markdownGettingStarted();
		} else {
			return JSXGettingStarted();
		}
	};

	render() {
		return (
			<Container>
				{this.createContent(this.props.useMarkDown)}
			</Container>
		)
	}
}

export default GettingStarted;
