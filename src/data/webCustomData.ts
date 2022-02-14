/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
// file generated from @vscode/web-custom-data NPM package

import { CSSDataV1 } from '../cssLanguageTypes';

export const cssData : CSSDataV1 = {
	"version": 1.1,
	"properties": [
		{
			"name": "animation",
			"values": [
				{
					"name": "alternate",
					"description": "The animation cycle iterations that are odd counts are played in the normal direction, and the animation cycle iterations that are even counts are played in a reverse direction."
				},
				{
					"name": "alternate-reverse",
					"description": "The animation cycle iterations that are odd counts are played in the reverse direction, and the animation cycle iterations that are even counts are played in a normal direction."
				},
				{
					"name": "backwards",
					"description": "The beginning property value (as defined in the first @keyframes at-rule) is applied before the animation is displayed, during the period defined by 'animation-delay'."
				},
				{
					"name": "both",
					"description": "Both forwards and backwards fill modes are applied."
				},
				{
					"name": "forwards",
					"description": "The final property value (as defined in the last @keyframes at-rule) is maintained after the animation completes."
				},
				{
					"name": "infinite",
					"description": "Causes the animation to repeat forever."
				},
				{
					"name": "none",
					"description": "No animation is performed"
				},
				{
					"name": "normal",
					"description": "Normal playback."
				},
				{
					"name": "reverse",
					"description": "All iterations of the animation are played in the reverse direction from the way they were specified."
				}
			],
			"syntax": "<single-animation>#",
			"relevance": 82,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/animation"
				}
			],
			"description": "Shorthand property combines six of the animation properties into a single property.",
			"restrictions": [
				"time",
				"timing-function",
				"enum",
				"identifier",
				"number"
			]
		},
		{
			"name": "animation-delay",
			"syntax": "<time>#",
			"relevance": 63,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/animation-delay"
				}
			],
			"description": "Defines when the animation will start.",
			"restrictions": [
				"time"
			]
		},
		{
			"name": "animation-direction",
			"values": [
				{
					"name": "alternate",
					"description": "The animation cycle iterations that are odd counts are played in the normal direction, and the animation cycle iterations that are even counts are played in a reverse direction."
				},
				{
					"name": "alternate-reverse",
					"description": "The animation cycle iterations that are odd counts are played in the reverse direction, and the animation cycle iterations that are even counts are played in a normal direction."
				},
				{
					"name": "normal",
					"description": "Normal playback."
				},
				{
					"name": "reverse",
					"description": "All iterations of the animation are played in the reverse direction from the way they were specified."
				}
			],
			"syntax": "<single-animation-direction>#",
			"relevance": 56,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/animation-direction"
				}
			],
			"description": "Defines whether or not the animation should play in reverse on alternate cycles.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "animation-duration",
			"syntax": "<time>#",
			"relevance": 70,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/animation-duration"
				}
			],
			"description": "Defines the length of time that an animation takes to complete one cycle.",
			"restrictions": [
				"time"
			]
		},
		{
			"name": "animation-fill-mode",
			"values": [
				{
					"name": "backwards",
					"description": "The beginning property value (as defined in the first @keyframes at-rule) is applied before the animation is displayed, during the period defined by 'animation-delay'."
				},
				{
					"name": "both",
					"description": "Both forwards and backwards fill modes are applied."
				},
				{
					"name": "forwards",
					"description": "The final property value (as defined in the last @keyframes at-rule) is maintained after the animation completes."
				},
				{
					"name": "none",
					"description": "There is no change to the property value between the time the animation is applied and the time the animation begins playing or after the animation completes."
				}
			],
			"syntax": "<single-animation-fill-mode>#",
			"relevance": 63,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode"
				}
			],
			"description": "Defines what values are applied by the animation outside the time it is executing.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "animation-iteration-count",
			"values": [
				{
					"name": "infinite",
					"description": "Causes the animation to repeat forever."
				}
			],
			"syntax": "<single-animation-iteration-count>#",
			"relevance": 60,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/animation-iteration-count"
				}
			],
			"description": "Defines the number of times an animation cycle is played. The default value is one, meaning the animation will play from beginning to end once.",
			"restrictions": [
				"number",
				"enum"
			]
		},
		{
			"name": "animation-name",
			"values": [
				{
					"name": "none",
					"description": "No animation is performed"
				}
			],
			"syntax": "[ none | <keyframes-name> ]#",
			"relevance": 70,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/animation-name"
				}
			],
			"description": "Defines a list of animations that apply. Each name is used to select the keyframe at-rule that provides the property values for the animation.",
			"restrictions": [
				"identifier",
				"enum"
			]
		},
		{
			"name": "animation-timing-function",
			"syntax": "<easing-function>#",
			"relevance": 70,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/animation-timing-function"
				}
			],
			"description": "Describes how the animation will progress over one cycle of its duration.",
			"restrictions": [
				"timing-function"
			]
		},
		{
			"name": "background-color",
			"syntax": "<color>",
			"relevance": 94,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/background-color"
				}
			],
			"description": "Sets the background color of an element.",
			"restrictions": [
				"color"
			]
		},
		{
			"name": "background-image",
			"values": [
				{
					"name": "none",
					"description": "Counts as an image layer but draws nothing."
				}
			],
			"syntax": "<bg-image>#",
			"relevance": 89,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/background-image"
				}
			],
			"description": "Sets the background image(s) of an element.",
			"restrictions": [
				"image",
				"enum"
			]
		},
		{
			"name": "background-position",
			"syntax": "<bg-position>#",
			"relevance": 88,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/background-position"
				}
			],
			"description": "Specifies the initial position of the background image(s) (after any resizing) within their corresponding background positioning area.",
			"restrictions": [
				"position",
				"length",
				"percentage"
			]
		},
		{
			"name": "background-repeat",
			"values": [],
			"syntax": "<repeat-style>#",
			"relevance": 86,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/background-repeat"
				}
			],
			"description": "Specifies how background images are tiled after they have been sized and positioned.",
			"restrictions": [
				"repeat"
			]
		},
		{
			"name": "background-size",
			"values": [
				{
					"name": "auto",
					"description": "Resolved by using the image’s intrinsic ratio and the size of the other dimension, or failing that, using the image’s intrinsic size, or failing that, treating it as 100%."
				},
				{
					"name": "contain",
					"description": "Scale the image, while preserving its intrinsic aspect ratio (if any), to the largest size such that both its width and its height can fit inside the background positioning area."
				},
				{
					"name": "cover",
					"description": "Scale the image, while preserving its intrinsic aspect ratio (if any), to the smallest size such that both its width and its height can completely cover the background positioning area."
				}
			],
			"syntax": "<bg-size>#",
			"relevance": 86,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/background-size"
				}
			],
			"description": "Specifies the size of the background images.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			"name": "border",
			"syntax": "<line-width> || <line-style> || <color>",
			"relevance": 96,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border"
				}
			],
			"description": "Shorthand property for setting border width, style, and color.",
			"restrictions": [
				"length",
				"line-width",
				"line-style",
				"color"
			]
		},
		{
			"name": "border-bottom",
			"syntax": "<line-width> || <line-style> || <color>",
			"relevance": 89,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-bottom"
				}
			],
			"description": "Shorthand property for setting border width, style and color.",
			"restrictions": [
				"length",
				"line-width",
				"line-style",
				"color"
			]
		},
		{
			"name": "border-bottom-color",
			"syntax": "<'border-top-color'>",
			"relevance": 71,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-bottom-color"
				}
			],
			"description": "Sets the color of the bottom border.",
			"restrictions": [
				"color"
			]
		},
		{
			"name": "border-bottom-left-radius",
			"syntax": "<length-percentage>{1,2}",
			"relevance": 75,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius"
				}
			],
			"description": "Defines the radii of the bottom left outer border edge.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			"name": "border-bottom-right-radius",
			"syntax": "<length-percentage>{1,2}",
			"relevance": 74,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius"
				}
			],
			"description": "Defines the radii of the bottom right outer border edge.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			"name": "border-bottom-style",
			"syntax": "<line-style>",
			"relevance": 58,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-bottom-style"
				}
			],
			"description": "Sets the style of the bottom border.",
			"restrictions": [
				"line-style"
			]
		},
		{
			"name": "border-bottom-width",
			"syntax": "<line-width>",
			"relevance": 62,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-bottom-width"
				}
			],
			"description": "Sets the thickness of the bottom border.",
			"restrictions": [
				"length",
				"line-width"
			]
		},
		{
			"name": "border-color",
			"values": [],
			"syntax": "<color>{1,4}",
			"relevance": 87,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-color"
				}
			],
			"description": "The color of the border around all four edges of an element.",
			"restrictions": [
				"color"
			]
		},
		{
			"name": "border-left",
			"syntax": "<line-width> || <line-style> || <color>",
			"relevance": 83,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-left"
				}
			],
			"description": "Shorthand property for setting border width, style and color",
			"restrictions": [
				"length",
				"line-width",
				"line-style",
				"color"
			]
		},
		{
			"name": "border-left-color",
			"syntax": "<color>",
			"relevance": 65,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-left-color"
				}
			],
			"description": "Sets the color of the left border.",
			"restrictions": [
				"color"
			]
		},
		{
			"name": "border-left-style",
			"syntax": "<line-style>",
			"relevance": 53,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-left-style"
				}
			],
			"description": "Sets the style of the left border.",
			"restrictions": [
				"line-style"
			]
		},
		{
			"name": "border-left-width",
			"syntax": "<line-width>",
			"relevance": 58,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-left-width"
				}
			],
			"description": "Sets the thickness of the left border.",
			"restrictions": [
				"length",
				"line-width"
			]
		},
		{
			"name": "border-radius",
			"syntax": "<length-percentage>{1,4} [ / <length-percentage>{1,4} ]?",
			"relevance": 92,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-radius"
				}
			],
			"description": "Defines the radii of the outer border edge.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			"name": "border-right",
			"syntax": "<line-width> || <line-style> || <color>",
			"relevance": 81,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-right"
				}
			],
			"description": "Shorthand property for setting border width, style and color",
			"restrictions": [
				"length",
				"line-width",
				"line-style",
				"color"
			]
		},
		{
			"name": "border-right-color",
			"syntax": "<color>",
			"relevance": 64,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-right-color"
				}
			],
			"description": "Sets the color of the right border.",
			"restrictions": [
				"color"
			]
		},
		{
			"name": "border-right-style",
			"syntax": "<line-style>",
			"relevance": 53,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-right-style"
				}
			],
			"description": "Sets the style of the right border.",
			"restrictions": [
				"line-style"
			]
		},
		{
			"name": "border-right-width",
			"syntax": "<line-width>",
			"relevance": 59,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-right-width"
				}
			],
			"description": "Sets the thickness of the right border.",
			"restrictions": [
				"length",
				"line-width"
			]
		},
		{
			"name": "border-style",
			"values": [],
			"syntax": "<line-style>{1,4}",
			"relevance": 81,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-style"
				}
			],
			"description": "The style of the border around edges of an element.",
			"restrictions": [
				"line-style"
			]
		},
		{
			"name": "border-top",
			"syntax": "<line-width> || <line-style> || <color>",
			"relevance": 88,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-top"
				}
			],
			"description": "Shorthand property for setting border width, style and color",
			"restrictions": [
				"length",
				"line-width",
				"line-style",
				"color"
			]
		},
		{
			"name": "border-top-color",
			"syntax": "<color>",
			"relevance": 72,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-top-color"
				}
			],
			"description": "Sets the color of the top border.",
			"restrictions": [
				"color"
			]
		},
		{
			"name": "border-top-left-radius",
			"syntax": "<length-percentage>{1,2}",
			"relevance": 75,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius"
				}
			],
			"description": "Defines the radii of the top left outer border edge.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			"name": "border-top-right-radius",
			"syntax": "<length-percentage>{1,2}",
			"relevance": 75,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius"
				}
			],
			"description": "Defines the radii of the top right outer border edge.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			"name": "border-top-style",
			"syntax": "<line-style>",
			"relevance": 58,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-top-style"
				}
			],
			"description": "Sets the style of the top border.",
			"restrictions": [
				"line-style"
			]
		},
		{
			"name": "border-top-width",
			"syntax": "<line-width>",
			"relevance": 61,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-top-width"
				}
			],
			"description": "Sets the thickness of the top border.",
			"restrictions": [
				"length",
				"line-width"
			]
		},
		{
			"name": "border-width",
			"values": [],
			"syntax": "<line-width>{1,4}",
			"relevance": 82,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-width"
				}
			],
			"description": "Shorthand that sets the four 'border-*-width' properties. If it has four values, they set top, right, bottom and left in that order. If left is missing, it is the same as right; if bottom is missing, it is the same as top; if right is missing, it is the same as top.",
			"restrictions": [
				"length",
				"line-width"
			]
		},
		{
			"name": "box-shadow",
			"values": [
				{
					"name": "inset",
					"description": "Changes the drop shadow from an outer shadow (one that shadows the box onto the canvas, as if it were lifted above the canvas) to an inner shadow (one that shadows the canvas onto the box, as if the box were cut out of the canvas and shifted behind it)."
				},
				{
					"name": "none",
					"description": "No shadow."
				}
			],
			"syntax": "none | <shadow>#",
			"relevance": 90,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/box-shadow"
				}
			],
			"description": "Attaches one or more drop-shadows to the box. The property is a comma-separated list of shadows, each specified by 2-4 length values, an optional color, and an optional 'inset' keyword. Omitted lengths are 0; omitted colors are a user agent chosen color.",
			"restrictions": [
				"length",
				"color",
				"enum"
			]
		},
		{
			"name": "clip",
			"values": [
				{
					"name": "auto",
					"description": "The element does not clip."
				},
				{
					"name": "rect()",
					"description": "Specifies offsets from the edges of the border box."
				}
			],
			"syntax": "<shape> | auto",
			"relevance": 74,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/clip"
				}
			],
			"description": "Deprecated. Use the 'clip-path' property when support allows. Defines the visible portion of an element’s box.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "color",
			"syntax": "<color>",
			"relevance": 95,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/color"
				}
			],
			"description": "Sets the color of an element's text",
			"restrictions": [
				"color"
			]
		},
		{
			"name": "font",
			"values": [
				{
					"name": "100",
					"description": "Thin"
				},
				{
					"name": "200",
					"description": "Extra Light (Ultra Light)"
				},
				{
					"name": "300",
					"description": "Light"
				},
				{
					"name": "400",
					"description": "Normal"
				},
				{
					"name": "500",
					"description": "Medium"
				},
				{
					"name": "600",
					"description": "Semi Bold (Demi Bold)"
				},
				{
					"name": "700",
					"description": "Bold"
				},
				{
					"name": "800",
					"description": "Extra Bold (Ultra Bold)"
				},
				{
					"name": "900",
					"description": "Black (Heavy)"
				},
				{
					"name": "bold",
					"description": "Same as 700"
				},
				{
					"name": "bolder",
					"description": "Specifies the weight of the face bolder than the inherited value."
				},
				{
					"name": "caption",
					"description": "The font used for captioned controls (e.g., buttons, drop-downs, etc.)."
				},
				{
					"name": "icon",
					"description": "The font used to label icons."
				},
				{
					"name": "italic",
					"description": "Selects a font that is labeled 'italic', or, if that is not available, one labeled 'oblique'."
				},
				{
					"name": "large"
				},
				{
					"name": "larger"
				},
				{
					"name": "lighter",
					"description": "Specifies the weight of the face lighter than the inherited value."
				},
				{
					"name": "medium"
				},
				{
					"name": "menu",
					"description": "The font used in menus (e.g., dropdown menus and menu lists)."
				},
				{
					"name": "message-box",
					"description": "The font used in dialog boxes."
				},
				{
					"name": "normal",
					"description": "Specifies a face that is not labeled as a small-caps font."
				},
				{
					"name": "oblique",
					"description": "Selects a font that is labeled 'oblique'."
				},
				{
					"name": "small"
				},
				{
					"name": "small-caps",
					"description": "Specifies a font that is labeled as a small-caps font. If a genuine small-caps font is not available, user agents should simulate a small-caps font."
				},
				{
					"name": "small-caption",
					"description": "The font used for labeling small controls."
				},
				{
					"name": "smaller"
				},
				{
					"name": "status-bar",
					"description": "The font used in window status bars."
				},
				{
					"name": "x-large"
				},
				{
					"name": "x-small"
				},
				{
					"name": "xx-large"
				},
				{
					"name": "xx-small"
				}
			],
			"syntax": "[ [ <'font-style'> || <font-variant-css21> || <'font-weight'> || <'font-stretch'> ]? <'font-size'> [ / <'line-height'> ]? <'font-family'> ] | caption | icon | menu | message-box | small-caption | status-bar",
			"relevance": 84,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/font"
				}
			],
			"description": "Shorthand property for setting 'font-style', 'font-variant', 'font-weight', 'font-size', 'line-height', and 'font-family', at the same place in the style sheet. The syntax of this property is based on a traditional typographical shorthand notation to set multiple properties related to fonts.",
			"restrictions": [
				"font"
			]
		},
		{
			"name": "font-family",
			"values": [
				{
					"name": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
				},
				{
					"name": "Arial, Helvetica, sans-serif"
				},
				{
					"name": "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
				},
				{
					"name": "'Courier New', Courier, monospace"
				},
				{
					"name": "cursive"
				},
				{
					"name": "fantasy"
				},
				{
					"name": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
				},
				{
					"name": "Georgia, 'Times New Roman', Times, serif"
				},
				{
					"name": "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
				},
				{
					"name": "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"
				},
				{
					"name": "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"
				},
				{
					"name": "monospace"
				},
				{
					"name": "sans-serif"
				},
				{
					"name": "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
				},
				{
					"name": "serif"
				},
				{
					"name": "'Times New Roman', Times, serif"
				},
				{
					"name": "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
				},
				{
					"name": "Verdana, Geneva, Tahoma, sans-serif"
				}
			],
			"syntax": "<family-name>",
			"relevance": 94,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/font-family"
				}
			],
			"description": "Specifies a prioritized list of font family names or generic family names. A user agent iterates through the list of family names until it matches an available font that contains a glyph for the character to be rendered.",
			"restrictions": [
				"font"
			]
		},
		{
			"name": "font-size",
			"values": [
				{
					"name": "large"
				},
				{
					"name": "larger"
				},
				{
					"name": "medium"
				},
				{
					"name": "small"
				},
				{
					"name": "smaller"
				},
				{
					"name": "x-large"
				},
				{
					"name": "x-small"
				},
				{
					"name": "xx-large"
				},
				{
					"name": "xx-small"
				}
			],
			"syntax": "<absolute-size> | <relative-size> | <length-percentage>",
			"relevance": 95,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/font-size"
				}
			],
			"description": "Indicates the desired height of glyphs from the font. For scalable fonts, the font-size is a scale factor applied to the EM unit of the font. (Note that certain glyphs may bleed outside their EM box.) For non-scalable fonts, the font-size is converted into absolute units and matched against the declared font-size of the font, using the same absolute coordinate space for both of the matched values.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			"name": "font-style",
			"values": [
				{
					"name": "italic",
					"description": "Selects a font that is labeled as an 'italic' face, or an 'oblique' face if one is not"
				},
				{
					"name": "normal",
					"description": "Selects a face that is classified as 'normal'."
				},
				{
					"name": "oblique",
					"description": "Selects a font that is labeled as an 'oblique' face, or an 'italic' face if one is not."
				}
			],
			"syntax": "normal | italic | oblique <angle>{0,2}",
			"relevance": 90,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/font-style"
				}
			],
			"description": "Allows italic or oblique faces to be selected. Italic forms are generally cursive in nature while oblique faces are typically sloped versions of the regular face.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "font-weight",
			"values": [
				{
					"name": "100",
					"description": "Thin"
				},
				{
					"name": "200",
					"description": "Extra Light (Ultra Light)"
				},
				{
					"name": "300",
					"description": "Light"
				},
				{
					"name": "400",
					"description": "Normal"
				},
				{
					"name": "500",
					"description": "Medium"
				},
				{
					"name": "600",
					"description": "Semi Bold (Demi Bold)"
				},
				{
					"name": "700",
					"description": "Bold"
				},
				{
					"name": "800",
					"description": "Extra Bold (Ultra Bold)"
				},
				{
					"name": "900",
					"description": "Black (Heavy)"
				},
				{
					"name": "bold",
					"description": "Same as 700"
				},
				{
					"name": "bolder",
					"description": "Specifies the weight of the face bolder than the inherited value."
				},
				{
					"name": "lighter",
					"description": "Specifies the weight of the face lighter than the inherited value."
				},
				{
					"name": "normal",
					"description": "Same as 400"
				}
			],
			"syntax": "<font-weight-absolute>{1,2}",
			"relevance": 94,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/font-weight"
				}
			],
			"description": "Specifies weight of glyphs in the font, their degree of blackness or stroke thickness.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "height",
			"values": [
				{
					"name": "auto",
					"description": "The height depends on the values of other properties."
				},
				{
					"name": "fit-content",
					"description": "Use the fit-content inline size or fit-content block size, as appropriate to the writing mode."
				},
				{
					"name": "max-content",
					"description": "Use the max-content inline size or max-content block size, as appropriate to the writing mode."
				},
				{
					"name": "min-content",
					"description": "Use the min-content inline size or min-content block size, as appropriate to the writing mode."
				}
			],
			"syntax": "<viewport-length>{1,2}",
			"relevance": 96,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/height"
				}
			],
			"description": "Specifies the height of the content area, padding area or border area (depending on 'box-sizing') of certain boxes.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			"name": "letter-spacing",
			"values": [
				{
					"name": "normal",
					"description": "The spacing is the normal spacing for the current font. It is typically zero-length."
				}
			],
			"syntax": "normal | <length>",
			"relevance": 82,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/letter-spacing"
				}
			],
			"description": "Specifies the minimum, maximum, and optimal spacing between grapheme clusters.",
			"restrictions": [
				"length"
			]
		},
		{
			"name": "line-height",
			"values": [
				{
					"name": "normal",
					"description": "Tells user agents to set the computed value to a 'reasonable' value based on the font size of the element."
				}
			],
			"syntax": "normal | <number> | <length> | <percentage>",
			"relevance": 93,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/line-height"
				}
			],
			"description": "Determines the block-progression dimension of the text content area of an inline box.",
			"restrictions": [
				"number",
				"length",
				"percentage"
			]
		},
		{
			"name": "margin",
			"values": [
				{
					"name": "auto"
				}
			],
			"syntax": "[ <length> | <percentage> | auto ]{1,4}",
			"relevance": 96,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/margin"
				}
			],
			"description": "Shorthand property to set values for the thickness of the margin area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. Negative values for margin properties are allowed, but there may be implementation-specific limits.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			"name": "margin-bottom",
			"values": [
				{
					"name": "auto"
				}
			],
			"syntax": "<length> | <percentage> | auto",
			"relevance": 92,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/margin-bottom"
				}
			],
			"description": "Shorthand property to set values for the thickness of the margin area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. Negative values for margin properties are allowed, but there may be implementation-specific limits..",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			"name": "margin-left",
			"values": [
				{
					"name": "auto"
				}
			],
			"syntax": "<length> | <percentage> | auto",
			"relevance": 92,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/margin-left"
				}
			],
			"description": "Shorthand property to set values for the thickness of the margin area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. Negative values for margin properties are allowed, but there may be implementation-specific limits..",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			"name": "margin-right",
			"values": [
				{
					"name": "auto"
				}
			],
			"syntax": "<length> | <percentage> | auto",
			"relevance": 91,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/margin-right"
				}
			],
			"description": "Shorthand property to set values for the thickness of the margin area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. Negative values for margin properties are allowed, but there may be implementation-specific limits..",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			"name": "margin-top",
			"values": [
				{
					"name": "auto"
				}
			],
			"syntax": "<length> | <percentage> | auto",
			"relevance": 95,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/margin-top"
				}
			],
			"description": "Shorthand property to set values for the thickness of the margin area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. Negative values for margin properties are allowed, but there may be implementation-specific limits..",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			"name": "max-height",
			"values": [
				{
					"name": "none",
					"description": "No limit on the height of the box."
				},
				{
					"name": "fit-content",
					"description": "Use the fit-content inline size or fit-content block size, as appropriate to the writing mode."
				},
				{
					"name": "max-content",
					"description": "Use the max-content inline size or max-content block size, as appropriate to the writing mode."
				},
				{
					"name": "min-content",
					"description": "Use the min-content inline size or min-content block size, as appropriate to the writing mode."
				}
			],
			"syntax": "<viewport-length>",
			"relevance": 86,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/max-height"
				}
			],
			"description": "Allows authors to constrain content height to a certain range.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			"name": "max-width",
			"values": [
				{
					"name": "none",
					"description": "No limit on the width of the box."
				},
				{
					"name": "fit-content",
					"description": "Use the fit-content inline size or fit-content block size, as appropriate to the writing mode."
				},
				{
					"name": "max-content",
					"description": "Use the max-content inline size or max-content block size, as appropriate to the writing mode."
				},
				{
					"name": "min-content",
					"description": "Use the min-content inline size or min-content block size, as appropriate to the writing mode."
				}
			],
			"syntax": "<viewport-length>",
			"relevance": 91,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/max-width"
				}
			],
			"description": "Allows authors to constrain content width to a certain range.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			"name": "min-height",
			"values": [
				{
					"name": "auto"
				},
				{
					"name": "fit-content",
					"description": "Use the fit-content inline size or fit-content block size, as appropriate to the writing mode."
				},
				{
					"name": "max-content",
					"description": "Use the max-content inline size or max-content block size, as appropriate to the writing mode."
				},
				{
					"name": "min-content",
					"description": "Use the min-content inline size or min-content block size, as appropriate to the writing mode."
				}
			],
			"syntax": "<viewport-length>",
			"relevance": 90,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/min-height"
				}
			],
			"description": "Allows authors to constrain content height to a certain range.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			"name": "min-width",
			"values": [
				{
					"name": "auto"
				},
				{
					"name": "fit-content",
					"description": "Use the fit-content inline size or fit-content block size, as appropriate to the writing mode."
				},
				{
					"name": "max-content",
					"description": "Use the max-content inline size or max-content block size, as appropriate to the writing mode."
				},
				{
					"name": "min-content",
					"description": "Use the min-content inline size or min-content block size, as appropriate to the writing mode."
				}
			],
			"syntax": "<viewport-length>",
			"relevance": 89,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/min-width"
				}
			],
			"description": "Allows authors to constrain content width to a certain range.",
			"restrictions": [
				"length",
				"percentage"
			]
		},	
		{
			"name": "overflow",
			"values": [
				{
					"name": "auto",
					"description": "The behavior of the 'auto' value is UA-dependent, but should cause a scrolling mechanism to be provided for overflowing boxes."
				},
				{
					"name": "hidden",
					"description": "Content is clipped and no scrolling mechanism should be provided to view the content outside the clipping region."
				},
				{
					"name": "scroll",
					"description": "Content is clipped and if the user agent uses a scrolling mechanism that is visible on the screen (such as a scroll bar or a panner), that mechanism should be displayed for a box whether or not any of its content is clipped."
				},
				{
					"name": "visible",
					"description": "Content is not clipped, i.e., it may be rendered outside the content box."
				}
			],
			"syntax": "[ visible | hidden | clip | scroll | auto ]{1,2}",
			"relevance": 93,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/overflow"
				}
			],
			"description": "Shorthand for setting 'overflow-x' and 'overflow-y'.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "padding",
			"values": [],
			"syntax": "[ <length> | <percentage> ]{1,4}",
			"relevance": 96,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/padding"
				}
			],
			"description": "Shorthand property to set values for the thickness of the padding area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. The value may not be negative.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			"name": "padding-bottom",
			"syntax": "<length> | <percentage>",
			"relevance": 90,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/padding-bottom"
				}
			],
			"description": "Shorthand property to set values for the thickness of the padding area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. The value may not be negative.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			"name": "padding-left",
			"syntax": "<length> | <percentage>",
			"relevance": 91,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/padding-left"
				}
			],
			"description": "Shorthand property to set values for the thickness of the padding area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. The value may not be negative.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			"name": "padding-right",
			"syntax": "<length> | <percentage>",
			"relevance": 90,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/padding-right"
				}
			],
			"description": "Shorthand property to set values for the thickness of the padding area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. The value may not be negative.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			"name": "padding-top",
			"syntax": "<length> | <percentage>",
			"relevance": 91,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/padding-top"
				}
			],
			"description": "Shorthand property to set values for the thickness of the padding area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. The value may not be negative.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			"name": "perspective",
			"values": [
				{
					"name": "none",
					"description": "No perspective transform is applied."
				}
			],
			"syntax": "none | <length>",
			"relevance": 55,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/perspective"
				}
			],
			"description": "Applies the same transform as the perspective(<number>) transform function, except that it applies only to the positioned or transformed children of the element, not to the transform on the element itself.",
			"restrictions": [
				"length",
				"enum"
			]
		},
		{
			"name": "perspective-origin",
			"syntax": "<position>",
			"relevance": 51,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/perspective-origin"
				}
			],
			"description": "Establishes the origin for the perspective property. It effectively sets the X and Y position at which the viewer appears to be looking at the children of the element.",
			"restrictions": [
				"position",
				"percentage",
				"length"
			]
		},
		{
			"name": "position",
			"values": [
				{
					"name": "absolute",
					"description": "The box's position (and possibly size) is specified with the 'top', 'right', 'bottom', and 'left' properties. These properties specify offsets with respect to the box's 'containing block'."
				},
				{
					"name": "fixed",
					"description": "The box's position is calculated according to the 'absolute' model, but in addition, the box is fixed with respect to some reference. As with the 'absolute' model, the box's margins do not collapse with any other margins."
				},
				{
					"name": "relative",
					"description": "The box's position is calculated according to the normal flow (this is called the position in normal flow). Then the box is offset relative to its normal position."
				},
				{
					"name": "static",
					"description": "The box is a normal box, laid out according to the normal flow. The 'top', 'right', 'bottom', and 'left' properties do not apply."
				},
				{
					"name": "sticky",
					"description": "The box's position is calculated according to the normal flow. Then the box is offset relative to its flow root and containing block and in all cases, including table elements, does not affect the position of any following boxes."
				}
			],
			"syntax": "static | relative | absolute | sticky | fixed",
			"relevance": 96,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/position"
				}
			],
			"description": "The position CSS property sets how an element is positioned in a document. The top, right, bottom, and left properties determine the final location of positioned elements.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "text-align",
			"values": [
				{
					"name": "center",
					"description": "The inline contents are centered within the line box."
				},
				{
					"name": "end",
					"description": "The inline contents are aligned to the end edge of the line box."
				},
				{
					"name": "justify",
					"description": "The text is justified according to the method specified by the 'text-justify' property."
				},
				{
					"name": "left",
					"description": "The inline contents are aligned to the left edge of the line box. In vertical text, 'left' aligns to the edge of the line box that would be the start edge for left-to-right text."
				},
				{
					"name": "right",
					"description": "The inline contents are aligned to the right edge of the line box. In vertical text, 'right' aligns to the edge of the line box that would be the end edge for left-to-right text."
				},
				{
					"name": "start",
					"description": "The inline contents are aligned to the start edge of the line box."
				}
			],
			"syntax": "start | end | left | right | center | justify | match-parent",
			"relevance": 94,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/text-align"
				}
			],
			"description": "Describes how inline contents of a block are horizontally aligned if the contents do not completely fill the line box.",
			"restrictions": [
				"string"
			]
		},
		{
			"name": "text-decoration",
			"values": [
				{
					"name": "dashed",
					"description": "Produces a dashed line style."
				},
				{
					"name": "dotted",
					"description": "Produces a dotted line."
				},
				{
					"name": "double",
					"description": "Produces a double line."
				},
				{
					"name": "line-through",
					"description": "Each line of text has a line through the middle."
				},
				{
					"name": "none",
					"description": "Produces no line."
				},
				{
					"name": "overline",
					"description": "Each line of text has a line above it."
				},
				{
					"name": "solid",
					"description": "Produces a solid line."
				},
				{
					"name": "underline",
					"description": "Each line of text is underlined."
				},
				{
					"name": "wavy",
					"description": "Produces a wavy line."
				}
			],
			"syntax": "<'text-decoration-line'> || <'text-decoration-style'> || <'text-decoration-color'> || <'text-decoration-thickness'>",
			"relevance": 92,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/text-decoration"
				}
			],
			"description": "Decorations applied to font used for an element's text.",
			"restrictions": [
				"enum",
				"color"
			]
		},
		{
			"name": "text-overflow",
			"values": [
				{
					"name": "clip",
					"description": "Clip inline content that overflows. Characters may be only partially rendered."
				},
				{
					"name": "ellipsis",
					"description": "Render an ellipsis character (U+2026) to represent clipped inline content."
				}
			],
			"syntax": "[ clip | ellipsis | <string> ]{1,2}",
			"relevance": 82,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/text-overflow"
				}
			],
			"description": "Text can overflow for example when it is prevented from wrapping.",
			"restrictions": [
				"enum",
				"string"
			]
		},
		{
			"name": "text-shadow",
			"values": [
				{
					"name": "none",
					"description": "No shadow."
				}
			],
			"syntax": "none | <shadow-t>#",
			"relevance": 75,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/text-shadow"
				}
			],
			"description": "Enables shadow effects to be applied to the text of the element.",
			"restrictions": [
				"length",
				"color"
			]
		},
		{
			"name": "text-transform",
			"values": [
				{
					"name": "capitalize",
					"description": "Puts the first typographic letter unit of each word in titlecase."
				},
				{
					"name": "lowercase",
					"description": "Puts all letters in lowercase."
				},
				{
					"name": "none",
					"description": "No effects."
				},
				{
					"name": "uppercase",
					"description": "Puts all letters in uppercase."
				}
			],
			"syntax": "none | capitalize | uppercase | lowercase | full-width | full-size-kana",
			"relevance": 86,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/text-transform"
				}
			],
			"description": "Controls capitalization effects of an element’s text.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "transform",
			"values": [
				{
					"name": "matrix()",
					"description": "Specifies a 2D transformation in the form of a transformation matrix of six values. matrix(a,b,c,d,e,f) is equivalent to applying the transformation matrix [a b c d e f]"
				},
				{
					"name": "matrix3d()",
					"description": "Specifies a 3D transformation as a 4x4 homogeneous matrix of 16 values in column-major order."
				},
				{
					"name": "none"
				},
				{
					"name": "perspective()",
					"description": "Specifies a perspective projection matrix."
				},
				{
					"name": "rotate()",
					"description": "Specifies a 2D rotation by the angle specified in the parameter about the origin of the element, as defined by the transform-origin property."
				},
				{
					"name": "rotate3d()",
					"description": "Specifies a clockwise 3D rotation by the angle specified in last parameter about the [x,y,z] direction vector described by the first 3 parameters."
				},
				{
					"name": "rotateX('angle')",
					"description": "Specifies a clockwise rotation by the given angle about the X axis."
				},
				{
					"name": "rotateY('angle')",
					"description": "Specifies a clockwise rotation by the given angle about the Y axis."
				},
				{
					"name": "rotateZ('angle')",
					"description": "Specifies a clockwise rotation by the given angle about the Z axis."
				},
				{
					"name": "scale()",
					"description": "Specifies a 2D scale operation by the [sx,sy] scaling vector described by the 2 parameters. If the second parameter is not provided, it is takes a value equal to the first."
				},
				{
					"name": "scale3d()",
					"description": "Specifies a 3D scale operation by the [sx,sy,sz] scaling vector described by the 3 parameters."
				},
				{
					"name": "scaleX()",
					"description": "Specifies a scale operation using the [sx,1] scaling vector, where sx is given as the parameter."
				},
				{
					"name": "scaleY()",
					"description": "Specifies a scale operation using the [sy,1] scaling vector, where sy is given as the parameter."
				},
				{
					"name": "scaleZ()",
					"description": "Specifies a scale operation using the [1,1,sz] scaling vector, where sz is given as the parameter."
				},
				{
					"name": "skew()",
					"description": "Specifies a skew transformation along the X and Y axes. The first angle parameter specifies the skew on the X axis. The second angle parameter specifies the skew on the Y axis. If the second parameter is not given then a value of 0 is used for the Y angle (ie: no skew on the Y axis)."
				},
				{
					"name": "skewX()",
					"description": "Specifies a skew transformation along the X axis by the given angle."
				},
				{
					"name": "skewY()",
					"description": "Specifies a skew transformation along the Y axis by the given angle."
				},
				{
					"name": "translate()",
					"description": "Specifies a 2D translation by the vector [tx, ty], where tx is the first translation-value parameter and ty is the optional second translation-value parameter."
				},
				{
					"name": "translate3d()",
					"description": "Specifies a 3D translation by the vector [tx,ty,tz], with tx, ty and tz being the first, second and third translation-value parameters respectively."
				},
				{
					"name": "translateX()",
					"description": "Specifies a translation by the given amount in the X direction."
				},
				{
					"name": "translateY()",
					"description": "Specifies a translation by the given amount in the Y direction."
				},
				{
					"name": "translateZ()",
					"description": "Specifies a translation by the given amount in the Z direction. Note that percentage values are not allowed in the translateZ translation-value, and if present are evaluated as 0."
				}
			],
			"syntax": "none | <transform-list>",
			"relevance": 91,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/transform"
				}
			],
			"description": "A two-dimensional transformation is applied to an element through the 'transform' property. This property contains a list of transform functions similar to those allowed by SVG.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "transform-origin",
			"syntax": "[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?",
			"relevance": 77,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/transform-origin"
				}
			],
			"description": "Establishes the origin of transformation for an element.",
			"restrictions": [
				"position",
				"length",
				"percentage"
			]
		},
		{
			"name": "transition",
			"values": [
				{
					"name": "all",
					"description": "Every property that is able to undergo a transition will do so."
				},
				{
					"name": "none",
					"description": "No property will transition."
				}
			],
			"syntax": "<single-transition>#",
			"relevance": 89,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/transition"
				}
			],
			"description": "Shorthand property combines four of the transition properties into a single property.",
			"restrictions": [
				"time",
				"property",
				"timing-function",
				"enum"
			]
		},
		{
			"name": "transition-delay",
			"syntax": "<time>#",
			"relevance": 63,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/transition-delay"
				}
			],
			"description": "Defines when the transition will start. It allows a transition to begin execution some period of time from when it is applied.",
			"restrictions": [
				"time"
			]
		},
		{
			"name": "transition-duration",
			"syntax": "<time>#",
			"relevance": 63,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/transition-duration"
				}
			],
			"description": "Specifies how long the transition from the old value to the new value should take.",
			"restrictions": [
				"time"
			]
		},
		{
			"name": "transition-property",
			"values": [
				{
					"name": "all",
					"description": "Every property that is able to undergo a transition will do so."
				},
				{
					"name": "none",
					"description": "No property will transition."
				}
			],
			"syntax": "none | <single-transition-property>#",
			"relevance": 64,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/transition-property"
				}
			],
			"description": "Specifies the name of the CSS property to which the transition is applied.",
			"restrictions": [
				"property"
			]
		},
		{
			"name": "transition-timing-function",
			"syntax": "<easing-function>#",
			"relevance": 64,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/transition-timing-function"
				}
			],
			"description": "Describes how the intermediate values used during a transition will be calculated.",
			"restrictions": [
				"timing-function"
			]
		},
		{
			"name": "vertical-align",
			"values": [
				{
					"name": "auto",
					"description": "Align the dominant baseline of the parent box with the equivalent, or heuristically reconstructed, baseline of the element inline box."
				},
				{
					"name": "baseline",
					"description": "Align the 'alphabetic' baseline of the element with the 'alphabetic' baseline of the parent element."
				},
				{
					"name": "bottom",
					"description": "Align the after edge of the extended inline box with the after-edge of the line box."
				},
				{
					"name": "middle",
					"description": "Align the 'middle' baseline of the inline element with the middle baseline of the parent."
				},
				{
					"name": "sub",
					"description": "Lower the baseline of the box to the proper position for subscripts of the parent's box. (This value has no effect on the font size of the element's text.)"
				},
				{
					"name": "super",
					"description": "Raise the baseline of the box to the proper position for superscripts of the parent's box. (This value has no effect on the font size of the element's text.)"
				},
				{
					"name": "text-bottom",
					"description": "Align the bottom of the box with the after-edge of the parent element's font."
				},
				{
					"name": "text-top",
					"description": "Align the top of the box with the before-edge of the parent element's font."
				},
				{
					"name": "top",
					"description": "Align the before edge of the extended inline box with the before-edge of the line box."
				}
			],
			"syntax": "baseline | sub | super | text-top | text-bottom | middle | top | bottom | <percentage> | <length>",
			"relevance": 92,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/vertical-align"
				}
			],
			"description": "Affects the vertical positioning of the inline boxes generated by an inline-level element inside a line box.",
			"restrictions": [
				"percentage",
				"length"
			]
		},
		{
			"name": "visibility",
			"values": [
				{
					"name": "collapse",
					"description": "Table-specific. If used on elements other than rows, row groups, columns, or column groups, 'collapse' has the same meaning as 'hidden'."
				},
				{
					"name": "hidden",
					"description": "The generated box is invisible (fully transparent, nothing is drawn), but still affects layout."
				},
				{
					"name": "visible",
					"description": "The generated box is visible."
				}
			],
			"syntax": "visible | hidden | collapse",
			"relevance": 88,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/visibility"
				}
			],
			"description": "Specifies whether the boxes generated by an element are rendered. Invisible boxes still affect layout (set the ‘display’ property to ‘none’ to suppress box generation altogether).",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "white-space",
			"values": [
				{
					"name": "normal",
					"description": "Sets 'white-space-collapsing' to 'collapse' and 'text-wrap' to 'normal'."
				},
				{
					"name": "nowrap",
					"description": "Sets 'white-space-collapsing' to 'collapse' and 'text-wrap' to 'none'."
				},
				{
					"name": "pre",
					"description": "Sets 'white-space-collapsing' to 'preserve' and 'text-wrap' to 'none'."
				},
				{
					"name": "pre-line",
					"description": "Sets 'white-space-collapsing' to 'preserve-breaks' and 'text-wrap' to 'normal'."
				},
				{
					"name": "pre-wrap",
					"description": "Sets 'white-space-collapsing' to 'preserve' and 'text-wrap' to 'normal'."
				}
			],
			"syntax": "normal | pre | nowrap | pre-wrap | pre-line | break-spaces",
			"relevance": 90,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/white-space"
				}
			],
			"description": "Shorthand property for the 'white-space-collapsing' and 'text-wrap' properties.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "width",
			"values": [
				{
					"name": "auto",
					"description": "The width depends on the values of other properties."
				},
				{
					"name": "fit-content",
					"description": "Use the fit-content inline size or fit-content block size, as appropriate to the writing mode."
				},
				{
					"name": "max-content",
					"description": "Use the max-content inline size or max-content block size, as appropriate to the writing mode."
				},
				{
					"name": "min-content",
					"description": "Use the min-content inline size or min-content block size, as appropriate to the writing mode."
				}
			],
			"syntax": "<viewport-length>{1,2}",
			"relevance": 96,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/width"
				}
			],
			"description": "Specifies the width of the content area, padding area or border area (depending on 'box-sizing') of certain boxes.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			"name": "z-index",
			"values": [
				{
					"name": "auto",
					"description": "The stack level of the generated box in the current stacking context is 0. The box does not establish a new stacking context unless it is the root element."
				}
			],
			"syntax": "auto | <integer>",
			"relevance": 92,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/z-index"
				}
			],
			"description": "For a positioned box, the 'z-index' property specifies the stack level of the box in the current stacking context and whether the box establishes a local stacking context.",
			"restrictions": [
				"integer"
			]
		}
	],
	"atDirectives": [
		{
			"name": "@keyframes",
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/@keyframes"
				}
			],
			"description": "Defines set of animation key frames."
		}
	],
	"pseudoClasses": [
		{
			"name": ":active",
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/:active"
				}
			],
			"description": "Applies while an element is being activated by the user. For example, between the times the user presses the mouse button and releases it."
		},
		{
			"name": ":disabled",
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/:disabled"
				}
			],
			"description": "Represents user interface elements that are in a disabled state; such elements have a corresponding enabled state."
		},
		{
			"name": ":enabled",
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/:enabled"
				}
			],
			"description": "Represents user interface elements that are in an enabled state; such elements have a corresponding disabled state."
		},
		{
			"name": ":focus",
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/:focus"
				}
			],
			"description": "Applies while an element has the focus (accepts keyboard or mouse events, or other forms of input)."
		},
		{
			"name": ":hover",
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/:hover"
				}
			],
			"description": "Applies while the user designates an element with a pointing device, but does not necessarily activate it. For example, a visual user agent could apply this pseudo-class when the cursor (mouse pointer) hovers over a box generated by the element."
		},
		{
			"name": ":matches()",
			"browsers": [
				"S9"
			],
			"description": "Takes a selector list as its argument. It represents an element that is represented by its argument."
		},
		{
			"name": ":not()",
			"browsers": [
				"E",
				"C",
				"FF1",
				"IE9",
				"O9.5",
				"S2"
			],
			"description": "The negation pseudo-class, :not(X), is a functional notation taking a simple selector (excluding the negation pseudo-class itself) as an argument. It represents an element that is not represented by its argument."
		}
	],
	"pseudoElements": [
	]
};