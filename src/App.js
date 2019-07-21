import React from 'react';
import './App.css';
import {Box, Grid, Grommet} from 'grommet';
import styled from "styled-components";
import NavbarBootstrap from './Controls/NavbarBoostrap';
import Landing from './pages/Landing.js';
import About from "./pages/About";
import Classes from './pages/Classes'
import GettingStarted from "./pages/GettingStarted";
import autoBind from 'react-autobind';
import ProcessJSON from './Processing/ProcessJSON';
// Grommet Theme
const theme = {
	global: {
		font: {
			family: 'Roboto',
			size: '14px',
			height: '20px',
			color: "white",
		},
		color: {
			background: "dim-grey",
		}

	},
};

const StyledLanding = styled(Landing)`
    width:500px;
`;

const StyledNavBar = styled(NavbarBootstrap)`
    margin-top:0;
    align-items: start;
`;

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			authorName: this.props._userInfo.authorName,
			projName: this.props._userInfo.projectName,
			openPage: 0,
			displayIndex: 0,
			config: this.props._config,
			acknowledgements: this.props._acknowledgements,
			description: this.props._description,
			markdownGettingStarted: this.props._gettingStarted
		};
		// use markdown on the Getting Started page
		this.useMarkDown = true;
		// the indices of pages where the footer is disabled.
		// the useMarkDown condition can be safely changed
		this.disableSocialFooter = this.useMarkDown ? [1, 2] : [2];
		this.navBar = null;
		// used to change the page through the card
		this.classesReference = null;
		autoBind(this, 'componentDidMount', 'changePage');
		// autoBind throws warnings if the method is an arrow function
		this.createFooter = this.createFooter.bind(this);
		this.componentDidMount = this.componentDidMount.bind(this);

		// the fileTree object holds the actual data
		this.processed = ProcessJSON.execute(this.state.config.fileTree);
		this.treeData = ProcessJSON.createFileTreeData(this.state.config.fileTree);
	}

	componentDidMount() {
		this.navBar.setState({pages: this.pages});
		this.forceUpdate();
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevState !== this.state) {
			this.forceUpdate();
		}
	}

	changePage(openPage, index = this.state.displayIndex) {
		this.setState({openPage: openPage, displayIndex: index});
		// change index of open page to Classes index from this.pages
		this.navBar.UpdateNavBar(openPage);
	}


	createFooter = index => {
		if (this.disableSocialFooter.includes(index)) {
			return <div/>
		} else {
			return (
				<div id="footer" className="overlay-bottom">
					<a href="https://github.com/GreatArcStudios"> <i className="fab fa-github-square fa-2x"/> </a>
					<a href="https://twitter.com/GArcStudios"> <i className="fab fa-twitter-square fa-2x"/> </a>
					<a href="mailto:ericz2241@gmail.com"> <i className="fas fa-envelope-square fa-2x"/> </a>
				</div>
			);
		}
	};

	render() {
		// keep pages in the render method so that
		this.pages = [
			<div className="landing-container">
				<StyledLanding data={this.processed[0]} projName={this.state.projName}
				               handlePageChange={this.changePage}/>
			</div>,
			<GettingStarted useMarkDown={this.useMarkDown} MDGettingStarted={this.state.markdownGettingStarted}/>,
			<Classes changePage={this.changePage} treeData={this.treeData} data={this.processed}
			         displayIndex={this.state.displayIndex}/>,
			<About description={this.state.description} acknowledgements={this.state.acknowledgements}
			       authorName={this.state.authorName}
			       projName={this.state.projName}/>
		];
		return (
			<Grommet full theme={theme} className="main-page">
				<Grid align="center"
				      rows={['small', 'small', 'xxsmall']}
				      columns={['auto']}
				      gap="small"
				      areas={[
					      {name: 'navBar', start: [0, 0], end: [1, 0]},
					      {name: 'content', start: [0, 1], end: [1, 1]},
					      {name: 'socialMedia', start: [0, 2], end: [1, 2]},
				      ]} className="main-grid">
					<Box gridArea="navBar" alignSelf="start" align="center"
					     justify="start"
					>
						<StyledNavBar ref={el => this.navBar = el} projName={this.state.projName}
						              changePage={this.changePage} pages={this.pages} data={this.processed[0]}/>
					</Box>
					<Box gridArea="content" alignSelf="center">
						<div>
							{this.pages[this.state.openPage]}
						</div>
					</Box>
					<Box gridArea="socialMedia">
						{this.createFooter(this.state.openPage)}
					</Box>
				</Grid>
			</Grommet>
		);
	}
}

export default App;
