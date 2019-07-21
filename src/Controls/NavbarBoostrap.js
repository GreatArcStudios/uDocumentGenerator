import React, {Component} from 'react';
import {Nav, Navbar} from 'react-bootstrap';

import SearchBar from '../SearchBar';
import SearchBarStyle from "../SearchBar/SearchBarStyle.module.css";
import styled from 'styled-components';

import autoBind from 'react-autobind';
import ProcessJSON from "../Processing/ProcessJSON";

const StyledNavbar = styled(Navbar)`
    background-color: #984447;
    width: 100%;
    top:0; 
    display:flex;
    transition: all 0.2s;
    & * {  
      transition: all 0.2s;
    }
`;
const NavSearchContainer = styled.div`
  right: 0;
  display: flex;
  align-items:center;
  width:auto;
  margin-right:1%;
  z-index:10;
  position: absolute;
  min-width: 30%;
  max-width: 60%;
  align-self: flex-start;
  top: 5px;
  -webkit-transition: all 0.2s ease-in-out;-moz-transition: all 0.2s ease;-ms-transition: all 0.2s ease;-o-transition: all 0.2s ease;transition: all 0.2s ease;
  & * {  
    width: 100%;
  }
  button{
  	width: 40px;
  }
  @media (max-width: 1000px){
    top:60px;
  }
`;
const WhiteNavLink = styled(Nav.Link)`
  color:white !important;
  font-size: large !important;
  &:hover {
    color: #2a2a2a !important;
  }    
`;
const WhiteBoldNavLink = styled(Nav.Link)`
  color:white !important;
  font-size: large !important;
  font-weight: bold !important;
  &:hover {
    color: #2a2a2a !important;
  }    
`;
const WhiteNavBrand = styled(Navbar.Brand)`
  color:white !important;
  font-weight: bold !important;;
`;

const StyledSearchBar = styled(SearchBar)`
    -webkit-transition: all 0.2s ease-in-out;-moz-transition: all 0.2s ease;-ms-transition: all 0.2s ease;-o-transition: all 0.2s ease;transition: all 0.2s ease;
`;

class NavbarBoostrap extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projectName: this.props.projName,
			pages: this.props.pages,
			data: ProcessJSON.createFileNameList(this.props.data),
			suggestions: [],
			navItems: [

				<WhiteBoldNavLink onSelect={(e) => this.ChangePage(e)} eventKey="0" title="Home" key="Home">
					Home
				</WhiteBoldNavLink>
				,

				<WhiteNavLink onSelect={(e) => this.ChangePage(e)} eventKey="1" title="Getting Started"
				              key="Getting Started">
					Getting Started
				</WhiteNavLink>
				,

				<WhiteNavLink onSelect={(e) => this.ChangePage(e)} eventKey="2" title="Classes" key="Classes">
					Classes
				</WhiteNavLink>
				,

				<WhiteNavLink onSelect={(e) => this.ChangePage(e)} eventKey="3" title="About" key="About">
					About
				</WhiteNavLink>


			]
		};
		autoBind(this, 'handleClear', 'handleChange');
		this.handleSearch = this.handleSearch.bind(this);
		this.handleSelection = this.handleSelection.bind(this);
		this.navBar = null;
	}

	normal = (title, eventKey) => {
		return (
			<WhiteNavLink onSelect={(e) => this.ChangePage(e)} eventKey={eventKey} title={title} key={title}>
				{title}
			</WhiteNavLink>
		)
	};
	selected = (title, eventKey) => {
		return (

			<WhiteBoldNavLink onSelect={(e) => this.ChangePage(e)} eventKey={eventKey} title={title} key={title}>
				{title}
			</WhiteBoldNavLink>
		)
	};

	ChangePage(e) {
		// changes the highlighted item
		const temp = [];
		for (let i = 0; i < this.state.navItems.length; i++) {
			if (i === parseInt(e)) {
				temp.push(this.selected(this.state.navItems[i].props.title, this.state.navItems[i].props.eventKey));
				this.props.changePage(i);
			} else {
				temp.push(this.normal(this.state.navItems[i].props.title, this.state.navItems[i].props.eventKey));
			}
		}
		this.setState({navItems: temp});
	}

	// only updates the Navbar, does not change the page
	UpdateNavBar(index) {
		// changes the highlighted item
		const temp = [];
		for (let i = 0; i < this.state.navItems.length; i++) {
			if (i === parseInt(index)) {
				temp.push(this.selected(this.state.navItems[i].props.title, this.state.navItems[i].props.eventKey));
			} else {
				temp.push(this.normal(this.state.navItems[i].props.title, this.state.navItems[i].props.eventKey));
			}
		}
		this.setState({navItems: temp});
	}


	handleClear() {
		this.setState({
			suggestions: []
		});
	}

	handleChange(input) {
		this.setState({
			suggestions: this.state.data.filter(file => file.name.toLowerCase().startsWith(input.toLowerCase()))
		});
	}

	handleSelection = index => {
		this.props.changePage(2, index);
	};

	handleSearch = value => {
		if (value) {
			console.info(`Searching "${value}"`);
		}
	};

	suggestionRenderer = (suggestion, searchTerm) => {
		return (
			<span>
            <span>{searchTerm}</span>
            <strong>{suggestion.substr(searchTerm.length)}</strong>
      </span>);
	};

	render() {
		return (
			<StyledNavbar fixed="top" collapseOnSelect expand="lg">
				<WhiteNavBrand>{this.state.projectName}</WhiteNavBrand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav"/>
				<Navbar.Collapse>
					<Nav defaultActiveKey="0">
						{this.state.navItems}
						<NavSearchContainer>
							{/* The search bar is from: https://github.com/vakhtang/react-search-bar*/}
							<StyledSearchBar
								autoFocus
								renderClearButton
								renderSearchButton
								placeholder="Search..."
								onChange={this.handleChange}
								onClear={this.handleClear}
								onSelection={this.handleSelection}
								onSearch={this.handleSearch}
								suggestions={this.state.suggestions.map(suggestion => suggestion.name)}
								suggestionRenderer={(suggestion, searchTerm) => this.suggestionRenderer(suggestion, searchTerm)}
								styles={SearchBarStyle}
								indexes={this.state.suggestions.map(suggestion => suggestion.index)}
							/>
						</NavSearchContainer>
					</Nav>
				</Navbar.Collapse>
			</StyledNavbar>
		);
	}


}

export default NavbarBoostrap
