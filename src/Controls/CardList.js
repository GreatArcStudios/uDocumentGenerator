import React from 'react';
import ScrollMenu from "react-horizontal-scrolling-menu";
import Card from './Card';
import './CardList.css';
import styled from 'styled-components';

const Arrow = ({text, className}) => {
	return (
		<div
			className={className}
		>{text}</div>
	);
};
const StyledArrow = styled(Arrow)`
  color:white;
  font-weight: bold; 
  font-size: 140%;  
  transition: all 0.4s ease-out;
  &:hover{ 
      text-shadow: 0 2px 2px rgba(33,37,43,0.87);
  }
`;

const PaddedMenuCard = styled.div`
    padding: 10px;
`;

const ArrowLeft = <StyledArrow text='<' className='arrow-prev'/>;
const ArrowRight = <StyledArrow text='>' className='arrow-next'/>;

class CardList extends React.Component {
	constructor(props) {
		super(props);
		// eslint-disable-next-line no-lone-blocks
		{/*
            Read horizontal scrolling menu docs for documentation on state objects passed into ScrollMenu

            Link: https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu
        */
		}
		this.state = {
			data: props.data,
			selected: "",
			alignCenter: false,
			clickWhenDrag: false,
			dragging: true,
			hideArrows: true,
			hideSingleArrow: false,
			scrollToSelected: true,
			translate: 0.0,
			transition: 0.4,
			inertiaScrolling: true,
			slowdownFactor: 0.10,
			wheel: false,
		};
		this.MenuItem = ({text, selected, index, description}) => {
			return (
				<PaddedMenuCard>
					<Card
						className={`menu-item ${selected ? 'active' : ''}`}
						classTitle={text}
						classDescription={description}
						changePage={this.props.handlePageChange}
						index={index}
					>
					</Card>
				</PaddedMenuCard>
			);
		};
		this.Menu = (fileList) =>
			fileList.map(file => {
				const {name, description, index} = file;
				return <this.MenuItem text={name} selected={false} key={name} index={index} description={description}/>;
			});
		// map the data to name list
		this.menu = null;
		this.menuItems = this.Menu(this.state.data, this.selected);
		this.onSelect = this.onSelect.bind(this);
		this.onUpdate = this.onUpdate.bind(this);
		this.componentWillUpdate = this.componentWillUpdate.bind(this);

	}

	componentDidUpdate(prevProps, prevState) {
		const {alignCenter} = prevState;
		const {alignCenter: alignCenterNew} = this.state;
		if (alignCenter !== alignCenterNew && this.menu) {
			this.menu.setInitial();
			this.menu.forceUpdate();
			this.forceUpdate();
		}
	}

	componentWillUpdate(nextProps, nextState, nextContext) {
		const newMenuItems = this.Menu(nextProps.data, nextState.selected);
		if (this.menu != null && newMenuItems.length !== this.menuItems.length) {
			this.menuItems = newMenuItems;
			this.menu.setState({translate: 0});
		}
	}

	onUpdate = ({translate}) => {
		this.setState({translate});
	};

	onSelect = key => {
		this.setState({selected: key});
	};

	render() {
		const menu = this.menuItems;
		return (
			// arrowDisabledClass = "noclass" exists because ScrollMenu hiding doesn't behave properly
			<div className="card-list">
				<ScrollMenu
					ref={el => (this.menu = el)}
					data={menu}
					arrowLeft={ArrowLeft}
					arrowRight={ArrowRight}
					onSelect={this.onSelect}
					onUpdate={this.onUpdate}
					alignCenter={this.state.alignCenter}
					hideArrows={this.state.hideArrows}
					hideSingleArrow={this.state.hideSingleArrow}
					transition={+this.state.transition}
					translate={this.state.translate}
					inertiaScrolling={this.state.inertiaScrolling}
					inertiaScrollingSlowdown={this.state.slowdownFactor}
					dragging={this.state.draggable}
					wheel={this.state.wheel}
					arrowDisabledClass="noclass"
					selected={this.state.selected}
					scrollToSelected={this.state.scrollToSelected}
					clickWhenDrag={this.state.clickWhenDrag}
				/>
			</div>
		);
	}
}

export default CardList
