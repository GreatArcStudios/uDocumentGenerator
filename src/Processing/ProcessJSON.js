import ReactMarkdown from "react-markdown";
import InlineCode from "../Markdown-Render/InlineCode";
import React from "react";

class ProcessJSON {
	// initial recursive JSON processing
	static process(data, fileCount = 0) {
		let fileList = [];
		let filePaths = [];
		let pathList = [];
		// when we get to a file
		if (data.fileRepresentation) {
			this.numberFiles(data.fileRepresentation, fileCount);
			fileList.push(data.fileRepresentation);
			filePaths.push(data.filePath);
			pathList.push(data.currentDirectory);
			// uses ES6 destructuring assignment
			// returns 1 for the file count (one item was added)
			return [fileList, filePaths, pathList, 1]
		}
		// if it is an empty path
		else if (data.subDir.length === 0 && !data.fileRepresentation) {
			// return empty values
			return [[], [], [], 0]
		}
		// if this is just a directory
		else {
			// total number of children at this level
			let childrenTotal = 0;
			for (let i = 0; i < data.subDir.length; i++) {
				// a subList of all the lists from a sub directory, a list of the filePaths from a sub directory,
				// a total count of the number of files from a sub directory, a list of nested filePaths that maintains the file structure
				let subList, subFilePaths, subChildrenCount, subPathList;
				// matches the format of the array from the recursive calls
				[subList, subFilePaths, subPathList, subChildrenCount] = this.process(data.subDir[i], fileCount + childrenTotal);
				childrenTotal += subChildrenCount;
				fileList = fileList.concat(subList);
				filePaths = filePaths.concat(subFilePaths);
				pathList.push(subPathList);
			}
			// update the fileCount after all children have been accounted for
			fileCount += childrenTotal;

			// fileList is the list of file reps
			// filePaths is the final filePath to each of the files
			// pathList holds the structure of the files
			// childrenTotal is the total number of children
			// fileCount is the number of files
			return [fileList, filePaths, pathList, childrenTotal, fileCount]
		}
	}

	// adds a index entry into the file representation
	static numberFiles(fileRep, index) {
		fileRep['index'] = index;
	}

	//executes the methods due to lack of static properties
	static execute(config) {
		let fileList, filePaths, pathList, fileCount;
		[fileList, filePaths, pathList, , fileCount] = this.process(config);
		// perform other initial JSON file processing here


		return [fileList, filePaths, pathList, fileCount]
	}

	// extracts functions from a file representation and returns a list of them
	static extractFunctions(functions) {
		let extracted = [];
		for (const accessMod in functions) {
			if (functions.hasOwnProperty(accessMod)) {
				extracted = extracted.concat(functions[accessMod]);
			}
		}
		return extracted
	}

	// returns a list with class names, descriptions, index as JS obj from fileList input
	static prepareFileRepLanding(fileList) {
		return fileList.map((file, index) => {
				return {
					name: file.className,
					description: file.description,
					index: index
				};

			}
		);
	}

	// returns a list of file names from a list of file reps. This is used nav bar search
	static createFileNameList(fileList) {
		return fileList.map((file, index) => {
				return {
					name: file.className,
					index: index
				};
			}
		);
	}

	//process data for the class tree view from the initial file tree data
	static createFileTreeData(data, fileIndex = 0) {
		// when we reach to a file
		if (data.fileRepresentation) {
			// the key for the returned object
			const identifier = "ISFILE" + data.fileRepresentation.nameSpace + "." + data.fileRepresentation.className;
			const node = {};
			// get the part of the namespace that may matter. useful if the namespace is long
			const lastDotIndex = data.fileRepresentation.nameSpace.lastIndexOf(".");
			const cleanNameSpace = lastDotIndex !== -1 ? data.fileRepresentation.nameSpace.substring(lastDotIndex + 1) : data.fileRepresentation.nameSpace;
			node[identifier] = {
				label: cleanNameSpace + "." + data.fileRepresentation.className,
				nodes: {},
				fileIndex: fileIndex++
			};
			return [node, fileIndex];
		}
		// if the directory is an empty path
		else if (data.subDir.length === 0 && !data.fileRepresentation) {
			return {}
		} else {
			const identifier = "NOTFILE" + data.subDir.length * Math.random();
			const treeData = {};
			const nodes = {};
			// index will be replaced
			treeData[identifier] = {
				label: data.currentDirectory,
				index: 0,
				nodes: nodes
			};
			// loop over each item in subDirectory & add them to
			for (let i = 0; i < data.subDir.length; i++) {
				const [subNode, fileIndex_] = this.createFileTreeData(data.subDir[i], fileIndex);
				// there should only be one object in subNode
				for (const key in subNode) {
					if (subNode.hasOwnProperty(key)) {
						subNode[key]['index'] = i;
						nodes[key] = subNode[key]
					}
				}
				fileIndex = fileIndex_;
			}
			return [treeData, fileIndex]
		}
	}

	// prepares variables for variable table
	static processVariables(fileRep, windowWidth) {
		// check https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/getting-started.html for docs
		// regarding the format of columns
		const columns = windowWidth <= 450 ? [
			{
				dataField: 'varName',
				text: 'Variable Name',
				sort: true
			},
			{
				dataField: 'description',
				text: 'Description',
				sort: true
			},
		] : [
			{
				dataField: 'varName',
				text: 'Variable Name',
				sort: true
			},
			{
				dataField: 'accessMod',
				text: 'Access Modifier',
				sort: true
			},
			{
				dataField: 'description',
				text: 'Description',
				sort: true
			},

			{
				dataField: 'type',
				text: 'Type',
				sort: true
			},
		];
		const defaultSorted = [{
			dataField: 'varName',
			order: 'asc'
		}];
		const variables = fileRep.variables;
		const variableList = [];
		for (let accessMod in variables) {
			if (variables.hasOwnProperty(accessMod)) {
				for (let variable of variables[accessMod]) {
					const descriptionMD = <ReactMarkdown source={this.cleanFormatDescription(variable.description)}
					                                     escapeHtml={false} renderers={{inlineCode: InlineCode}}/>;
					const typeMD = <ReactMarkdown source={"```" + variable.cleanType + "```"} escapeHtml={false}
					                              renderers={{inlineCode: InlineCode}}/>;
					const varInfo = {
						varName: variable.varName,
						accessMod: variable.accessMod,
						description: descriptionMD,
						type: typeMD
					};
					variableList.push(varInfo);
				}
			}
		}
		return [defaultSorted, columns, variableList]
	}

	static cleanFormatDescription(description) {
		const regex = /(\\n)/gi;
		const reformattedDescription = description.replace(regex, "\n");
		return reformattedDescription.includes("</summary>") ? reformattedDescription.substring(0, reformattedDescription.indexOf("</summary>") + 11)
			.replace("<summary>", "").replace("</summary>", "") : reformattedDescription;
	}
}

export default ProcessJSON;
