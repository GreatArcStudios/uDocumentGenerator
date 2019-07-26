import React, {Component} from 'react';
import styled from 'styled-components';
import MethodBox from './MethodBox';
import SearchBar from "@opuscapita/react-searchbar";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import ProcessJSON from "../Processing/ProcessJSON";
import ReactMarkdown from "react-markdown/with-html";
import CodeBlock from '../Markdown-Render/CodeBlock';
import HeaderInlineCode from "../Markdown-Render/HeaderInlineCode";
import InlineCode from "../Markdown-Render/InlineCode";

const Container = styled.div`
	width: 100%; 
	height: 100%;
	display: block;
	margin-left: 10px;
	-webkit-overflow-scrolling: touch;
	@media(orientation: landscape) and (max-height: 500px), (max-width: 500px){
		overflow-y: scroll;
	}
`;

const NameContainer = styled.div`
	margin-top: 30px;
	width: 100%;
`;

const ContentContainer = styled.div`
	width: 100%;
`;

const DescriptionContainer = styled.div`
	overflow: hidden;
	width: 80%;
	max-height: 700px;
	height: auto;
	margin-top: 30px;
	& > div{
		overflow-y: auto;
	}
	a{
    color:white;
    text-decoration: underline;
    transition: all 0.4s ease-in-out;
  }
  a:hover{
    font-weight: bold;
  }
`;

const VarContainer = styled.div`
	margin-top: 30px;
`;

// use this if you want to have a divider.
// it's best used as a divider between sections
const StyledDivider = styled.hr`
	width: 60%;
	border-top: 1px solid rgba(255, 255, 255, 1);
	margin-top: 30px;
	margin-bottom: 20px;
	position: relative;
	left: 10%;
`;

const MethodContainer = styled.div`
    margin-top: 30px;
    padding-top: 20px;
    width: 100%;
    height: auto;
    min-height: 100px;
    padding-bottom: 100px;
`;

const DeclarationContainer = styled.div`
	margin-top: 30px;
`;

const Methods = styled.div`
    padding-left: 10px;
    overflow-x: hidden;
    max-width: 100%;
    min-width: 200px;
    width: auto;
    padding-right: 100px;
    height: auto;
   @media(max-width: 500px){
   	padding-right: 50px;
   }
`;

const MethodHeader = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: start;
    align-items: center;
`;

const VariableHeader = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: start;
    align-items: center;
`;


const StyledSearchBar = styled(SearchBar)`
	min-width: 125px;
	width: 100%;
	max-width: 500px;
	margin-left: 30px;
	margin-right: 30px;
	background-color: white;
	transition: all .5s ease;
	&:hover{ 
	box-shadow: 1px 2px 5px 2px rgba(164,169,173,0.5);
	} 
	&::selection{
	background: white;
	}
`;

const VarTableContainer = styled.div`
	padding-right:80px;
	@media(max-width: 500px){
		padding-right: 40px;
	}
	& *{
	color: white !important;
	td{
	    overflow-wrap: break-word;
	    font-family: 'Fira Code', monospace !important;
	    @media(max-width: 500px){
	    	font-size: 10px;
	    }
	}
	thead *{
		border-top: 0 !important;
	}
	.page-link{ 
	    background-color: #476c9b !important;
	    border-color: #476c9b !important;
	}
	.page-link:hover{ 
	    background-color: #354c6e !important;
	    border-color: #354c6e !important;
	}
	 .page-item.active .page-link{ 
	    background-color: #354c6e !important;
	    border-color: #354c6e !important;
	}
	.dropdown-menu{
	    background-color: #2e2e2e !important;
	    box-shadow: 0 4px 5px 3px rgba(0,0,0,0.30);
	    border: none;
	}
	.dropdown-item:hover{
	    background-color: #476c9b !important;
	}
	} 
`;

const TopInfo = styled.div`
	display: flex;
`;

const Namespace = styled.div`
	display: flex;
	& > p{
		margin-left: 5px;
	}
`;

const Section = styled.div`
  position: relative;
  margin-top: 20px;
  margin-left: 50px;
  margin-bottom: 10px;
  @media(max-width: 500px){ 
  	margin-left: 0px;
  	max-width: 300px
  }
  // enable if you want white text in your markdown
  //& *{
  //  color: white;
  //}
`;

const createMethodBox = (name, description, accessMod, paramList, index) => {
	return <MethodBox name={name}
	                  description={description}
	                  accessMod={accessMod} paramList={paramList} key={index}/>
};

