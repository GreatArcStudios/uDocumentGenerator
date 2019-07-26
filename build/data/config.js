const config = {  "folderPath": "C:/Users/ericz/Documents/GitHub/uDocuGen2/Assets/Editor/uDocuGen2",  "fileTree": {    "subDir": [      {        "subDir": [          {            "subDir": [              {                "subDir": [],                "currentDirectory": "JsonConverter.cs",                "filePaths": [                  "\\JsonConverter.cs"                ],                "prevDirectory": "C:\\Users\\ericz\\Documents\\GitHub\\uDocuGen2\\Assets\\Editor\\uDocuGen2\\Conversion",                "fileRepresentation": {                  "imports": [                    "Newtonsoft.Json",                    "Newtonsoft.Json.Serialization",                    "System",                    "System.Collections.Generic",                    "System.IO",                    "System.Linq",                    "System.Reflection",                    "uDocumentGenerator.Helpers",                    "UnityEngine"                  ],                  "variables": {                    "private": [                      {                        "attributes": [                          "ProjectRepresentation"                        ],                        "description": "The project representation ",                        "accessMod": "private",                        "varName": "projectRepresentation",                        "dirtyType": "uDocumentGenerator.Helpers.ProjectRepresentation",                        "cleanType": "ProjectRepresentation"                      }                    ]                  },                  "inheritance": [                    "NO INHERITANCE"                  ],                  "accessModifier": "public",                  "className": "JsonConverter",                  "description": " <summary> Uses ```Newtonsoft.Json``` to turn the generated ```projectRepresentation``` into JSON </summary>",                  "filePath": "C:\\Users\\ericz\\Documents\\GitHub\\uDocuGen2\\Assets\\Editor\\uDocuGen2\\Conversion\\JsonConverter.cs",                  "nameSpace": "uDocumentGenerator.Conversion",                  "declaration": "public class JsonConverter",                  "functions": {                    "public": [                      {                        "dirtyParamList": [                          {                            "Item1": "savePath",                            "Item2": "System.String",                            "Item3": null                          }                        ],                        "cleanParamList": [                          {                            "Item1": "String savePath",                            "Item2": null                          }                        ],                        "modifiers": [],                        "description": "<summary> Serialize and save the project as JSON in the specified ```savePath```  </summary> <param name=\"savePath\"></param> ",                        "accessModifier": "public",                        "functionName": "ConvertSave"                      },                      {                        "dirtyParamList": [],                        "cleanParamList": [],                        "modifiers": [],                        "description": "<summary> Converts the projectRepresentation using settings into JSON </summary> <returns></returns> ",                        "accessModifier": "public",                        "functionName": "Convert"                      }                    ]                  }                }              }            ],            "currentDirectory": "Conversion",            "filePaths": [              "\\Conversion\\JsonConverter.cs"            ],            "prevDirectory": "C:\\Users\\ericz\\Documents\\GitHub\\uDocuGen2\\Assets\\Editor\\uDocuGen2",            "fileRepresentation": null          },          {            "subDir": [              {                "subDir": [],                "currentDirectory": "DocumentationGenerator.cs",                "filePaths": [                  "\\DocumentationGenerator.cs"                ],                "prevDirectory": "C:\\Users\\ericz\\Documents\\GitHub\\uDocuGen2\\Assets\\Editor\\uDocuGen2\\Generation",                "fileRepresentation": {                  "imports": [],                  "variables": {                    "public": [                      {                        "attributes": [                          "public",                          "static",                          "ProjectRepresentation"                        ],                        "description": "<summary> The ```ProjectRepresentation``` that will be generated </summary> ",                        "accessMod": "public",                        "varName": "projectTree",                        "dirtyType": "uDocumentGenerator.Helpers.ProjectRepresentation",                        "cleanType": "ProjectRepresentation"                      }                    ]                  },                  "inheritance": [                    "NO INHERITANCE"                  ],                  "accessModifier": "public",                  "className": "DocGen",                  "description": " <summary> Generates a ```ProjectRepresentation``` of the specified project and corresponding JSON file </summary>",                  "filePath": "C:\\Users\\ericz\\Documents\\GitHub\\uDocuGen2\\Assets\\Editor\\uDocuGen2\\Generation\\DocumentationGenerator.cs",                  "nameSpace": "uDocumentGenerator.Generation",                  "declaration": "public class DocGen",                  "functions": {                    "public": [                      {                        "dirtyParamList": [                          {                            "Item1": "genFilePath",                            "Item2": "System.String",                            "Item3": null                          },                          {                            "Item1": "saveFilePath",                            "Item2": "System.String",                            "Item3": null                          },                          {                            "Item1": "exclusions",                            "Item2": "System.Collections.Generic.List`1[System.String]",                            "Item3": null                          }                        ],                        "cleanParamList": [                          {                            "Item1": "string genFilePath,",                            "Item2": null                          },                          {                            "Item1": "string saveFilePath,",                            "Item2": null                          },                          {                            "Item1": "List<string> exclusions",                            "Item2": null                          }                        ],                        "modifiers": [                          "static"                        ],                        "description": "<summary> Generates the documentation by creating a JsonConverter with projectTree as a parameter </summary> <param name=\"genFilePath\"></param> <param name=\"exclusions\"></param> ",                        "accessModifier": "public",                        "functionName": "Generate"                      },                      {                        "dirtyParamList": [                          {                            "Item1": "acknowledgements",                            "Item2": "System.String",                            "Item3": null                          },                          {                            "Item1": "projDescription",                            "Item2": "System.String",                            "Item3": null                          },                          {                            "Item1": "authorInfo",                            "Item2": "System.Collections.Generic.List`1[System.String]",                            "Item3": null                          },                          {                            "Item1": "savePath",                            "Item2": "System.String",                            "Item3": null                          },                          {                            "Item1": "gettingStarted",                            "Item2": "System.String",                            "Item3": null                          }                        ],                        "cleanParamList": [                          {                            "Item1": "string acknowledgements,",                            "Item2": null                          },                          {                            "Item1": "string projDescription,",                            "Item2": null                          },                          {                            "Item1": "List<string> authorInfo,",                            "Item2": null                          },                          {                            "Item1": "string savePath,",                            "Item2": null                          },                          {                            "Item1": "string gettingStarted",                            "Item2": null                          }                        ],                        "modifiers": [                          "static"                        ],                        "description": "<summary> Appends user information like acknowledgements, project description, and author name to ```config.js``` </summary> <param name=\"acknowledgements\"></param> <param name=\"projDescription\"></param> <param name=\"authorInfo\"></param> <param name=\"savePath\"></param> ",                        "accessModifier": "public",                        "functionName": "AppendUserInfo"                      }                    ]                  }                }              },              {                "subDir": [],                "currentDirectory": "FileRepresentation.cs",                "filePaths": [                  "\\FileRepresentation.cs"                ],                "prevDirectory": "C:\\Users\\ericz\\Documents\\GitHub\\uDocuGen2\\Assets\\Editor\\uDocuGen2\\Generation",                "fileRepresentation": {                  "imports": [                    "Newtonsoft.Json",                    "System",                    "System.Collections.Generic",                    "System.IO",                    "System.Linq",                    "System.Reflection",                    "System.Text.RegularExpressions",                    "uDocumentGenerator.Helpers",                    "UnityEngine"                  ],                  "variables": {                    "public": [                      {                        "attributes": [                          "public",                          "List<string>"                        ],                        "description": "The nameSpaces the class imports ",                        "accessMod": "public",                        "varName": "imports",                        "dirtyType": "System.Collections.Generic.List`1[System.String]",                        "cleanType": "List<string>"                      },                      {                        "attributes": [                          "public",                          " Dictionary<string, List<VariableRepresentation>>"                        ],                        "description": "Keys are access modifiers and values are nested lists of variable names ",                        "accessMod": "public",                        "varName": "variables",                        "dirtyType": "System.Collections.Generic.Dictionary`2[System.String,System.Collections.Generic.List`1[uDocumentGenerator.Generation.VariableRepresentation]]",                        "cleanType": " Dictionary<string, List<VariableRepresentation>>"                      },                      {                        "attributes": [                          "public",                          "List<string>"                        ],                        "description": "A list of objects the class inherits/implements ",                        "accessMod": "public",                        "varName": "inheritance",                        "dirtyType": "System.Collections.Generic.List`1[System.String]",                        "cleanType": "List<string>"                      },                      {                        "attributes": [                          "public",                          "string"                        ],                        "description": "The access modifier of the class ",                        "accessMod": "public",                        "varName": "accessModifier",                        "dirtyType": "System.String",                        "cleanType": "string"                      },                      {                        "attributes": [                          "public",                          "string"                        ],                        "description": "The name of the class ",                        "accessMod": "public",                        "varName": "className",                        "dirtyType": "System.String",                        "cleanType": "string"                      },                      {                        "attributes": [                          "public",                          "string"                        ],                        "description": "The description of the class ",                        "accessMod": "public",                        "varName": "description",                        "dirtyType": "System.String",                        "cleanType": "string"                      },                      {                        "attributes": [                          "public",                          "string"                        ],                        "description": "The path of the file ",                        "accessMod": "public",                        "varName": "filePath",                        "dirtyType": "System.String",                        "cleanType": "string"                      },                      {                        "attributes": [                          "public",                          "string"                        ],                        "description": "The nameSpace of the class ",                        "accessMod": "public",                        "varName": "nameSpace",                        "dirtyType": "System.String",                        "cleanType": "string"                      },                      {                        "attributes": [                          "public",                          "string"                        ],                        "description": "How the class is declared ",                        "accessMod": "public",                        "varName": "declaration",                        "dirtyType": "System.String",                        "cleanType": "string"                      },                      {                        "attributes": [                          "public",                          " Dictionary<string, List<FunctionRepresentation>>"                        ],                        "description": "<summary> Values are formatted:\\n\\n  1. ```Functions[key][0]``` is a list of strings containing param type and name as an element.\\n 2. ```Functions[key][1]``` is the function name.\\n 3. ```Functions[key][2]``` is a list of other modifiers. </summary> ",                        "accessMod": "public",                        "varName": "functions",                        "dirtyType": "System.Collections.Generic.Dictionary`2[System.String,System.Collections.Generic.List`1[uDocumentGenerator.Generation.FunctionRepresentation]]",                        "cleanType": " Dictionary<string, List<FunctionRepresentation>>"                      }                    ],                    "private": [                      {                        "attributes": [                          "private",                          "readonly",                          "FileReader"                        ],                        "description": "The ```FileReader``` that reads the file ",                        "accessMod": "private",                        "varName": "fileReader",                        "dirtyType": "uDocumentGenerator.Helpers.FileReader",                        "cleanType": "FileReader"                      },                      {                        "attributes": [                          "private",                          "readonly",                          "string[]"                        ],                        "description": "A list of C# access modifiers to reference ",                        "accessMod": "private",                        "varName": "accessMods",                        "dirtyType": "System.String[]",                        "cleanType": "string[]"                      },                      {                        "attributes": [                          "private",                          "bool"                        ],                        "description": "Is the file an interface? ",                        "accessMod": "private",                        "varName": "isInterface",                        "dirtyType": "System.Boolean",                        "cleanType": "bool"                      },                      {                        "attributes": [                          "private",                          "bool"                        ],                        "description": "Is the class abstract? ",                        "accessMod": "private",                        "varName": "isAbstract",                        "dirtyType": "System.Boolean",                        "cleanType": "bool"                      }                    ]                  },                  "inheritance": [                    "NO INHERITANCE"                  ],                  "accessModifier": "public",                  "className": "FileRepresentation",                  "description": " <summary> This class represents a file, which is used to generate documentation. It includes the important features of a file. </summary>",                  "filePath": "C:\\Users\\ericz\\Documents\\GitHub\\uDocuGen2\\Assets\\Editor\\uDocuGen2\\Generation\\FileRepresentation.cs",                  "nameSpace": "uDocumentGenerator.Generation",                  "declaration": "public class FileRepresentation",                  "functions": {                    "private": [                      {                        "dirtyParamList": [],                        "cleanParamList": [],                        "modifiers": [],                        "description": "<summary> Extracts functions from the file and turns them into ```FunctionRepresentation``` objects. </summary> ",                        "accessModifier": "private",                        "functionName": "ExtractFunctions"                      },                      {                        "dirtyParamList": [                          {                            "Item1": "dirtyParameterList",                            "Item2": "System.Collections.Generic.List`1[System.ValueTuple`3[System.String,System.String,System.Object]]",                            "Item3": null                          }                        ],                        "cleanParamList": [                          {                            "Item1": " List<(string, string, object)> dirtyParameterList",                            "Item2": null                          }                        ],                        "modifiers": [],                        "description": "<summary> This checks for if there's a tuple, i.e, ```(obj, obj, obj)``` in the dirty parameter list. </summary> <param name=\"dirtyParameterList\"></param> <returns></returns> ",                        "accessModifier": "private",                        "functionName": "TupleChecker"                      },                      {                        "dirtyParamList": [                          {                            "Item1": "dirtyParameterList",                            "Item2": "System.Collections.Generic.List`1[System.ValueTuple`3[System.String,System.String,System.Object]]",                            "Item3": null                          }                        ],                        "cleanParamList": [                          {                            "Item1": " List<(string, string, object)> dirtyParameterList",                            "Item2": null                          }                        ],                        "modifiers": [],                        "description": "<summary> This breaks tuples up to pass the paramter count check in ```ExtractFunctions()``` </summary> <param name=\"dirtyParameterList\"></param> <returns></returns> ",                        "accessModifier": "private",                        "functionName": "TupleBreaker"                      },                      {                        "dirtyParamList": [                          {                            "Item1": "paramList",                            "Item2": "System.Collections.Generic.List`1[System.String]",                            "Item3": null                          }                        ],                        "cleanParamList": [                          {                            "Item1": "List<string> paramList",                            "Item2": null                          }                        ],                        "modifiers": [],                        "description": "<summary> Puts tuples **(only tuples, not lists or otherwise)** into the correct format for ```param_list``` </summary> <param name=\"paramList\"></param> <returns></returns> ",                        "accessModifier": "private",                        "functionName": "FixTupleList"                      },                      {                        "dirtyParamList": [                          {                            "Item1": "paramList",                            "Item2": "System.Collections.Generic.List`1[System.String]",                            "Item3": null                          }                        ],                        "cleanParamList": [                          {                            "Item1": "List<string> paramList",                            "Item2": null                          }                        ],                        "modifiers": [],                        "description": "<summary> At the moment this fixes generics where the generic takes multiple parameters, e.g, ```List<T, T>``` and where there are empty attributes (\"\").  </summary> <param name=\"paramList\"></param> <returns></returns> ",                        "accessModifier": "private",                        "functionName": "FixParamList"                      },                      {                        "dirtyParamList": [                          {                            "Item1": "checkString",                            "Item2": "System.String",                            "Item3": null                          },                          {                            "Item1": "fast",                            "Item2": "System.Boolean",                            "Item3": false                          }                        ],                        "cleanParamList": [                          {                            "Item1": "string checkString,",                            "Item2": null                          },                          {                            "Item1": "bool fast = false",                            "Item2": false                          }                        ],                        "modifiers": [],                        "description": "<summary> Currently checks if ```<, >``` brackets are balanced </summary> <param name=\"checkString\"></param> <returns></returns> ",                        "accessModifier": "private",                        "functionName": "CheckBalancedBrackets"                      },                      {                        "dirtyParamList": [                          {                            "Item1": "dirtyParamList",                            "Item2": "System.Collections.Generic.List`1[System.ValueTuple`3[System.String,System.String,System.Object]]",                            "Item3": null                          },                          {                            "Item1": "paramList",                            "Item2": "System.Collections.Generic.List`1[System.String]",                            "Item3": null                          }                        ],                        "cleanParamList": [                          {                            "Item1": "List<(string,string,object)> dirtyParamList,",                            "Item2": null                          },                          {                            "Item1": "List<string> paramList",                            "Item2": null                          }                        ],                        "modifiers": [],                        "description": "<summary> Creates the ```cleanParamList``` from ```dirtyParamList``` (to get the default values) and ```paramList``` </summary> <param name=\"dirtyParamList\"></param> <param name=\"param_list\"></param> <returns></returns> ",                        "accessModifier": "private",                        "functionName": "CreateCleanParamList"                      },                      {                        "dirtyParamList": [                          {                            "Item1": "TextArray",                            "Item2": "System.Collections.Generic.List`1[System.String]",                            "Item3": null                          },                          {                            "Item1": "Search",                            "Item2": "System.String",                            "Item3": null                          }                        ],                        "cleanParamList": [                          {                            "Item1": "List<string> TextArray,",                            "Item2": null                          },                          {                            "Item1": "string Search",                            "Item2": null                          }                        ],                        "modifiers": [],                        "description": "```ArrayIndex``` is a helper function used in finiding the line index of a term in an array ",                        "accessModifier": "private",                        "functionName": "ArrayIndex"                      },                      {                        "dirtyParamList": [                          {                            "Item1": "TextArray",                            "Item2": "System.Collections.Generic.List`1[System.String]",                            "Item3": null                          },                          {                            "Item1": "Search",                            "Item2": "System.String",                            "Item3": null                          },                          {                            "Item1": "index",                            "Item2": "System.Int32",                            "Item3": null                          }                        ],                        "cleanParamList": [                          {                            "Item1": "List<string> TextArray,",                            "Item2": null                          },                          {                            "Item1": "string Search,",                            "Item2": null                          },                          {                            "Item1": "int index",                            "Item2": null                          }                        ],                        "modifiers": [],                        "description": "Overload of ```ArrayIndex```. This finds the n<sup>th</sup> occurrance of ```Search``` ",                        "accessModifier": "private",                        "functionName": "ArrayIndex"                      },                      {                        "dirtyParamList": [],                        "cleanParamList": [],                        "modifiers": [],                        "description": "<summary> Extracts the variables of the class, and creates ```VariableRepresentation``` objects. </summary> ",                        "accessModifier": "private",                        "functionName": "ExtractVariables"                      },                      {                        "dirtyParamList": [                          {                            "Item1": "attributes",                            "Item2": "System.String[]",                            "Item3": null                          }                        ],                        "cleanParamList": [                          {                            "Item1": "string[] attributes",                            "Item2": null                          }                        ],                        "modifiers": [],                        "description": "<summary> At the moment fixes generics where the generic takes multiple parameters, e.g, ```List<T, T>``` and where there are empty attributes (\"\") </summary> <param name=\"attributes\"></param> <returns></returns> ",                        "accessModifier": "private",                        "functionName": "FixVariableAttributes"                      },                      {                        "dirtyParamList": [],                        "cleanParamList": [],                        "modifiers": [],                        "description": "<summary> Extracts the imports of the class </summary> ",                        "accessModifier": "private",                        "functionName": "ExtractImports"                      },                      {                        "dirtyParamList": [],                        "cleanParamList": [],                        "modifiers": [],                        "description": "<summary> Extracts information about a class: the description, class name, access modifier, and what it inherits </summary> ",                        "accessModifier": "private",                        "functionName": "ExtractClassInformation"                      },                      {                        "dirtyParamList": [                          {                            "Item1": "line",                            "Item2": "System.String",                            "Item3": null                          }                        ],                        "cleanParamList": [                          {                            "Item1": "string line",                            "Item2": null                          }                        ],                        "modifiers": [],                        "description": "<summary> A helper method for detecting what a class inherits </summary> <param name=\"line\"></param> <returns></returns> ",                        "accessModifier": "private",                        "functionName": "InheritanceHelper"                      },                      {                        "dirtyParamList": [                          {                            "Item1": "line",                            "Item2": "System.String",                            "Item3": null                          }                        ],                        "cleanParamList": [                          {                            "Item1": "string line",                            "Item2": null                          }                        ],                        "modifiers": [],                        "description": "<summary> A helper method for detecting the class's name </summary> <param name=\"line\"></param> <returns></returns> ",                        "accessModifier": "private",                        "functionName": "ClassNameHelper"                      }                    ],                    "public": [                      {                        "dirtyParamList": [                          {                            "Item1": "typeName",                            "Item2": "System.String",                            "Item3": null                          }                        ],                        "cleanParamList": [                          {                            "Item1": "string typeName",                            "Item2": null                          }                        ],                        "modifiers": [                          "static"                        ],                        "description": "<summary> A wrapper for ```Type.GetType()``` that works with different assemblies\\n\\n https://stackoverflow.com/a/11811046/2793618 </summary> <param name=\"typeName\"></param> <returns></returns> ",                        "accessModifier": "public",                        "functionName": "GetType"                      }                    ]                  }                }              },              {                "subDir": [],                "currentDirectory": "FunctionRepresentation.cs",                "filePaths": [                  "\\FunctionRepresentation.cs"                ],                "prevDirectory": "C:\\Users\\ericz\\Documents\\GitHub\\uDocuGen2\\Assets\\Editor\\uDocuGen2\\Generation",                "fileRepresentation": {                  "imports": [                    "System.Collections.Generic"                  ],                  "variables": {                    "private": [                      {                        "attributes": [                          "readonly",                          " List<(string, string, object)>"                        ],                        "description": "This is the list of parameters generated by reflection. \\n\\n 1. Each param is formatted as name, paramtype, and default value. \\n 2. Use this **if and only if** ```cleanParamList``` isn't accurate enough for you ",                        "accessMod": "private",                        "varName": "dirtyParamList",                        "dirtyType": "System.Collections.Generic.List`1[System.ValueTuple`3[System.String,System.String,System.Object]]",                        "cleanType": " List<(string, string, object)>"                      },                      {                        "attributes": [                          "readonly",                          " List<(string, object)>"                        ],                        "description": "Each param is formatted as type + name, default value ",                        "accessMod": "private",                        "varName": "cleanParamList",                        "dirtyType": "System.Collections.Generic.List`1[System.ValueTuple`2[System.String,System.Object]]",                        "cleanType": " List<(string, object)>"                      },                      {                        "attributes": [                          "readonly",                          "List<string>"                        ],                        "description": "A list of the function's modifiers ",                        "accessMod": "private",                        "varName": "modifiers",                        "dirtyType": "System.Collections.Generic.List`1[System.String]",                        "cleanType": "List<string>"                      }                    ],                    "public": [                      {                        "attributes": [                          "public",                          "string"                        ],                        "description": "The description of the function ",                        "accessMod": "public",                        "varName": "description",                        "dirtyType": "System.String",                        "cleanType": "string"                      },                      {                        "attributes": [                          "public",                          "string"                        ],                        "description": "The function's access modifier ",                        "accessMod": "public",                        "varName": "accessModifier",                        "dirtyType": "System.String",                        "cleanType": "string"                      },                      {                        "attributes": [                          "public",                          "string"                        ],                        "description": "The function's name ",                        "accessMod": "public",                        "varName": "functionName",                        "dirtyType": "System.String",                        "cleanType": "string"                      }                    ]                  },                  "inheritance": [                    "NO INHERITANCE"                  ],                  "accessModifier": "public",                  "className": "FunctionRepresentation",                  "description": " <summary> An object representation of a function. Includes the important features of a function </summary>",                  "filePath": "C:\\Users\\ericz\\Documents\\GitHub\\uDocuGen2\\Assets\\Editor\\uDocuGen2\\Generation\\FunctionRepresentation.cs",                  "nameSpace": "uDocumentGenerator.Generation",                  "declaration": "public class FunctionRepresentation",                  "functions": {                    "public": [                      {                        "dirtyParamList": [                          {                            "Item1": "parameter",                            "Item2": "System.ValueTuple`3[System.String,System.String,System.Object]",                            "Item3": null                          }                        ],                        "cleanParamList": [                          {                            "Item1": " (string, string, object) parameter",                            "Item2": null                          }                        ],                        "modifiers": [],                        "description": "<summary> Method to manually add a parameter to ```dirtyParamList``` </summary> <param name=\"parameter\"></param> ",                        "accessModifier": "public",                        "functionName": "AddParameter"                      },                      {                        "dirtyParamList": [                          {                            "Item1": "modifier",                            "Item2": "System.String",                            "Item3": null                          }                        ],                        "cleanParamList": [                          {                            "Item1": "string modifier",                            "Item2": null                          }                        ],                        "modifiers": [],                        "description": "<summary> Method to manually add a parameter to ```modifiers```  </summary> <param name=\"modifier\"></param> ",                        "accessModifier": "public",                        "functionName": "AddModifier"                      }                    ]                  }                }              },              {                "subDir": [],                "currentDirectory": "VariableRepresentation.cs",                "filePaths": [                  "\\VariableRepresentation.cs"                ],                "prevDirectory": "C:\\Users\\ericz\\Documents\\GitHub\\uDocuGen2\\Assets\\Editor\\uDocuGen2\\Generation",                "fileRepresentation": {                  "imports": [                    "System.Collections.Generic"                  ],                  "variables": {                    "private": [                      {                        "attributes": [                          "List<string>"                        ],                        "description": "A list of all attributes not covered by the other fields ",                        "accessMod": "private",                        "varName": "attributes",                        "dirtyType": "System.Collections.Generic.List`1[System.String]",                        "cleanType": "List<string>"                      }                    ],                    "public": [                      {                        "attributes": [                          "public",                          "string"                        ],                        "description": "The description of the variable ",                        "accessMod": "public",                        "varName": "description",                        "dirtyType": "System.String",                        "cleanType": "string"                      },                      {                        "attributes": [                          "public",                          "string"                        ],                        "description": "The access modifier of the variable ",                        "accessMod": "public",                        "varName": "accessMod",                        "dirtyType": "System.String",                        "cleanType": "string"                      },                      {                        "attributes": [                          "public",                          "string"                        ],                        "description": "The variable anme ",                        "accessMod": "public",                        "varName": "varName",                        "dirtyType": "System.String",                        "cleanType": "string"                      },                      {                        "attributes": [                          "public",                          "string"                        ],                        "description": "The type returned by reflection - use this if cleanType doesn't give you good results for your variables ",                        "accessMod": "public",                        "varName": "dirtyType",                        "dirtyType": "System.String",                        "cleanType": "string"                      },                      {                        "attributes": [                          "public",                          "string"                        ],                        "description": "Type determined by ExtractVariables ",                        "accessMod": "public",                        "varName": "cleanType",                        "dirtyType": "System.String",                        "cleanType": "string"                      }                    ]                  },                  "inheritance": [                    "NO INHERITANCE"                  ],                  "accessModifier": "public",                  "className": "VariableRepresentation",                  "description": " <summary> The important information extracted from a variable, represented as an object. </summary>",                  "filePath": "C:\\Users\\ericz\\Documents\\GitHub\\uDocuGen2\\Assets\\Editor\\uDocuGen2\\Generation\\VariableRepresentation.cs",                  "nameSpace": "uDocumentGenerator.Generation",                  "declaration": "public class VariableRepresentation",                  "functions": {                    "public": [                      {                        "dirtyParamList": [                          {                            "Item1": "description",                            "Item2": "System.String",                            "Item3": null                          }                        ],                        "cleanParamList": [                          {                            "Item1": "string description",                            "Item2": null                          }                        ],                        "modifiers": [],                        "description": "<summary> Method to manually append a description to a ```VariableRepresentation``` </summary> <param name=\"description\"></param> ",                        "accessModifier": "public",                        "functionName": "AppendDescription"                      },                      {                        "dirtyParamList": [                          {                            "Item1": "attribute",                            "Item2": "System.String",                            "Item3": null                          }                        ],                        "cleanParamList": [                          {                            "Item1": "string attribute",                            "Item2": null                          }                        ],                        "modifiers": [],                        "description": "<summary> Method to manually append an attribute to a ```VariableRepresentation``` </summary> <param name=\"attribute\"></param> ",                        "accessModifier": "public",                        "functionName": "AddAttribute"                      },                      {                        "dirtyParamList": [                          {                            "Item1": "attribute",                            "Item2": "System.String",                            "Item3": null                          }                        ],                        "cleanParamList": [                          {                            "Item1": "string attribute",                            "Item2": null                          }                        ],                        "modifiers": [],                        "description": "<summary> Method to manually remove an attribute from a ```VariableRepresentation``` </summary> <param name=\"attribute\"></param> ",                        "accessModifier": "public",                        "functionName": "RemoveAttribute"                      }                    ]                  }                }              }            ],            "currentDirectory": "Generation",            "filePaths": [              "\\Generation\\DocumentationGenerator.cs"            ],            "prevDirectory": "C:\\Users\\ericz\\Documents\\GitHub\\uDocuGen2\\Assets\\Editor\\uDocuGen2",            "fileRepresentation": null          },          {            "subDir": [              {                "subDir": [],                "currentDirectory": "FileReader.cs",                "filePaths": [                  "\\FileReader.cs"                ],                "prevDirectory": "C:\\Users\\ericz\\Documents\\GitHub\\uDocuGen2\\Assets\\Editor\\uDocuGen2\\Helpers",                "fileRepresentation": {                  "imports": [                    "System.IO"                  ],                  "variables": {                    "private": [                      {                        "attributes": [                          "private",                          "string[]"                        ],                        "description": "The list where each element is a line of the file ",                        "accessMod": "private",                        "varName": "fileText",                        "dirtyType": "System.String[]",                        "cleanType": "string[]"                      },                      {                        "attributes": [                          "private",                          "int"                        ],                        "description": "The line we are reading from in ```fileText``` ",                        "accessMod": "private",                        "varName": "index",                        "dirtyType": "System.Int32",                        "cleanType": "int"                      },                      {                        "attributes": [                          "private",                          "string"                        ],                        "description": "The file represented as a string ",                        "accessMod": "private",                        "varName": "fileString",                        "dirtyType": "System.String",                        "cleanType": "string"                      }                    ]                  },                  "inheritance": [                    "NO INHERITANCE"                  ],                  "accessModifier": "public",                  "className": "FileReader",                  "description": " <summary> Reads the contents of the file at the specified ```filePath```. <br/> Contains many useful methods that enhances the usability of ```File.ReadAllLines()``` </summary>",                  "filePath": "C:\\Users\\ericz\\Documents\\GitHub\\uDocuGen2\\Assets\\Editor\\uDocuGen2\\Helpers\\FileReader.cs",                  "nameSpace": "uDocumentGenerator.Helpers",                  "declaration": "public class FileReader",                  "functions": {                    "public": [                      {                        "dirtyParamList": [],                        "cleanParamList": [],                        "modifiers": [],                        "description": "<summary> Read the next line of the file </summary> <returns></returns> ",                        "accessModifier": "public",                        "functionName": "ReadLine"                      },                      {                        "dirtyParamList": [],                        "cleanParamList": [],                        "modifiers": [],                        "description": "<summary> Read the previous line if it is not an invalid index </summary> <returns></returns> ",                        "accessModifier": "public",                        "functionName": "ReverseLine"                      },                      {                        "dirtyParamList": [],                        "cleanParamList": [],                        "modifiers": [],                        "description": "<summary> Go back to the beginning of the file </summary> ",                        "accessModifier": "public",                        "functionName": "ResetPosition"                      },                      {                        "dirtyParamList": [],                        "cleanParamList": [],                        "modifiers": [],                        "description": "<summary> Go back to the beginning of the file </summary> ",                        "accessModifier": "public",                        "functionName": "Reset"                      },                      {                        "dirtyParamList": [],                        "cleanParamList": [],                        "modifiers": [],                        "description": "<summary> Overrides the parent ```ToString()``` </summary> <returns></returns> ",                        "accessModifier": "public",                        "functionName": "ToString"                      }                    ]                  }                }              },              {                "subDir": [],                "currentDirectory": "FileTree.cs",                "filePaths": [                  "\\FileTree.cs"                ],                "prevDirectory": "C:\\Users\\ericz\\Documents\\GitHub\\uDocuGen2\\Assets\\Editor\\uDocuGen2\\Helpers",                "fileRepresentation": {                  "imports": [                    "System",                    "System.Collections.Generic",                    "System.Text.RegularExpressions",                    "uDocumentGenerator.Generation",                    "UnityEngine"                  ],                  "variables": {                    "public": [                      {                        "attributes": [                          "public",                          "List<FileTree>"                        ],                        "description": "If this is not a leaf, this will not be null -> provides the recursive structure of FileTree ",                        "accessMod": "public",                        "varName": "subDir",                        "dirtyType": "System.Collections.Generic.List`1[uDocumentGenerator.Helpers.FileTree]",                        "cleanType": "List<FileTree>"                      },                      {                        "attributes": [                          "public",                          "string"                        ],                        "description": "The file path to the current directory ",                        "accessMod": "public",                        "varName": "currentDirectory",                        "dirtyType": "System.String",                        "cleanType": "string"                      },                      {                        "attributes": [                          "public",                          "List<string>"                        ],                        "description": "The file paths of the files in the subDirs/current level ",                        "accessMod": "public",                        "varName": "filePaths",                        "dirtyType": "System.Collections.Generic.List`1[System.String]",                        "cleanType": "List<string>"                      }                    ],                    "private": [                      {                        "attributes": [                          "private",                          "string"                        ],                        "description": "The parents & ancestors of this \"file level\" ",                        "accessMod": "private",                        "varName": "prevDirectory",                        "dirtyType": "System.String",                        "cleanType": "string"                      },                      {                        "attributes": [                          "private",                          "FileRepresentation"                        ],                        "description": "If this ```FileTree``` is a leaf, it will be populated with a ```FileRepresentation``` ",                        "accessMod": "private",                        "varName": "fileRepresentation",                        "dirtyType": "uDocumentGenerator.Generation.FileRepresentation",                        "cleanType": "FileRepresentation"                      }                    ]                  },                  "inheritance": [                    "NO INHERITANCE"                  ],                  "accessModifier": "public",                  "className": "FileTree",                  "description": " <summary> The tree is formatted as follows: <ul>     <li>         a file will have no children (a leaf), i.e, ```subDir.Length == 0```     </li>     <li>         a branch will have it's own value and will not end in .cs with non-empty subDir list     </li> </ul> </summary>",                  "filePath": "C:\\Users\\ericz\\Documents\\GitHub\\uDocuGen2\\Assets\\Editor\\uDocuGen2\\Helpers\\FileTree.cs",                  "nameSpace": "uDocumentGenerator.Helpers",                  "declaration": "public class FileTree",                  "functions": {                    "private": [                      {                        "dirtyParamList": [],                        "cleanParamList": [],                        "modifiers": [],                        "description": "<summary> Builds the FileTree -> contains all the fileReps.   This is a recursive data structure. </summary> ",                        "accessModifier": "private",                        "functionName": "BuildTree"                      },                      {                        "dirtyParamList": [                          {                            "Item1": "directories",                            "Item2": "System.Collections.Generic.List`1[System.String]",                            "Item3": null                          }                        ],                        "cleanParamList": [                          {                            "Item1": "List<string> directories",                            "Item2": null                          }                        ],                        "modifiers": [],                        "description": "<summary> Builds a common file path for directories. </summary> <param name=\"directories\"></param> <returns></returns> ",                        "accessModifier": "private",                        "functionName": "BuildCommonPath"                      },                      {                        "dirtyParamList": [                          {                            "Item1": "depth",                            "Item2": "System.Int32",                            "Item3": null                          }                        ],                        "cleanParamList": [                          {                            "Item1": "int depth",                            "Item2": null                          }                        ],                        "modifiers": [],                        "description": "<summary> Returns a formatted string of the file tree </summary> <param name=\"depth\"></param> <returns></returns> ",                        "accessModifier": "private",                        "functionName": "StrFormated"                      }                    ],                    "public": [                      {                        "dirtyParamList": [],                        "cleanParamList": [],                        "modifiers": [],                        "description": "<summary> Overrides the default ToString method </summary> <returns></returns> ",                        "accessModifier": "public",                        "functionName": "ToString"                      },                      {                        "dirtyParamList": [                          {                            "Item1": "pathList",                            "Item2": "System.Collections.Generic.List`1[System.String]",                            "Item3": null                          }                        ],                        "cleanParamList": [                          {                            "Item1": "List<string> pathList",                            "Item2": null                          }                        ],                        "modifiers": [],                        "description": "<summary> This will return the FileRepresentation of a file if it exists. Otherwise it will return null. The file path should be split among slashes with the last element being the file.cs </summary> <param name=\"pathList\"></param> <returns></returns> ",                        "accessModifier": "public",                        "functionName": "FindFile"                      }                    ]                  }                }              },              {                "subDir": [],                "currentDirectory": "ProjectRepresentation.cs",                "filePaths": [                  "\\ProjectRepresentation.cs"                ],                "prevDirectory": "C:\\Users\\ericz\\Documents\\GitHub\\uDocuGen2\\Assets\\Editor\\uDocuGen2\\Helpers",                "fileRepresentation": {                  "imports": [                    "System.Collections.Generic",                    "System.IO",                    "System.Linq",                    "UnityEngine"                  ],                  "variables": {                    "public": [                      {                        "attributes": [                          "public",                          "string"                        ],                        "description": "The path to the specified folder we want to turn into a ```ProjectRepresentation``` ",                        "accessMod": "public",                        "varName": "folderPath",                        "dirtyType": "System.String",                        "cleanType": "string"                      },                      {                        "attributes": [                          "public",                          "FileTree"                        ],                        "description": "The generated ```FileTree``` object. **Contains the information that will be displayed on the website** ",                        "accessMod": "public",                        "varName": "fileTree",                        "dirtyType": "uDocumentGenerator.Helpers.FileTree",                        "cleanType": "FileTree"                      },                      {                        "attributes": [                          "public",                          "List<string>"                        ],                        "description": "A list of the files in the specified folder ",                        "accessMod": "public",                        "varName": "fileList",                        "dirtyType": "System.Collections.Generic.List`1[System.String]",                        "cleanType": "List<string>"                      },                      {                        "attributes": [                          "public",                          "List<string>"                        ],                        "description": "The directories we don't want processed ",                        "accessMod": "public",                        "varName": "directoryExclusionsList",                        "dirtyType": "System.Collections.Generic.List`1[System.String]",                        "cleanType": "List<string>"                      }                    ]                  },                  "inheritance": [                    "NO INHERITANCE"                  ],                  "accessModifier": "public",                  "className": "ProjectRepresentation",                  "description": " <summary> Provides a representation of a project </summary>",                  "filePath": "C:\\Users\\ericz\\Documents\\GitHub\\uDocuGen2\\Assets\\Editor\\uDocuGen2\\Helpers\\ProjectRepresentation.cs",                  "nameSpace": "uDocumentGenerator.Helpers",                  "declaration": "public class ProjectRepresentation",                  "functions": {                    "private": [                      {                        "dirtyParamList": [                          {                            "Item1": "fPath",                            "Item2": "System.String",                            "Item3": null                          }                        ],                        "cleanParamList": [                          {                            "Item1": "string fPath",                            "Item2": null                          }                        ],                        "modifiers": [],                        "description": "<summary> Recursively generate the flattened list of c# files paths </summary> <param name=\"fPath\"></param> <returns></returns> ",                        "accessModifier": "private",                        "functionName": "GenerateFileList"                      },                      {                        "dirtyParamList": [                          {                            "Item1": "fPath",                            "Item2": "System.String",                            "Item3": null                          }                        ],                        "cleanParamList": [                          {                            "Item1": "string fPath",                            "Item2": null                          }                        ],                        "modifiers": [],                        "description": "<summary> Helper method to find the c# files in a directory </summary> <param name=\"fPath\"></param> <returns></returns> ",                        "accessModifier": "private",                        "functionName": "FindcsharpFiles"                      }                    ]                  }                }              },              {                "subDir": [],                "currentDirectory": "TextSanitizer.cs",                "filePaths": [                  "\\TextSanitizer.cs"                ],                "prevDirectory": "C:\\Users\\ericz\\Documents\\GitHub\\uDocuGen2\\Assets\\Editor\\uDocuGen2\\Helpers",                "fileRepresentation": {                  "imports": [                    "System.Collections.Generic",                    "UnityEngine",                    "System.Linq"                  ],                  "variables": {                    "private": [                      {                        "attributes": [                          "private",                          "static",                          "readonly",                          "string"                        ],                        "description": "The application path ",                        "accessMod": "private",                        "varName": "appPath",                        "dirtyType": "System.String",                        "cleanType": "string"                      }                    ]                  },                  "inheritance": [                    "NO INHERITANCE"                  ],                  "accessModifier": "public",                  "className": "TextSanitizer",                  "description": " <summary> Contains static methods for various text/string operations </summary>",                  "filePath": "C:\\Users\\ericz\\Documents\\GitHub\\uDocuGen2\\Assets\\Editor\\uDocuGen2\\Helpers\\TextSanitizer.cs",                  "nameSpace": "uDocumentGenerator.Helpers",                  "declaration": "public class TextSanitizer",                  "functions": {                    "public": [                      {                        "dirtyParamList": [],                        "cleanParamList": [],                        "modifiers": [                          "static"                        ],                        "description": "",                        "accessModifier": "public",                        "functionName": "get_AppPath"                      },                      {                        "dirtyParamList": [                          {                            "Item1": "path",                            "Item2": "System.String",                            "Item3": null                          }                        ],                        "cleanParamList": [                          {                            "Item1": "string path",                            "Item2": null                          }                        ],                        "modifiers": [                          "static"                        ],                        "description": "<summary> Removes the application data path from the string </summary> <param name=\"path\"></param> <returns></returns> ",                        "accessModifier": "public",                        "functionName": "RemoveApplicationPath"                      },                      {                        "dirtyParamList": [                          {                            "Item1": "stringList",                            "Item2": "System.Collections.Generic.List`1[System.String]",                            "Item3": null                          }                        ],                        "cleanParamList": [                          {                            "Item1": "List<string> stringList",                            "Item2": null                          }                        ],                        "modifiers": [                          "static"                        ],                        "description": "<summary> Overload for RemoveApplication path. Takes a list of paths instead of just a path. </summary> <param name=\"stringList\"></param> <returns></returns> ",                        "accessModifier": "public",                        "functionName": "RemoveApplicationPath"                      },                      {                        "dirtyParamList": [                          {                            "Item1": "filePaths",                            "Item2": "System.Collections.Generic.List`1[System.String]",                            "Item3": null                          }                        ],                        "cleanParamList": [                          {                            "Item1": "List<string> filePaths",                            "Item2": null                          }                        ],                        "modifiers": [                          "static"                        ],                        "description": "<summary> Reverses the slashes in file paths to keep them consistent </summary> <param name=\"filePaths\"></param> ",                        "accessModifier": "public",                        "functionName": "ReverseSlashes"                      },                      {                        "dirtyParamList": [                          {                            "Item1": "target",                            "Item2": "System.Collections.Generic.List`1[System.String]",                            "Item3": null                          },                          {                            "Item1": "toRemove",                            "Item2": "System.Collections.Generic.List`1[System.String]",                            "Item3": null                          }                        ],                        "cleanParamList": [                          {                            "Item1": "List<string> target,",                            "Item2": null                          },                          {                            "Item1": "List<string> toRemove",                            "Item2": null                          }                        ],                        "modifiers": [                          "static"                        ],                        "description": "",                        "accessModifier": "public",                        "functionName": "RemoveCommonDirectory"                      },                      {                        "dirtyParamList": [                          {                            "Item1": "toProcess",                            "Item2": "System.String",                            "Item3": null                          },                          {                            "Item1": "removeChars",                            "Item2": "System.Char[]",                            "Item3": null                          }                        ],                        "cleanParamList": [                          {                            "Item1": "string toProcess,",                            "Item2": null                          },                          {                            "Item1": "char[] removeChars",                            "Item2": null                          }                        ],                        "modifiers": [                          "static"                        ],                        "description": "<summary> Removes characters specified from a string. Used in cleaning a line from a file. Non-descructive.  </summary> <param name=\"toProcess\"></param> <param name=\"removeChars\"></param> <returns></returns> ",                        "accessModifier": "public",                        "functionName": "RemoveCharacters"                      },                      {                        "dirtyParamList": [                          {                            "Item1": "line",                            "Item2": "System.String",                            "Item3": null                          },                          {                            "Item1": "searches",                            "Item2": "System.String[]",                            "Item3": null                          }                        ],                        "cleanParamList": [                          {                            "Item1": "string line,",                            "Item2": null                          },                          {                            "Item1": "string[] searches",                            "Item2": null                          }                        ],                        "modifiers": [                          "static"                        ],                        "description": "<summary> Finds the comment type from a list of: ```{ \"\", \"//\", \"/*\", \"*\", \"*/\" }```. Returns -1 iff no matches </summary> <param name=\"line\"></param> <param name=\"searches\"></param> <returns></returns> ",                        "accessModifier": "public",                        "functionName": "FindCommentType"                      }                    ]                  }                }              }            ],            "currentDirectory": "Helpers",            "filePaths": [              "\\Helpers\\FileReader.cs"            ],            "prevDirectory": "C:\\Users\\ericz\\Documents\\GitHub\\uDocuGen2\\Assets\\Editor\\uDocuGen2",            "fileRepresentation": null          },          {            "subDir": [              {                "subDir": [],                "currentDirectory": "GeneratorInterface.cs",                "filePaths": [                  "\\GeneratorInterface.cs"                ],                "prevDirectory": "C:\\Users\\ericz\\Documents\\GitHub\\uDocuGen2\\Assets\\Editor\\uDocuGen2\\UI",                "fileRepresentation": {                  "imports": [                    "UnityEditor",                    "UnityEngine",                    "uDocumentGenerator",                    "System.Collections.Generic",                    "uDocumentGenerator.Helpers",                    "uDocumentGenerator.Generation"                  ],                  "variables": {                    "public": [                      {                        "attributes": [                          "public",                          "string"                        ],                        "description": "Button to generate the JSON ",                        "accessMod": "public",                        "varName": "generateButton",                        "dirtyType": "System.String",                        "cleanType": "string"                      },                      {                        "attributes": [                          "public",                          "string"                        ],                        "description": "The version of the project. By default it is assigned to ```Application.version``` ",                        "accessMod": "public",                        "varName": "version",                        "dirtyType": "System.String",                        "cleanType": "string"                      },                      {                        "attributes": [                          "public",                          "string"                        ],                        "description": "The user's name. By default it is assigned to ```Application.companyName``` ",                        "accessMod": "public",                        "varName": "authorName",                        "dirtyType": "System.String",                        "cleanType": "string"                      },                      {                        "attributes": [                          "public",                          "string"                        ],                        "description": "The project name. By default it is assigned to ```Application.productName``` ",                        "accessMod": "public",                        "varName": "projectName",                        "dirtyType": "System.String",                        "cleanType": "string"                      },                      {                        "attributes": [                          "public",                          "GUIContent"                        ],                        "description": "Label next to project directory chooser button ",                        "accessMod": "public",                        "varName": "ProjPathLabel",                        "dirtyType": "UnityEngine.GUIContent",                        "cleanType": "GUIContent"                      },                      {                        "attributes": [                          "public",                          "GUIContent"                        ],                        "description": "Label next to website directory chooser button ",                        "accessMod": "public",                        "varName": "WebsitePathLabel",                        "dirtyType": "UnityEngine.GUIContent",                        "cleanType": "GUIContent"                      },                      {                        "attributes": [                          "public",                          "GUIContent"                        ],                        "description": "Label next to acknowledgement directory chooser button ",                        "accessMod": "public",                        "varName": "acknowledgementLabel",                        "dirtyType": "UnityEngine.GUIContent",                        "cleanType": "GUIContent"                      },                      {                        "attributes": [                          "public",                          "GUIContent"                        ],                        "description": "Label next to description directory chooser button ",                        "accessMod": "public",                        "varName": "descriptionLabel",                        "dirtyType": "UnityEngine.GUIContent",                        "cleanType": "GUIContent"                      },                      {                        "attributes": [                          "public",                          "GUIContent"                        ],                        "description": "Label next to getting started directory chooser button ",                        "accessMod": "public",                        "varName": "gettingStartedLabel",                        "dirtyType": "UnityEngine.GUIContent",                        "cleanType": "GUIContent"                      }                    ],                    "private": [                      {                        "attributes": [                          "string"                        ],                        "description": "The file path for the project ",                        "accessMod": "private",                        "varName": "projectFilePath",                        "dirtyType": "System.String",                        "cleanType": "string"                      },                      {                        "attributes": [                          "string"                        ],                        "description": "The file path for the website root folder, i.e, where build, src, public, and node modules folders are located ",                        "accessMod": "private",                        "varName": "websiteFilePath",                        "dirtyType": "System.String",                        "cleanType": "string"                      },                      {                        "attributes": [                          "string"                        ],                        "description": "The file path for the acknowledgements file ",                        "accessMod": "private",                        "varName": "acknowledgementFilePath",                        "dirtyType": "System.String",                        "cleanType": "string"                      },                      {                        "attributes": [                          "string"                        ],                        "description": "The file path for the description file ",                        "accessMod": "private",                        "varName": "descriptionFilePath",                        "dirtyType": "System.String",                        "cleanType": "string"                      },                      {                        "attributes": [                          "string"                        ],                        "description": "The file path for the description file ",                        "accessMod": "private",                        "varName": "gettingStartedFilePath",                        "dirtyType": "System.String",                        "cleanType": "string"                      },                      {                        "attributes": [                          "string"                        ],                        "description": "The acknowledgements file as a ```string``` \\n Initalize it to ```\"\"``` so that the app can run with out a specified file. ",                        "accessMod": "private",                        "varName": "acknowledgements",                        "dirtyType": "System.String",                        "cleanType": "string"                      },                      {                        "attributes": [                          "public",                          "GUIContent"                        ],                        "description": "Label next to description directory chooser button ",                        "accessMod": "private",                        "varName": "description",                        "dirtyType": "System.String",                        "cleanType": "GUIContent"                      },                      {                        "attributes": [                          "public",                          "GUIContent"                        ],                        "description": "Label next to getting started directory chooser button ",                        "accessMod": "private",                        "varName": "gettingStarted",                        "dirtyType": "System.String",                        "cleanType": "GUIContent"                      }                    ]                  },                  "inheritance": [                    " EditorWindow"                  ],                  "accessModifier": "public",                  "className": "GeneratorInterface",                  "description": " <summary> The UI interface used to display generation params and generation button </summary>",                  "filePath": "C:\\Users\\ericz\\Documents\\GitHub\\uDocuGen2\\Assets\\Editor\\uDocuGen2\\UI\\GeneratorInterface.cs",                  "nameSpace": "uDocumentGenerator.UI",                  "declaration": "public class GeneratorInterface : EditorWindow",                  "functions": {                    "private": [                      {                        "dirtyParamList": [                          {                            "Item1": "TextArray",                            "Item2": "System.Collections.Generic.List`1[System.String]",                            "Item3": null                          },                          {                            "Item1": "Search",                            "Item2": "System.String",                            "Item3": null                          }                        ],                        "cleanParamList": [                          {                            "Item1": "List<string> TextArray,",                            "Item2": null                          },                          {                            "Item1": "string Search",                            "Item2": null                          }                        ],                        "modifiers": [],                        "description": "Array Index is used in finiding the line index of a term in an array ",                        "accessModifier": "private",                        "functionName": "ArrayIndex"                      },                      {                        "dirtyParamList": [],                        "cleanParamList": [],                        "modifiers": [],                        "description": "<summary> When the UI is enabled </summary> ",                        "accessModifier": "private",                        "functionName": "OnEnable"                      },                      {                        "dirtyParamList": [],                        "cleanParamList": [],                        "modifiers": [],                        "description": "<summary> What to do when the GUI is shown </summary> ",                        "accessModifier": "private",                        "functionName": "OnGUI"                      }                    ],                    "public": [                      {                        "dirtyParamList": [],                        "cleanParamList": [],                        "modifiers": [                          "static"                        ],                        "description": "<summary> What happens when the window is shown. </summary> ",                        "accessModifier": "public",                        "functionName": "ShowWindow"                      }                    ]                  }                }              }            ],            "currentDirectory": "UI",            "filePaths": [              "\\UI\\GeneratorInterface.cs"            ],            "prevDirectory": "C:\\Users\\ericz\\Documents\\GitHub\\uDocuGen2\\Assets\\Editor\\uDocuGen2",            "fileRepresentation": null          }        ],        "currentDirectory": "uDocuGen2",        "filePaths": [          "\\uDocuGen2\\Conversion\\JsonConverter.cs"        ],        "prevDirectory": "C:\\Users\\ericz\\Documents\\GitHub\\uDocuGen2\\Assets\\Editor",        "fileRepresentation": null      }    ],    "currentDirectory": "Editor",    "filePaths": [      "\\Editor\\uDocuGen2\\Conversion\\JsonConverter.cs",      "\\Editor\\uDocuGen2\\Generation\\DocumentationGenerator.cs",      "\\Editor\\uDocuGen2\\Generation\\FileRepresentation.cs",      "\\Editor\\uDocuGen2\\Generation\\FunctionRepresentation.cs",      "\\Editor\\uDocuGen2\\Generation\\VariableRepresentation.cs",      "\\Editor\\uDocuGen2\\Helpers\\FileReader.cs",      "\\Editor\\uDocuGen2\\Helpers\\FileTree.cs",      "\\Editor\\uDocuGen2\\Helpers\\ProjectRepresentation.cs",      "\\Editor\\uDocuGen2\\Helpers\\TextSanitizer.cs",      "\\Editor\\uDocuGen2\\UI\\GeneratorInterface.cs"    ],    "prevDirectory": "C:\\Users\\ericz\\Documents\\GitHub\\uDocuGen2\\Assets",    "fileRepresentation": null  },  "fileList": [    "\\Editor\\uDocuGen2\\Conversion\\JsonConverter.cs",    "\\Editor\\uDocuGen2\\Generation\\DocumentationGenerator.cs",    "\\Editor\\uDocuGen2\\Generation\\FileRepresentation.cs",    "\\Editor\\uDocuGen2\\Generation\\FunctionRepresentation.cs",    "\\Editor\\uDocuGen2\\Generation\\VariableRepresentation.cs",    "\\Editor\\uDocuGen2\\Helpers\\FileReader.cs",    "\\Editor\\uDocuGen2\\Helpers\\FileTree.cs",    "\\Editor\\uDocuGen2\\Helpers\\ProjectRepresentation.cs",    "\\Editor\\uDocuGen2\\Helpers\\TextSanitizer.cs",    "\\Editor\\uDocuGen2\\UI\\GeneratorInterface.cs"  ],  "directoryExclusionsList": [    "\\Tests"  ]};const acknowledgements = `## **[react-bootstrap-table2](https://github.com/react-bootstrap-table/react-bootstrap-table2)**
MIT License

Copyright (c) 2018 react-bootstrap-table2

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## **[lodash](https://github.com/lodash/lodash)**

The MIT License

Copyright JS Foundation and other contributors <https://js.foundation/>

Based on Underscore.js, copyright Jeremy Ashkenas,
DocumentCloud and Investigative Reporters & Editors <http://underscorejs.org/>

This software consists of voluntary contributions made by many
individuals. For exact contribution history, see the revision history
available at https://github.com/lodash/lodash

The following license applies to all parts of this software except as
documented below:

====

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

====

Copyright and related rights for sample code are waived via CC0. Sample
code is defined as all source code displayed within the prose of the
documentation.

CC0: http://creativecommons.org/publicdomain/zero/1.0/

====

Files located in the node_modules and vendor directories are externally
maintained libraries used by this software which have their own
licenses; we recommend you read them, as their terms may differ from the
terms above.

## **[react-searchbar](https://github.com/OpusCapita/react-searchbar)**

MIT License

Copyright (c) 2018

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## **[grommet](https://github.com/grommet/grommet)**
Apache License
Version 2.0, January 2004
http://www.apache.org/licenses/

 TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

 1. Definitions.

    "License" shall mean the terms and conditions for use, reproduction,
    and distribution as defined by Sections 1 through 9 of this document.

    "Licensor" shall mean the copyright owner or entity authorized by
    the copyright owner that is granting the License.

    "Legal Entity" shall mean the union of the acting entity and all
    other entities that control, are controlled by, or are under common
    control with that entity. For the purposes of this definition,
    "control" means (i) the power, direct or indirect, to cause the
    direction or management of such entity, whether by contract or
    otherwise, or (ii) ownership of fifty percent (50%) or more of the
    outstanding shares, or (iii) beneficial ownership of such entity.

    "You" (or "Your") shall mean an individual or Legal Entity
    exercising permissions granted by this License.

    "Source" form shall mean the preferred form for making modifications,
    including but not limited to software source code, documentation
    source, and configuration files.

    "Object" form shall mean any form resulting from mechanical
    transformation or translation of a Source form, including but
    not limited to compiled object code, generated documentation,
    and conversions to other media types.

    "Work" shall mean the work of authorship, whether in Source or
    Object form, made available under the License, as indicated by a
    copyright notice that is included in or attached to the work
    (an example is provided in the Appendix below).

    "Derivative Works" shall mean any work, whether in Source or Object
    form, that is based on (or derived from) the Work and for which the
    editorial revisions, annotations, elaborations, or other modifications
    represent, as a whole, an original work of authorship. For the purposes
    of this License, Derivative Works shall not include works that remain
    separable from, or merely link (or bind by name) to the interfaces of,
    the Work and Derivative Works thereof.

    "Contribution" shall mean any work of authorship, including
    the original version of the Work and any modifications or additions
    to that Work or Derivative Works thereof, that is intentionally
    submitted to Licensor for inclusion in the Work by the copyright owner
    or by an individual or Legal Entity authorized to submit on behalf of
    the copyright owner. For the purposes of this definition, "submitted"
    means any form of electronic, verbal, or written communication sent
    to the Licensor or its representatives, including but not limited to
    communication on electronic mailing lists, source code control systems,
    and issue tracking systems that are managed by, or on behalf of, the
    Licensor for the purpose of discussing and improving the Work, but
    excluding communication that is conspicuously marked or otherwise
    designated in writing by the copyright owner as "Not a Contribution."

    "Contributor" shall mean Licensor and any individual or Legal Entity
    on behalf of whom a Contribution has been received by Licensor and
    subsequently incorporated within the Work.

 2. Grant of Copyright License. Subject to the terms and conditions of
    this License, each Contributor hereby grants to You a perpetual,
    worldwide, non-exclusive, no-charge, royalty-free, irrevocable
    copyright license to reproduce, prepare Derivative Works of,
    publicly display, publicly perform, sublicense, and distribute the
    Work and such Derivative Works in Source or Object form.

 3. Grant of Patent License. Subject to the terms and conditions of
    this License, each Contributor hereby grants to You a perpetual,
    worldwide, non-exclusive, no-charge, royalty-free, irrevocable
    (except as stated in this section) patent license to make, have made,
    use, offer to sell, sell, import, and otherwise transfer the Work,
    where such license applies only to those patent claims licensable
    by such Contributor that are necessarily infringed by their
    Contribution(s) alone or by combination of their Contribution(s)
    with the Work to which such Contribution(s) was submitted. If You
    institute patent litigation against any entity (including a
    cross-claim or counterclaim in a lawsuit) alleging that the Work
    or a Contribution incorporated within the Work constitutes direct
    or contributory patent infringement, then any patent licenses
    granted to You under this License for that Work shall terminate
    as of the date such litigation is filed.

 4. Redistribution. You may reproduce and distribute copies of the
    Work or Derivative Works thereof in any medium, with or without
    modifications, and in Source or Object form, provided that You
    meet the following conditions:

    (a) You must give any other recipients of the Work or
        Derivative Works a copy of this License; and

    (b) You must cause any modified files to carry prominent notices
        stating that You changed the files; and

    (c) You must retain, in the Source form of any Derivative Works
        that You distribute, all copyright, patent, trademark, and
        attribution notices from the Source form of the Work,
        excluding those notices that do not pertain to any part of
        the Derivative Works; and

    (d) If the Work includes a "NOTICE" text file as part of its
        distribution, then any Derivative Works that You distribute must
        include a readable copy of the attribution notices contained
        within such NOTICE file, excluding those notices that do not
        pertain to any part of the Derivative Works, in at least one
        of the following places: within a NOTICE text file distributed
        as part of the Derivative Works; within the Source form or
        documentation, if provided along with the Derivative Works; or,
        within a display generated by the Derivative Works, if and
        wherever such third-party notices normally appear. The contents
        of the NOTICE file are for informational purposes only and
        do not modify the License. You may add Your own attribution
        notices within Derivative Works that You distribute, alongside
        or as an addendum to the NOTICE text from the Work, provided
        that such additional attribution notices cannot be construed
        as modifying the License.

    You may add Your own copyright statement to Your modifications and
    may provide additional or different license terms and conditions
    for use, reproduction, or distribution of Your modifications, or
    for any such Derivative Works as a whole, provided Your use,
    reproduction, and distribution of the Work otherwise complies with
    the conditions stated in this License.

 5. Submission of Contributions. Unless You explicitly state otherwise,
    any Contribution intentionally submitted for inclusion in the Work
    by You to the Licensor shall be under the terms and conditions of
    this License, without any additional terms or conditions.
    Notwithstanding the above, nothing herein shall supersede or modify
    the terms of any separate license agreement you may have executed
    with Licensor regarding such Contributions.

 6. Trademarks. This License does not grant permission to use the trade
    names, trademarks, service marks, or product names of the Licensor,
    except as required for reasonable and customary use in describing the
    origin of the Work and reproducing the content of the NOTICE file.

 7. Disclaimer of Warranty. Unless required by applicable law or
    agreed to in writing, Licensor provides the Work (and each
    Contributor provides its Contributions) on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
    implied, including, without limitation, any warranties or conditions
    of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
    PARTICULAR PURPOSE. You are solely responsible for determining the
    appropriateness of using or redistributing the Work and assume any
    risks associated with Your exercise of permissions under this License.

 8. Limitation of Liability. In no event and under no legal theory,
    whether in tort (including negligence), contract, or otherwise,
    unless required by applicable law (such as deliberate and grossly
    negligent acts) or agreed to in writing, shall any Contributor be
    liable to You for damages, including any direct, indirect, special,
    incidental, or consequential damages of any character arising as a
    result of this License or out of the use or inability to use the
    Work (including but not limited to damages for loss of goodwill,
    work stoppage, computer failure or malfunction, or any and all
    other commercial damages or losses), even if such Contributor
    has been advised of the possibility of such damages.

 9. Accepting Warranty or Additional Liability. While redistributing
    the Work or Derivative Works thereof, You may choose to offer,
    and charge a fee for, acceptance of support, warranty, indemnity,
    or other liability obligations and/or rights consistent with this
    License. However, in accepting such obligations, You may act only
    on Your own behalf and on Your sole responsibility, not on behalf
    of any other Contributor, and only if You agree to indemnify,
    defend, and hold each Contributor harmless for any liability
    incurred by, or claims asserted against, such Contributor by reason
    of your accepting any such warranty or additional liability.

 END OF TERMS AND CONDITIONS
## **[grommet-icons](https://github.com/grommet/grommet-icons)**
Apache License
Version 2.0, January 2004
http://www.apache.org/licenses/

 TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

 1. Definitions.

    "License" shall mean the terms and conditions for use, reproduction,
    and distribution as defined by Sections 1 through 9 of this document.

    "Licensor" shall mean the copyright owner or entity authorized by
    the copyright owner that is granting the License.

    "Legal Entity" shall mean the union of the acting entity and all
    other entities that control, are controlled by, or are under common
    control with that entity. For the purposes of this definition,
    "control" means (i) the power, direct or indirect, to cause the
    direction or management of such entity, whether by contract or
    otherwise, or (ii) ownership of fifty percent (50%) or more of the
    outstanding shares, or (iii) beneficial ownership of such entity.

    "You" (or "Your") shall mean an individual or Legal Entity
    exercising permissions granted by this License.

    "Source" form shall mean the preferred form for making modifications,
    including but not limited to software source code, documentation
    source, and configuration files.

    "Object" form shall mean any form resulting from mechanical
    transformation or translation of a Source form, including but
    not limited to compiled object code, generated documentation,
    and conversions to other media types.

    "Work" shall mean the work of authorship, whether in Source or
    Object form, made available under the License, as indicated by a
    copyright notice that is included in or attached to the work
    (an example is provided in the Appendix below).

    "Derivative Works" shall mean any work, whether in Source or Object
    form, that is based on (or derived from) the Work and for which the
    editorial revisions, annotations, elaborations, or other modifications
    represent, as a whole, an original work of authorship. For the purposes
    of this License, Derivative Works shall not include works that remain
    separable from, or merely link (or bind by name) to the interfaces of,
    the Work and Derivative Works thereof.

    "Contribution" shall mean any work of authorship, including
    the original version of the Work and any modifications or additions
    to that Work or Derivative Works thereof, that is intentionally
    submitted to Licensor for inclusion in the Work by the copyright owner
    or by an individual or Legal Entity authorized to submit on behalf of
    the copyright owner. For the purposes of this definition, "submitted"
    means any form of electronic, verbal, or written communication sent
    to the Licensor or its representatives, including but not limited to
    communication on electronic mailing lists, source code control systems,
    and issue tracking systems that are managed by, or on behalf of, the
    Licensor for the purpose of discussing and improving the Work, but
    excluding communication that is conspicuously marked or otherwise
    designated in writing by the copyright owner as "Not a Contribution."

    "Contributor" shall mean Licensor and any individual or Legal Entity
    on behalf of whom a Contribution has been received by Licensor and
    subsequently incorporated within the Work.

 2. Grant of Copyright License. Subject to the terms and conditions of
    this License, each Contributor hereby grants to You a perpetual,
    worldwide, non-exclusive, no-charge, royalty-free, irrevocable
    copyright license to reproduce, prepare Derivative Works of,
    publicly display, publicly perform, sublicense, and distribute the
    Work and such Derivative Works in Source or Object form.

 3. Grant of Patent License. Subject to the terms and conditions of
    this License, each Contributor hereby grants to You a perpetual,
    worldwide, non-exclusive, no-charge, royalty-free, irrevocable
    (except as stated in this section) patent license to make, have made,
    use, offer to sell, sell, import, and otherwise transfer the Work,
    where such license applies only to those patent claims licensable
    by such Contributor that are necessarily infringed by their
    Contribution(s) alone or by combination of their Contribution(s)
    with the Work to which such Contribution(s) was submitted. If You
    institute patent litigation against any entity (including a
    cross-claim or counterclaim in a lawsuit) alleging that the Work
    or a Contribution incorporated within the Work constitutes direct
    or contributory patent infringement, then any patent licenses
    granted to You under this License for that Work shall terminate
    as of the date such litigation is filed.

 4. Redistribution. You may reproduce and distribute copies of the
    Work or Derivative Works thereof in any medium, with or without
    modifications, and in Source or Object form, provided that You
    meet the following conditions:

    (a) You must give any other recipients of the Work or
        Derivative Works a copy of this License; and

    (b) You must cause any modified files to carry prominent notices
        stating that You changed the files; and

    (c) You must retain, in the Source form of any Derivative Works
        that You distribute, all copyright, patent, trademark, and
        attribution notices from the Source form of the Work,
        excluding those notices that do not pertain to any part of
        the Derivative Works; and

    (d) If the Work includes a "NOTICE" text file as part of its
        distribution, then any Derivative Works that You distribute must
        include a readable copy of the attribution notices contained
        within such NOTICE file, excluding those notices that do not
        pertain to any part of the Derivative Works, in at least one
        of the following places: within a NOTICE text file distributed
        as part of the Derivative Works; within the Source form or
        documentation, if provided along with the Derivative Works; or,
        within a display generated by the Derivative Works, if and
        wherever such third-party notices normally appear. The contents
        of the NOTICE file are for informational purposes only and
        do not modify the License. You may add Your own attribution
        notices within Derivative Works that You distribute, alongside
        or as an addendum to the NOTICE text from the Work, provided
        that such additional attribution notices cannot be construed
        as modifying the License.

    You may add Your own copyright statement to Your modifications and
    may provide additional or different license terms and conditions
    for use, reproduction, or distribution of Your modifications, or
    for any such Derivative Works as a whole, provided Your use,
    reproduction, and distribution of the Work otherwise complies with
    the conditions stated in this License.

 5. Submission of Contributions. Unless You explicitly state otherwise,
    any Contribution intentionally submitted for inclusion in the Work
    by You to the Licensor shall be under the terms and conditions of
    this License, without any additional terms or conditions.
    Notwithstanding the above, nothing herein shall supersede or modify
    the terms of any separate license agreement you may have executed
    with Licensor regarding such Contributions.

 6. Trademarks. This License does not grant permission to use the trade
    names, trademarks, service marks, or product names of the Licensor,
    except as required for reasonable and customary use in describing the
    origin of the Work and reproducing the content of the NOTICE file.

 7. Disclaimer of Warranty. Unless required by applicable law or
    agreed to in writing, Licensor provides the Work (and each
    Contributor provides its Contributions) on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
    implied, including, without limitation, any warranties or conditions
    of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
    PARTICULAR PURPOSE. You are solely responsible for determining the
    appropriateness of using or redistributing the Work and assume any
    risks associated with Your exercise of permissions under this License.

 8. Limitation of Liability. In no event and under no legal theory,
    whether in tort (including negligence), contract, or otherwise,
    unless required by applicable law (such as deliberate and grossly
    negligent acts) or agreed to in writing, shall any Contributor be
    liable to You for damages, including any direct, indirect, special,
    incidental, or consequential damages of any character arising as a
    result of this License or out of the use or inability to use the
    Work (including but not limited to damages for loss of goodwill,
    work stoppage, computer failure or malfunction, or any and all
    other commercial damages or losses), even if such Contributor
    has been advised of the possibility of such damages.

 9. Accepting Warranty or Additional Liability. While redistributing
    the Work or Derivative Works thereof, You may choose to offer,
    and charge a fee for, acceptance of support, warranty, indemnity,
    or other liability obligations and/or rights consistent with this
    License. However, in accepting such obligations, You may act only
    on Your own behalf and on Your sole responsibility, not on behalf
    of any other Contributor, and only if You agree to indemnify,
    defend, and hold each Contributor harmless for any liability
    incurred by, or claims asserted against, such Contributor by reason
    of your accepting any such warranty or additional liability.

 END OF TERMS AND CONDITIONS
## **[highlight.js](https://github.com/highlightjs/highlight.js)**

Copyright (c) 2006, Ivan Sagalaev

All rights reserved.

Redistribution and use in source and binary forms, with or without

modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright

notice, this list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright

notice, this list of conditions and the following disclaimer in the

documentation and/or other materials provided with the distribution.

* Neither the name of highlight.js nor the names of its contributors

may be used to endorse or promote products derived from this software

without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE REGENTS AND CONTRIBUTORS \`\`AS IS'' AND ANY

EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED

WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE

DISCLAIMED. IN NO EVENT SHALL THE REGENTS AND CONTRIBUTORS BE LIABLE FOR ANY

DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES

(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;

LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND

ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT

(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS

SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

## **[prism](https://github.com/PrismJS/prism)**

MIT LICENSE

Copyright (c) 2012 Lea Verou

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

## **[react](https://github.com/facebook/react)**
MIT License

Copyright (c) Facebook, Inc. and its affiliates.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## **[prop-types](https://github.com/facebook/prop-types)**

MIT License

Copyright (c) 2013-present, Facebook, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## **[list.js](https://github.com/javve/list.js)**

The MIT License (MIT)

Copyright (c) 2011-2018 Jonny Strömberg, jonnystromberg.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

## **[React-autobind](https://github.com/cassiozen/React-autobind)**

The MIT License (MIT)

Copyright (c) 2016 Cássio Souza

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## **[react-bootstrap](https://github.com/react-bootstrap/react-bootstrap)**

The MIT License (MIT)

Copyright (c) 2014-present Stephen J. Collings, Matthew Honnibal, Pieter Vanderwerff

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

## **[react-horizontal-scrolling-menu](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu)**

MIT License

Copyright (c) 2018 Alex

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## **[react-markdown](https://github.com/rexxars/react-markdown)**
The MIT License (MIT)

Copyright (c) 2015 Espen Hovlandsdal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## **[TypeScript](https://github.com/microsoft/TypeScript)**

Apache License

Version 2.0, January 2004

[http://www.apache.org/licenses/](http://www.apache.org/licenses/)

TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

1.  Definitions.

"License" shall mean the terms and conditions for use, reproduction, and distribution as defined by Sections 1 through 9 of this document.

"Licensor" shall mean the copyright owner or entity authorized by the copyright owner that is granting the License.

"Legal Entity" shall mean the union of the acting entity and all other entities that control, are controlled by, or are under common control with that entity. For the purposes of this definition, "control" means (i) the power, direct or indirect, to cause the direction or management of such entity, whether by contract or otherwise, or (ii) ownership of fifty percent (50%) or more of the outstanding shares, or (iii) beneficial ownership of such entity.

"You" (or "Your") shall mean an individual or Legal Entity exercising permissions granted by this License.

"Source" form shall mean the preferred form for making modifications, including but not limited to software source code, documentation source, and configuration files.

"Object" form shall mean any form resulting from mechanical transformation or translation of a Source form, including but not limited to compiled object code, generated documentation, and conversions to other media types.

"Work" shall mean the work of authorship, whether in Source or Object form, made available under the License, as indicated by a copyright notice that is included in or attached to the work (an example is provided in the Appendix below).

"Derivative Works" shall mean any work, whether in Source or Object form, that is based on (or derived from) the Work and for which the editorial revisions, annotations, elaborations, or other modifications represent, as a whole, an original work of authorship. For the purposes of this License, Derivative Works shall not include works that remain separable from, or merely link (or bind by name) to the interfaces of, the Work and Derivative Works thereof.

"Contribution" shall mean any work of authorship, including the original version of the Work and any modifications or additions to that Work or Derivative Works thereof, that is intentionally submitted to Licensor for inclusion in the Work by the copyright owner or by an individual or Legal Entity authorized to submit on behalf of the copyright owner. For the purposes of this definition, "submitted" means any form of electronic, verbal, or written communication sent to the Licensor or its representatives, including but not limited to communication on electronic mailing lists, source code control systems, and issue tracking systems that are managed by, or on behalf of, the Licensor for the purpose of discussing and improving the Work, but excluding communication that is conspicuously marked or otherwise designated in writing by the copyright owner as "Not a Contribution."

"Contributor" shall mean Licensor and any individual or Legal Entity on behalf of whom a Contribution has been received by Licensor and subsequently incorporated within the Work.

2.  Grant of Copyright License. Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare Derivative Works of, publicly display, publicly perform, sublicense, and distribute the Work and such Derivative Works in Source or Object form.
    
3.  Grant of Patent License. Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable (except as stated in this section) patent license to make, have made, use, offer to sell, sell, import, and otherwise transfer the Work, where such license applies only to those patent claims licensable by such Contributor that are necessarily infringed by their Contribution(s) alone or by combination of their Contribution(s) with the Work to which such Contribution(s) was submitted. If You institute patent litigation against any entity (including a cross-claim or counterclaim in a lawsuit) alleging that the Work or a Contribution incorporated within the Work constitutes direct or contributory patent infringement, then any patent licenses granted to You under this License for that Work shall terminate as of the date such litigation is filed.
    
4.  Redistribution. You may reproduce and distribute copies of the Work or Derivative Works thereof in any medium, with or without modifications, and in Source or Object form, provided that You meet the following conditions:
    

You must give any other recipients of the Work or Derivative Works a copy of this License; and

You must cause any modified files to carry prominent notices stating that You changed the files; and

You must retain, in the Source form of any Derivative Works that You distribute, all copyright, patent, trademark, and attribution notices from the Source form of the Work, excluding those notices that do not pertain to any part of the Derivative Works; and

If the Work includes a "NOTICE" text file as part of its distribution, then any Derivative Works that You distribute must include a readable copy of the attribution notices contained within such NOTICE file, excluding those notices that do not pertain to any part of the Derivative Works, in at least one of the following places: within a NOTICE text file distributed as part of the Derivative Works; within the Source form or documentation, if provided along with the Derivative Works; or, within a display generated by the Derivative Works, if and wherever such third-party notices normally appear. The contents of the NOTICE file are for informational purposes only and do not modify the License. You may add Your own attribution notices within Derivative Works that You distribute, alongside or as an addendum to the NOTICE text from the Work, provided that such additional attribution notices cannot be construed as modifying the License. You may add Your own copyright statement to Your modifications and may provide additional or different license terms and conditions for use, reproduction, or distribution of Your modifications, or for any such Derivative Works as a whole, provided Your use, reproduction, and distribution of the Work otherwise complies with the conditions stated in this License.

5.  Submission of Contributions. Unless You explicitly state otherwise, any Contribution intentionally submitted for inclusion in the Work by You to the Licensor shall be under the terms and conditions of this License, without any additional terms or conditions. Notwithstanding the above, nothing herein shall supersede or modify the terms of any separate license agreement you may have executed with Licensor regarding such Contributions.
    
6.  Trademarks. This License does not grant permission to use the trade names, trademarks, service marks, or product names of the Licensor, except as required for reasonable and customary use in describing the origin of the Work and reproducing the content of the NOTICE file.
    
7.  Disclaimer of Warranty. Unless required by applicable law or agreed to in writing, Licensor provides the Work (and each Contributor provides its Contributions) on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE. You are solely responsible for determining the appropriateness of using or redistributing the Work and assume any risks associated with Your exercise of permissions under this License.
    
8.  Limitation of Liability. In no event and under no legal theory, whether in tort (including negligence), contract, or otherwise, unless required by applicable law (such as deliberate and grossly negligent acts) or agreed to in writing, shall any Contributor be liable to You for damages, including any direct, indirect, special, incidental, or consequential damages of any character arising as a result of this License or out of the use or inability to use the Work (including but not limited to damages for loss of goodwill, work stoppage, computer failure or malfunction, or any and all other commercial damages or losses), even if such Contributor has been advised of the possibility of such damages.
    
9.  Accepting Warranty or Additional Liability. While redistributing the Work or Derivative Works thereof, You may choose to offer, and charge a fee for, acceptance of support, warranty, indemnity, or other liability obligations and/or rights consistent with this License. However, in accepting such obligations, You may act only on Your own behalf and on Your sole responsibility, not on behalf of any other Contributor, and only if You agree to indemnify, defend, and hold each Contributor harmless for any liability incurred by, or claims asserted against, such Contributor by reason of your accepting any such warranty or additional liability.
    

END OF TERMS AND CONDITIONS

## **[styled-components](https://github.com/styled-components/styled-components)**

MIT License

Copyright (c) 2016-present Glen Maddern and Maximilian Stoiber

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## **[react-splitter-layout](https://github.com/zesik/react-splitter-layout)**

Copyright (c) 2016 Yang Liu <hi@zesik.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## **[react-simple-tree-menu](https://github.com/iannbing/react-simple-tree-menu)**

MIT License

Copyright (c) 2018 Huang-Ming Chang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## **[react-search-box](https://github.com/ghoshnirmalya/react-search-box)**
MIT Licensed. Copyright (c) Nirmalya Ghosh 2019.

## **[react-syntax-highlighter](https://github.com/conorhastings/react-syntax-highlighter)**

MIT License

Copyright (c) 2019 Conor Hastings

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`;const description = `The goal of uDocumentGenerator is innovate on making documentation generation for Unity as plug and play as possible while generating a modern, easy to use website that is designed to make finding fields, methods and classes as painless as possible. I came up with this idea as a result of  generating documentation for my [Open Source Pause Menu](https://forum.unity.com/threads/wip-unity-open-source-pause-menu.386495/). The documentation generator I used got the information correctly at the cost of a messy generated folder structure and a sub optimal/ugly website.  


Being version 1.0, there are some drawbacks such as not generating for more than one class per file, but those can be easily remedied as the code is encapsulated. It currently deals extremely well with a normally formatted and commented project, meaning that within minutes, you'll have a custom documentation website for your project. At the moment the only things you may want to change code wise are: the title tag in the React app, the social media links, and the logo.  
`;const userInformation = {"projectName": "uDocumentGenerator","authorName": "Eric Zhu","version": "1.0",};const gettingStarted = `# Getting Started

This guide is organized into 4 parts: 

 1. [Installation](#installation)
 2. [Getting Started](#gettingstarted)
 3. [Customisation](#customisation)
 4. [Best Practices](#bestpractices)
 
## Installation 
<a name="installation"/>
Installation should be quick and fairly painless. The main installation step is to download the React App portion of uDocumentGenerator from [Github](https://github.com/GreatArcStudios/uDocumentGenerator). 
If you haven't used Github before, you have 3 options: 

 1. Fork the repo - press the fork button
 2. Clone the repo -  \`\`\`git clone\`\`\`
 3. Download the repo - press **clone or download** and then **download zip**

While these are all viable options, I'd really appreciate a fork as that helps out with the repo's statistics and builds a community more so than the two other options.

After downloading, locate where the repo was downloaded to. If you used \`\`\`git clone\`\`\`, it'll be in your user's root directory. 

You don't need \`\`\`npm\`\`\` installed to use this, but there'd be a couple of drawbacks:

 1. You can't create new optimized builds. 
 2. It's a bit more work to change the logo/social media links

I highly recommend installing \`\`\`npm\`\`\` because it's critical for customising/extending uDocumentGenerator. Although, **both routes** should take only a few minutes to get the React App customised and running.

I'll have a guide below detailing steps to use uDocumentGenerator below without ever generating builds/installing \`\`\`npm\`\`\`. 

### Installing npm

The instructions for Windows are found [here](https://blog.teamtreehouse.com/install-node-js-npm-windows). But the **TLDR** is to go to the node.js [website](https://nodejs.org/en/), download the appropriate installer, and make sure to install \`\`\`npm\`\`\` during \`\`\`node.js\`\`\` installation. 

The instructions for MacOS are found [here](https://treehouse.github.io/installation-guides/mac/node-mac.html). You may have to first install \`\`\`homebrew\`\`\`, but the **TLDR** is that you need to run \`\`\`brew update\`\`\`  and then \`\`\`brew install node\`\`\`. 

The instruction for Linux are found [here](https://nodejs.org/en/download/package-manager/). But the **TLDR** is that you should read over the article at the link.


## Getting Started 
<a name="gettingstarted"/>
If you want to see your comments turned into a website immediately, all you need to do is fill out the fields in the editor extension window.

 The website template drop down should point to where the \`\`\`data\`\`\` folder in \`\`\`build\`\`\` folder is. You may change this (instructions below) if you decide to create a new build of the React App. 

Alternatively, if you don't want to use the build version, have website template drop down point to where \`\`\`src\`\`\` in  \`\`\`<script src="%PUBLIC_URL%/data/config.js"  type="text/javascript">\`\`\` points to. By default that'd be the \`\`\`data\`\`\` folder nested inside the \`\`\`public\`\`\` folder. 

The acknowledgement, project description, and getting started file path drop downs are all to point to where you've saved your respective files. There's a \`\`\`test.txt\`\`\` file in the \`\`\`UI\`\`\` folder of the \`\`\`Editor\`\`\` folder that you can use as a placeholder for all 3 of those fields. 

After filling in those fields, just click \`\`\`Generate\`\`\` to generate \`\`\`config.js\`\`\`. 

All that's left is to check out your documentation website 🎉. 

If you saved \`\`\`config.js\`\`\` to the build folder, click on \`\`\`index.html\`\`\` in the build folder to see your website. 

Alternatively, run \`\`\`npm start\`\`\` after navigating into the project directory, and then in your browser, go to [http://localhost:3000](http://localhost:3000). 

## Customising uDocumentGenerator 
<a name="customisation"/>

### With npm installed 
With \`\`\`npm\`\`\` installed, customising uDocumentGenerator becomes easy. 

It's also worth noting that using a good IDE such as [Webstorm](https://www.jetbrains.com/webstorm/) makes customisation even easier due to integration with \`\`\`npm\`\`\`. 


### Basic Customisation

\`\`\`index.html\`\`\` in the public folder is where you'll find logo customisation and webpage title customisation options. 

To change the logo, change the string \`\`\`"%PUBLIC_URL%/data/abstractlogo.png\`\`\` to where your logo is located. 

> **React note:** \`\`\`%PUBLIC_URL%\`\`\` is the public folder you see in the project structure. 

To change the title, change \`\`\`<title>DOCUMENTATION TITLE</title>\`\`\` to what you want the title to be.

Additionally in \`\`\`index.html\`\`\`, you'll find \`\`\`<script src="%PUBLIC_URL%/data/config.js" type="text/javascript"></script>\`\`\`. This is the file path to the config file. You can change this if you want, but keep the file path pointing to \`\`\`config.js\`\`\` unless you plan on saving to a different file name in the generation process. 

To change the social media links go to \`\`\`App.js\`\`\` in the \`\`\`src\`\`\` folder. In \`\`\`App.js\`\`\`,  find the \`\`\`createFooter\`\`\` method.  Change the links to what you want them to be. Additionally, you may choose to change the link icons by going to [font awesome](https://fontawesome.com/?from=io). Make sure to choose icons that are of the class \`\`\`fa-2x\`\`\`, which will maintain the default formatting. 


### Advanced Customisation - most of this section will require familiarity with React.js

If you take a look at \`\`\`config.js\`\`\` there's extra data that isn't displayed on the front end. You may want to get a head start on displaying that data or add your own data, and this section will tell you what to watch for. 

> **Note:** that data isn't displayed because I don't believe right now it'll add much, if any, value.  


### Passing in extra data into the app

Data is passed into the app through \`\`\`config.js\`\`\`. The main data is passed in through the \`\`\`config\`\`\` variable.  Other data such as acknowledgements, the project description, etc... are passed in as separate variables. If you want to pass in other generated data (such as project year), you should do that as a separate variable in \`\`\`config.js\`\`\`. Then in \`\`\`index.js\`\`\` pass it into \`\`\`app.js\`\`\` as a prop. 


### Page control

uDocumentGenerator displays pages in a Grommet Box, and it uses variables and a page array to change pages. The variable that keep track of the open page is called \`\`\`openPage\`\`\` (SUPRISE!). It belongs to the state of \`\`\`App\`\`\`, so updating its value updates the displayed page. \`\`\`changePage\`\`\`  is used (and passed down) as a method called to change the page by updating \`\`\`openPage\`\`\`. 

If you decide to add an extra page, make sure to add an entry to \`\`\`navItems\`\`\` in the \`\`\`NavbarBootstrap\`\`\` component. Make sure that the indices match those of \`\`\`this.pages\`\`\` in \`\`\`App.js\`\`\` to correctly handle page changing. 

If you decide to handle page changing with in a page, make sure to pass in \`\`\`changePage\`\`\` from \`\`\`App.js\`\`\` to that page. 


### "Multi-functional" page control

Just changing the page is pretty simple: pass in \`\`\`changePage\`\`\` as a prop. Changing a page and performing another task is a bit more challenging. 

The example we'll examine is the \`\`\`Card\`\`\` component defined in \`\`\`Card.js\`\`\`.  A \`\`\`Card\`\`\` is meant to display a class's description and name on the landing page, and, when clicked, it's meant to navigate to the classes page and display the corresponding data on the classes page. All cards are also nested not only on the landing page but also in a \`\`\`CardList\`\`\`. This means that \`\`\`changePage\`\`\` will have to be passed down from  like so: \`\`\`App -> Landing -> CardList -> Card\`\`\`. In \`\`\`Card\`\`\` we'll also pass in the \`\`\`index\`\`\` parameter into \`\`\`changePage\`\`\` (we've also made sure that indices stay consistent). Since \`\`\`changePage\`\`\`is bound to \`\`\`App\`\`\` , executing \`\`\`changePage\`\`\` in \`\`\`Card\`\`\` will work as expected. Also since  \`\`\`this.pages\`\`\` is assigned in the \`\`\`render\`\`\` method, allowing us to pass in the updated props to \`\`\`Classes\`\`\` every time the UI updates. 

The key takeaways from this are: 

 1. Make sure to correctly bind functions you're going to pass. 
 2. Make sure to pass a function deep enough to your desired component.
 3. Make sure to keep your indices aligned if you're using them to keep track of pages/data
 4. Make sure that you have a way of updating, visually, components that are meant to receive updated data.


### Updating components during runtime**

In React, it's a good idea to make   changing data a state to update the UI. Yet, \`\`\`filteredFunctionData\`\`\` (the list of MethodBoxes) in \`\`\`ClassBox.js\`\`\` would update incorrectly. The number of MethodBoxes were correct, but the content was still the old content. This is likely due to React optimizations regarding replacing components of the same type (the old list of MethodBoxes gets replaced with a new list). To circumvent this, we have an intermediate step that replaces the list of MethodBoxes with a different type (in this case an empty list). This is implemented in \`\`\`Classes.js\`\`\`:
\`\`\`javascript
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
\`\`\`
So whenever the \`\`\`displayIndex\`\`\` is updated, i.e, a new class needs to be displayed, \`\`\`Classes\`\`\` will replace the list of MethodBoxes in \`\`\`ClassBox\`\`\` with an empty list. This will cause \`\`\`ClassBox\`\`\` to update and call \`\`\`componentDidUpdate\`\`\`, which ultimately sets the MethodBox to show correct data: 

\`\`\`javascript
// update the values if Classes makes filteredFunctionData an empty list and the data was updated
if (this.state.filteredFunctionData.length === 0 && prevState.functionData !== this.state.functionData) {
	this.setState({filteredFunctionData: this.state.functionData});
}
\`\`\`

**TLDR**: The key takeaway from this workaround is that, if you are building/extending a control that replaces data of one type with data of a the same type, you need to do something along the lines of: 

\`\`\`
type a -> type b -> type a
\`\`\`
> **Note:** text is an exception to this rule, so replacing "test" in \`\`\`<p> test </p>\`\`\` with \`\`\`<p> testing</p>\`\`\` can be directly done.


### Changing theme colours

Look for where css \`\`\`color\`\`\` and \`\`\`background-color\`\`\` tags are defined. I've kept the default theme consistent, so finding the hex codes using \`\`\`CTRL/CMD-F\`\`\` to change them should be simple.

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

To change syntax highlighting styles, first decide which markdown renderer you want to customise. All of the renderers are in \`\`\`Markdown-Render\`\`\`.  All code blocks are covered by \`\`\`highlight.js\`\`\`, so look here for [themes](https://highlightjs.org/static/demo/). The code block theme is currently the Dracula theme, so if you change that, you'll probably want to change the MethodBox background colour too. All inline code are covered by \`\`\`react-syntax-highlighter\`\`\` prism [themes](https://github.com/conorhastings/react-syntax-highlighter/blob/master/AVAILABLE_STYLES_PRISM.MD). 


### A note about visual studio generated comment XML

Using \`\`\`///\`\`\` as your comment of choice in Visual Studio will generate XML tags such as \`\`\`<summary>\`\`\`. These are removed by \`\`\`ProcessJSON.cleanFormatDescription\`\`\` so that the markdown generator can process markdown correctly. If you need these tags, just change this method. 

 
### Without  npm  installed

Without \`\`\`npm\`\`\` installed, you'll have to modify \`\`\`index.html\`\`\` in the build folder. 
> **Note:** without \`\`\`npm\`\`\` you don't need to worry about any folder besides the build folder

The best way to customise the app is to go through the strings you need to customise one by one. You'd want to first [format](https://www.freeformatter.com/html-formatter.html) \`\`\`index.html\`\`\` as it is currently minified. You'll have 5 strings to modify across 2 files. 

 1. Change the documentation title by replacing DOCUMENTATION TITLE in \`\`index.html\`\` with your title
 2. Change the logo by replacing \`\`\`./data/abstractlogo.png\`\`\` in \`\`index.html\`\` in to the file path of your logo. Since the React App is configured by default to use \`\`\`./\`\`\` as the root, use \`\`\`./\`\`\` as the start point for your file path, e.g, if your logo is in an images folder write \`\`\`./images/logo.png\`\`\`. 
 3. Change the Github social link by first finding \`\`\`createElement("a",{href:"https://github.com/GreatArcStudios"},"\`\`\` in the a js  file that has a file name that starts with \`\`\`main\`\`\`  under \`\`\`build -> static -> js\`\`\`. Next, replace the link string with your Github link. 
 4. Change the Twitter social link by first finding \`\`\`createElement("a",{href:"https://twitter.com/GArcStudios"},"\`\`\` in the a js file that has a file name that starts with \`\`\`main\`\`\`  under \`\`\`build -> static -> js\`\`\`. Next, replace the link string with your Twitter link. 
 5. Change the email social link by first finding \`\`\`createElement("a",{href:"mailto:ericz2241@gmail.com"},"\`\`\` in the a js file that has a file name that starts with \`\`\`main\`\`\`  under \`\`\`build -> static -> js\`\`\`. Next, replace the link string with your email link. 
 
 
## Best practices 
<a name="bestpractices"/>

 - To write your acknowledgement, project description, and getting
   started files, I'd recommend using [stackedit.io](stackedit.io) as
   your markdown  editor.
 - To theme the React App, I'd recommend using [coolors.co](https://coolors.co/) to generate a bunch of colour themes. 
 - When writing descriptions in  markdown make sure to use \`\`\`\\n\`\`\` to indicate new lines. The description crawler does not use the new lines in \`\`\`C#\`\`\` files because it allows for you to better format your comments in code. For example, to indicate a list (ordered or not) make sure to do two new lines:  \`\`\`\\n\\n\`\`\`. 
 - When creating new components, try to use \`\`\`styled-components\`\`\`. Sometimes that difficult because libraries/components are already written with a separate stylesheet. In that case, writing a separate stylesheet is a great option
 - Components created from styled components will override those created from separate style sheets (including node modules). So when building your version of the app make sure to check for style issues. If there are discrepancies between the build and what you see from running it on the localhost, just add \`\`\`!important\`\`\` to that style. 
 - Declare your variables before your methods in your Unity project. If you don't do that, uDocumentGenerator won't record your variables.
 - For deployment, the current setup works for standalone/downloaded documentation. This is also the setup used with Github pages right now. Alternatively, you can check out the \`\`\`create react app\`\`\` [page](https://facebook.github.io/create-react-app/docs/deployment) for information about custom deployment.
`;