import React from 'react';
import "./Card.css";
import ReactMarkdown from "react-markdown";
import InlineCode from "../Markdown-Render/InlineCode";
import ProcessJSON from "../Processing/ProcessJSON";

// This is using a separate style sheet because Styled Component doesn't provide proper styling
// The first argument of handlePageChange is the index of the Classes element in App.js
const Card = (props) => (
	<div className="card" onClick={() => {
		props.changePage(2, props.index)
	}}>
		<div className="content-wrapper">
			<div className="class-title-wrapper">
				<h3>{props.classTitle}</h3>
			</div>
			<hr/>
			<div className="class-description-wrapper">
				<ReactMarkdown source={ProcessJSON.cleanFormatDescription(props.classDescription)} escapeHtml={false}
				               renderers={{inlineCode: InlineCode}}/>
			</div>
		</div>
	</div>

);

export default Card
