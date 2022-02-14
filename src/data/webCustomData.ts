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
			"syntax": "none | <single-animation>#",
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
			"values": [
				{
					"name": "repeat",
					"description": "(default) Repeats in the specified direction until it fills the panel."
				},
				{
					"name": "space",
					"description": "Repeats as many times as required to fill the panel w/o being clipped. Space is added between images to to align first and last image with panel edges."
				},
				{
					"name": "round",
					"description": "Repeats as many times as required to fill the panel w/o being clipped. The image is resized to align first and last image with panel edges."
				},
				{
					"name": "no-repeat",
					"description": "Not repeated."
				},
				{
					"name": "repeat-x",
					"description": "Single value that is equivalent to 'repeat no-repeat'"
				},
				{
					"name": "repeat-y",
					"description": "Single value that is equivalent to 'no-repeat repeat'"
				}
			],
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
				},
				{
					"name": "radial()",
					"description": "Specifies offsets from the edges of the border box in a radius, which takes a center point, start angle and angular width of the revealed sector."
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
				}
			],
			"syntax": "normal | italic <angle>{0,2}",
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
					"name": "thin",
					"description": "Same as 100"
				},
				{
					"name": "light",
					"description": "Same as 300"
				},
				{
					"name": "normal",
					"description": "Same as 400"
				},
				{
					"name": "medium",
					"description": "Same as 500"
				},
				{
					"name": "bold",
					"description": "Same as 700"
				},
				{
					"name": "black",
					"description": "Same as 900"
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
					"name": "fit-children",
					"description": "(default) Panel size is set to the required size of all children. Can be specified in pixels or percentage."
				},
				{
					"name": "fill-parent-flow()",
					"description": "(default) Fills to remaining parent height. If multiple children are set to this value, weight is used to determine final height."
				},
				{
					"name": "width-percentage()",
					"description": "(default) Percentage of the panel's width, which allows you to enforce a particular aspect ratio."
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
			"values": [],
			"syntax": "<length>",
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
				"length"
			]
		},
		{
			"name": "margin",
			"values": [],
			"syntax": "[ <length> | <percentage> ]{1,4}",
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
			"values": [],
			"syntax": "<length> | <percentage>",
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
			"values": [],
			"syntax": "<length> | <percentage>",
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
			"values": [],
			"syntax": "<length> | <percentage>",
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
			"values": [],
			"syntax": "<length> | <percentage>",
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
					"name": "fit-children",
					"description": "(default) Panel size is set to the required size of all children. Can be specified in pixels or percentage."
				},
				{
					"name": "fill-parent-flow()",
					"description": "(default) Fills to remaining parent height. If multiple children are set to this value, weight is used to determine final height."
				},
				{
					"name": "width-percentage()",
					"description": "(default) Percentage of the panel's width, which allows you to enforce a particular aspect ratio."
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
					"name": "fit-children",
					"description": "(default) Panel size is set to the required size of all children. Can be specified in pixels or percentage."
				},
				{
					"name": "fill-parent-flow()",
					"description": "(default) Fills to remaining parent height. If multiple children are set to this value, weight is used to determine final height."
				},
				{
					"name": "height-percentage()",
					"description": "(default) Percentage of the panel's height, which allows you to enforce a particular aspect ratio."
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
					"name": "fit-children",
					"description": "(default) Panel size is set to the required size of all children. Can be specified in pixels or percentage."
				},
				{
					"name": "fill-parent-flow()",
					"description": "(default) Fills to remaining parent height. If multiple children are set to this value, weight is used to determine final height."
				},
				{
					"name": "width-percentage()",
					"description": "(default) Percentage of the panel's width, which allows you to enforce a particular aspect ratio."
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
					"name": "fit-children",
					"description": "(default) Panel size is set to the required size of all children. Can be specified in pixels or percentage."
				},
				{
					"name": "fill-parent-flow()",
					"description": "(default) Fills to remaining parent height. If multiple children are set to this value, weight is used to determine final height."
				},
				{
					"name": "height-percentage()",
					"description": "(default) Percentage of the panel's height, which allows you to enforce a particular aspect ratio."
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
					"name": "squish",
					"description": "(default) Children are squished to fit within the panel's bounds if needed."
				},
				{
					"name": "clip",
					"description": "Children maintain their desired size but their contents are clipped."
				},
				{
					"name": "scroll",
					"description": "Children maintain their desired size and a scrollbar is added to this panel."
				},
				{
					"name": "noclip",
					"description": "Children maintain their desired size and content is allowed to overflow this panel."
				}
			],
			"syntax": "[ squish | clip | scroll | noclip ]{1,2}",
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
			"values": [],
			"syntax": "<number> | <length>",
			"relevance": 55,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/perspective"
				}
			],
			"description": "Applies the same transform as the perspective(<number>) transform function, except that it applies only to the positioned or transformed children of the element, not to the transform on the element itself.",
			"restrictions": [
				"number",
				"length"
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
			"values": [],
			"syntax": "<length> | <percentage>{3}",
			"relevance": 96,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/position"
				}
			],
			"description": "Sets the x, y, and z position for a panel, in pixels or percentage. Must not be in a flowing layout.",
			"restrictions": [
				"number",
				"length",
				"percentage"
			]
		},
		{
			"name": "text-align",
			"values": [
				{
					"name": "center",
					"description": "The inline contents are centered within the panel."
				},
				{
					"name": "left",
					"description": "The inline contents are aligned to the left edge of the panel."
				},
				{
					"name": "right",
					"description": "The inline contents are aligned to the right edge of the panel."
				}
			],
			"syntax": "left | right | center",
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
					"name": "none",
					"description": "Produces no line."
				},
				{
					"name": "underline",
					"description": "Each line of text is underlined."
				},
				{
					"name": "line-through",
					"description": "Each line of text has a line through the middle."
				}
			],
			"syntax": "none | underline | line-through",
			"relevance": 92,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/text-decoration"
				}
			],
			"description": "Decorations applied to font used for an element's text.",
			"restrictions": [
				"enum"
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
					"description": "Render an ellipsis (...) to represent clipped inline content."
				},
				{
					"name": "shrink",
					"description": "Lower font size to fit inline content."
				},
				{
					"name": "noclip",
					"description": "Allows the text to overflow based on the overflow style."
				}
			],
			"syntax": "clip | ellipsis | shrink | noclip",
			"relevance": 82,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/text-overflow"
				}
			],
			"description": "Text can overflow for example when it is prevented from wrapping.",
			"restrictions": [
				"enum"
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
			"description": "Specifies text shadows. The shadow shape will match the text the panel can generate,and this is only meaningful for labels.",
			"restrictions": [
				"length",
				"color"
			]
		},
		{
			"name": "text-transform",
			"values": [
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
			"syntax": "none | uppercase | lowercase",
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
					"name": "none"
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
			"syntax": "<length-percentage> <length-percentage>",
			"relevance": 77,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/transform-origin"
				}
			],
			"description": "Establishes the origin of transformation for an element.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			"name": "transition",
			"values": [
				{
					"name": "none",
					"description": "No property will transition."
				}
			],
			"syntax": "none | <single-transition>#",
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
					"name": "bottom",
					"description": "Align the bottom edge of the extended inline box with the bottom-edge of the line box."
				},
				{
					"name": "center",
					"description": "Align the center baseline of the inline element with the center baseline of the parent."
				},
				{
					"name": "center_nopixelsnap",
					"description": "Align the center baseline of the inline element with the center baseline of the parent, but does not round to an integer (pixel)."
				},
				{
					"name": "middle",
					"description": "Align the center baseline of the inline element with the center baseline of the parent."
				},
				{
					"name": "top",
					"description": "Align the top edge of the extended inline box with the top-edge of the line box."
				}
			],
			"syntax": "bottom | center | center_nopixelsnap | middle | top",
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
					"description": "Panel is invisible and not included in layout (does not keep its dimensions)."
				},
				{
					"name": "visible",
					"description": "(default) Panel is visible and included in layout."
				}
			],
			"syntax": "visible | collapse",
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
				}
			],
			"syntax": "normal | nowrap",
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
					"name": "fit-children",
					"description": "(default) Panel size is set to the required size of all children. Can be specified in pixels or percentage."
				},
				{
					"name": "fill-parent-flow()",
					"description": "(default) Fills to remaining parent height. If multiple children are set to this value, weight is used to determine final height."
				},
				{
					"name": "height-percentage()",
					"description": "(default) Percentage of the panel's height, which allows you to enforce a particular aspect ratio."
				}
			],
			"syntax": "<viewport-length>",
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
			"values": [],
			"syntax": "<integer>",
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
			"description": "Takes a selector list as its argument. It represents an element that is represented by its argument."
		},
		{
			"name": ":not()",
			"description": "The negation pseudo-class, :not(X), is a functional notation taking a simple selector (excluding the negation pseudo-class itself) as an argument. It represents an element that is not represented by its argument."
		}
	],
	"pseudoElements": [
	]
};