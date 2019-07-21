import React from 'react';
import {Button, Grommet} from 'grommet';
import styled from 'styled-components';

const BtnLight = styled(Button)`
    background-color:rgba(255,255,255,0);
    border: solid whitesmoke 2px;
    text-align:center;
    display: inline-block;
    align-self: center;
    color: white;
    font-size: 30px;
    font-family: "Roboto",sans-serif;
    font-weight: 300;
    text-decoration: none;
    border-radius: 3px;
    padding: 10px 50px;
    transition: all 250ms ease;
    width:150px;
    &:hover{ 
     background-color: rgba(208,208,208,0.49);
     box-shadow: rgba(105,99,105,0.41);
    }
    &:active{
      background-color: rgba(125,125,125,0.33);
    }
`;

const BtnDark = styled(Button)`
    background-color: rgba(255, 255, 255, 0);
    border: solid #3f3f3f 2px;
    text-align: center;
    display: inline-block;
    align-self: center;
    color: #3f3f3f;
    font-size: 30px;
    font-family: "Roboto",sans-serif;
    font-weight: 300;
    text-decoration: none;
    border-radius: 3px;
    padding: 10px 50px;
    transition: all 250ms ease;
    width: 150px;
     &:hover{ 
      background-color: rgba(134, 134, 134, 0.49);
      box-shadow: rgba(105, 99, 105, 0.41);
    }
    &:active{
    background-color: rgba(99, 99, 99, 0.84);
    color: #fff;    
    }
`;


class ButtonLight extends React.Component {
	render() {
		return (
			<Grommet>
				<BtnLight label={this.props.label} onClick={this.props.onClick}/>
			</Grommet>
		)
	}
}


class ButtonDark extends React.Component {
	render() {
		return (
			<Grommet>
				<BtnDark label={this.props.label} onClick={this.props.onClick}/>
			</Grommet>
		)
	}
}

export {ButtonLight, ButtonDark}