class ClassBox extends Component {
	constructor(props) {
		super(props);
		// note data here uses the keys from the config file
		// data here is a file representation
		this.state = {
			data: this.props.data,
			filteredFunctionData: [],
			functionData: [],
			filteredVariableData: null,
			variableData: null,
			windowWidth: window.innerWidth,
		};
		this.state.filteredVariableData = ProcessJSON.processVariables(this.state.data, this.state.windowWidth);
		this.state.variableData = this.state.filteredVariableData;
		this.generateFunctionData = this.generateFunctionData.bind(this);
		this.state.functionData = this.generateFunctionData();
		this.state.filteredFunctionData = this.state.functionData;
		this.handleMethodSearch = this.handleMethodSearch.bind(this);
		this.handleVariableSearch = this.handleVariableSearch.bind(this);
		this.componentDidUpdate = this.componentDidUpdate.bind(this);
	}

	generateFunctionData(useData = false, data = null) {
		return useData ? ProcessJSON.extractFunctions(data.functions).map((_function, index) => {
			return createMethodBox(_function.functionName, _function.description, _function.accessModifier, _function.cleanParamList, index)
		}) : ProcessJSON.extractFunctions(this.props.data.functions).map((_function, index) => {
			return createMethodBox(_function.functionName, _function.description, _function.accessModifier, _function.cleanParamList, index)
		});
	}

	handleMethodSearch(input) {
		// convert to lower case to avoid capitalization issues
		const inputLowerCase = input.toString().toLowerCase();
		// filter the list of files based on the input
		const matchingList = this.state.functionData.filter((method) => {
				return method.props.name.toLowerCase().includes(inputLowerCase)
			}
		);
		this.setState({
			filteredFunctionData: matchingList
		});
	}

	handleVariableSearch(input) {
		// convert to lower case to avoid capitalization issues
		const inputLowerCase = input.toString().toLowerCase();
		// filter the list of files based on the input
		const matchingList = this.state.variableData[2].filter((variable) => {
				return variable.varName.toLowerCase().includes(inputLowerCase)
			}
		);
		const filteredData = [this.state.variableData[0], this.state.variableData[1], matchingList];
		this.setState({
			filteredVariableData: filteredData
		});
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		// update the values if Classes makes filteredFunctionData an empty list and the data was updated
		if (this.state.filteredFunctionData.length === 0 && prevState.functionData !== this.state.functionData) {
			this.setState({filteredFunctionData: this.state.functionData});
		}
		if (this.state.data !== prevState.data) {
			const processedData = ProcessJSON.processVariables(this.state.data, this.state.windowWidth);
			this.setState({variableData: processedData, filteredVariableData: processedData})
		}
	}

	// formats raw usage code from data for markdown and returns the component
	renderDeclaration = (usageText) => {
		const formattedText = "```csharp\n" + usageText + "\n```";
		return (
			<Section>
				<ReactMarkdown source={formattedText} escapeHtml={false}
				               renderers={{inlineCode: HeaderInlineCode, code: CodeBlock}}/>
			</Section>
		);
	};


	render() {
		// returns a list where the first element is the columns (table setup)
		// the second element is the actual formatted table data
		return (
			<Container>
				<NameContainer>
					<h1>{this.state.data.className}</h1>
					<TopInfo>
						<Namespace>
							<b>Namespace: </b>
							<p>{this.state.data.nameSpace}</p>
						</Namespace>
					</TopInfo>
				</NameContainer>
				<ContentContainer>
					<DescriptionContainer>
						<h1>Description</h1>
						<div>
							<ReactMarkdown source={ProcessJSON.cleanFormatDescription(this.state.data.description)}
							               escapeHtml={false}
							               renderers={{code: CodeBlock, inlineCode: InlineCode}}/>
						</div>
					</DescriptionContainer>
					<DeclarationContainer>
						<h1>Declaration</h1>
						{this.renderDeclaration(this.state.data.declaration)}
					</DeclarationContainer>
					<VarContainer>
						<VariableHeader>
							<h1>Variables</h1>
							<StyledSearchBar onSearch={this.handleVariableSearch}
							                 isDynamic={true} allowEmptySearch={false} minChars={0}
							                 className='searchBar'/>
						</VariableHeader>
						<VarTableContainer>
							<BootstrapTable
								keyField="varName"
								data={this.state.filteredVariableData[2]}
								columns={this.state.filteredVariableData[1]}
								defaultSorted={this.state.filteredVariableData[0]}
								bordered={false}
								noDataIndication="Table is Empty"
								classes="var-table"
								pagination={paginationFactory()}
								bootstrap4
							/>
						</VarTableContainer>
					</VarContainer>
					<MethodContainer>
						<MethodHeader>
							<h1>Methods</h1>
							<StyledSearchBar onSearch={this.handleMethodSearch}
							                 isDynamic={true} allowEmptySearch={false} minChars={0}
							                 className='searchBar'/>
						</MethodHeader>
						<Methods>
							{this.state.filteredFunctionData}
						</Methods>
					</MethodContainer>
				</ContentContainer>
			</Container>
		);
	}
}

export default ClassBox;
