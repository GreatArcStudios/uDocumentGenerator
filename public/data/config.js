const config = {
	"folderPath": "C:/Users/ericz/Downloads/unitypausemenu-master/unitypausemenu-master/Pause Menu Assetstore/Assets/Pause Menu Assets/Scripts/Pausemenu",
	"fileTree": {
		"subDir": [{
			"subDir": [{
				"subDir": [{
					"subDir": [],
					"currentDirectory": "PauseManager.cs",
					"filePaths": ["\\PauseManager.cs"],
					"prevDirectory": "C:\\Users\\ericz\\Downloads\\unitypausemenu-master\\unitypausemenu-master\\Pause Menu Assetstore\\Assets\\Pause Menu Assets\\Scripts\\Pausemenu",
					"fileRepresentation": {
						"imports": ["System", "System.Collections", "System.Collections.Generic", "UnityEngine", "UnityEngine.UI", "UnityEngine.EventSystems", "System.IO"],
						"variables": {
							"public": [{
								"attributes": ["public", "GameObject"],
								"description": "<summary> This is the main panel holder, which holds the main panel and should be called \"main panel\" </summary> ",
								"accessMod": "public",
								"varName": "MainPanel",
								"dirtyType": "UnityEngine.GameObject",
								"cleanType": "GameObject"
							}, {
								"attributes": ["public", "GameObject"],
								"description": "<summary> This is the video panel holder, which holds all of the controls for the video panel and should be called \"vid panel\" </summary> ",
								"accessMod": "public",
								"varName": "VidPanel",
								"dirtyType": "UnityEngine.GameObject",
								"cleanType": "GameObject"
							}, {
								"attributes": ["public", "GameObject"],
								"description": "<summary> This is the audio panel holder, which holds all of the silders for the audio panel and should be called \"audio panel\" </summary> ",
								"accessMod": "public",
								"varName": "AudioPanel",
								"dirtyType": "UnityEngine.GameObject",
								"cleanType": "GameObject"
							}, {
								"attributes": ["public", "GameObject"],
								"description": "<summary> This is the credits panel holder, which holds all of the silders for the audio panel and should be called \"credits panel\" </summary> ",
								"accessMod": "public",
								"varName": "CreditsPanel",
								"dirtyType": "UnityEngine.GameObject",
								"cleanType": "GameObject"
							}, {
								"attributes": ["public", "GameObject"],
								"description": "<summary> These are the game objects with the title texts like \"Pause menu\" and \"Game Title\" </summary> ",
								"accessMod": "public",
								"varName": "TitleTexts",
								"dirtyType": "UnityEngine.GameObject",
								"cleanType": "GameObject"
							}, {
								"attributes": ["public", "GameObject"],
								"description": "<summary> The mask that makes the scene darker </summary> ",
								"accessMod": "public",
								"varName": "Mask",
								"dirtyType": "UnityEngine.GameObject",
								"cleanType": "GameObject"
							}, {
								"attributes": ["public", "Animator"],
								"description": "<summary> Audio Panel animator </summary> ",
								"accessMod": "public",
								"varName": "AudioPanelAnimator",
								"dirtyType": "UnityEngine.Animator",
								"cleanType": "Animator"
							}, {
								"attributes": ["public", "Animator"],
								"description": "<summary> Video Panel animator </summary> ",
								"accessMod": "public",
								"varName": "VidPanelAnimator",
								"dirtyType": "UnityEngine.Animator",
								"cleanType": "Animator"
							}, {
								"attributes": ["public", "Animator"],
								"description": "<summary> Quit Panel animator </summary> ",
								"accessMod": "public",
								"varName": "QuitPanelAnimator",
								"dirtyType": "UnityEngine.Animator",
								"cleanType": "Animator"
							}, {
								"attributes": ["public", "Animator"],
								"description": "<summary> Credits Panel animator </summary> ",
								"accessMod": "public",
								"varName": "CreditsPanelAnimator",
								"dirtyType": "UnityEngine.Animator",
								"cleanType": "Animator"
							}, {
								"attributes": ["public", "Text"],
								"description": "<summary> Pause menu text </summary> ",
								"accessMod": "public",
								"varName": "PauseMenu",
								"dirtyType": "UnityEngine.UI.Text",
								"cleanType": "Text"
							}, {
								"attributes": ["public", "String"],
								"description": "<summary> Main menu level string used for loading the main menu. This means you'll need to type in the editor text box, the name of the main menu level, ie: \"mainmenu\"; </summary> ",
								"accessMod": "public",
								"varName": "MainMenu",
								"dirtyType": "System.String",
								"cleanType": "String"
							}, {
								"attributes": ["public", "String"],
								"description": "DOF script name <summary> The Depth of Field script name, ie: \"DepthOfField\". You can leave this blank in the editor, but will throw a null refrence exception, which is harmless. </summary> ",
								"accessMod": "public",
								"varName": "DofScriptName",
								"dirtyType": "System.String",
								"cleanType": "String"
							}, {
								"attributes": ["public", "String"],
								"description": "<summary> The Ambient Occlusion script name, ie: \"AmbientOcclusion\". You can leave this blank in the editor, but will throw a null refrence exception, which is harmless. </summary> ",
								"accessMod": "public",
								"varName": "AoScriptName",
								"dirtyType": "System.String",
								"cleanType": "String"
							}, {
								"attributes": ["public", "Camera"],
								"description": "<summary> The main camera, assign this through the editor. </summary> ",
								"accessMod": "public",
								"varName": "MainCam",
								"dirtyType": "UnityEngine.Camera",
								"cleanType": "Camera"
							}, {
								"attributes": ["public", "GameObject"],
								"description": "<summary> The main camera game object, assign this through the editor. </summary> ",
								"accessMod": "public",
								"varName": "MainCamObj",
								"dirtyType": "UnityEngine.GameObject",
								"cleanType": "GameObject"
							}, {
								"attributes": ["public", "float"],
								"description": "<summary> The terrain detail density float. It's only public because you may want to adjust it in editor </summary> ",
								"accessMod": "public",
								"varName": "DetailDensity",
								"dirtyType": "System.Single",
								"cleanType": "float"
							}, {
								"attributes": ["public", "float"],
								"description": "<summary> Timescale value. The defualt is 1 for most games. You may want to change it if you are pausing the game in a slow motion situation </summary> ",
								"accessMod": "public",
								"varName": "TimeScale",
								"dirtyType": "System.Single",
								"cleanType": "float"
							}, {
								"attributes": ["public"],
								"description": "<summary> One terrain variable used if you have a terrain plugin like rtp. </summary> ",
								"accessMod": "public",
								"varName": "Terrain",
								"dirtyType": "UnityEngine.Terrain",
								"cleanType": "public"
							}, {
								"attributes": ["public", "Terrain"],
								"description": "<summary> Other terrain variable used if you want to have an option to target low end harware. </summary> ",
								"accessMod": "public",
								"varName": "SimpleTerrain",
								"dirtyType": "UnityEngine.Terrain",
								"cleanType": "Terrain"
							}, {
								"attributes": ["public", "Dropdown"],
								"description": "<summary> AA drop down menu. </summary> ",
								"accessMod": "public",
								"varName": "AaCombo",
								"dirtyType": "UnityEngine.UI.Dropdown",
								"cleanType": "Dropdown"
							}, {
								"attributes": ["public", "Dropdown"],
								"description": "<summary> Aniso drop down menu. </summary> ",
								"accessMod": "public",
								"varName": "AfCombo",
								"dirtyType": "UnityEngine.UI.Dropdown",
								"cleanType": "Dropdown"
							}, {
								"attributes": ["public", "Slider"],
								"description": "",
								"accessMod": "public",
								"varName": "FovSlider",
								"dirtyType": "UnityEngine.UI.Slider",
								"cleanType": "Slider"
							}, {
								"attributes": ["public", "Slider"],
								"description": "",
								"accessMod": "public",
								"varName": "ModelQualSlider",
								"dirtyType": "UnityEngine.UI.Slider",
								"cleanType": "Slider"
							}, {
								"attributes": ["public", "Slider"],
								"description": "",
								"accessMod": "public",
								"varName": "TerrainQualSlider",
								"dirtyType": "UnityEngine.UI.Slider",
								"cleanType": "Slider"
							}, {
								"attributes": ["public", "Slider"],
								"description": "",
								"accessMod": "public",
								"varName": "HighQualTreeSlider",
								"dirtyType": "UnityEngine.UI.Slider",
								"cleanType": "Slider"
							}, {
								"attributes": ["public", "Slider"],
								"description": "",
								"accessMod": "public",
								"varName": "RenderDistSlider",
								"dirtyType": "UnityEngine.UI.Slider",
								"cleanType": "Slider"
							}, {
								"attributes": ["public", "Slider"],
								"description": "",
								"accessMod": "public",
								"varName": "TerrainDensitySlider",
								"dirtyType": "UnityEngine.UI.Slider",
								"cleanType": "Slider"
							}, {
								"attributes": ["public", "Slider"],
								"description": "",
								"accessMod": "public",
								"varName": "ShadowDistSlider",
								"dirtyType": "UnityEngine.UI.Slider",
								"cleanType": "Slider"
							}, {
								"attributes": ["public", "Slider"],
								"description": "",
								"accessMod": "public",
								"varName": "AudioMasterSlider",
								"dirtyType": "UnityEngine.UI.Slider",
								"cleanType": "Slider"
							}, {
								"attributes": ["public", "Slider"],
								"description": "",
								"accessMod": "public",
								"varName": "AudioMusicSlider",
								"dirtyType": "UnityEngine.UI.Slider",
								"cleanType": "Slider"
							}, {
								"attributes": ["public", "Slider"],
								"description": "",
								"accessMod": "public",
								"varName": "AudioEffectsSlider",
								"dirtyType": "UnityEngine.UI.Slider",
								"cleanType": "Slider"
							}, {
								"attributes": ["public", "Slider"],
								"description": "",
								"accessMod": "public",
								"varName": "MasterTexSlider",
								"dirtyType": "UnityEngine.UI.Slider",
								"cleanType": "Slider"
							}, {
								"attributes": ["public", "Slider"],
								"description": "",
								"accessMod": "public",
								"varName": "ShadowCascadesSlider",
								"dirtyType": "UnityEngine.UI.Slider",
								"cleanType": "Slider"
							}, {
								"attributes": ["public", "Toggle"],
								"description": "",
								"accessMod": "public",
								"varName": "VSyncToggle",
								"dirtyType": "UnityEngine.UI.Toggle",
								"cleanType": "Toggle"
							}, {
								"attributes": ["public", "Toggle"],
								"description": "",
								"accessMod": "public",
								"varName": "AoToggle",
								"dirtyType": "UnityEngine.UI.Toggle",
								"cleanType": "Toggle"
							}, {
								"attributes": ["public", "Toggle"],
								"description": "",
								"accessMod": "public",
								"varName": "DofToggle",
								"dirtyType": "UnityEngine.UI.Toggle",
								"cleanType": "Toggle"
							}, {
								"attributes": ["public", "Toggle"],
								"description": "",
								"accessMod": "public",
								"varName": "FullscreenToggle",
								"dirtyType": "UnityEngine.UI.Toggle",
								"cleanType": "Toggle"
							}, {
								"attributes": ["public", "Text"],
								"description": "<summary> The preset text label. </summary> ",
								"accessMod": "public",
								"varName": "PresetLabel",
								"dirtyType": "UnityEngine.UI.Text",
								"cleanType": "Text"
							}, {
								"attributes": ["public", "Text"],
								"description": "<summary> Resolution text label. </summary> ",
								"accessMod": "public",
								"varName": "ResolutionLabel",
								"dirtyType": "UnityEngine.UI.Text",
								"cleanType": "Text"
							}, {
								"attributes": ["public", "float[]"],
								"description": "<summary> Lod bias float array. You should manually assign these based on the quality level. </summary> ",
								"accessMod": "public",
								"varName": "LodBias",
								"dirtyType": "System.Single[]",
								"cleanType": "float[]"
							}, {
								"attributes": ["internal", "static", "float"],
								"description": "<summary> Other terrain variable used if you want to have an option to target low end harware. </summary> ",
								"accessMod": "public",
								"varName": "ShadowDist",
								"dirtyType": "System.Single[]",
								"cleanType": "float"
							}, {
								"attributes": ["public", "Slider", "Audio"],
								"description": "",
								"accessMod": "public",
								"varName": "Music",
								"dirtyType": "UnityEngine.AudioSource[]",
								"cleanType": "Audio"
							}, {
								"attributes": ["public", "Slider", "Audio"],
								"description": "",
								"accessMod": "public",
								"varName": "Effects",
								"dirtyType": "UnityEngine.AudioSource[]",
								"cleanType": "Audio"
							}, {
								"attributes": ["public", "GameObject[]"],
								"description": "<summary> An array of the other UI elements, which is used for disabling the other elements when the game is paused. </summary> ",
								"accessMod": "public",
								"varName": "OtherUiElements",
								"dirtyType": "UnityEngine.GameObject[]",
								"cleanType": "GameObject[]"
							}, {
								"attributes": ["public", "Boolean"],
								"description": "<summary> Editor boolean for hardcoding certain video settings. It will allow you to use the values defined in LOD Bias and Shadow Distance </summary> ",
								"accessMod": "public",
								"varName": "HardCodeSomeVideoSettings",
								"dirtyType": "System.Boolean",
								"cleanType": "Boolean"
							}, {
								"attributes": ["public", "Boolean"],
								"description": "<summary> Boolean for turning on simple terrain </summary> ",
								"accessMod": "public",
								"varName": "UseSimpleTerrain",
								"dirtyType": "System.Boolean",
								"cleanType": "Boolean"
							}, {
								"attributes": ["public", "static", "Boolean"],
								"description": "",
								"accessMod": "public",
								"varName": "ReadUseSimpleTerrain",
								"dirtyType": "System.Boolean",
								"cleanType": "Boolean"
							}, {
								"attributes": ["public", "EventSystem"],
								"description": "<summary> Event system </summary> ",
								"accessMod": "public",
								"varName": "UiEventSystem",
								"dirtyType": "UnityEngine.EventSystems.EventSystem",
								"cleanType": "EventSystem"
							}, {
								"attributes": ["public", "GameObject"],
								"description": "<summary> Defualt selected on the video panel </summary> ",
								"accessMod": "public",
								"varName": "DefualtSelectedVideo",
								"dirtyType": "UnityEngine.GameObject",
								"cleanType": "GameObject"
							}, {
								"attributes": ["public", "GameObject"],
								"description": "<summary> Defualt selected on the video panel </summary> ",
								"accessMod": "public",
								"varName": "DefualtSelectedAudio",
								"dirtyType": "UnityEngine.GameObject",
								"cleanType": "GameObject"
							}, {
								"attributes": ["public", "GameObject"],
								"description": "<summary> Defualt selected on the video panel </summary> ",
								"accessMod": "public",
								"varName": "DefualtSelectedMain",
								"dirtyType": "UnityEngine.GameObject",
								"cleanType": "GameObject"
							}, {
								"attributes": ["public", "GameObject"],
								"description": "",
								"accessMod": "public",
								"varName": "DefualtSelectedCredits",
								"dirtyType": "UnityEngine.GameObject",
								"cleanType": "GameObject"
							}, {
								"attributes": ["public", "static", "Boolean"],
								"description": "",
								"accessMod": "public",
								"varName": "AoBool",
								"dirtyType": "System.Boolean",
								"cleanType": "Boolean"
							}, {
								"attributes": ["public", "static", "Boolean"],
								"description": "",
								"accessMod": "public",
								"varName": "DofBool",
								"dirtyType": "System.Boolean",
								"cleanType": "Boolean"
							}, {
								"attributes": ["public", "static", "Terrain"],
								"description": "",
								"accessMod": "public",
								"varName": "ReadTerrain",
								"dirtyType": "UnityEngine.Terrain",
								"cleanType": "Terrain"
							}, {
								"attributes": ["public", "static", "Terrain"],
								"description": "",
								"accessMod": "public",
								"varName": "ReadSimpleTerrain",
								"dirtyType": "UnityEngine.Terrain",
								"cleanType": "Terrain"
							}],
							"default": [{
								"attributes": ["internal", "static", "Camera"],
								"description": "",
								"accessMod": "default",
								"varName": "MainCamShared",
								"dirtyType": "UnityEngine.Camera",
								"cleanType": "Camera"
							}, {
								"attributes": ["internal", "static", "float"],
								"description": "<summary> Inital shadow distance </summary> ",
								"accessMod": "default",
								"varName": "ShadowDistIni",
								"dirtyType": "System.Single",
								"cleanType": "float"
							}, {
								"attributes": ["internal", "static", "float"],
								"description": "<summary> Inital render distance </summary> ",
								"accessMod": "default",
								"varName": "RenderDistIni",
								"dirtyType": "System.Single",
								"cleanType": "float"
							}, {
								"attributes": ["internal", "static", "float"],
								"description": "<summary> Inital AA quality 2, 4, or 8 </summary> ",
								"accessMod": "default",
								"varName": "AaQualIni",
								"dirtyType": "System.Single",
								"cleanType": "float"
							}, {
								"attributes": ["internal", "static", "float"],
								"description": "<summary> Inital terrain detail density </summary> ",
								"accessMod": "default",
								"varName": "DensityIni",
								"dirtyType": "System.Single",
								"cleanType": "float"
							}, {
								"attributes": ["internal", "static", "float"],
								"description": "<summary> Amount of trees that are acutal meshes </summary> ",
								"accessMod": "default",
								"varName": "TreeMeshAmtIni",
								"dirtyType": "System.Single",
								"cleanType": "float"
							}, {
								"attributes": ["internal", "static", "float"],
								"description": "<summary> Inital fov </summary> ",
								"accessMod": "default",
								"varName": "FovIni",
								"dirtyType": "System.Single",
								"cleanType": "float"
							}, {
								"attributes": ["internal", "static", "int"],
								"description": "<summary> Inital msaa amount </summary> ",
								"accessMod": "default",
								"varName": "MsaaIni",
								"dirtyType": "System.Int32",
								"cleanType": "int"
							}, {
								"attributes": ["internal", "static", "int"],
								"description": "<summary> Inital vsync count, the Unity docs say, <code> //This will set the game to have one VSync per frame QualitySettings.vSyncCount = 1; </code> <code> //This will disable vsync QualitySettings.vSyncCount = 0; </code> </summary> ",
								"accessMod": "default",
								"varName": "VsyncIni",
								"dirtyType": "System.Int32",
								"cleanType": "int"
							}, {
								"attributes": ["internal", "static", "float"],
								"description": "last music multiplier; this should be a value between 0-1 ",
								"accessMod": "default",
								"varName": "LastMusicMult",
								"dirtyType": "System.Single",
								"cleanType": "float"
							}, {
								"attributes": ["internal", "static", "float"],
								"description": "last audio multiplier; this should be a value between 0-1 ",
								"accessMod": "default",
								"varName": "LastAudioMult",
								"dirtyType": "System.Single",
								"cleanType": "float"
							}, {
								"attributes": ["internal", "static", "float"],
								"description": "Initial master volume ",
								"accessMod": "default",
								"varName": "BeforeMaster",
								"dirtyType": "System.Single",
								"cleanType": "float"
							}, {
								"attributes": ["internal", "static", "int"],
								"description": "last texture limit ",
								"accessMod": "default",
								"varName": "LastTexLimit",
								"dirtyType": "System.Int32",
								"cleanType": "int"
							}, {
								"attributes": ["internal", "static", "Resolution"],
								"description": "current resoultion ",
								"accessMod": "default",
								"varName": "CurrentRes",
								"dirtyType": "UnityEngine.Resolution",
								"cleanType": "Resolution"
							}, {
								"attributes": ["internal", "static", "int"],
								"description": "last shadow cascade value ",
								"accessMod": "default",
								"varName": "LastShadowCascade",
								"dirtyType": "System.Int32",
								"cleanType": "int"
							}],
							"private": [{
								"attributes": ["private", "int"],
								"description": "int for amount of effects ",
								"accessMod": "private",
								"varName": "_audioEffectAmt",
								"dirtyType": "System.Int32",
								"cleanType": "int"
							}, {
								"attributes": ["private", "float[]"],
								"description": "Inital audio effect volumes ",
								"accessMod": "private",
								"varName": "_beforeEffectVol",
								"dirtyType": "System.Single[]",
								"cleanType": "float[]"
							}, {
								"attributes": ["private", "float"],
								"description": "Initial music volume ",
								"accessMod": "private",
								"varName": "_beforeMusic",
								"dirtyType": "System.Single",
								"cleanType": "float"
							}, {
								"attributes": ["private", "int"],
								"description": "Preset level ",
								"accessMod": "private",
								"varName": "_currentLevel",
								"dirtyType": "System.Int32",
								"cleanType": "int"
							}, {
								"attributes": ["private", "Resolution[]"],
								"description": "Resoutions ",
								"accessMod": "private",
								"varName": "_allRes",
								"dirtyType": "UnityEngine.Resolution[]",
								"cleanType": "Resolution[]"
							}, {
								"attributes": ["private", "MonoBehaviour"],
								"description": "Camera dof script ",
								"accessMod": "private",
								"varName": "_tempScript",
								"dirtyType": "UnityEngine.MonoBehaviour",
								"cleanType": "MonoBehaviour"
							}, {
								"attributes": ["private", "String[]"],
								"description": "Presets ",
								"accessMod": "private",
								"varName": "_presets",
								"dirtyType": "System.String[]",
								"cleanType": "String[]"
							}, {
								"attributes": ["private", "Boolean"],
								"description": "Fullscreen Boolean ",
								"accessMod": "private",
								"varName": "_isFullscreen",
								"dirtyType": "System.Boolean",
								"cleanType": "Boolean"
							}, {
								"attributes": ["private", "Resolution"],
								"description": "Last resoultion ",
								"accessMod": "private",
								"varName": "_beforeRes",
								"dirtyType": "UnityEngine.Resolution",
								"cleanType": "Resolution"
							}, {
								"attributes": ["private", "Boolean"],
								"description": "",
								"accessMod": "private",
								"varName": "_lastAoBool",
								"dirtyType": "System.Boolean",
								"cleanType": "Boolean"
							}, {
								"attributes": ["private", "Boolean"],
								"description": "",
								"accessMod": "private",
								"varName": "_lastDofBool",
								"dirtyType": "System.Boolean",
								"cleanType": "Boolean"
							}, {
								"attributes": ["private", "SaveSettings"],
								"description": "",
								"accessMod": "private",
								"varName": "_saveSettings",
								"dirtyType": "GreatArcStudios.SaveSettings",
								"cleanType": "SaveSettings"
							}, {
								"attributes": ["private", "static", "readonly", " Dictionary<int, int>"],
								"description": "",
								"accessMod": "private",
								"varName": "AaDict",
								"dirtyType": "System.Collections.Generic.Dictionary`2[System.Int32,System.Int32]",
								"cleanType": " Dictionary<int, int>"
							}]
						},
						"inheritance": [" MonoBehaviour"],
						"accessModifier": "public",
						"className": "PauseManager",
						"description": "using UnityStandardAssets.ImageEffects; <summary>  Copyright (c) 2016 Eric Zhu </summary> <summary> The pause menu manager. You can extend this to make your own. Everything is pretty modular, so creating you own based off of this should be easy. Thanks for downloading and good luck! </summary>",
						"filePath": "C:\\Users\\ericz\\Downloads\\unitypausemenu-master\\unitypausemenu-master\\Pause Menu Assetstore\\Assets\\Pause Menu Assets\\Scripts\\Pausemenu\\PauseManager.cs",
						"nameSpace": "GreatArcStudios",
						"declaration": "public class PauseManager : MonoBehaviour",
						"functions": {
							"private": [{
								"dirtyParamList": [],
								"cleanParamList": [],
								"modifiers": [],
								"description": "",
								"accessModifier": "private",
								"functionName": "get_CurrentTerrain"
							}, {
								"dirtyParamList": [{"Item1": "index", "Item2": "System.Int32", "Item3": null}],
								"cleanParamList": [{"Item1": "int index", "Item2": null}],
								"modifiers": [],
								"description": "",
								"accessModifier": "private",
								"functionName": "ChangeRes"
							}, {
								"dirtyParamList": [],
								"cleanParamList": [],
								"modifiers": [],
								"description": "",
								"accessModifier": "private",
								"functionName": "FromPreset"
							}],
							"public": [{
								"dirtyParamList": [],
								"cleanParamList": [],
								"modifiers": [],
								"description": "/ Blur Variables Blur Effect Script (using the standard image effects package)  public Blur blurEffect; Blur Effect Shader (should be the one that came with the package) public Shader blurEffectShader; Boolean for if the blur effect was originally enabled public Boolean blurBool; <summary> The start method; you will need to place all of your inital value getting/setting here.  </summary> ",
								"accessModifier": "public",
								"functionName": "Start"
							}, {
								"dirtyParamList": [],
								"cleanParamList": [],
								"modifiers": [],
								"description": "<summary> Restart the level by loading the loaded level. </summary> ",
								"accessModifier": "public",
								"functionName": "Restart"
							}, {
								"dirtyParamList": [],
								"cleanParamList": [],
								"modifiers": [],
								"description": "<summary> Method to resume the game, so disable the pause menu and re-enable all other ui elements </summary> ",
								"accessModifier": "public",
								"functionName": "Resume"
							}, {
								"dirtyParamList": [],
								"cleanParamList": [],
								"modifiers": [],
								"description": "<summary> All the methods relating to qutting should be called here. </summary> ",
								"accessModifier": "public",
								"functionName": "QuitOptions"
							}, {
								"dirtyParamList": [],
								"cleanParamList": [],
								"modifiers": [],
								"description": "<summary> Method to quit the game. Call methods such as auto saving before qutting here. </summary> ",
								"accessModifier": "public",
								"functionName": "QuitGame"
							}, {
								"dirtyParamList": [],
								"cleanParamList": [],
								"modifiers": [],
								"description": "<summary> Cancels quittting by playing an animation. </summary> ",
								"accessModifier": "public",
								"functionName": "QuitCancel"
							}, {
								"dirtyParamList": [],
								"cleanParamList": [],
								"modifiers": [],
								"description": "<summary> Loads the main menu scene. </summary> ",
								"accessModifier": "public",
								"functionName": "ReturnToMenu"
							}, {
								"dirtyParamList": [],
								"cleanParamList": [],
								"modifiers": [],
								"description": "Update is called once per frame <summary> The update method. This mainly searches for the user pressing the escape key. </summary> ",
								"accessModifier": "public",
								"functionName": "Update"
							}, {
								"dirtyParamList": [],
								"cleanParamList": [],
								"modifiers": [],
								"description": "",
								"accessModifier": "public",
								"functionName": "Audio"
							}, {
								"dirtyParamList": [],
								"cleanParamList": [],
								"modifiers": [],
								"description": "<summary> Play the \"audio panel in\" animation. </summary> ",
								"accessModifier": "public",
								"functionName": "AudioIn"
							}, {
								"dirtyParamList": [{"Item1": "f", "Item2": "System.Single", "Item3": null}],
								"cleanParamList": [{"Item1": "float f", "Item2": null}],
								"modifiers": [],
								"description": "<summary> Audio Option Methods </summary> <param name=\"f\"></param> ",
								"accessModifier": "public",
								"functionName": "UpdateMasterVol"
							}, {
								"dirtyParamList": [{"Item1": "f", "Item2": "System.Single", "Item3": null}],
								"cleanParamList": [{"Item1": "float f", "Item2": null}],
								"modifiers": [],
								"description": "<summary> Update music effects volume </summary> <param name=\"f\"></param> ",
								"accessModifier": "public",
								"functionName": "UpdateMusicVol"
							}, {
								"dirtyParamList": [{"Item1": "f", "Item2": "System.Single", "Item3": null}],
								"cleanParamList": [{"Item1": "float f", "Item2": null}],
								"modifiers": [],
								"description": "<summary> Update the audio effects volume </summary> <param name=\"f\"></param> ",
								"accessModifier": "public",
								"functionName": "UpdateEffectsVol"
							}, {
								"dirtyParamList": [],
								"cleanParamList": [],
								"modifiers": [],
								"description": "<summary>  The method for changing the applying new audio settings </summary> ",
								"accessModifier": "public",
								"functionName": "ApplyAudio"
							}, {
								"dirtyParamList": [],
								"cleanParamList": [],
								"modifiers": [],
								"description": "<summary> Cancel the audio setting changes </summary> ",
								"accessModifier": "public",
								"functionName": "CancelAudio"
							}, {
								"dirtyParamList": [],
								"cleanParamList": [],
								"modifiers": [],
								"description": "//Video Options <summary> Show video </summary> ",
								"accessModifier": "public",
								"functionName": "Video"
							}, {
								"dirtyParamList": [],
								"cleanParamList": [],
								"modifiers": [],
								"description": "<summary> Play the \"video panel in\" animation </summary> ",
								"accessModifier": "public",
								"functionName": "VideoIn"
							}, {
								"dirtyParamList": [],
								"cleanParamList": [],
								"modifiers": [],
								"description": "<summary> Cancel the video setting changes  </summary> ",
								"accessModifier": "public",
								"functionName": "CancelVideo"
							}, {
								"dirtyParamList": [],
								"cleanParamList": [],
								"modifiers": [],
								"description": "<summary>  The method for changing the applying new audio settings </summary> ",
								"accessModifier": "public",
								"functionName": "Apply"
							}, {
								"dirtyParamList": [{"Item1": "b", "Item2": "System.Boolean", "Item3": null}],
								"cleanParamList": [{"Item1": "bool b", "Item2": null}],
								"modifiers": [],
								"description": "",
								"accessModifier": "public",
								"functionName": "TurnOnVSync"
							}, {
								"dirtyParamList": [{"Item1": "f", "Item2": "System.Int32", "Item3": null}],
								"cleanParamList": [{"Item1": "int f", "Item2": null}],
								"modifiers": [],
								"description": "<summary> Update full high quality tree mesh amount. </summary> <param name=\"f\"></param> ",
								"accessModifier": "public",
								"functionName": "UpdateTreeMeshAmt"
							}, {
								"dirtyParamList": [{"Item1": "loDBias", "Item2": "System.Single", "Item3": null}],
								"cleanParamList": [{"Item1": "float loDBias", "Item2": null}],
								"modifiers": [],
								"description": "<summary> Change the lod bias using <c> QualitySettings.lodBias = LoDBias / 2.15f; </c>  LoDBias is only divided by 2.15 because the max is set to 10 on the slider, and dividing by 2.15 results in 4.65, our desired max. However, deleting or changing 2.15 is compeletly fine. </summary> <param name=\"loDBias\"></param> ",
								"accessModifier": "public",
								"functionName": "SetLodBias"
							}, {
								"dirtyParamList": [{"Item1": "f", "Item2": "System.Single", "Item3": null}],
								"cleanParamList": [{"Item1": "float f", "Item2": null}],
								"modifiers": [],
								"description": "<summary> Update the render distance using  <c> mainCam.farClipPlane = f; </c> </summary> <param name=\"f\"></param> ",
								"accessModifier": "public",
								"functionName": "UpdateRenderDist"
							}, {
								"dirtyParamList": [{"Item1": "qual", "Item2": "System.Single", "Item3": null}],
								"cleanParamList": [{"Item1": "float qual", "Item2": null}],
								"modifiers": [],
								"description": "<summary> Update the texture quality using   <c>QualitySettings.masterTextureLimit </c> </summary> <param name=\"qual\"></param> ",
								"accessModifier": "public",
								"functionName": "UpdateTex"
							}, {
								"dirtyParamList": [{"Item1": "dist", "Item2": "System.Single", "Item3": null}],
								"cleanParamList": [{"Item1": "float dist", "Item2": null}],
								"modifiers": [],
								"description": "<summary> Update the shadow distance using  <c> QualitySettings.shadowDistance = dist; </c> </summary> <param name=\"dist\"></param> ",
								"accessModifier": "public",
								"functionName": "UpdateShadowDistance"
							}, {
								"dirtyParamList": [{"Item1": "qual", "Item2": "System.Single", "Item3": null}],
								"cleanParamList": [{"Item1": "float qual", "Item2": null}],
								"modifiers": [],
								"description": "<summary> Change the max amount of high quality trees using  <c> terrain.treeMaximumFullLODCount = (int)qual; </c> </summary> <param name=\"qual\"></param> ",
								"accessModifier": "public",
								"functionName": "TreeMaxLod"
							}, {
								"dirtyParamList": [{"Item1": "qual", "Item2": "System.Single", "Item3": null}],
								"cleanParamList": [{"Item1": "float qual", "Item2": null}],
								"modifiers": [],
								"description": "<summary> Change the height map max LOD using  <c> terrain.heightmapMaximumLOD = (int)qual; </c> </summary> <param name=\"qual\"></param> ",
								"accessModifier": "public",
								"functionName": "UpdateTerrainLod"
							}, {
								"dirtyParamList": [{"Item1": "fov", "Item2": "System.Single", "Item3": null}],
								"cleanParamList": [{"Item1": "float fov", "Item2": null}],
								"modifiers": [],
								"description": "<summary> Change the fov using a float. The defualt should be 60. </summary> <param name=\"fov\"></param> ",
								"accessModifier": "public",
								"functionName": "UpdateFov"
							}, {
								"dirtyParamList": [{"Item1": "b", "Item2": "System.Boolean", "Item3": null}],
								"cleanParamList": [{"Item1": "bool b", "Item2": null}],
								"modifiers": [],
								"description": "<summary> Toggle on or off Depth of Field. This is meant to be used with a checkbox. </summary> <param name=\"b\"></param> ",
								"accessModifier": "public",
								"functionName": "ToggleDof"
							}, {
								"dirtyParamList": [{"Item1": "b", "Item2": "System.Boolean", "Item3": null}],
								"cleanParamList": [{"Item1": "bool b", "Item2": null}],
								"modifiers": [],
								"description": "<summary> Toggle on or off Ambient Occulusion. This is meant to be used with a checkbox. </summary> <param name=\"b\"></param> ",
								"accessModifier": "public",
								"functionName": "ToggleAo"
							}, {
								"dirtyParamList": [{"Item1": "b", "Item2": "System.Boolean", "Item3": null}],
								"cleanParamList": [],
								"modifiers": [],
								"description": "",
								"accessModifier": "public",
								"functionName": "SetFullScreen"
							}, {
								"dirtyParamList": [],
								"cleanParamList": [],
								"modifiers": [],
								"description": "<summary> Method for moving to the next resoution in the allRes array. WARNING: This is not finished/buggy.   </summary> Method for moving to the next resoution in the allRes array. WARNING: This is not finished/buggy.   ",
								"accessModifier": "public",
								"functionName": "NextRes"
							}, {
								"dirtyParamList": [],
								"cleanParamList": [],
								"modifiers": [],
								"description": "<summary> Method for moving to the last resoution in the allRes array. WARNING: This is not finished/buggy.   </summary> Method for moving to the last resoution in the allRes array. WARNING: This is not finished/buggy.   ",
								"accessModifier": "public",
								"functionName": "LastRes"
							}, {
								"dirtyParamList": [{"Item1": "b", "Item2": "System.Boolean", "Item3": null}],
								"cleanParamList": [{"Item1": "Boolean b", "Item2": null}],
								"modifiers": [],
								"description": "",
								"accessModifier": "public",
								"functionName": "EnableSimpleTerrain"
							}, {
								"dirtyParamList": [{"Item1": "anisoSetting", "Item2": "System.Int32", "Item3": null}],
								"cleanParamList": [{"Item1": "int anisoSetting", "Item2": null}],
								"modifiers": [],
								"description": "<summary> The method for changing aniso settings </summary> <param name=\"anisoSetting\"></param> ",
								"accessModifier": "public",
								"functionName": "UpdateAniso"
							}, {
								"dirtyParamList": [{"Item1": "cascades", "Item2": "System.Single", "Item3": null}],
								"cleanParamList": [{"Item1": "float cascades", "Item2": null}],
								"modifiers": [],
								"description": "<summary> The method for setting the amount of shadow cascades </summary> <param name=\"cascades\"></param> ",
								"accessModifier": "public",
								"functionName": "UpdateCascades"
							}, {
								"dirtyParamList": [{"Item1": "density", "Item2": "System.Single", "Item3": null}],
								"cleanParamList": [{"Item1": "float density", "Item2": null}],
								"modifiers": [],
								"description": "<summary> Update terrain density </summary> <param name=\"density\"></param> ",
								"accessModifier": "public",
								"functionName": "UpdateDensity"
							}, {
								"dirtyParamList": [{"Item1": "level", "Item2": "System.Int32", "Item3": null}],
								"cleanParamList": [{"Item1": "int level", "Item2": null}],
								"modifiers": [],
								"description": "<summary> Sets the MSAA to a specific level (between 0 and 4) </summary> <param name=\"level\"> 0 -> 0x MSAA (disabled).  1 -> 2x MSAA. 2 -> 4x MSAA. 3 -> 8x MSAA. Left shift works too by getting the log2 of the desired level.  <c> QualitySettings.antiAliasing = level == 0 ? 0 : 1 *left shift operator* level ; </c> </param> ",
								"accessModifier": "public",
								"functionName": "SetMsaaLevel"
							}, {
								"dirtyParamList": [],
								"cleanParamList": [],
								"modifiers": [],
								"description": "<summary> Set the quality level one level higher. This is done by getting the current quality level, then using  <c>  QualitySettings.IncreaseLevel(); </c> to increase the level. The current level variable is set to the new quality setting, and the label is updated. </summary> ",
								"accessModifier": "public",
								"functionName": "NextPreset"
							}, {
								"dirtyParamList": [],
								"cleanParamList": [],
								"modifiers": [],
								"description": "<summary> Set the quality level one level lower. This is done by getting the current quality level, then using  <c>  QualitySettings.DecreaseLevel(); </c> to decrease the level. The current level variable is set to the new quality setting, and the label is updated. </summary> ",
								"accessModifier": "public",
								"functionName": "LastPreset"
							}, {
								"dirtyParamList": [{"Item1": "preset", "Item2": "System.Int32", "Item3": null}],
								"cleanParamList": [{"Item1": "int preset", "Item2": null}],
								"modifiers": [],
								"description": "<summary> Sets the Graphic to a Preset (from very low to extreme) (note: UI buttons in the inspector can carry a parameter, so you wont need 7 methods) </summary> ",
								"accessModifier": "public",
								"functionName": "SetGraphicsPreset"
							}, {
								"dirtyParamList": [],
								"cleanParamList": [],
								"modifiers": [],
								"description": "<summary> Return to the main menu from the credits panel </summary> ",
								"accessModifier": "public",
								"functionName": "CreditsReturn"
							}, {
								"dirtyParamList": [],
								"cleanParamList": [],
								"modifiers": [],
								"description": "",
								"accessModifier": "public",
								"functionName": "CreditsIn"
							}],
							"internal": [{
								"dirtyParamList": [],
								"cleanParamList": [],
								"modifiers": [],
								"description": "<summary> Use an IEnumerator to first play the animation and then change the audio settings </summary> <returns></returns> ",
								"accessModifier": "internal",
								"functionName": "ApplyAudioMain"
							}, {
								"dirtyParamList": [],
								"cleanParamList": [],
								"modifiers": [],
								"description": "<summary> Use an IEnumerator to first play the animation and then change the audio settings </summary> <returns></returns> ",
								"accessModifier": "internal",
								"functionName": "CancelAudioMain"
							}, {
								"dirtyParamList": [],
								"cleanParamList": [],
								"modifiers": [],
								"description": "<summary> Use an IEnumerator to first play the animation and then changethe video settings </summary> <returns></returns> ",
								"accessModifier": "internal",
								"functionName": "CancelVideoMain"
							}, {
								"dirtyParamList": [],
								"cleanParamList": [],
								"modifiers": [],
								"description": "<summary> Use an IEnumerator to first play the animation and then change the video settings. </summary> <returns></returns> ",
								"accessModifier": "internal",
								"functionName": "ApplyVideo"
							}, {
								"dirtyParamList": [],
								"cleanParamList": [],
								"modifiers": [],
								"description": "<summary> Use an IEnumerator to first play the animation and then hide other panels settings </summary> <returns></returns> ",
								"accessModifier": "internal",
								"functionName": "CreditsReturnMain"
							}]
						}
					}
				}, {
					"subDir": [],
					"currentDirectory": "SaveSettings.cs",
					"filePaths": ["\\SaveSettings.cs"],
					"prevDirectory": "C:\\Users\\ericz\\Downloads\\unitypausemenu-master\\unitypausemenu-master\\Pause Menu Assetstore\\Assets\\Pause Menu Assets\\Scripts\\Pausemenu",
					"fileRepresentation": {
						"imports": ["System", "System.IO", "UnityEngine"],
						"variables": {
							"public": [{
								"attributes": ["public", "string"],
								"description": "<summary> Change the file name if something else floats your boat </summary> ",
								"accessMod": "public",
								"varName": "FileName",
								"dirtyType": "System.String",
								"cleanType": "string"
							}, {
								"attributes": ["public", "float"],
								"description": "<summary> Music volume </summary> ",
								"accessMod": "public",
								"varName": "MusicVolume",
								"dirtyType": "System.Single",
								"cleanType": "float"
							}, {
								"attributes": ["public", "float"],
								"description": "<summary> Effects volume </summary> ",
								"accessMod": "public",
								"varName": "EffectsVolume",
								"dirtyType": "System.Single",
								"cleanType": "float"
							}, {
								"attributes": ["public", "float"],
								"description": "<summary> Master volume </summary> ",
								"accessMod": "public",
								"varName": "MasterVolume",
								"dirtyType": "System.Single",
								"cleanType": "float"
							}, {
								"attributes": ["public", "float"],
								"description": "<summary> Shadow Distance </summary> ",
								"accessMod": "public",
								"varName": "ShadowDistIni",
								"dirtyType": "System.Single",
								"cleanType": "float"
							}, {
								"attributes": ["public", "float"],
								"description": "<summary> Render distance </summary> ",
								"accessMod": "public",
								"varName": "RenderDistIni",
								"dirtyType": "System.Single",
								"cleanType": "float"
							}, {
								"attributes": ["public", "float"],
								"description": "<summary> MSAA quality </summary> ",
								"accessMod": "public",
								"varName": "AaQualIni",
								"dirtyType": "System.Single",
								"cleanType": "float"
							}, {
								"attributes": ["public", "float"],
								"description": "<summary> Density </summary> ",
								"accessMod": "public",
								"varName": "DensityIni",
								"dirtyType": "System.Single",
								"cleanType": "float"
							}, {
								"attributes": ["public", "float"],
								"description": "<summary> Terrain trees rendered as meshes amount </summary> ",
								"accessMod": "public",
								"varName": "TreeMeshAmtIni",
								"dirtyType": "System.Single",
								"cleanType": "float"
							}, {
								"attributes": ["public", "float"],
								"description": "<summary> Camera FOV </summary> ",
								"accessMod": "public",
								"varName": "FovIni",
								"dirtyType": "System.Single",
								"cleanType": "float"
							}, {
								"attributes": ["public", "float"],
								"description": "<summary> Terrain heightmap quality </summary> ",
								"accessMod": "public",
								"varName": "TerrainHeightMapLod",
								"dirtyType": "System.Single",
								"cleanType": "float"
							}, {
								"attributes": ["public", "int"],
								"description": "",
								"accessMod": "public",
								"varName": "MsaaIni",
								"dirtyType": "System.Int32",
								"cleanType": "int"
							}, {
								"attributes": ["public", "int"],
								"description": "<summary> VSync settings </summary> ",
								"accessMod": "public",
								"varName": "VsyncIni",
								"dirtyType": "System.Int32",
								"cleanType": "int"
							}, {
								"attributes": ["public", "int"],
								"description": "<summary> Texture quality </summary> ",
								"accessMod": "public",
								"varName": "TextureLimit",
								"dirtyType": "System.Int32",
								"cleanType": "int"
							}, {
								"attributes": ["public", "int"],
								"description": "<summary> Quality preset </summary> ",
								"accessMod": "public",
								"varName": "CurQualityLevel",
								"dirtyType": "System.Int32",
								"cleanType": "int"
							}, {
								"attributes": ["public", "int"],
								"description": "<summary> Shadwo Cascade </summary> ",
								"accessMod": "public",
								"varName": "LastShadowCascade",
								"dirtyType": "System.Int32",
								"cleanType": "int"
							}, {
								"attributes": ["public", "int"],
								"description": "<summary> Aniso texture level </summary> ",
								"accessMod": "public",
								"varName": "AnisoLevel",
								"dirtyType": "System.Int32",
								"cleanType": "int"
							}, {
								"attributes": ["public", "bool"],
								"description": "<summary> AO on or off </summary> ",
								"accessMod": "public",
								"varName": "AoBool",
								"dirtyType": "System.Boolean",
								"cleanType": "bool"
							}, {
								"attributes": ["public", "bool"],
								"description": "<summary> DOF on or off </summary> ",
								"accessMod": "public",
								"varName": "DofBool",
								"dirtyType": "System.Boolean",
								"cleanType": "bool"
							}, {
								"attributes": ["public", "bool"],
								"description": "<summary> Use simple terrain or high quality terrain ie: RTP. </summary> ",
								"accessMod": "public",
								"varName": "UseSimpleTerrain",
								"dirtyType": "System.Boolean",
								"cleanType": "bool"
							}, {
								"attributes": ["public", "bool"],
								"description": "<summary> Is the game in fullscreen </summary> ",
								"accessMod": "public",
								"varName": "FullscreenBool",
								"dirtyType": "System.Boolean",
								"cleanType": "bool"
							}, {
								"attributes": ["public", "int"],
								"description": "<summary> Resolution heigh </summary> ",
								"accessMod": "public",
								"varName": "ResHeight",
								"dirtyType": "System.Int32",
								"cleanType": "int"
							}, {
								"attributes": ["public", "int"],
								"description": "<summary> Resolution Width </summary> ",
								"accessMod": "public",
								"varName": "ResWidth",
								"dirtyType": "System.Int32",
								"cleanType": "int"
							}]
						},
						"inheritance": ["NO INHERITANCE"],
						"accessModifier": "public",
						"className": "SaveSettings",
						"description": " <summary>  Copyright (c) 2016 Eric Zhu </summary>",
						"filePath": "C:\\Users\\ericz\\Downloads\\unitypausemenu-master\\unitypausemenu-master\\Pause Menu Assetstore\\Assets\\Pause Menu Assets\\Scripts\\Pausemenu\\SaveSettings.cs",
						"nameSpace": "GreatArcStudios",
						"declaration": "public class SaveSettings",
						"functions": {
							"public": [{
								"dirtyParamList": [],
								"cleanParamList": [],
								"modifiers": [],
								"description": "<summary> Read the game settings from the file </summary> ",
								"accessModifier": "public",
								"functionName": "LoadGameSettings"
							}, {
								"dirtyParamList": [],
								"cleanParamList": [],
								"modifiers": [],
								"description": "<summary> Get the quality/music settings before saving  </summary> ",
								"accessModifier": "public",
								"functionName": "SaveGameSettings"
							}]
						}
					}
				}],
				"currentDirectory": "Pausemenu",
				"filePaths": ["\\Pausemenu\\PauseManager.cs"],
				"prevDirectory": "C:\\Users\\ericz\\Downloads\\unitypausemenu-master\\unitypausemenu-master\\Pause Menu Assetstore\\Assets\\Pause Menu Assets\\Scripts",
				"fileRepresentation": null
			}],
			"currentDirectory": "Scripts",
			"filePaths": ["\\Scripts\\Pausemenu\\PauseManager.cs"],
			"prevDirectory": "C:\\Users\\ericz\\Downloads\\unitypausemenu-master\\unitypausemenu-master\\Pause Menu Assetstore\\Assets\\Pause Menu Assets",
			"fileRepresentation": null
		}],
		"currentDirectory": "Pause Menu Assets",
		"filePaths": ["\\Pause Menu Assets\\Scripts\\Pausemenu\\PauseManager.cs", "\\Pause Menu Assets\\Scripts\\Pausemenu\\SaveSettings.cs"],
		"prevDirectory": "C:\\Users\\ericz\\Downloads\\unitypausemenu-master\\unitypausemenu-master\\Pause Menu Assetstore\\Assets",
		"fileRepresentation": null
	},
	"fileList": ["\\Pause Menu Assets\\Scripts\\Pausemenu\\PauseManager.cs", "\\Pause Menu Assets\\Scripts\\Pausemenu\\SaveSettings.cs"],
	"directoryExclusionsList": ["\\Tests"]
};
const acknowledgements = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque felis imperdiet proin fermentum leo. Enim ut sem viverra aliquet. Ac odio tempor orci dapibus ultrices. In nulla posuere sollicitudin aliquam. Ultrices dui sapien eget mi. Euismod in pellentesque massa placerat duis ultricies. Est ultricies integer quis auctor. Non nisi est sit amet. Congue eu consequat ac felis donec et odio pellentesque. Scelerisque felis imperdiet proin fermentum. Nec dui nunc mattis enim ut. Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Mauris vitae ultricies leo integer malesuada nunc. Lectus magna fringilla urna porttitor rhoncus dolor purus non. At tellus at urna condimentum mattis.";
const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque felis imperdiet proin fermentum leo. Enim ut sem viverra aliquet. Ac odio tempor orci dapibus ultrices. In nulla posuere sollicitudin aliquam. Ultrices dui sapien eget mi. Euismod in pellentesque massa placerat duis ultricies. Est ultricies integer quis auctor. Non nisi est sit amet. Congue eu consequat ac felis donec et odio pellentesque. Scelerisque felis imperdiet proin fermentum. Nec dui nunc mattis enim ut. Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Mauris vitae ultricies leo integer malesuada nunc. Lectus magna fringilla urna porttitor rhoncus dolor purus non. At tellus at urna condimentum mattis.";
const userInformation = {"projectName": "Pause Menu Assetstore", "authorName": "Great Arc Studios", "version": "1.0",};