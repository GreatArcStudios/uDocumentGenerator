import React, {Component} from 'react';
import styled from 'styled-components';
import ClassBox from "../Controls/ClassBox";
import TreeMenu from 'react-simple-tree-menu'
import './Classes.css';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 500px;
  min-width: 375px;
  opacity: 1;
  transition: all 0.2s ease-in-out;
  color: white;
  display: block;
  position:fixed;
  top: 36px;
  overflow: hidden;
  background-size: contain;
`;

const FileTreeContainer = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  left: 0;
  height: 100%;
  top:0;
  backdrop-filter: blur(30px);
  justify-content: center;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 20px;
  div,ul,li{
    width: 100% !important;
    transition: all 0.2s ease-in-out;
    padding: 15px;
  }
  .toggle-icon{
  	width: auto !important;
  }
  & * > input {
    border:none; 
     &:hover{
        box-shadow: 0px 1px 5px 2px rgba(164,169,173,0.5);
     }
  }
  @media(max-width: 500px){
    width: 0;
    display: none
  }
`;
const ClassInfoContainer = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  right: 0;
  top:0;
  padding-top: 15px;
  height: 100%;
  overflow-y: auto !important;
  z-index: 10;
  padding-left: 20px;
  @media(max-width: 375px){
    padding-left: 10px;
  }
  @media(max-width: 500px){
    width: 100%;
  }
`;

const StyledTreeMenu = styled(TreeMenu)`
	color: white !important;
	& .tree-item { 
		color: white;
	}
`;

class Classes extends Component {
	constructor(props) {
		super(props);
		// data passed here is all of the processed data (a list)
		// the first element of the data list is the complete list of file representations
		this.state = {
			data: this.props.data,
			displayIndex: this.props.displayIndex,
		};
		this.classBox = null
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevState.displayIndex !== this.props.displayIndex) {
			const funcData = this.classBox.generateFunctionData(true, this.state.data[0][this.props.displayIndex]);
			this.classBox.setState({
				data: this.state.data[0][this.props.displayIndex],
				functionData: funcData,
				filteredFunctionData: []
			});
			this.setState({displayIndex: this.props.displayIndex});
		}
	}

	render() {
		return (
			<Container>
				<SplitterLayout customClassName="splitter" primaryIndex={0} percentage={true} secondaryInitialSize={70}>
					<FileTreeContainer>
						<StyledTreeMenu onClickItem={item => this.props.changePage(2, item.fileIndex)}
						                data={this.props.treeData[0]}/>
					</FileTreeContainer>
					<ClassInfoContainer>
						<ClassBox ref={el => this.classBox = el} data={this.state.data[0][this.state.displayIndex]}/>
					</ClassInfoContainer>
				</SplitterLayout>
			</Container>
		)
	}
}

export default Classes;

