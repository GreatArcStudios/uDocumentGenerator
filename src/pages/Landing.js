import React from "react";
import {Box, Grid, ResponsiveContext} from 'grommet';
import CardList from '../Controls/CardList';
import styled from 'styled-components';
import SearchBar from "@opuscapita/react-searchbar";
import ProcessJSON from "../Processing/ProcessJSON";

const TopContainer = styled.div`
    width:auto;
    min-width: 260px;
    overflow:hidden;
    transition: all 0.2s ease-in-out;
    @media (min-width: 1537px){
      max-width: 900px !important;
    }
    @media(min-width: 738px){ 
      max-width: 500px
    }
`;
const ProjectNameHeader = styled.h1`
    text-align:center;
    color: white;
    @media(max-width: 500px){
    	font-size: 25px;
    }
`;

const StyledSearchBar = styled(SearchBar)`
  background-color: white;
  transition: all .5s ease;
  min-width: 350px;
  &:hover{ 
    box-shadow: 1px 2px 5px 2px rgba(164,169,173,0.5);
    } 
   &::selection{
    background: white;
   }
   @media(min-width: 738px){ 
      margin:20px;
    }
    @media(max-width: 500px){
       
    }
`;

class Landing extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			data: ProcessJSON.prepareFileRepLanding(this.props.data), projName: this.props.projName,
			filtered: [],
		};
		this.handleSearch = this.handleSearch.bind(this);
	}

	componentDidMount() {
		this.setState({
			filtered: this.state.data,
		});
	}

	handleSearch(input) {
		// convert to lower case to avoid capitalization issues
		const inputLowerCase = input.toString().toLowerCase();
		// filter the list of files based on the input
		const matchingList = this.state.data.filter((file) => {
				return file.name.toLowerCase().includes(inputLowerCase)
			}
		);
		this.setState({
			filtered: matchingList
		});
	}

	render() {
		const StyledSearch = <StyledSearchBar onSearch={this.handleSearch}
		                                      isDynamic={true} allowEmptySearch={false} minChars={0}
		                                      className='searchBar'/>;
		const CardListElement = <CardList data={this.state.filtered} handlePageChange={this.props.handlePageChange}/>;
		return (
			<TopContainer>
				{/* Handle small, medium, and large sized views. Check grommet docs on
                ResponsiveContext for more information.*/}
				<ResponsiveContext.Consumer>
					{(size) => {
						if (size === "medium") {
							return (<Grid align="center" alignSelf="center" alignItems="center" justify="stretch"
							              rows={['xxsmall', 'xsmall', 'small']}
							              columns={['medium']}
							              gap="xsmall"

							              areas={[
								              {name: 'projectName', start: [0, 0], end: [1, 0]},
								              {name: 'searchBar', start: [0, 1], end: [1, 1]},
								              {name: 'landingCards', start: [0, 2], end: [1, 2]},
							              ]}
								>
									<Box responsive={true} gridArea="projectName" align="center"
									     justify="center"><ProjectNameHeader>{this.state.projName}</ProjectNameHeader>
									</Box>
									<Box responsive={true} gridArea="searchBar" alignSelf="center" flex="grow"
									     justify="center">
										{StyledSearch}
									</Box>
									<Box responsive={true} gridArea="landingCards" alignSelf="center"
									     justify="center">{CardListElement}</Box>
								</Grid>
							)
						} else if (size === "small") {
							return (
								<Grid align="center" alignSelf="center" alignItems="center" justify="center"
								      rows={['xxsmall', 'xsmall', 'small']}
								      columns={['medium']}
								      gap="xsmall"

								      areas={[
									      {name: 'projectName', start: [0, 0], end: [1, 0]},
									      {name: 'searchBar', start: [0, 1], end: [1, 1]},
									      {name: 'landingCards', start: [0, 2], end: [1, 2]},
								      ]}
								>
									<Box responsive={true} gridArea="projectName" align="center"
									     justify="center"><ProjectNameHeader>{this.state.projName}</ProjectNameHeader>
									</Box>
									<Box responsive={true} gridArea="searchBar" alignSelf="center" flex="grow"
									     justify="center">
										{StyledSearch}
									</Box>
									<Box responsive={true} gridArea="landingCards" alignSelf="center"
									     justify="center">{CardListElement}</Box>
								</Grid>
							)
						} else {
							return (<Grid align="center" alignSelf="center" alignItems="center" justify="stretch"
							              rows={['xxsmall', 'xsmall', 'small']}
							              columns={['large']}
							              gap="xsmall"

							              areas={[
								              {name: 'projectName', start: [0, 0], end: [1, 0]},
								              {name: 'searchBar', start: [0, 1], end: [1, 1]},
								              {name: 'landingCards', start: [0, 2], end: [1, 2]},
							              ]}
								>
									<Box responsive={true} gridArea="projectName" align="center"
									     justify="center"><ProjectNameHeader>{this.state.projName}</ProjectNameHeader>
									</Box>
									<Box responsive={true} gridArea="searchBar" alignSelf="center" flex="grow"
									     justify="center">
										{StyledSearch}
									</Box>
									<Box responsive={true} gridArea="landingCards" alignSelf="center"
									     justify="center">{CardListElement}</Box>
								</Grid>
							)
						}
					}
					}
				</ResponsiveContext.Consumer>
			</TopContainer>
		);
	}
}

export default Landing
