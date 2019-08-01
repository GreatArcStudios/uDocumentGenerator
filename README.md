# Getting Started

This guide is organized into 4 parts: 

 1. [Installation](#installation)
 2. [Getting Started](#gettingstarted)
 3. [Customisation](#customisation)
 4. [Best Practices](#bestpractices)
 
## Installation 
<a name="installation"/>

Installation should be quick and fairly painless. The main installation step is to download the React App portion of uDocumentGenerator from [Github](https://github.com/GreatArcStudios/uDocumentGenerator/). 
If you haven't used Github before, you have 3 options: 

 1. Fork the repo - press the fork button
 2. Clone the repo -  ```git clone```
 3. Download the repo - press **clone or download** and then **download zip**

While these are all viable options, I'd really appreciate a fork as that helps out with the repo's statistics and builds a community more so than the two other options.

After downloading, locate where the repo was downloaded to. If you used ```git clone```, it'll be in your user's root directory. 

You don't need ```npm``` installed to use this, but there'd be a couple of drawbacks:

 1. You can't create new optimized builds. 
 2. It's a bit more work to change the logo/social media links

I highly recommend installing ```npm``` because it's critical for customising/extending uDocumentGenerator. Although, **both routes** should take only a few minutes to get the React App customised and running.

I'll have a guide below detailing steps to use uDocumentGenerator below without ever generating builds/installing ```npm```. 

### Installing npm

The instructions for Windows are found [here](https://blog.teamtreehouse.com/install-node-js-npm-windows). But the **TLDR** is to go to the node.js [website](https://nodejs.org/en/), download the appropriate installer, and make sure to install ```npm``` during ```node.js``` installation. 

The instructions for MacOS are found [here](https://treehouse.github.io/installation-guides/mac/node-mac.html). You may have to first install ```homebrew```, but the **TLDR** is that you need to run ```brew update```  and then ```brew install node```. 

The instruction for Linux are found [here](https://nodejs.org/en/download/package-manager/). But the **TLDR** is that you should read over the article at the link.


## Getting Started 
<a name="gettingstarted"/>

If you want to see your comments turned into a website immediately, all you need to do is fill out the fields in the editor extension window.

 The website template drop down should point to where the ```data``` folder in ```build``` folder is. You may change this (instructions below) if you decide to create a new build of the React App. 

Alternatively, if you don't want to use the build version, have website template drop down point to where ```src``` in  ```<script src="%PUBLIC_URL%/data/config.js"  type="text/javascript">``` points to. By default that'd be the ```data``` folder nested inside the ```public``` folder. 

The acknowledgement, project description, and getting started file path drop downs are all to point to where you've saved your respective files. There's a ```test.txt``` file in the ```UI``` folder of the ```Editor``` folder that you can use as a placeholder for all 3 of those fields. 

After filling in those fields, just click ```Generate``` to generate ```config.js```. 

All that's left is to check out your documentation website 🎉. 

If you saved ```config.js``` to the build folder, click on ```index.html``` in the build folder to see your website. 

Alternatively, run ```npm start``` after navigating into the project directory, and then in your browser, go to [http://localhost:3000](http://localhost:3000). 

## Customising uDocumentGenerator 
<a name="customisation"/>

### With npm installed 
With ```npm``` installed, customising uDocumentGenerator becomes easy. 

It's also worth noting that using a good IDE such as [Webstorm](https://www.jetbrains.com/webstorm/) makes customisation even easier due to integration with ```npm```. 


### Basic Customisation

```index.html``` in the public folder is where you'll find logo customisation and webpage title customisation options. 

To change the logo, change the string ```"%PUBLIC_URL%/data/abstractlogo.png``` to where your logo is located. 

> **React note:** ```%PUBLIC_URL%``` is the public folder you see in the project structure. 

To change the title, change ```<title>DOCUMENTATION TITLE</title>``` to what you want the title to be.

Additionally in ```index.html```, you'll find ```<script src="%PUBLIC_URL%/data/config.js" type="text/javascript"></script>```. This is the file path to the config file. You can change this if you want, but keep the file path pointing to ```config.js``` unless you plan on saving to a different file name in the generation process. 

To change the social media links go to ```App.js``` in the ```src``` folder. In ```App.js```,  find the ```createFooter``` method.  Change the links to what you want them to be. Additionally, you may choose to change the link icons by going to [font awesome](https://fontawesome.com/?from=io). Make sure to choose icons that are of the class ```fa-2x```, which will maintain the default formatting. 


### Advanced Customisation - most of this section will require familiarity with React.js

If you take a look at ```config.js``` there's extra data that isn't displayed on the front end. You may want to get a head start on displaying that data or add your own data, and this section will tell you what to watch for. 

> **Note:** that data isn't displayed because I don't believe right now it'll add much, if any, value.  


### Passing in extra data into the app

Data is passed into the app through ```config.js```. The main data is passed in through the ```config``` variable.  Other data such as acknowledgements, the project description, etc... are passed in as separate variables. If you want to pass in other generated data (such as project year), you should do that as a separate variable in ```config.js```. Then in ```index.js``` pass it into ```app.js``` as a prop. 


### Page control

uDocumentGenerator displays pages in a Grommet Box, and it uses variables and a page array to change pages. The variable that keep track of the open page is called ```openPage``` (SUPRISE!). It belongs to the state of ```App```, so updating its value updates the displayed page. ```changePage```  is used (and passed down) as a method called to change the page by updating ```openPage```. 

If you decide to add an extra page, make sure to add an entry to ```navItems``` in the ```NavbarBootstrap``` component. Make sure that the indices match those of ```this.pages``` in ```App.js``` to correctly handle page changing. 

If you decide to handle page changing with in a page, make sure to pass in ```changePage``` from ```App.js``` to that page. 


### "Multi-functional" page control

Just changing the page is pretty simple: pass in ```changePage``` as a prop. Changing a page and performing another task is a bit more challenging. 

The example we'll examine is the ```Card``` component defined in ```Card.js```.  A ```Card``` is meant to display a class's description and name on the landing page, and, when clicked, it's meant to navigate to the classes page and display the corresponding data on the classes page. All cards are also nested not only on the landing page but also in a ```CardList```. This means that ```changePage``` will have to be passed down from  like so: ```App -> Landing -> CardList -> Card```. In ```Card``` we'll also pass in the ```index``` parameter into ```changePage``` (we've also made sure that indices stay consistent). Since ```changePage```is bound to ```App``` , executing ```changePage``` in ```Card``` will work as expected. Also since  ```this.pages``` is assigned in the ```render``` method, allowing us to pass in the updated props to ```Classes``` every time the UI updates. 

The key takeaways from this are: 

 1. Make sure to correctly bind functions you're going to pass. 
 2. Make sure to pass a function deep enough to your desired component.
 3. Make sure to keep your indices aligned if you're using them to keep track of pages/data
 4. Make sure that you have a way of updating, visually, components that are meant to receive updated data.


### Updating components during runtime

In React, it's a good idea to make   changing data a state to update the UI. Yet, ```filteredFunctionData``` (the list of MethodBoxes) in ```ClassBox.js``` would update incorrectly. The number of MethodBoxes were correct, but the content was still the old content. This is likely due to React optimizations regarding replacing components of the same type (the old list of MethodBoxes gets replaced with a new list). To circumvent this, we have an intermediate step that replaces the list of MethodBoxes with a different type (in this case an empty list). This is implemented in ```Classes.js```:
```javascript
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
```
So whenever the ```displayIndex``` is updated, i.e, a new class needs to be displayed, ```Classes``` will replace the list of MethodBoxes in ```ClassBox``` with an empty list. This will cause ```ClassBox``` to update and call ```componentDidUpdate```, which ultimately sets the MethodBox to show correct data: 

```javascript
// update the values if Classes makes filteredFunctionData an empty list and the data was updated
if (this.state.filteredFunctionData.length === 0 && prevState.functionData !== this.state.functionData) {
	this.setState({filteredFunctionData: this.state.functionData});
}
```

**TLDR**: The key takeaway from this workaround is that, if you are building/extending a control that replaces data of one type with data of a the same type, you need to do something along the lines of: 

```
type a -> type b -> type a
```
> **Note:** text is an exception to this rule, so replacing "test" in ```<p> test </p>``` with ```<p> testing</p>``` can be directly done.


### Changing theme colours

Look for where css ```color``` and ```background-color``` tags are defined. I've kept the default theme consistent, so finding the hex codes using ```CTRL/CMD-F``` to change them should be simple.

 - App background colour is: #2a2a2a
 - App hover/clicked background colour: #476c9b
 - App colour: white
 - Social media hover colour: #2a2a2a
 - Social media hover background colour: white
 - Class splitter control hover background colour: #d5d5d5
 - Getting started link colour: #b3d7ff
 - Navbar colour: #984447
 - MethodBox background colour: #282a35

> **Note:** Look at the ClassBox variable table for its styling. I had to overwrite some styling there, so it's not consistent with the rest of the app. 

To change syntax highlighting styles, first decide which markdown renderer you want to customise. All of the renderers are in ```Markdown-Render```.  All code blocks are covered by ```highlight.js```, so look here for [themes](https://highlightjs.org/static/demo/). The code block theme is currently the Dracula theme, so if you change that, you'll probably want to change the MethodBox background colour too. All inline code are covered by ```react-syntax-highlighter``` prism [themes](https://github.com/conorhastings/react-syntax-highlighter/blob/master/AVAILABLE_STYLES_PRISM.MD). 


### A note about visual studio generated comment XML

Using ```///``` as your comment of choice in Visual Studio will generate XML tags such as ```<summary>```. These are removed by ```ProcessJSON.cleanFormatDescription``` so that the markdown generator can process markdown correctly. If you need these tags, just change this method. 

 
### Without  npm  installed

Without ```npm``` installed, you'll have to modify ```index.html``` in the build folder. 
> **Note:** without ```npm``` you don't need to worry about any folder besides the build folder

The best way to customise the app is to go through the strings you need to customise one by one. You'd want to first [format](https://www.freeformatter.com/html-formatter.html) ```index.html``` as it is currently minified. You'll have 5 strings to modify across 2 files. 

 1. Change the documentation title by replacing DOCUMENTATION TITLE in ``index.html`` with your title
 2. Change the logo by replacing ```./data/abstractlogo.png``` in ``index.html`` in to the file path of your logo. Since the React App is configured by default to use ```./``` as the root, use ```./``` as the start point for your file path, e.g, if your logo is in an images folder write ```./images/logo.png```. 
 3. Change the Github social link by first finding ```createElement("a",{href:"https://github.com/GreatArcStudios"},"``` in the a js  file that has a file name that starts with ```main```  under ```build -> static -> js```. Next, replace the link string with your Github link. 
 4. Change the Twitter social link by first finding ```createElement("a",{href:"https://twitter.com/GArcStudios"},"``` in the a js file that has a file name that starts with ```main```  under ```build -> static -> js```. Next, replace the link string with your Twitter link. 
 5. Change the email social link by first finding ```createElement("a",{href:"mailto:ericz2241@gmail.com"},"``` in the a js file that has a file name that starts with ```main```  under ```build -> static -> js```. Next, replace the link string with your email link. 
 
 
## Best practices 
<a name="bestpractices"/>

 - To write your acknowledgement, project description, and getting
   started files, I'd recommend using [stackedit.io](stackedit.io) as
   your markdown  editor.
 - To theme the React App, I'd recommend using [coolors.co](https://coolors.co/) to generate a bunch of colour themes. 
 - When writing descriptions in  markdown make sure to use ```\\n``` to indicate new lines. The description crawler does not use the new lines in ```C#``` files because it allows for you to better format your comments in code. For example, to indicate a list (ordered or not) make sure to do two new lines:  ```\\n\\n```. 
 - When creating new components, try to use ```styled-components```. Sometimes that difficult because libraries/components are already written with a separate stylesheet. In that case, writing a separate stylesheet is a great option
 - Components created from styled components will override those created from separate style sheets (including node modules). So when building your version of the app make sure to check for style issues. If there are discrepancies between the build and what you see from running it on the localhost, just add ```!important``` to that style. 
 - Declare your variables before your methods in your Unity project. If you don't do that, uDocumentGenerator won't record your variables.
 - For deployment, the current setup works for standalone/downloaded documentation. This is also the setup used with Github pages right now. Alternatively, you can check out the ```create react app``` [page](https://facebook.github.io/create-react-app/docs/deployment) for information about custom deployment.
