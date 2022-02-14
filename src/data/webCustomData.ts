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
			"name": "additive-symbols",
			"browsers": [
				"FF33"
			],
			"syntax": "[ <integer> && <symbol> ]#",
			"relevance": 50,
			"description": "@counter-style descriptor. Specifies the symbols used by the marker-construction algorithm specified by the system descriptor. Needs to be specified if the counter system is 'additive'.",
			"restrictions": [
				"integer",
				"string",
				"image",
				"identifier"
			]
		},
		{
			"name": "align-content",
			"values": [
				{
					"name": "center",
					"description": "Lines are packed toward the center of the flex container."
				},
				{
					"name": "flex-end",
					"description": "Lines are packed toward the end of the flex container."
				},
				{
					"name": "flex-start",
					"description": "Lines are packed toward the start of the flex container."
				},
				{
					"name": "space-around",
					"description": "Lines are evenly distributed in the flex container, with half-size spaces on either end."
				},
				{
					"name": "space-between",
					"description": "Lines are evenly distributed in the flex container."
				},
				{
					"name": "stretch",
					"description": "Lines stretch to take up the remaining space."
				}
			],
			"syntax": "normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position>",
			"relevance": 62,
			"description": "Aligns a flex container’s lines within the flex container when there is extra space in the cross-axis, similar to how 'justify-content' aligns individual items within the main-axis.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "align-items",
			"values": [
				{
					"name": "baseline",
					"description": "If the flex item’s inline axis is the same as the cross axis, this value is identical to 'flex-start'. Otherwise, it participates in baseline alignment."
				},
				{
					"name": "center",
					"description": "The flex item’s margin box is centered in the cross axis within the line."
				},
				{
					"name": "flex-end",
					"description": "The cross-end margin edge of the flex item is placed flush with the cross-end edge of the line."
				},
				{
					"name": "flex-start",
					"description": "The cross-start margin edge of the flex item is placed flush with the cross-start edge of the line."
				},
				{
					"name": "stretch",
					"description": "If the cross size property of the flex item computes to auto, and neither of the cross-axis margins are auto, the flex item is stretched."
				}
			],
			"syntax": "normal | stretch | <baseline-position> | [ <overflow-position>? <self-position> ]",
			"relevance": 86,
			"description": "Aligns flex items along the cross axis of the current line of the flex container.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "justify-items",
			"values": [
				{
					"name": "auto"
				},
				{
					"name": "normal"
				},
				{
					"name": "end"
				},
				{
					"name": "start"
				},
				{
					"name": "flex-end",
					"description": "\"Flex items are packed toward the end of the line.\""
				},
				{
					"name": "flex-start",
					"description": "\"Flex items are packed toward the start of the line.\""
				},
				{
					"name": "self-end",
					"description": "The item is packed flush to the edge of the alignment container of the end side of the item, in the appropriate axis."
				},
				{
					"name": "self-start",
					"description": "The item is packed flush to the edge of the alignment container of the start side of the item, in the appropriate axis.."
				},
				{
					"name": "center",
					"description": "The items are packed flush to each other toward the center of the of the alignment container."
				},
				{
					"name": "left"
				},
				{
					"name": "right"
				},
				{
					"name": "baseline"
				},
				{
					"name": "first baseline"
				},
				{
					"name": "last baseline"
				},
				{
					"name": "stretch",
					"description": "If the cross size property of the flex item computes to auto, and neither of the cross-axis margins are auto, the flex item is stretched."
				},
				{
					"name": "save"
				},
				{
					"name": "unsave"
				},
				{
					"name": "legacy"
				}
			],
			"syntax": "normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ] | legacy | legacy && [ left | right | center ]",
			"relevance": 53,
			"description": "Defines the default justify-self for all items of the box, giving them the default way of justifying each box along the appropriate axis",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "justify-self",
			"values": [
				{
					"name": "auto"
				},
				{
					"name": "normal"
				},
				{
					"name": "end"
				},
				{
					"name": "start"
				},
				{
					"name": "flex-end",
					"description": "\"Flex items are packed toward the end of the line.\""
				},
				{
					"name": "flex-start",
					"description": "\"Flex items are packed toward the start of the line.\""
				},
				{
					"name": "self-end",
					"description": "The item is packed flush to the edge of the alignment container of the end side of the item, in the appropriate axis."
				},
				{
					"name": "self-start",
					"description": "The item is packed flush to the edge of the alignment container of the start side of the item, in the appropriate axis.."
				},
				{
					"name": "center",
					"description": "The items are packed flush to each other toward the center of the of the alignment container."
				},
				{
					"name": "left"
				},
				{
					"name": "right"
				},
				{
					"name": "baseline"
				},
				{
					"name": "first baseline"
				},
				{
					"name": "last baseline"
				},
				{
					"name": "stretch",
					"description": "If the cross size property of the flex item computes to auto, and neither of the cross-axis margins are auto, the flex item is stretched."
				},
				{
					"name": "save"
				},
				{
					"name": "unsave"
				}
			],
			"syntax": "auto | normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ]",
			"relevance": 53,
			"description": "Defines the way of justifying a box inside its container along the appropriate axis.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "align-self",
			"values": [
				{
					"name": "auto",
					"description": "Computes to the value of 'align-items' on the element’s parent, or 'stretch' if the element has no parent. On absolutely positioned elements, it computes to itself."
				},
				{
					"name": "baseline",
					"description": "If the flex item’s inline axis is the same as the cross axis, this value is identical to 'flex-start'. Otherwise, it participates in baseline alignment."
				},
				{
					"name": "center",
					"description": "The flex item’s margin box is centered in the cross axis within the line."
				},
				{
					"name": "flex-end",
					"description": "The cross-end margin edge of the flex item is placed flush with the cross-end edge of the line."
				},
				{
					"name": "flex-start",
					"description": "The cross-start margin edge of the flex item is placed flush with the cross-start edge of the line."
				},
				{
					"name": "stretch",
					"description": "If the cross size property of the flex item computes to auto, and neither of the cross-axis margins are auto, the flex item is stretched."
				}
			],
			"syntax": "auto | normal | stretch | <baseline-position> | <overflow-position>? <self-position>",
			"relevance": 72,
			"description": "Allows the default alignment along the cross axis to be overridden for individual flex items.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "all",
			"browsers": [
				"E79",
				"FF27",
				"S9.1",
				"C37",
				"O24"
			],
			"values": [],
			"syntax": "initial | inherit | unset | revert",
			"relevance": 52,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/all"
				}
			],
			"description": "Shorthand that resets all properties except 'direction' and 'unicode-bidi'.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "alt",
			"browsers": [
				"S9"
			],
			"values": [],
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/alt"
				}
			],
			"description": "Provides alternative text for assistive technology to replace the generated content of a ::before or ::after element.",
			"restrictions": [
				"string",
				"enum"
			]
		},
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
			"name": "animation-play-state",
			"values": [
				{
					"name": "paused",
					"description": "A running animation will be paused."
				},
				{
					"name": "running",
					"description": "Resume playback of a paused animation."
				}
			],
			"syntax": "<single-animation-play-state>#",
			"relevance": 54,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/animation-play-state"
				}
			],
			"description": "Defines whether the animation is running or paused.",
			"restrictions": [
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
			"name": "backface-visibility",
			"values": [
				{
					"name": "hidden",
					"description": "Back side is hidden."
				},
				{
					"name": "visible",
					"description": "Back side is visible."
				}
			],
			"syntax": "visible | hidden",
			"relevance": 59,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/backface-visibility"
				}
			],
			"description": "Determines whether or not the 'back' side of a transformed element is visible when facing the viewer. With an identity transform, the front side of an element faces the viewer.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "background",
			"values": [
				{
					"name": "fixed",
					"description": "The background is fixed with regard to the viewport. In paged media where there is no viewport, a 'fixed' background is fixed with respect to the page box and therefore replicated on every page."
				},
				{
					"name": "local",
					"description": "The background is fixed with regard to the element's contents: if the element has a scrolling mechanism, the background scrolls with the element's contents."
				},
				{
					"name": "none",
					"description": "A value of 'none' counts as an image layer but draws nothing."
				},
				{
					"name": "scroll",
					"description": "The background is fixed with regard to the element itself and does not scroll with its contents. (It is effectively attached to the element's border.)"
				}
			],
			"syntax": "[ <bg-layer> , ]* <final-bg-layer>",
			"relevance": 93,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/background"
				}
			],
			"description": "Shorthand property for setting most background properties at the same place in the style sheet.",
			"restrictions": [
				"enum",
				"image",
				"color",
				"position",
				"length",
				"repeat",
				"percentage",
				"box"
			]
		},
		{
			"name": "background-attachment",
			"values": [
				{
					"name": "fixed",
					"description": "The background is fixed with regard to the viewport. In paged media where there is no viewport, a 'fixed' background is fixed with respect to the page box and therefore replicated on every page."
				},
				{
					"name": "local",
					"description": "The background is fixed with regard to the element’s contents: if the element has a scrolling mechanism, the background scrolls with the element’s contents."
				},
				{
					"name": "scroll",
					"description": "The background is fixed with regard to the element itself and does not scroll with its contents. (It is effectively attached to the element’s border.)"
				}
			],
			"syntax": "<attachment>#",
			"relevance": 54,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/background-attachment"
				}
			],
			"description": "Specifies whether the background images are fixed with regard to the viewport ('fixed') or scroll along with the element ('scroll') or its contents ('local').",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "background-blend-mode",
			"browsers": [
				"E79",
				"FF30",
				"S8",
				"C35",
				"O22"
			],
			"values": [
				{
					"name": "normal",
					"description": "Default attribute which specifies no blending"
				},
				{
					"name": "multiply",
					"description": "The source color is multiplied by the destination color and replaces the destination."
				},
				{
					"name": "screen",
					"description": "Multiplies the complements of the backdrop and source color values, then complements the result."
				},
				{
					"name": "overlay",
					"description": "Multiplies or screens the colors, depending on the backdrop color value."
				},
				{
					"name": "darken",
					"description": "Selects the darker of the backdrop and source colors."
				},
				{
					"name": "lighten",
					"description": "Selects the lighter of the backdrop and source colors."
				},
				{
					"name": "color-dodge",
					"description": "Brightens the backdrop color to reflect the source color."
				},
				{
					"name": "color-burn",
					"description": "Darkens the backdrop color to reflect the source color."
				},
				{
					"name": "hard-light",
					"description": "Multiplies or screens the colors, depending on the source color value."
				},
				{
					"name": "soft-light",
					"description": "Darkens or lightens the colors, depending on the source color value."
				},
				{
					"name": "difference",
					"description": "Subtracts the darker of the two constituent colors from the lighter color.."
				},
				{
					"name": "exclusion",
					"description": "Produces an effect similar to that of the Difference mode but lower in contrast."
				},
				{
					"name": "hue",
					"browsers": [
						"E79",
						"FF30",
						"S8",
						"C35",
						"O22"
					],
					"description": "Creates a color with the hue of the source color and the saturation and luminosity of the backdrop color."
				},
				{
					"name": "saturation",
					"browsers": [
						"E79",
						"FF30",
						"S8",
						"C35",
						"O22"
					],
					"description": "Creates a color with the saturation of the source color and the hue and luminosity of the backdrop color."
				},
				{
					"name": "color",
					"browsers": [
						"E79",
						"FF30",
						"S8",
						"C35",
						"O22"
					],
					"description": "Creates a color with the hue and saturation of the source color and the luminosity of the backdrop color."
				},
				{
					"name": "luminosity",
					"browsers": [
						"E79",
						"FF30",
						"S8",
						"C35",
						"O22"
					],
					"description": "Creates a color with the luminosity of the source color and the hue and saturation of the backdrop color."
				}
			],
			"syntax": "<blend-mode>#",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/background-blend-mode"
				}
			],
			"description": "Defines the blending mode of each background layer.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "background-clip",
			"syntax": "<box>#",
			"relevance": 68,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/background-clip"
				}
			],
			"description": "Determines the background painting area.",
			"restrictions": [
				"box"
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
			"name": "background-origin",
			"syntax": "<box>#",
			"relevance": 54,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/background-origin"
				}
			],
			"description": "For elements rendered as a single box, specifies the background positioning area. For elements rendered as multiple boxes (e.g., inline boxes on several lines, boxes on several pages) specifies which boxes 'box-decoration-break' operates on to determine the background positioning area(s).",
			"restrictions": [
				"box"
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
			"name": "background-position-x",
			"values": [
				{
					"name": "center",
					"description": "Equivalent to '50%' ('left 50%') for the horizontal position if the horizontal position is not otherwise specified, or '50%' ('top 50%') for the vertical position if it is."
				},
				{
					"name": "left",
					"description": "Equivalent to '0%' for the horizontal position if one or two values are given, otherwise specifies the left edge as the origin for the next offset."
				},
				{
					"name": "right",
					"description": "Equivalent to '100%' for the horizontal position if one or two values are given, otherwise specifies the right edge as the origin for the next offset."
				}
			],
			"status": "experimental",
			"syntax": "[ center | [ [ left | right | x-start | x-end ]? <length-percentage>? ]! ]#",
			"relevance": 54,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/background-position-x"
				}
			],
			"description": "If background images have been specified, this property specifies their initial position (after any resizing) within their corresponding background positioning area.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			"name": "background-position-y",
			"values": [
				{
					"name": "bottom",
					"description": "Equivalent to '100%' for the vertical position if one or two values are given, otherwise specifies the bottom edge as the origin for the next offset."
				},
				{
					"name": "center",
					"description": "Equivalent to '50%' ('left 50%') for the horizontal position if the horizontal position is not otherwise specified, or '50%' ('top 50%') for the vertical position if it is."
				},
				{
					"name": "top",
					"description": "Equivalent to '0%' for the vertical position if one or two values are given, otherwise specifies the top edge as the origin for the next offset."
				}
			],
			"status": "experimental",
			"syntax": "[ center | [ [ top | bottom | y-start | y-end ]? <length-percentage>? ]! ]#",
			"relevance": 53,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/background-position-y"
				}
			],
			"description": "If background images have been specified, this property specifies their initial position (after any resizing) within their corresponding background positioning area.",
			"restrictions": [
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
			"name": "behavior",
			"browsers": [
				"IE6"
			],
			"relevance": 50,
			"description": "IE only. Used to extend behaviors of the browser.",
			"restrictions": [
				"url"
			]
		},
		{
			"name": "block-size",
			"browsers": [
				"E79",
				"FF41",
				"S12.1",
				"C57",
				"O44"
			],
			"values": [
				{
					"name": "auto",
					"description": "Depends on the values of other properties."
				}
			],
			"syntax": "<'width'>",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/block-size"
				}
			],
			"description": "Size of an element in the direction opposite that of the direction specified by 'writing-mode'.",
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
			"name": "border-block-end",
			"browsers": [
				"E79",
				"FF41",
				"S12.1",
				"C69",
				"O56"
			],
			"syntax": "<'border-top-width'> || <'border-top-style'> || <color>",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-block-end"
				}
			],
			"description": "Logical 'border-bottom'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"length",
				"line-width",
				"line-style",
				"color"
			]
		},
		{
			"name": "border-block-start",
			"browsers": [
				"E79",
				"FF41",
				"S12.1",
				"C69",
				"O56"
			],
			"syntax": "<'border-top-width'> || <'border-top-style'> || <color>",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-block-start"
				}
			],
			"description": "Logical 'border-top'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"length",
				"line-width",
				"line-style",
				"color"
			]
		},
		{
			"name": "border-block-end-color",
			"browsers": [
				"E79",
				"FF41",
				"S12.1",
				"C69",
				"O56"
			],
			"syntax": "<'border-top-color'>",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-block-end-color"
				}
			],
			"description": "Logical 'border-bottom-color'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"color"
			]
		},
		{
			"name": "border-block-start-color",
			"browsers": [
				"E79",
				"FF41",
				"S12.1",
				"C69",
				"O56"
			],
			"syntax": "<'border-top-color'>",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-block-start-color"
				}
			],
			"description": "Logical 'border-top-color'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"color"
			]
		},
		{
			"name": "border-block-end-style",
			"browsers": [
				"E79",
				"FF41",
				"S12.1",
				"C69",
				"O56"
			],
			"syntax": "<'border-top-style'>",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-block-end-style"
				}
			],
			"description": "Logical 'border-bottom-style'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"line-style"
			]
		},
		{
			"name": "border-block-start-style",
			"browsers": [
				"E79",
				"FF41",
				"S12.1",
				"C69",
				"O56"
			],
			"syntax": "<'border-top-style'>",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-block-start-style"
				}
			],
			"description": "Logical 'border-top-style'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"line-style"
			]
		},
		{
			"name": "border-block-end-width",
			"browsers": [
				"E79",
				"FF41",
				"S12.1",
				"C69",
				"O56"
			],
			"syntax": "<'border-top-width'>",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-block-end-width"
				}
			],
			"description": "Logical 'border-bottom-width'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"length",
				"line-width"
			]
		},
		{
			"name": "border-block-start-width",
			"browsers": [
				"E79",
				"FF41",
				"S12.1",
				"C69",
				"O56"
			],
			"syntax": "<'border-top-width'>",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-block-start-width"
				}
			],
			"description": "Logical 'border-top-width'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"length",
				"line-width"
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
			"name": "border-collapse",
			"values": [
				{
					"name": "collapse",
					"description": "Selects the collapsing borders model."
				},
				{
					"name": "separate",
					"description": "Selects the separated borders border model."
				}
			],
			"syntax": "collapse | separate",
			"relevance": 74,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-collapse"
				}
			],
			"description": "Selects a table's border model.",
			"restrictions": [
				"enum"
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
			"name": "border-image",
			"values": [
				{
					"name": "auto",
					"description": "If 'auto' is specified then the border image width is the intrinsic width or height (whichever is applicable) of the corresponding image slice. If the image does not have the required intrinsic dimension then the corresponding border-width is used instead."
				},
				{
					"name": "fill",
					"description": "Causes the middle part of the border-image to be preserved."
				},
				{
					"name": "none",
					"description": "Use the border styles."
				},
				{
					"name": "repeat",
					"description": "The image is tiled (repeated) to fill the area."
				},
				{
					"name": "round",
					"description": "The image is tiled (repeated) to fill the area. If it does not fill the area with a whole number of tiles, the image is rescaled so that it does."
				},
				{
					"name": "space",
					"description": "The image is tiled (repeated) to fill the area. If it does not fill the area with a whole number of tiles, the extra space is distributed around the tiles."
				},
				{
					"name": "stretch",
					"description": "The image is stretched to fill the area."
				},
				{
					"name": "url()"
				}
			],
			"syntax": "<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>",
			"relevance": 53,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-image"
				}
			],
			"description": "Shorthand property for setting 'border-image-source', 'border-image-slice', 'border-image-width', 'border-image-outset' and 'border-image-repeat'. Omitted values are set to their initial values.",
			"restrictions": [
				"length",
				"percentage",
				"number",
				"url",
				"enum"
			]
		},
		{
			"name": "border-image-outset",
			"syntax": "[ <length> | <number> ]{1,4}",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-image-outset"
				}
			],
			"description": "The values specify the amount by which the border image area extends beyond the border box on the top, right, bottom, and left sides respectively. If the fourth value is absent, it is the same as the second. If the third one is also absent, it is the same as the first. If the second one is also absent, it is the same as the first. Numbers represent multiples of the corresponding border-width.",
			"restrictions": [
				"length",
				"number"
			]
		},
		{
			"name": "border-image-repeat",
			"values": [
				{
					"name": "repeat",
					"description": "The image is tiled (repeated) to fill the area."
				},
				{
					"name": "round",
					"description": "The image is tiled (repeated) to fill the area. If it does not fill the area with a whole number of tiles, the image is rescaled so that it does."
				},
				{
					"name": "space",
					"description": "The image is tiled (repeated) to fill the area. If it does not fill the area with a whole number of tiles, the extra space is distributed around the tiles."
				},
				{
					"name": "stretch",
					"description": "The image is stretched to fill the area."
				}
			],
			"syntax": "[ stretch | repeat | round | space ]{1,2}",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-image-repeat"
				}
			],
			"description": "Specifies how the images for the sides and the middle part of the border image are scaled and tiled. If the second keyword is absent, it is assumed to be the same as the first.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "border-image-slice",
			"values": [
				{
					"name": "fill",
					"description": "Causes the middle part of the border-image to be preserved."
				}
			],
			"syntax": "<number-percentage>{1,4} && fill?",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-image-slice"
				}
			],
			"description": "Specifies inward offsets from the top, right, bottom, and left edges of the image, dividing it into nine regions: four corners, four edges and a middle.",
			"restrictions": [
				"number",
				"percentage"
			]
		},
		{
			"name": "border-image-source",
			"values": [
				{
					"name": "none",
					"description": "Use the border styles."
				}
			],
			"syntax": "none | <image>",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-image-source"
				}
			],
			"description": "Specifies an image to use instead of the border styles given by the 'border-style' properties and as an additional background layer for the element. If the value is 'none' or if the image cannot be displayed, the border styles will be used.",
			"restrictions": [
				"image"
			]
		},
		{
			"name": "border-image-width",
			"values": [
				{
					"name": "auto",
					"description": "The border image width is the intrinsic width or height (whichever is applicable) of the corresponding image slice. If the image does not have the required intrinsic dimension then the corresponding border-width is used instead."
				}
			],
			"syntax": "[ <length-percentage> | <number> | auto ]{1,4}",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-image-width"
				}
			],
			"description": "The four values of 'border-image-width' specify offsets that are used to divide the border image area into nine parts. They represent inward distances from the top, right, bottom, and left sides of the area, respectively.",
			"restrictions": [
				"length",
				"percentage",
				"number"
			]
		},
		{
			"name": "border-inline-end",
			"browsers": [
				"E79",
				"FF41",
				"S12.1",
				"C69",
				"O56"
			],
			"syntax": "<'border-top-width'> || <'border-top-style'> || <color>",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-inline-end"
				}
			],
			"description": "Logical 'border-right'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"length",
				"line-width",
				"line-style",
				"color"
			]
		},
		{
			"name": "border-inline-start",
			"browsers": [
				"E79",
				"FF41",
				"S12.1",
				"C69",
				"O56"
			],
			"syntax": "<'border-top-width'> || <'border-top-style'> || <color>",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-inline-start"
				}
			],
			"description": "Logical 'border-left'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"length",
				"line-width",
				"line-style",
				"color"
			]
		},
		{
			"name": "border-inline-end-color",
			"browsers": [
				"E79",
				"FF41",
				"S12.1",
				"C69",
				"O56"
			],
			"syntax": "<'border-top-color'>",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-inline-end-color"
				}
			],
			"description": "Logical 'border-right-color'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"color"
			]
		},
		{
			"name": "border-inline-start-color",
			"browsers": [
				"E79",
				"FF41",
				"S12.1",
				"C69",
				"O56"
			],
			"syntax": "<'border-top-color'>",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-inline-start-color"
				}
			],
			"description": "Logical 'border-left-color'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"color"
			]
		},
		{
			"name": "border-inline-end-style",
			"browsers": [
				"E79",
				"FF41",
				"S12.1",
				"C69",
				"O56"
			],
			"syntax": "<'border-top-style'>",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-inline-end-style"
				}
			],
			"description": "Logical 'border-right-style'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"line-style"
			]
		},
		{
			"name": "border-inline-start-style",
			"browsers": [
				"E79",
				"FF41",
				"S12.1",
				"C69",
				"O56"
			],
			"syntax": "<'border-top-style'>",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-inline-start-style"
				}
			],
			"description": "Logical 'border-left-style'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"line-style"
			]
		},
		{
			"name": "border-inline-end-width",
			"browsers": [
				"E79",
				"FF41",
				"S12.1",
				"C69",
				"O56"
			],
			"syntax": "<'border-top-width'>",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-inline-end-width"
				}
			],
			"description": "Logical 'border-right-width'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"length",
				"line-width"
			]
		},
		{
			"name": "border-inline-start-width",
			"browsers": [
				"E79",
				"FF41",
				"S12.1",
				"C69",
				"O56"
			],
			"syntax": "<'border-top-width'>",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-inline-start-width"
				}
			],
			"description": "Logical 'border-left-width'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"length",
				"line-width"
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
			"name": "border-spacing",
			"syntax": "<length> <length>?",
			"relevance": 68,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-spacing"
				}
			],
			"description": "The lengths specify the distance that separates adjoining cell borders. If one length is specified, it gives both the horizontal and vertical spacing. If two are specified, the first gives the horizontal spacing and the second the vertical spacing. Lengths may not be negative.",
			"restrictions": [
				"length"
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
			"name": "bottom",
			"values": [
				{
					"name": "auto",
					"description": "For non-replaced elements, the effect of this value depends on which of related properties have the value 'auto' as well"
				}
			],
			"syntax": "<length> | <percentage> | auto",
			"relevance": 91,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/bottom"
				}
			],
			"description": "Specifies how far an absolutely positioned box's bottom margin edge is offset above the bottom edge of the box's 'containing block'.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			"name": "box-decoration-break",
			"browsers": [
				"E79",
				"FF32",
				"S7",
				"C22",
				"O15"
			],
			"values": [
				{
					"name": "clone",
					"description": "Each box is independently wrapped with the border and padding."
				},
				{
					"name": "slice",
					"description": "The effect is as though the element were rendered with no breaks present, and then sliced by the breaks afterward."
				}
			],
			"syntax": "slice | clone",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/box-decoration-break"
				}
			],
			"description": "Specifies whether individual boxes are treated as broken pieces of one continuous box, or whether each box is individually wrapped with the border and padding.",
			"restrictions": [
				"enum"
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
			"name": "box-sizing",
			"values": [
				{
					"name": "border-box",
					"description": "The specified width and height (and respective min/max properties) on this element determine the border box of the element."
				},
				{
					"name": "content-box",
					"description": "Behavior of width and height as specified by CSS2.1. The specified width and height (and respective min/max properties) apply to the width and height respectively of the content box of the element."
				}
			],
			"syntax": "content-box | border-box",
			"relevance": 93,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/box-sizing"
				}
			],
			"description": "Specifies the behavior of the 'width' and 'height' properties.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "break-after",
			"values": [
				{
					"name": "always",
					"description": "Always force a page break before/after the generated box."
				},
				{
					"name": "auto",
					"description": "Neither force nor forbid a page/column break before/after the principal box."
				},
				{
					"name": "avoid",
					"description": "Avoid a break before/after the principal box."
				},
				{
					"name": "avoid-column",
					"description": "Avoid a column break before/after the principal box."
				},
				{
					"name": "avoid-page",
					"description": "Avoid a page break before/after the principal box."
				},
				{
					"name": "column",
					"description": "Always force a column break before/after the principal box."
				},
				{
					"name": "left",
					"description": "Force one or two page breaks before/after the generated box so that the next page is formatted as a left page."
				},
				{
					"name": "page",
					"description": "Always force a page break before/after the principal box."
				},
				{
					"name": "right",
					"description": "Force one or two page breaks before/after the generated box so that the next page is formatted as a right page."
				}
			],
			"syntax": "auto | avoid | always | all | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region",
			"relevance": 50,
			"description": "Describes the page/column/region break behavior after the generated box.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "break-before",
			"values": [
				{
					"name": "always",
					"description": "Always force a page break before/after the generated box."
				},
				{
					"name": "auto",
					"description": "Neither force nor forbid a page/column break before/after the principal box."
				},
				{
					"name": "avoid",
					"description": "Avoid a break before/after the principal box."
				},
				{
					"name": "avoid-column",
					"description": "Avoid a column break before/after the principal box."
				},
				{
					"name": "avoid-page",
					"description": "Avoid a page break before/after the principal box."
				},
				{
					"name": "column",
					"description": "Always force a column break before/after the principal box."
				},
				{
					"name": "left",
					"description": "Force one or two page breaks before/after the generated box so that the next page is formatted as a left page."
				},
				{
					"name": "page",
					"description": "Always force a page break before/after the principal box."
				},
				{
					"name": "right",
					"description": "Force one or two page breaks before/after the generated box so that the next page is formatted as a right page."
				}
			],
			"syntax": "auto | avoid | always | all | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region",
			"relevance": 50,
			"description": "Describes the page/column/region break behavior before the generated box.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "break-inside",
			"values": [
				{
					"name": "auto",
					"description": "Impose no additional breaking constraints within the box."
				},
				{
					"name": "avoid",
					"description": "Avoid breaks within the box."
				},
				{
					"name": "avoid-column",
					"description": "Avoid a column break within the box."
				},
				{
					"name": "avoid-page",
					"description": "Avoid a page break within the box."
				}
			],
			"syntax": "auto | avoid | avoid-page | avoid-column | avoid-region",
			"relevance": 51,
			"description": "Describes the page/column/region break behavior inside the principal box.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "caption-side",
			"values": [
				{
					"name": "bottom",
					"description": "Positions the caption box below the table box."
				},
				{
					"name": "top",
					"description": "Positions the caption box above the table box."
				}
			],
			"syntax": "top | bottom | block-start | block-end | inline-start | inline-end",
			"relevance": 52,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/caption-side"
				}
			],
			"description": "Specifies the position of the caption box with respect to the table box.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "caret-color",
			"browsers": [
				"E79",
				"FF53",
				"S11.1",
				"C57",
				"O44"
			],
			"values": [
				{
					"name": "auto",
					"description": "The user agent selects an appropriate color for the caret. This is generally currentcolor, but the user agent may choose a different color to ensure good visibility and contrast with the surrounding content, taking into account the value of currentcolor, the background, shadows, and other factors."
				}
			],
			"syntax": "auto | <color>",
			"relevance": 52,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/caret-color"
				}
			],
			"description": "Controls the color of the text insertion indicator.",
			"restrictions": [
				"color",
				"enum"
			]
		},
		{
			"name": "clear",
			"values": [
				{
					"name": "both",
					"description": "The clearance of the generated box is set to the amount necessary to place the top border edge below the bottom outer edge of any right-floating and left-floating boxes that resulted from elements earlier in the source document."
				},
				{
					"name": "left",
					"description": "The clearance of the generated box is set to the amount necessary to place the top border edge below the bottom outer edge of any left-floating boxes that resulted from elements earlier in the source document."
				},
				{
					"name": "none",
					"description": "No constraint on the box's position with respect to floats."
				},
				{
					"name": "right",
					"description": "The clearance of the generated box is set to the amount necessary to place the top border edge below the bottom outer edge of any right-floating boxes that resulted from elements earlier in the source document."
				}
			],
			"syntax": "none | left | right | both | inline-start | inline-end",
			"relevance": 85,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/clear"
				}
			],
			"description": "Indicates which sides of an element's box(es) may not be adjacent to an earlier floating box. The 'clear' property does not consider floats inside the element itself or in other block formatting contexts.",
			"restrictions": [
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
			"name": "clip-path",
			"values": [
				{
					"name": "none",
					"description": "No clipping path gets created."
				},
				{
					"name": "url()",
					"description": "References a <clipPath> element to create a clipping path."
				}
			],
			"syntax": "<clip-source> | [ <basic-shape> || <geometry-box> ] | none",
			"relevance": 57,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/clip-path"
				}
			],
			"description": "Specifies a clipping path where everything inside the path is visible and everything outside is clipped out.",
			"restrictions": [
				"url",
				"shape",
				"geometry-box",
				"enum"
			]
		},
		{
			"name": "clip-rule",
			"browsers": [
				"E",
				"C5",
				"FF3",
				"IE10",
				"O9",
				"S6"
			],
			"values": [
				{
					"name": "evenodd",
					"description": "Determines the ‘insideness’ of a point on the canvas by drawing a ray from that point to infinity in any direction and counting the number of path segments from the given shape that the ray crosses."
				},
				{
					"name": "nonzero",
					"description": "Determines the ‘insideness’ of a point on the canvas by drawing a ray from that point to infinity in any direction and then examining the places where a segment of the shape crosses the ray."
				}
			],
			"relevance": 50,
			"description": "Indicates the algorithm which is to be used to determine what parts of the canvas are included inside the shape.",
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
			"name": "color-interpolation-filters",
			"browsers": [
				"E",
				"C5",
				"FF3",
				"IE10",
				"O9",
				"S6"
			],
			"values": [
				{
					"name": "auto",
					"description": "Color operations are not required to occur in a particular color space."
				},
				{
					"name": "linearRGB",
					"description": "Color operations should occur in the linearized RGB color space."
				},
				{
					"name": "sRGB",
					"description": "Color operations should occur in the sRGB color space."
				}
			],
			"relevance": 50,
			"description": "Specifies the color space for imaging operations performed via filter effects.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "column-count",
			"values": [
				{
					"name": "auto",
					"description": "Determines the number of columns by the 'column-width' property and the element width."
				}
			],
			"syntax": "<integer> | auto",
			"relevance": 53,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/column-count"
				}
			],
			"description": "Describes the optimal number of columns into which the content of the element will be flowed.",
			"restrictions": [
				"integer",
				"enum"
			]
		},
		{
			"name": "column-fill",
			"values": [
				{
					"name": "auto",
					"description": "Fills columns sequentially."
				},
				{
					"name": "balance",
					"description": "Balance content equally between columns, if possible."
				}
			],
			"syntax": "auto | balance | balance-all",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/column-fill"
				}
			],
			"description": "In continuous media, this property will only be consulted if the length of columns has been constrained. Otherwise, columns will automatically be balanced.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "column-gap",
			"values": [
				{
					"name": "normal",
					"description": "User agent specific and typically equivalent to 1em."
				}
			],
			"syntax": "normal | <length-percentage>",
			"relevance": 55,
			"description": "Sets the gap between columns. If there is a column rule between columns, it will appear in the middle of the gap.",
			"restrictions": [
				"length",
				"enum"
			]
		},
		{
			"name": "column-rule",
			"syntax": "<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>",
			"relevance": 51,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/column-rule"
				}
			],
			"description": "Shorthand for setting 'column-rule-width', 'column-rule-style', and 'column-rule-color' at the same place in the style sheet. Omitted values are set to their initial values.",
			"restrictions": [
				"length",
				"line-width",
				"line-style",
				"color"
			]
		},
		{
			"name": "column-rule-color",
			"syntax": "<color>",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/column-rule-color"
				}
			],
			"description": "Sets the color of the column rule",
			"restrictions": [
				"color"
			]
		},
		{
			"name": "column-rule-style",
			"syntax": "<'border-style'>",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/column-rule-style"
				}
			],
			"description": "Sets the style of the rule between columns of an element.",
			"restrictions": [
				"line-style"
			]
		},
		{
			"name": "column-rule-width",
			"syntax": "<'border-width'>",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/column-rule-width"
				}
			],
			"description": "Sets the width of the rule between columns. Negative values are not allowed.",
			"restrictions": [
				"length",
				"line-width"
			]
		},
		{
			"name": "columns",
			"values": [
				{
					"name": "auto",
					"description": "The width depends on the values of other properties."
				}
			],
			"syntax": "<'column-width'> || <'column-count'>",
			"relevance": 51,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/columns"
				}
			],
			"description": "A shorthand property which sets both 'column-width' and 'column-count'.",
			"restrictions": [
				"length",
				"integer",
				"enum"
			]
		},
		{
			"name": "column-span",
			"values": [
				{
					"name": "all",
					"description": "The element spans across all columns. Content in the normal flow that appears before the element is automatically balanced across all columns before the element appear."
				},
				{
					"name": "none",
					"description": "The element does not span multiple columns."
				}
			],
			"syntax": "none | all",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/column-span"
				}
			],
			"description": "Describes the page/column break behavior after the generated box.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "column-width",
			"values": [
				{
					"name": "auto",
					"description": "The width depends on the values of other properties."
				}
			],
			"syntax": "<length> | auto",
			"relevance": 51,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/column-width"
				}
			],
			"description": "Describes the width of columns in multicol elements.",
			"restrictions": [
				"length",
				"enum"
			]
		},
		{
			"name": "contain",
			"browsers": [
				"E79",
				"FF69",
				"C52",
				"O40"
			],
			"values": [
				{
					"name": "none",
					"description": "Indicates that the property has no effect."
				},
				{
					"name": "strict",
					"description": "Turns on all forms of containment for the element."
				},
				{
					"name": "content",
					"description": "All containment rules except size are applied to the element."
				},
				{
					"name": "size",
					"description": "For properties that can have effects on more than just an element and its descendants, those effects don't escape the containing element."
				},
				{
					"name": "layout",
					"description": "Turns on layout containment for the element."
				},
				{
					"name": "style",
					"description": "Turns on style containment for the element."
				},
				{
					"name": "paint",
					"description": "Turns on paint containment for the element."
				}
			],
			"syntax": "none | strict | content | [ size || layout || style || paint ]",
			"relevance": 58,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/contain"
				}
			],
			"description": "Indicates that an element and its contents are, as much as possible, independent of the rest of the document tree.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "content",
			"values": [
				{
					"name": "attr()",
					"description": "The attr(n) function returns as a string the value of attribute n for the subject of the selector."
				},
				{
					"name": "counter(name)",
					"description": "Counters are denoted by identifiers (see the 'counter-increment' and 'counter-reset' properties)."
				},
				{
					"name": "icon",
					"description": "The (pseudo-)element is replaced in its entirety by the resource referenced by its 'icon' property, and treated as a replaced element."
				},
				{
					"name": "none",
					"description": "On elements, this inhibits the children of the element from being rendered as children of this element, as if the element was empty. On pseudo-elements it causes the pseudo-element to have no content."
				},
				{
					"name": "normal",
					"description": "See http://www.w3.org/TR/css3-content/#content for computation rules."
				},
				{
					"name": "url()"
				}
			],
			"syntax": "normal | none | [ <content-replacement> | <content-list> ] [/ [ <string> | <counter> ]+ ]?",
			"relevance": 90,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/content"
				}
			],
			"description": "Determines which page-based occurrence of a given element is applied to a counter or string value.",
			"restrictions": [
				"string",
				"url"
			]
		},
		{
			"name": "counter-increment",
			"values": [
				{
					"name": "none",
					"description": "This element does not alter the value of any counters."
				}
			],
			"syntax": "[ <counter-name> <integer>? ]+ | none",
			"relevance": 53,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/counter-increment"
				}
			],
			"description": "Manipulate the value of existing counters.",
			"restrictions": [
				"identifier",
				"integer"
			]
		},
		{
			"name": "counter-reset",
			"values": [
				{
					"name": "none",
					"description": "The counter is not modified."
				}
			],
			"syntax": "[ <counter-name> <integer>? | <reversed-counter-name> <integer>? ]+ | none",
			"relevance": 53,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/counter-reset"
				}
			],
			"description": "Property accepts one or more names of counters (identifiers), each one optionally followed by an integer. The integer gives the value that the counter is set to on each occurrence of the element.",
			"restrictions": [
				"identifier",
				"integer"
			]
		},
		{
			"name": "cursor",
			"values": [
				{
					"name": "alias",
					"description": "Indicates an alias of/shortcut to something is to be created. Often rendered as an arrow with a small curved arrow next to it."
				},
				{
					"name": "all-scroll",
					"description": "Indicates that the something can be scrolled in any direction. Often rendered as arrows pointing up, down, left, and right with a dot in the middle."
				},
				{
					"name": "auto",
					"description": "The UA determines the cursor to display based on the current context."
				},
				{
					"name": "cell",
					"description": "Indicates that a cell or set of cells may be selected. Often rendered as a thick plus-sign with a dot in the middle."
				},
				{
					"name": "col-resize",
					"description": "Indicates that the item/column can be resized horizontally. Often rendered as arrows pointing left and right with a vertical bar separating them."
				},
				{
					"name": "context-menu",
					"description": "A context menu is available for the object under the cursor. Often rendered as an arrow with a small menu-like graphic next to it."
				},
				{
					"name": "copy",
					"description": "Indicates something is to be copied. Often rendered as an arrow with a small plus sign next to it."
				},
				{
					"name": "crosshair",
					"description": "A simple crosshair (e.g., short line segments resembling a '+' sign). Often used to indicate a two dimensional bitmap selection mode."
				},
				{
					"name": "default",
					"description": "The platform-dependent default cursor. Often rendered as an arrow."
				},
				{
					"name": "e-resize",
					"description": "Indicates that east edge is to be moved."
				},
				{
					"name": "ew-resize",
					"description": "Indicates a bidirectional east-west resize cursor."
				},
				{
					"name": "grab",
					"description": "Indicates that something can be grabbed."
				},
				{
					"name": "grabbing",
					"description": "Indicates that something is being grabbed."
				},
				{
					"name": "help",
					"description": "Help is available for the object under the cursor. Often rendered as a question mark or a balloon."
				},
				{
					"name": "move",
					"description": "Indicates something is to be moved."
				},
				{
					"name": "ne-resize",
					"description": "Indicates that movement starts from north-east corner."
				},
				{
					"name": "nesw-resize",
					"description": "Indicates a bidirectional north-east/south-west cursor."
				},
				{
					"name": "no-drop",
					"description": "Indicates that the dragged item cannot be dropped at the current cursor location. Often rendered as a hand or pointer with a small circle with a line through it."
				},
				{
					"name": "none",
					"description": "No cursor is rendered for the element."
				},
				{
					"name": "not-allowed",
					"description": "Indicates that the requested action will not be carried out. Often rendered as a circle with a line through it."
				},
				{
					"name": "n-resize",
					"description": "Indicates that north edge is to be moved."
				},
				{
					"name": "ns-resize",
					"description": "Indicates a bidirectional north-south cursor."
				},
				{
					"name": "nw-resize",
					"description": "Indicates that movement starts from north-west corner."
				},
				{
					"name": "nwse-resize",
					"description": "Indicates a bidirectional north-west/south-east cursor."
				},
				{
					"name": "pointer",
					"description": "The cursor is a pointer that indicates a link."
				},
				{
					"name": "progress",
					"description": "A progress indicator. The program is performing some processing, but is different from 'wait' in that the user may still interact with the program. Often rendered as a spinning beach ball, or an arrow with a watch or hourglass."
				},
				{
					"name": "row-resize",
					"description": "Indicates that the item/row can be resized vertically. Often rendered as arrows pointing up and down with a horizontal bar separating them."
				},
				{
					"name": "se-resize",
					"description": "Indicates that movement starts from south-east corner."
				},
				{
					"name": "s-resize",
					"description": "Indicates that south edge is to be moved."
				},
				{
					"name": "sw-resize",
					"description": "Indicates that movement starts from south-west corner."
				},
				{
					"name": "text",
					"description": "Indicates text that may be selected. Often rendered as a vertical I-beam."
				},
				{
					"name": "vertical-text",
					"description": "Indicates vertical-text that may be selected. Often rendered as a horizontal I-beam."
				},
				{
					"name": "wait",
					"description": "Indicates that the program is busy and the user should wait. Often rendered as a watch or hourglass."
				},
				{
					"name": "w-resize",
					"description": "Indicates that west edge is to be moved."
				},
				{
					"name": "zoom-in",
					"description": "Indicates that something can be zoomed (magnified) in."
				},
				{
					"name": "zoom-out",
					"description": "Indicates that something can be zoomed (magnified) out."
				}
			],
			"syntax": "[ [ <url> [ <x> <y> ]? , ]* [ auto | default | none | context-menu | help | pointer | progress | wait | cell | crosshair | text | vertical-text | alias | copy | move | no-drop | not-allowed | e-resize | n-resize | ne-resize | nw-resize | s-resize | se-resize | sw-resize | w-resize | ew-resize | ns-resize | nesw-resize | nwse-resize | col-resize | row-resize | all-scroll | zoom-in | zoom-out | grab | grabbing ] ]",
			"relevance": 92,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/cursor"
				}
			],
			"description": "Allows control over cursor appearance in an element",
			"restrictions": [
				"url",
				"number",
				"enum"
			]
		},
		{
			"name": "direction",
			"values": [
				{
					"name": "ltr",
					"description": "Left-to-right direction."
				},
				{
					"name": "rtl",
					"description": "Right-to-left direction."
				}
			],
			"syntax": "ltr | rtl",
			"relevance": 70,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/direction"
				}
			],
			"description": "Specifies the inline base direction or directionality of any bidi paragraph, embedding, isolate, or override established by the box. Note: for HTML content use the 'dir' attribute and 'bdo' element rather than this property.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "display",
			"values": [
				{
					"name": "block",
					"description": "The element generates a block-level box"
				},
				{
					"name": "contents",
					"description": "The element itself does not generate any boxes, but its children and pseudo-elements still generate boxes as normal."
				},
				{
					"name": "flex",
					"description": "The element generates a principal flex container box and establishes a flex formatting context."
				},
				{
					"name": "flexbox",
					"description": "The element lays out its contents using flow layout (block-and-inline layout). Standardized as 'flex'."
				},
				{
					"name": "flow-root",
					"description": "The element generates a block container box, and lays out its contents using flow layout."
				},
				{
					"name": "grid",
					"description": "The element generates a principal grid container box, and establishes a grid formatting context."
				},
				{
					"name": "inline",
					"description": "The element generates an inline-level box."
				},
				{
					"name": "inline-block",
					"description": "A block box, which itself is flowed as a single inline box, similar to a replaced element. The inside of an inline-block is formatted as a block box, and the box itself is formatted as an inline box."
				},
				{
					"name": "inline-flex",
					"description": "Inline-level flex container."
				},
				{
					"name": "inline-flexbox",
					"description": "Inline-level flex container. Standardized as 'inline-flex'"
				},
				{
					"name": "inline-table",
					"description": "Inline-level table wrapper box containing table box."
				},
				{
					"name": "list-item",
					"description": "One or more block boxes and one marker box."
				},
				{
					"name": "none",
					"description": "The element and its descendants generates no boxes."
				},
				{
					"name": "ruby",
					"description": "The element generates a principal ruby container box, and establishes a ruby formatting context."
				},
				{
					"name": "ruby-base"
				},
				{
					"name": "ruby-base-container"
				},
				{
					"name": "ruby-text"
				},
				{
					"name": "ruby-text-container"
				},
				{
					"name": "run-in",
					"description": "The element generates a run-in box. Run-in elements act like inlines or blocks, depending on the surrounding elements."
				},
				{
					"name": "table",
					"description": "The element generates a principal table wrapper box containing an additionally-generated table box, and establishes a table formatting context."
				},
				{
					"name": "table-caption"
				},
				{
					"name": "table-cell"
				},
				{
					"name": "table-column"
				},
				{
					"name": "table-column-group"
				},
				{
					"name": "table-footer-group"
				},
				{
					"name": "table-header-group"
				},
				{
					"name": "table-row"
				},
				{
					"name": "table-row-group"
				}
			],
			"syntax": "[ <display-outside> || <display-inside> ] | <display-listitem> | <display-internal> | <display-box> | <display-legacy>",
			"relevance": 96,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/display"
				}
			],
			"description": "In combination with 'float' and 'position', determines the type of box or boxes that are generated for an element.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "empty-cells",
			"values": [
				{
					"name": "hide",
					"description": "No borders or backgrounds are drawn around/behind empty cells."
				},
				{
					"name": "show",
					"description": "Borders and backgrounds are drawn around/behind empty cells (like normal cells)."
				}
			],
			"syntax": "show | hide",
			"relevance": 51,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/empty-cells"
				}
			],
			"description": "In the separated borders model, this property controls the rendering of borders and backgrounds around cells that have no visible content.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "enable-background",
			"values": [
				{
					"name": "accumulate",
					"description": "If the ancestor container element has a property of new, then all graphics elements within the current container are rendered both on the parent's background image and onto the target."
				},
				{
					"name": "new",
					"description": "Create a new background image canvas. All children of the current container element can access the background, and they will be rendered onto both the parent's background image canvas in addition to the target device."
				}
			],
			"relevance": 50,
			"description": "Deprecated. Use 'isolation' property instead when support allows. Specifies how the accumulation of the background image is managed.",
			"restrictions": [
				"integer",
				"length",
				"percentage",
				"enum"
			]
		},
		{
			"name": "fallback",
			"browsers": [
				"FF33"
			],
			"syntax": "<counter-style-name>",
			"relevance": 50,
			"description": "@counter-style descriptor. Specifies a fallback counter style to be used when the current counter style can’t create a representation for a given counter value.",
			"restrictions": [
				"identifier"
			]
		},
		{
			"name": "fill",
			"values": [
				{
					"name": "url()",
					"description": "A URL reference to a paint server element, which is an element that defines a paint server: ‘hatch’, ‘linearGradient’, ‘mesh’, ‘pattern’, ‘radialGradient’ and ‘solidcolor’."
				},
				{
					"name": "none",
					"description": "No paint is applied in this layer."
				}
			],
			"relevance": 77,
			"description": "Paints the interior of the given graphical element.",
			"restrictions": [
				"color",
				"enum",
				"url"
			]
		},
		{
			"name": "fill-opacity",
			"relevance": 52,
			"description": "Specifies the opacity of the painting operation used to paint the interior the current object.",
			"restrictions": [
				"number(0-1)"
			]
		},
		{
			"name": "fill-rule",
			"values": [
				{
					"name": "evenodd",
					"description": "Determines the ‘insideness’ of a point on the canvas by drawing a ray from that point to infinity in any direction and counting the number of path segments from the given shape that the ray crosses."
				},
				{
					"name": "nonzero",
					"description": "Determines the ‘insideness’ of a point on the canvas by drawing a ray from that point to infinity in any direction and then examining the places where a segment of the shape crosses the ray."
				}
			],
			"relevance": 50,
			"description": "Indicates the algorithm (or winding rule) which is to be used to determine what parts of the canvas are included inside the shape.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "filter",
			"browsers": [
				"E12",
				"FF35",
				"S9.1",
				"C53",
				"O40"
			],
			"values": [
				{
					"name": "none",
					"description": "No filter effects are applied."
				},
				{
					"name": "blur()",
					"description": "Applies a Gaussian blur to the input image."
				},
				{
					"name": "brightness()",
					"description": "Applies a linear multiplier to input image, making it appear more or less bright."
				},
				{
					"name": "contrast()",
					"description": "Adjusts the contrast of the input."
				},
				{
					"name": "drop-shadow()",
					"description": "Applies a drop shadow effect to the input image."
				},
				{
					"name": "grayscale()",
					"description": "Converts the input image to grayscale."
				},
				{
					"name": "hue-rotate()",
					"description": "Applies a hue rotation on the input image. "
				},
				{
					"name": "invert()",
					"description": "Inverts the samples in the input image."
				},
				{
					"name": "opacity()",
					"description": "Applies transparency to the samples in the input image."
				},
				{
					"name": "saturate()",
					"description": "Saturates the input image."
				},
				{
					"name": "sepia()",
					"description": "Converts the input image to sepia."
				},
				{
					"name": "url()",
					"browsers": [
						"E12",
						"FF35",
						"S9.1",
						"C53",
						"O40"
					],
					"description": "A filter reference to a <filter> element."
				}
			],
			"syntax": "none | <filter-function-list>",
			"relevance": 66,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/filter"
				}
			],
			"description": "Processes an element’s rendering before it is displayed in the document, by applying one or more filter effects.",
			"restrictions": [
				"enum",
				"url"
			]
		},
		{
			"name": "flex",
			"values": [
				{
					"name": "auto",
					"description": "Retrieves the value of the main size property as the used 'flex-basis'."
				},
				{
					"name": "content",
					"description": "Indicates automatic sizing, based on the flex item’s content."
				},
				{
					"name": "none",
					"description": "Expands to '0 0 auto'."
				}
			],
			"syntax": "none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]",
			"relevance": 80,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/flex"
				}
			],
			"description": "Specifies the components of a flexible length: the flex grow factor and flex shrink factor, and the flex basis.",
			"restrictions": [
				"length",
				"number",
				"percentage"
			]
		},
		{
			"name": "flex-basis",
			"values": [
				{
					"name": "auto",
					"description": "Retrieves the value of the main size property as the used 'flex-basis'."
				},
				{
					"name": "content",
					"description": "Indicates automatic sizing, based on the flex item’s content."
				}
			],
			"syntax": "content | <'width'>",
			"relevance": 65,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/flex-basis"
				}
			],
			"description": "Sets the flex basis.",
			"restrictions": [
				"length",
				"number",
				"percentage"
			]
		},
		{
			"name": "flex-direction",
			"values": [
				{
					"name": "column",
					"description": "The flex container’s main axis has the same orientation as the block axis of the current writing mode."
				},
				{
					"name": "column-reverse",
					"description": "Same as 'column', except the main-start and main-end directions are swapped."
				},
				{
					"name": "row",
					"description": "The flex container’s main axis has the same orientation as the inline axis of the current writing mode."
				},
				{
					"name": "row-reverse",
					"description": "Same as 'row', except the main-start and main-end directions are swapped."
				}
			],
			"syntax": "row | row-reverse | column | column-reverse",
			"relevance": 83,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/flex-direction"
				}
			],
			"description": "Specifies how flex items are placed in the flex container, by setting the direction of the flex container’s main axis.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "flex-flow",
			"values": [
				{
					"name": "column",
					"description": "The flex container’s main axis has the same orientation as the block axis of the current writing mode."
				},
				{
					"name": "column-reverse",
					"description": "Same as 'column', except the main-start and main-end directions are swapped."
				},
				{
					"name": "nowrap",
					"description": "The flex container is single-line."
				},
				{
					"name": "row",
					"description": "The flex container’s main axis has the same orientation as the inline axis of the current writing mode."
				},
				{
					"name": "row-reverse",
					"description": "Same as 'row', except the main-start and main-end directions are swapped."
				},
				{
					"name": "wrap",
					"description": "The flexbox is multi-line."
				},
				{
					"name": "wrap-reverse",
					"description": "Same as 'wrap', except the cross-start and cross-end directions are swapped."
				}
			],
			"syntax": "<'flex-direction'> || <'flex-wrap'>",
			"relevance": 61,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/flex-flow"
				}
			],
			"description": "Specifies how flexbox items are placed in the flexbox.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "flex-grow",
			"syntax": "<number>",
			"relevance": 75,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/flex-grow"
				}
			],
			"description": "Sets the flex grow factor. Negative numbers are invalid.",
			"restrictions": [
				"number"
			]
		},
		{
			"name": "flex-shrink",
			"syntax": "<number>",
			"relevance": 74,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/flex-shrink"
				}
			],
			"description": "Sets the flex shrink factor. Negative numbers are invalid.",
			"restrictions": [
				"number"
			]
		},
		{
			"name": "flex-wrap",
			"values": [
				{
					"name": "nowrap",
					"description": "The flex container is single-line."
				},
				{
					"name": "wrap",
					"description": "The flexbox is multi-line."
				},
				{
					"name": "wrap-reverse",
					"description": "Same as 'wrap', except the cross-start and cross-end directions are swapped."
				}
			],
			"syntax": "nowrap | wrap | wrap-reverse",
			"relevance": 79,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/flex-wrap"
				}
			],
			"description": "Controls whether the flex container is single-line or multi-line, and the direction of the cross-axis, which determines the direction new lines are stacked in.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "float",
			"values": [
				{
					"name": "inline-end",
					"description": "A keyword indicating that the element must float on the end side of its containing block. That is the right side with ltr scripts, and the left side with rtl scripts."
				},
				{
					"name": "inline-start",
					"description": "A keyword indicating that the element must float on the start side of its containing block. That is the left side with ltr scripts, and the right side with rtl scripts."
				},
				{
					"name": "left",
					"description": "The element generates a block box that is floated to the left. Content flows on the right side of the box, starting at the top (subject to the 'clear' property)."
				},
				{
					"name": "none",
					"description": "The box is not floated."
				},
				{
					"name": "right",
					"description": "Similar to 'left', except the box is floated to the right, and content flows on the left side of the box, starting at the top."
				}
			],
			"syntax": "left | right | none | inline-start | inline-end",
			"relevance": 91,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/float"
				}
			],
			"description": "Specifies how a box should be floated. It may be set for any element, but only applies to elements that generate boxes that are not absolutely positioned.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "flood-color",
			"browsers": [
				"E",
				"C5",
				"FF3",
				"IE10",
				"O9",
				"S6"
			],
			"relevance": 50,
			"description": "Indicates what color to use to flood the current filter primitive subregion.",
			"restrictions": [
				"color"
			]
		},
		{
			"name": "flood-opacity",
			"browsers": [
				"E",
				"C5",
				"FF3",
				"IE10",
				"O9",
				"S6"
			],
			"relevance": 50,
			"description": "Indicates what opacity to use to flood the current filter primitive subregion.",
			"restrictions": [
				"number(0-1)",
				"percentage"
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
			"name": "font-feature-settings",
			"values": [
				{
					"name": "\"aalt\"",
					"description": "Access All Alternates."
				},
				{
					"name": "\"abvf\"",
					"description": "Above-base Forms. Required in Khmer script."
				},
				{
					"name": "\"abvm\"",
					"description": "Above-base Mark Positioning. Required in Indic scripts."
				},
				{
					"name": "\"abvs\"",
					"description": "Above-base Substitutions. Required in Indic scripts."
				},
				{
					"name": "\"afrc\"",
					"description": "Alternative Fractions."
				},
				{
					"name": "\"akhn\"",
					"description": "Akhand. Required in most Indic scripts."
				},
				{
					"name": "\"blwf\"",
					"description": "Below-base Form. Required in a number of Indic scripts."
				},
				{
					"name": "\"blwm\"",
					"description": "Below-base Mark Positioning. Required in Indic scripts."
				},
				{
					"name": "\"blws\"",
					"description": "Below-base Substitutions. Required in Indic scripts."
				},
				{
					"name": "\"calt\"",
					"description": "Contextual Alternates."
				},
				{
					"name": "\"case\"",
					"description": "Case-Sensitive Forms. Applies only to European scripts; particularly prominent in Spanish-language setting."
				},
				{
					"name": "\"ccmp\"",
					"description": "Glyph Composition/Decomposition."
				},
				{
					"name": "\"cfar\"",
					"description": "Conjunct Form After Ro. Required in Khmer scripts."
				},
				{
					"name": "\"cjct\"",
					"description": "Conjunct Forms. Required in Indic scripts that show similarity to Devanagari."
				},
				{
					"name": "\"clig\"",
					"description": "Contextual Ligatures."
				},
				{
					"name": "\"cpct\"",
					"description": "Centered CJK Punctuation. Used primarily in Chinese fonts."
				},
				{
					"name": "\"cpsp\"",
					"description": "Capital Spacing. Should not be used in connecting scripts (e.g. most Arabic)."
				},
				{
					"name": "\"cswh\"",
					"description": "Contextual Swash."
				},
				{
					"name": "\"curs\"",
					"description": "Cursive Positioning. Can be used in any cursive script."
				},
				{
					"name": "\"c2pc\"",
					"description": "Petite Capitals From Capitals. Applies only to bicameral scripts."
				},
				{
					"name": "\"c2sc\"",
					"description": "Small Capitals From Capitals. Applies only to bicameral scripts."
				},
				{
					"name": "\"dist\"",
					"description": "Distances. Required in Indic scripts."
				},
				{
					"name": "\"dlig\"",
					"description": "Discretionary ligatures."
				},
				{
					"name": "\"dnom\"",
					"description": "Denominators."
				},
				{
					"name": "\"dtls\"",
					"description": "Dotless Forms. Applied to math formula layout."
				},
				{
					"name": "\"expt\"",
					"description": "Expert Forms. Applies only to Japanese."
				},
				{
					"name": "\"falt\"",
					"description": "Final Glyph on Line Alternates. Can be used in any cursive script."
				},
				{
					"name": "\"fin2\"",
					"description": "Terminal Form #2. Used only with the Syriac script."
				},
				{
					"name": "\"fin3\"",
					"description": "Terminal Form #3. Used only with the Syriac script."
				},
				{
					"name": "\"fina\"",
					"description": "Terminal Forms. Can be used in any alphabetic script."
				},
				{
					"name": "\"flac\"",
					"description": "Flattened ascent forms. Applied to math formula layout."
				},
				{
					"name": "\"frac\"",
					"description": "Fractions."
				},
				{
					"name": "\"fwid\"",
					"description": "Full Widths. Applies to any script which can use monospaced forms."
				},
				{
					"name": "\"half\"",
					"description": "Half Forms. Required in Indic scripts that show similarity to Devanagari."
				},
				{
					"name": "\"haln\"",
					"description": "Halant Forms. Required in Indic scripts."
				},
				{
					"name": "\"halt\"",
					"description": "Alternate Half Widths. Used only in CJKV fonts."
				},
				{
					"name": "\"hist\"",
					"description": "Historical Forms."
				},
				{
					"name": "\"hkna\"",
					"description": "Horizontal Kana Alternates. Applies only to fonts that support kana (hiragana and katakana)."
				},
				{
					"name": "\"hlig\"",
					"description": "Historical Ligatures."
				},
				{
					"name": "\"hngl\"",
					"description": "Hangul. Korean only."
				},
				{
					"name": "\"hojo\"",
					"description": "Hojo Kanji Forms (JIS X 0212-1990 Kanji Forms). Used only with Kanji script."
				},
				{
					"name": "\"hwid\"",
					"description": "Half Widths. Generally used only in CJKV fonts."
				},
				{
					"name": "\"init\"",
					"description": "Initial Forms. Can be used in any alphabetic script."
				},
				{
					"name": "\"isol\"",
					"description": "Isolated Forms. Can be used in any cursive script."
				},
				{
					"name": "\"ital\"",
					"description": "Italics. Applies mostly to Latin; note that many non-Latin fonts contain Latin as well."
				},
				{
					"name": "\"jalt\"",
					"description": "Justification Alternates. Can be used in any cursive script."
				},
				{
					"name": "\"jp78\"",
					"description": "JIS78 Forms. Applies only to Japanese."
				},
				{
					"name": "\"jp83\"",
					"description": "JIS83 Forms. Applies only to Japanese."
				},
				{
					"name": "\"jp90\"",
					"description": "JIS90 Forms. Applies only to Japanese."
				},
				{
					"name": "\"jp04\"",
					"description": "JIS2004 Forms. Applies only to Japanese."
				},
				{
					"name": "\"kern\"",
					"description": "Kerning."
				},
				{
					"name": "\"lfbd\"",
					"description": "Left Bounds."
				},
				{
					"name": "\"liga\"",
					"description": "Standard Ligatures."
				},
				{
					"name": "\"ljmo\"",
					"description": "Leading Jamo Forms. Required for Hangul script when Ancient Hangul writing system is supported."
				},
				{
					"name": "\"lnum\"",
					"description": "Lining Figures."
				},
				{
					"name": "\"locl\"",
					"description": "Localized Forms."
				},
				{
					"name": "\"ltra\"",
					"description": "Left-to-right glyph alternates."
				},
				{
					"name": "\"ltrm\"",
					"description": "Left-to-right mirrored forms."
				},
				{
					"name": "\"mark\"",
					"description": "Mark Positioning."
				},
				{
					"name": "\"med2\"",
					"description": "Medial Form #2. Used only with the Syriac script."
				},
				{
					"name": "\"medi\"",
					"description": "Medial Forms."
				},
				{
					"name": "\"mgrk\"",
					"description": "Mathematical Greek."
				},
				{
					"name": "\"mkmk\"",
					"description": "Mark to Mark Positioning."
				},
				{
					"name": "\"nalt\"",
					"description": "Alternate Annotation Forms."
				},
				{
					"name": "\"nlck\"",
					"description": "NLC Kanji Forms. Used only with Kanji script."
				},
				{
					"name": "\"nukt\"",
					"description": "Nukta Forms. Required in Indic scripts.."
				},
				{
					"name": "\"numr\"",
					"description": "Numerators."
				},
				{
					"name": "\"onum\"",
					"description": "Oldstyle Figures."
				},
				{
					"name": "\"opbd\"",
					"description": "Optical Bounds."
				},
				{
					"name": "\"ordn\"",
					"description": "Ordinals. Applies mostly to Latin script."
				},
				{
					"name": "\"ornm\"",
					"description": "Ornaments."
				},
				{
					"name": "\"palt\"",
					"description": "Proportional Alternate Widths. Used mostly in CJKV fonts."
				},
				{
					"name": "\"pcap\"",
					"description": "Petite Capitals."
				},
				{
					"name": "\"pkna\"",
					"description": "Proportional Kana. Generally used only in Japanese fonts."
				},
				{
					"name": "\"pnum\"",
					"description": "Proportional Figures."
				},
				{
					"name": "\"pref\"",
					"description": "Pre-base Forms. Required in Khmer and Myanmar (Burmese) scripts and southern Indic scripts that may display a pre-base form of Ra."
				},
				{
					"name": "\"pres\"",
					"description": "Pre-base Substitutions. Required in Indic scripts."
				},
				{
					"name": "\"pstf\"",
					"description": "Post-base Forms. Required in scripts of south and southeast Asia that have post-base forms for consonants eg: Gurmukhi, Malayalam, Khmer."
				},
				{
					"name": "\"psts\"",
					"description": "Post-base Substitutions."
				},
				{
					"name": "\"pwid\"",
					"description": "Proportional Widths."
				},
				{
					"name": "\"qwid\"",
					"description": "Quarter Widths. Generally used only in CJKV fonts."
				},
				{
					"name": "\"rand\"",
					"description": "Randomize."
				},
				{
					"name": "\"rclt\"",
					"description": "Required Contextual Alternates. May apply to any script, but is especially important for many styles of Arabic."
				},
				{
					"name": "\"rlig\"",
					"description": "Required Ligatures. Applies to Arabic and Syriac. May apply to some other scripts."
				},
				{
					"name": "\"rkrf\"",
					"description": "Rakar Forms. Required in Devanagari and Gujarati scripts."
				},
				{
					"name": "\"rphf\"",
					"description": "Reph Form. Required in Indic scripts. E.g. Devanagari, Kannada."
				},
				{
					"name": "\"rtbd\"",
					"description": "Right Bounds."
				},
				{
					"name": "\"rtla\"",
					"description": "Right-to-left alternates."
				},
				{
					"name": "\"rtlm\"",
					"description": "Right-to-left mirrored forms."
				},
				{
					"name": "\"ruby\"",
					"description": "Ruby Notation Forms. Applies only to Japanese."
				},
				{
					"name": "\"salt\"",
					"description": "Stylistic Alternates."
				},
				{
					"name": "\"sinf\"",
					"description": "Scientific Inferiors."
				},
				{
					"name": "\"size\"",
					"description": "Optical size."
				},
				{
					"name": "\"smcp\"",
					"description": "Small Capitals. Applies only to bicameral scripts."
				},
				{
					"name": "\"smpl\"",
					"description": "Simplified Forms. Applies only to Chinese and Japanese."
				},
				{
					"name": "\"ssty\"",
					"description": "Math script style alternates."
				},
				{
					"name": "\"stch\"",
					"description": "Stretching Glyph Decomposition."
				},
				{
					"name": "\"subs\"",
					"description": "Subscript."
				},
				{
					"name": "\"sups\"",
					"description": "Superscript."
				},
				{
					"name": "\"swsh\"",
					"description": "Swash. Does not apply to ideographic scripts."
				},
				{
					"name": "\"titl\"",
					"description": "Titling."
				},
				{
					"name": "\"tjmo\"",
					"description": "Trailing Jamo Forms. Required for Hangul script when Ancient Hangul writing system is supported."
				},
				{
					"name": "\"tnam\"",
					"description": "Traditional Name Forms. Applies only to Japanese."
				},
				{
					"name": "\"tnum\"",
					"description": "Tabular Figures."
				},
				{
					"name": "\"trad\"",
					"description": "Traditional Forms. Applies only to Chinese and Japanese."
				},
				{
					"name": "\"twid\"",
					"description": "Third Widths. Generally used only in CJKV fonts."
				},
				{
					"name": "\"unic\"",
					"description": "Unicase."
				},
				{
					"name": "\"valt\"",
					"description": "Alternate Vertical Metrics. Applies only to scripts with vertical writing modes."
				},
				{
					"name": "\"vatu\"",
					"description": "Vattu Variants. Used for Indic scripts. E.g. Devanagari."
				},
				{
					"name": "\"vert\"",
					"description": "Vertical Alternates. Applies only to scripts with vertical writing modes."
				},
				{
					"name": "\"vhal\"",
					"description": "Alternate Vertical Half Metrics. Used only in CJKV fonts."
				},
				{
					"name": "\"vjmo\"",
					"description": "Vowel Jamo Forms. Required for Hangul script when Ancient Hangul writing system is supported."
				},
				{
					"name": "\"vkna\"",
					"description": "Vertical Kana Alternates. Applies only to fonts that support kana (hiragana and katakana)."
				},
				{
					"name": "\"vkrn\"",
					"description": "Vertical Kerning."
				},
				{
					"name": "\"vpal\"",
					"description": "Proportional Alternate Vertical Metrics. Used mostly in CJKV fonts."
				},
				{
					"name": "\"vrt2\"",
					"description": "Vertical Alternates and Rotation. Applies only to scripts with vertical writing modes."
				},
				{
					"name": "\"zero\"",
					"description": "Slashed Zero."
				},
				{
					"name": "normal",
					"description": "No change in glyph substitution or positioning occurs."
				},
				{
					"name": "off",
					"description": "Disable feature."
				},
				{
					"name": "on",
					"description": "Enable feature."
				}
			],
			"syntax": "normal | <feature-tag-value>#",
			"relevance": 56,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/font-feature-settings"
				}
			],
			"description": "Provides low-level control over OpenType font features. It is intended as a way of providing access to font features that are not widely used but are needed for a particular use case.",
			"restrictions": [
				"string",
				"integer"
			]
		},
		{
			"name": "font-kerning",
			"browsers": [
				"E79",
				"FF32",
				"S9",
				"C33",
				"O20"
			],
			"values": [
				{
					"name": "auto",
					"description": "Specifies that kerning is applied at the discretion of the user agent."
				},
				{
					"name": "none",
					"description": "Specifies that kerning is not applied."
				},
				{
					"name": "normal",
					"description": "Specifies that kerning is applied."
				}
			],
			"syntax": "auto | normal | none",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/font-kerning"
				}
			],
			"description": "Kerning is the contextual adjustment of inter-glyph spacing. This property controls metric kerning, kerning that utilizes adjustment data contained in the font.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "font-language-override",
			"browsers": [
				"FF34"
			],
			"values": [
				{
					"name": "normal",
					"description": "Implies that when rendering with OpenType fonts the language of the document is used to infer the OpenType language system, used to select language specific features when rendering."
				}
			],
			"syntax": "normal | <string>",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/font-language-override"
				}
			],
			"description": "The value of 'normal' implies that when rendering with OpenType fonts the language of the document is used to infer the OpenType language system, used to select language specific features when rendering.",
			"restrictions": [
				"string"
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
			"name": "font-size-adjust",
			"browsers": [
				"E79",
				"FF40",
				"C43",
				"O30"
			],
			"values": [
				{
					"name": "none",
					"description": "Do not preserve the font’s x-height."
				}
			],
			"syntax": "none | [ ex-height | cap-height | ch-width | ic-width | ic-height ]? [ from-font | <number> ]",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/font-size-adjust"
				}
			],
			"description": "Preserves the readability of text when font fallback occurs by adjusting the font-size so that the x-height is the same regardless of the font used.",
			"restrictions": [
				"number"
			]
		},
		{
			"name": "font-stretch",
			"values": [
				{
					"name": "condensed"
				},
				{
					"name": "expanded"
				},
				{
					"name": "extra-condensed"
				},
				{
					"name": "extra-expanded"
				},
				{
					"name": "narrower",
					"description": "Indicates a narrower value relative to the width of the parent element."
				},
				{
					"name": "normal"
				},
				{
					"name": "semi-condensed"
				},
				{
					"name": "semi-expanded"
				},
				{
					"name": "ultra-condensed"
				},
				{
					"name": "ultra-expanded"
				},
				{
					"name": "wider",
					"description": "Indicates a wider value relative to the width of the parent element."
				}
			],
			"syntax": "<font-stretch-absolute>{1,2}",
			"relevance": 56,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/font-stretch"
				}
			],
			"description": "Selects a normal, condensed, or expanded face from a font family.",
			"restrictions": [
				"enum"
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
			"name": "font-synthesis",
			"browsers": [
				"E97",
				"FF34",
				"S9",
				"C97",
				"O83"
			],
			"values": [
				{
					"name": "none",
					"description": "Disallow all synthetic faces."
				},
				{
					"name": "style",
					"description": "Allow synthetic italic faces."
				},
				{
					"name": "weight",
					"description": "Allow synthetic bold faces."
				}
			],
			"syntax": "none | [ weight || style || small-caps ]",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/font-synthesis"
				}
			],
			"description": "Controls whether user agents are allowed to synthesize bold or oblique font faces when a font family lacks bold or italic faces.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "font-variant",
			"values": [
				{
					"name": "normal",
					"description": "Specifies a face that is not labeled as a small-caps font."
				},
				{
					"name": "small-caps",
					"description": "Specifies a font that is labeled as a small-caps font. If a genuine small-caps font is not available, user agents should simulate a small-caps font."
				}
			],
			"syntax": "normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> || stylistic(<feature-value-name>) || historical-forms || styleset(<feature-value-name>#) || character-variant(<feature-value-name>#) || swash(<feature-value-name>) || ornaments(<feature-value-name>) || annotation(<feature-value-name>) || [ small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps ] || <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero || <east-asian-variant-values> || <east-asian-width-values> || ruby ]",
			"relevance": 65,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/font-variant"
				}
			],
			"description": "Specifies variant representations of the font",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "font-variant-alternates",
			"browsers": [
				"FF34",
				"S9.1"
			],
			"values": [
				{
					"name": "annotation()",
					"description": "Enables display of alternate annotation forms."
				},
				{
					"name": "character-variant()",
					"description": "Enables display of specific character variants."
				},
				{
					"name": "historical-forms",
					"description": "Enables display of historical forms."
				},
				{
					"name": "normal",
					"description": "None of the features are enabled."
				},
				{
					"name": "ornaments()",
					"description": "Enables replacement of default glyphs with ornaments, if provided in the font."
				},
				{
					"name": "styleset()",
					"description": "Enables display with stylistic sets."
				},
				{
					"name": "stylistic()",
					"description": "Enables display of stylistic alternates."
				},
				{
					"name": "swash()",
					"description": "Enables display of swash glyphs."
				}
			],
			"syntax": "normal | [ stylistic( <feature-value-name> ) || historical-forms || styleset( <feature-value-name># ) || character-variant( <feature-value-name># ) || swash( <feature-value-name> ) || ornaments( <feature-value-name> ) || annotation( <feature-value-name> ) ]",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/font-variant-alternates"
				}
			],
			"description": "For any given character, fonts can provide a variety of alternate glyphs in addition to the default glyph for that character. This property provides control over the selection of these alternate glyphs.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "font-variant-caps",
			"browsers": [
				"E79",
				"FF34",
				"S9.1",
				"C52",
				"O39"
			],
			"values": [
				{
					"name": "all-petite-caps",
					"description": "Enables display of petite capitals for both upper and lowercase letters."
				},
				{
					"name": "all-small-caps",
					"description": "Enables display of small capitals for both upper and lowercase letters."
				},
				{
					"name": "normal",
					"description": "None of the features are enabled."
				},
				{
					"name": "petite-caps",
					"description": "Enables display of petite capitals."
				},
				{
					"name": "small-caps",
					"description": "Enables display of small capitals. Small-caps glyphs typically use the form of uppercase letters but are reduced to the size of lowercase letters."
				},
				{
					"name": "titling-caps",
					"description": "Enables display of titling capitals."
				},
				{
					"name": "unicase",
					"description": "Enables display of mixture of small capitals for uppercase letters with normal lowercase letters."
				}
			],
			"syntax": "normal | small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/font-variant-caps"
				}
			],
			"description": "Specifies control over capitalized forms.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "font-variant-east-asian",
			"browsers": [
				"E79",
				"FF34",
				"S9.1",
				"C63",
				"O50"
			],
			"values": [
				{
					"name": "full-width",
					"description": "Enables rendering of full-width variants."
				},
				{
					"name": "jis04",
					"description": "Enables rendering of JIS04 forms."
				},
				{
					"name": "jis78",
					"description": "Enables rendering of JIS78 forms."
				},
				{
					"name": "jis83",
					"description": "Enables rendering of JIS83 forms."
				},
				{
					"name": "jis90",
					"description": "Enables rendering of JIS90 forms."
				},
				{
					"name": "normal",
					"description": "None of the features are enabled."
				},
				{
					"name": "proportional-width",
					"description": "Enables rendering of proportionally-spaced variants."
				},
				{
					"name": "ruby",
					"description": "Enables display of ruby variant glyphs."
				},
				{
					"name": "simplified",
					"description": "Enables rendering of simplified forms."
				},
				{
					"name": "traditional",
					"description": "Enables rendering of traditional forms."
				}
			],
			"syntax": "normal | [ <east-asian-variant-values> || <east-asian-width-values> || ruby ]",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/font-variant-east-asian"
				}
			],
			"description": "Allows control of glyph substitute and positioning in East Asian text.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "font-variant-ligatures",
			"browsers": [
				"E79",
				"FF34",
				"S9.1",
				"C34",
				"O21"
			],
			"values": [
				{
					"name": "additional-ligatures",
					"description": "Enables display of additional ligatures."
				},
				{
					"name": "common-ligatures",
					"description": "Enables display of common ligatures."
				},
				{
					"name": "contextual",
					"browsers": [
						"E79",
						"FF34",
						"S9.1",
						"C34",
						"O21"
					],
					"description": "Enables display of contextual alternates."
				},
				{
					"name": "discretionary-ligatures",
					"description": "Enables display of discretionary ligatures."
				},
				{
					"name": "historical-ligatures",
					"description": "Enables display of historical ligatures."
				},
				{
					"name": "no-additional-ligatures",
					"description": "Disables display of additional ligatures."
				},
				{
					"name": "no-common-ligatures",
					"description": "Disables display of common ligatures."
				},
				{
					"name": "no-contextual",
					"browsers": [
						"E79",
						"FF34",
						"S9.1",
						"C34",
						"O21"
					],
					"description": "Disables display of contextual alternates."
				},
				{
					"name": "no-discretionary-ligatures",
					"description": "Disables display of discretionary ligatures."
				},
				{
					"name": "no-historical-ligatures",
					"description": "Disables display of historical ligatures."
				},
				{
					"name": "none",
					"browsers": [
						"E79",
						"FF34",
						"S9.1",
						"C34",
						"O21"
					],
					"description": "Disables all ligatures."
				},
				{
					"name": "normal",
					"description": "Implies that the defaults set by the font are used."
				}
			],
			"syntax": "normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> ]",
			"relevance": 52,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/font-variant-ligatures"
				}
			],
			"description": "Specifies control over which ligatures are enabled or disabled. A value of ‘normal’ implies that the defaults set by the font are used.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "font-variant-numeric",
			"browsers": [
				"E79",
				"FF34",
				"S9.1",
				"C52",
				"O39"
			],
			"values": [
				{
					"name": "diagonal-fractions",
					"description": "Enables display of lining diagonal fractions."
				},
				{
					"name": "lining-nums",
					"description": "Enables display of lining numerals."
				},
				{
					"name": "normal",
					"description": "None of the features are enabled."
				},
				{
					"name": "oldstyle-nums",
					"description": "Enables display of old-style numerals."
				},
				{
					"name": "ordinal",
					"description": "Enables display of letter forms used with ordinal numbers."
				},
				{
					"name": "proportional-nums",
					"description": "Enables display of proportional numerals."
				},
				{
					"name": "slashed-zero",
					"description": "Enables display of slashed zeros."
				},
				{
					"name": "stacked-fractions",
					"description": "Enables display of lining stacked fractions."
				},
				{
					"name": "tabular-nums",
					"description": "Enables display of tabular numerals."
				}
			],
			"syntax": "normal | [ <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero ]",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/font-variant-numeric"
				}
			],
			"description": "Specifies control over numerical forms.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "font-variant-position",
			"browsers": [
				"FF34",
				"S9.1"
			],
			"values": [
				{
					"name": "normal",
					"description": "None of the features are enabled."
				},
				{
					"name": "sub",
					"description": "Enables display of subscript variants (OpenType feature: subs)."
				},
				{
					"name": "super",
					"description": "Enables display of superscript variants (OpenType feature: sups)."
				}
			],
			"syntax": "normal | sub | super",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/font-variant-position"
				}
			],
			"description": "Specifies the vertical position",
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
			"name": "glyph-orientation-horizontal",
			"relevance": 50,
			"description": "Controls glyph orientation when the inline-progression-direction is horizontal.",
			"restrictions": [
				"angle",
				"number"
			]
		},
		{
			"name": "glyph-orientation-vertical",
			"values": [
				{
					"name": "auto",
					"description": "Sets the orientation based on the fullwidth or non-fullwidth characters and the most common orientation."
				}
			],
			"relevance": 50,
			"description": "Controls glyph orientation when the inline-progression-direction is vertical.",
			"restrictions": [
				"angle",
				"number",
				"enum"
			]
		},
		{
			"name": "grid-area",
			"browsers": [
				"E16",
				"FF52",
				"S10.1",
				"C57",
				"O44"
			],
			"values": [
				{
					"name": "auto",
					"description": "The property contributes nothing to the grid item’s placement, indicating auto-placement, an automatic span, or a default span of one."
				},
				{
					"name": "span",
					"description": "Contributes a grid span to the grid item’s placement such that the corresponding edge of the grid item’s grid area is N lines from its opposite edge."
				}
			],
			"syntax": "<grid-line> [ / <grid-line> ]{0,3}",
			"relevance": 53,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/grid-area"
				}
			],
			"description": "Determine a grid item’s size and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement. Shorthand for 'grid-row-start', 'grid-column-start', 'grid-row-end', and 'grid-column-end'.",
			"restrictions": [
				"identifier",
				"integer"
			]
		},
		{
			"name": "grid",
			"browsers": [
				"E16",
				"FF52",
				"S10.1",
				"C57",
				"O44"
			],
			"syntax": "<'grid-template'> | <'grid-template-rows'> / [ auto-flow && dense? ] <'grid-auto-columns'>? | [ auto-flow && dense? ] <'grid-auto-rows'>? / <'grid-template-columns'>",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/grid"
				}
			],
			"description": "The grid CSS property is a shorthand property that sets all of the explicit grid properties ('grid-template-rows', 'grid-template-columns', and 'grid-template-areas'), and all the implicit grid properties ('grid-auto-rows', 'grid-auto-columns', and 'grid-auto-flow'), in a single declaration.",
			"restrictions": [
				"identifier",
				"length",
				"percentage",
				"string",
				"enum"
			]
		},
		{
			"name": "grid-auto-columns",
			"values": [
				{
					"name": "min-content",
					"description": "Represents the largest min-content contribution of the grid items occupying the grid track."
				},
				{
					"name": "max-content",
					"description": "Represents the largest max-content contribution of the grid items occupying the grid track."
				},
				{
					"name": "auto",
					"description": "As a maximum, identical to 'max-content'. As a minimum, represents the largest minimum size (as specified by min-width/min-height) of the grid items occupying the grid track."
				},
				{
					"name": "minmax()",
					"description": "Defines a size range greater than or equal to min and less than or equal to max."
				}
			],
			"syntax": "<track-size>+",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/grid-auto-columns"
				}
			],
			"description": "Specifies the size of implicitly created columns.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			"name": "grid-auto-flow",
			"browsers": [
				"E16",
				"FF52",
				"S10.1",
				"C57",
				"O44"
			],
			"values": [
				{
					"name": "row",
					"description": "The auto-placement algorithm places items by filling each row in turn, adding new rows as necessary."
				},
				{
					"name": "column",
					"description": "The auto-placement algorithm places items by filling each column in turn, adding new columns as necessary."
				},
				{
					"name": "dense",
					"description": "If specified, the auto-placement algorithm uses a “dense” packing algorithm, which attempts to fill in holes earlier in the grid if smaller items come up later."
				}
			],
			"syntax": "[ row | column ] || dense",
			"relevance": 52,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/grid-auto-flow"
				}
			],
			"description": "Controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "grid-auto-rows",
			"values": [
				{
					"name": "min-content",
					"description": "Represents the largest min-content contribution of the grid items occupying the grid track."
				},
				{
					"name": "max-content",
					"description": "Represents the largest max-content contribution of the grid items occupying the grid track."
				},
				{
					"name": "auto",
					"description": "As a maximum, identical to 'max-content'. As a minimum, represents the largest minimum size (as specified by min-width/min-height) of the grid items occupying the grid track."
				},
				{
					"name": "minmax()",
					"description": "Defines a size range greater than or equal to min and less than or equal to max."
				}
			],
			"syntax": "<track-size>+",
			"relevance": 51,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/grid-auto-rows"
				}
			],
			"description": "Specifies the size of implicitly created rows.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			"name": "grid-column",
			"browsers": [
				"E16",
				"FF52",
				"S10.1",
				"C57",
				"O44"
			],
			"values": [
				{
					"name": "auto",
					"description": "The property contributes nothing to the grid item’s placement, indicating auto-placement, an automatic span, or a default span of one."
				},
				{
					"name": "span",
					"description": "Contributes a grid span to the grid item’s placement such that the corresponding edge of the grid item’s grid area is N lines from its opposite edge."
				}
			],
			"syntax": "<grid-line> [ / <grid-line> ]?",
			"relevance": 53,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/grid-column"
				}
			],
			"description": "Shorthand for 'grid-column-start' and 'grid-column-end'.",
			"restrictions": [
				"identifier",
				"integer",
				"enum"
			]
		},
		{
			"name": "grid-column-end",
			"browsers": [
				"E16",
				"FF52",
				"S10.1",
				"C57",
				"O44"
			],
			"values": [
				{
					"name": "auto",
					"description": "The property contributes nothing to the grid item’s placement, indicating auto-placement, an automatic span, or a default span of one."
				},
				{
					"name": "span",
					"description": "Contributes a grid span to the grid item’s placement such that the corresponding edge of the grid item’s grid area is N lines from its opposite edge."
				}
			],
			"syntax": "<grid-line>",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/grid-column-end"
				}
			],
			"description": "Determine a grid item’s size and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement.",
			"restrictions": [
				"identifier",
				"integer",
				"enum"
			]
		},
		{
			"name": "grid-column-gap",
			"browsers": [
				"FF52",
				"C57",
				"S10.1",
				"O44"
			],
			"status": "obsolete",
			"syntax": "<length-percentage>",
			"relevance": 2,
			"description": "Specifies the gutters between grid columns. Replaced by 'column-gap' property.",
			"restrictions": [
				"length"
			]
		},
		{
			"name": "grid-column-start",
			"browsers": [
				"E16",
				"FF52",
				"S10.1",
				"C57",
				"O44"
			],
			"values": [
				{
					"name": "auto",
					"description": "The property contributes nothing to the grid item’s placement, indicating auto-placement, an automatic span, or a default span of one."
				},
				{
					"name": "span",
					"description": "Contributes a grid span to the grid item’s placement such that the corresponding edge of the grid item’s grid area is N lines from its opposite edge."
				}
			],
			"syntax": "<grid-line>",
			"relevance": 51,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/grid-column-start"
				}
			],
			"description": "Determine a grid item’s size and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement.",
			"restrictions": [
				"identifier",
				"integer",
				"enum"
			]
		},
		{
			"name": "grid-gap",
			"browsers": [
				"FF52",
				"C57",
				"S10.1",
				"O44"
			],
			"status": "obsolete",
			"syntax": "<'grid-row-gap'> <'grid-column-gap'>?",
			"relevance": 3,
			"description": "Shorthand that specifies the gutters between grid columns and grid rows in one declaration. Replaced by 'gap' property.",
			"restrictions": [
				"length"
			]
		},
		{
			"name": "grid-row",
			"browsers": [
				"E16",
				"FF52",
				"S10.1",
				"C57",
				"O44"
			],
			"values": [
				{
					"name": "auto",
					"description": "The property contributes nothing to the grid item’s placement, indicating auto-placement, an automatic span, or a default span of one."
				},
				{
					"name": "span",
					"description": "Contributes a grid span to the grid item’s placement such that the corresponding edge of the grid item’s grid area is N lines from its opposite edge."
				}
			],
			"syntax": "<grid-line> [ / <grid-line> ]?",
			"relevance": 52,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/grid-row"
				}
			],
			"description": "Shorthand for 'grid-row-start' and 'grid-row-end'.",
			"restrictions": [
				"identifier",
				"integer",
				"enum"
			]
		},
		{
			"name": "grid-row-end",
			"browsers": [
				"E16",
				"FF52",
				"S10.1",
				"C57",
				"O44"
			],
			"values": [
				{
					"name": "auto",
					"description": "The property contributes nothing to the grid item’s placement, indicating auto-placement, an automatic span, or a default span of one."
				},
				{
					"name": "span",
					"description": "Contributes a grid span to the grid item’s placement such that the corresponding edge of the grid item’s grid area is N lines from its opposite edge."
				}
			],
			"syntax": "<grid-line>",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/grid-row-end"
				}
			],
			"description": "Determine a grid item’s size and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement.",
			"restrictions": [
				"identifier",
				"integer",
				"enum"
			]
		},
		{
			"name": "grid-row-gap",
			"browsers": [
				"FF52",
				"C57",
				"S10.1",
				"O44"
			],
			"status": "obsolete",
			"syntax": "<length-percentage>",
			"relevance": 1,
			"description": "Specifies the gutters between grid rows. Replaced by 'row-gap' property.",
			"restrictions": [
				"length"
			]
		},
		{
			"name": "grid-row-start",
			"browsers": [
				"E16",
				"FF52",
				"S10.1",
				"C57",
				"O44"
			],
			"values": [
				{
					"name": "auto",
					"description": "The property contributes nothing to the grid item’s placement, indicating auto-placement, an automatic span, or a default span of one."
				},
				{
					"name": "span",
					"description": "Contributes a grid span to the grid item’s placement such that the corresponding edge of the grid item’s grid area is N lines from its opposite edge."
				}
			],
			"syntax": "<grid-line>",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/grid-row-start"
				}
			],
			"description": "Determine a grid item’s size and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement.",
			"restrictions": [
				"identifier",
				"integer",
				"enum"
			]
		},
		{
			"name": "grid-template",
			"browsers": [
				"E16",
				"FF52",
				"S10.1",
				"C57",
				"O44"
			],
			"values": [
				{
					"name": "none",
					"description": "Sets all three properties to their initial values."
				},
				{
					"name": "min-content",
					"description": "Represents the largest min-content contribution of the grid items occupying the grid track."
				},
				{
					"name": "max-content",
					"description": "Represents the largest max-content contribution of the grid items occupying the grid track."
				},
				{
					"name": "auto",
					"description": "As a maximum, identical to 'max-content'. As a minimum, represents the largest minimum size (as specified by min-width/min-height) of the grid items occupying the grid track."
				},
				{
					"name": "subgrid",
					"description": "Sets 'grid-template-rows' and 'grid-template-columns' to 'subgrid', and 'grid-template-areas' to its initial value."
				},
				{
					"name": "minmax()",
					"description": "Defines a size range greater than or equal to min and less than or equal to max."
				},
				{
					"name": "repeat()",
					"description": "Represents a repeated fragment of the track list, allowing a large number of columns or rows that exhibit a recurring pattern to be written in a more compact form."
				}
			],
			"syntax": "none | [ <'grid-template-rows'> / <'grid-template-columns'> ] | [ <line-names>? <string> <track-size>? <line-names>? ]+ [ / <explicit-track-list> ]?",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/grid-template"
				}
			],
			"description": "Shorthand for setting grid-template-columns, grid-template-rows, and grid-template-areas in a single declaration.",
			"restrictions": [
				"identifier",
				"length",
				"percentage",
				"string",
				"enum"
			]
		},
		{
			"name": "grid-template-areas",
			"browsers": [
				"E16",
				"FF52",
				"S10.1",
				"C57",
				"O44"
			],
			"values": [
				{
					"name": "none",
					"description": "The grid container doesn’t define any named grid areas."
				}
			],
			"syntax": "none | <string>+",
			"relevance": 52,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/grid-template-areas"
				}
			],
			"description": "Specifies named grid areas, which are not associated with any particular grid item, but can be referenced from the grid-placement properties.",
			"restrictions": [
				"string"
			]
		},
		{
			"name": "grid-template-columns",
			"values": [
				{
					"name": "none",
					"description": "There is no explicit grid; any rows/columns will be implicitly generated."
				},
				{
					"name": "min-content",
					"description": "Represents the largest min-content contribution of the grid items occupying the grid track."
				},
				{
					"name": "max-content",
					"description": "Represents the largest max-content contribution of the grid items occupying the grid track."
				},
				{
					"name": "auto",
					"description": "As a maximum, identical to 'max-content'. As a minimum, represents the largest minimum size (as specified by min-width/min-height) of the grid items occupying the grid track."
				},
				{
					"name": "subgrid",
					"description": "Indicates that the grid will align to its parent grid in that axis."
				},
				{
					"name": "minmax()",
					"description": "Defines a size range greater than or equal to min and less than or equal to max."
				},
				{
					"name": "repeat()",
					"description": "Represents a repeated fragment of the track list, allowing a large number of columns or rows that exhibit a recurring pattern to be written in a more compact form."
				}
			],
			"syntax": "none | <track-list> | <auto-track-list> | subgrid <line-name-list>?",
			"relevance": 58,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/grid-template-columns"
				}
			],
			"description": "specifies, as a space-separated track list, the line names and track sizing functions of the grid.",
			"restrictions": [
				"identifier",
				"length",
				"percentage",
				"enum"
			]
		},
		{
			"name": "grid-template-rows",
			"values": [
				{
					"name": "none",
					"description": "There is no explicit grid; any rows/columns will be implicitly generated."
				},
				{
					"name": "min-content",
					"description": "Represents the largest min-content contribution of the grid items occupying the grid track."
				},
				{
					"name": "max-content",
					"description": "Represents the largest max-content contribution of the grid items occupying the grid track."
				},
				{
					"name": "auto",
					"description": "As a maximum, identical to 'max-content'. As a minimum, represents the largest minimum size (as specified by min-width/min-height) of the grid items occupying the grid track."
				},
				{
					"name": "subgrid",
					"description": "Indicates that the grid will align to its parent grid in that axis."
				},
				{
					"name": "minmax()",
					"description": "Defines a size range greater than or equal to min and less than or equal to max."
				},
				{
					"name": "repeat()",
					"description": "Represents a repeated fragment of the track list, allowing a large number of columns or rows that exhibit a recurring pattern to be written in a more compact form."
				}
			],
			"syntax": "none | <track-list> | <auto-track-list> | subgrid <line-name-list>?",
			"relevance": 53,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/grid-template-rows"
				}
			],
			"description": "specifies, as a space-separated track list, the line names and track sizing functions of the grid.",
			"restrictions": [
				"identifier",
				"length",
				"percentage",
				"string",
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
			"name": "hyphens",
			"values": [
				{
					"name": "auto",
					"description": "Conditional hyphenation characters inside a word, if present, take priority over automatic resources when determining hyphenation points within the word."
				},
				{
					"name": "manual",
					"description": "Words are only broken at line breaks where there are characters inside the word that suggest line break opportunities"
				},
				{
					"name": "none",
					"description": "Words are not broken at line breaks, even if characters inside the word suggest line break points."
				}
			],
			"syntax": "none | manual | auto",
			"relevance": 55,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/hyphens"
				}
			],
			"description": "Controls whether hyphenation is allowed to create more break opportunities within a line of text.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "image-orientation",
			"browsers": [
				"E81",
				"FF26",
				"S13.1",
				"C81",
				"O67"
			],
			"values": [
				{
					"name": "flip",
					"description": "After rotating by the precededing angle, the image is flipped horizontally. Defaults to 0deg if the angle is ommitted."
				},
				{
					"name": "from-image",
					"description": "If the image has an orientation specified in its metadata, such as EXIF, this value computes to the angle that the metadata specifies is necessary to correctly orient the image."
				}
			],
			"syntax": "from-image | <angle> | [ <angle>? flip ]",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/image-orientation"
				}
			],
			"description": "Specifies an orthogonal rotation to be applied to an image before it is laid out.",
			"restrictions": [
				"angle"
			]
		},
		{
			"name": "image-rendering",
			"browsers": [
				"E79",
				"FF3.6",
				"S6",
				"C13",
				"O15"
			],
			"values": [
				{
					"name": "auto",
					"description": "The image should be scaled with an algorithm that maximizes the appearance of the image."
				},
				{
					"name": "crisp-edges",
					"description": "The image must be scaled with an algorithm that preserves contrast and edges in the image, and which does not smooth colors or introduce blur to the image in the process."
				},
				{
					"name": "optimizeQuality",
					"description": "Deprecated."
				},
				{
					"name": "optimizeSpeed",
					"description": "Deprecated."
				},
				{
					"name": "pixelated",
					"description": "When scaling the image up, the 'nearest neighbor' or similar algorithm must be used, so that the image appears to be simply composed of very large pixels."
				}
			],
			"syntax": "auto | crisp-edges | pixelated",
			"relevance": 55,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/image-rendering"
				}
			],
			"description": "Provides a hint to the user-agent about what aspects of an image are most important to preserve when the image is scaled, to aid the user-agent in the choice of an appropriate scaling algorithm.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "ime-mode",
			"browsers": [
				"E12",
				"FF3",
				"IE5"
			],
			"values": [
				{
					"name": "active",
					"description": "The input method editor is initially active; text entry is performed using it unless the user specifically dismisses it."
				},
				{
					"name": "auto",
					"description": "No change is made to the current input method editor state. This is the default."
				},
				{
					"name": "disabled",
					"description": "The input method editor is disabled and may not be activated by the user."
				},
				{
					"name": "inactive",
					"description": "The input method editor is initially inactive, but the user may activate it if they wish."
				},
				{
					"name": "normal",
					"description": "The IME state should be normal; this value can be used in a user style sheet to override the page setting."
				}
			],
			"status": "obsolete",
			"syntax": "auto | normal | active | inactive | disabled",
			"relevance": 0,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/ime-mode"
				}
			],
			"description": "Controls the state of the input method editor for text fields.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "inline-size",
			"browsers": [
				"E79",
				"FF41",
				"S12.1",
				"C57",
				"O44"
			],
			"values": [
				{
					"name": "auto",
					"description": "Depends on the values of other properties."
				}
			],
			"syntax": "<'width'>",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/inline-size"
				}
			],
			"description": "Size of an element in the direction specified by 'writing-mode'.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			"name": "isolation",
			"browsers": [
				"E79",
				"FF36",
				"S8",
				"C41",
				"O30"
			],
			"values": [
				{
					"name": "auto",
					"description": "Elements are not isolated unless an operation is applied that causes the creation of a stacking context."
				},
				{
					"name": "isolate",
					"description": "In CSS will turn the element into a stacking context."
				}
			],
			"syntax": "auto | isolate",
			"relevance": 51,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/isolation"
				}
			],
			"description": "In CSS setting to 'isolate' will turn the element into a stacking context. In SVG, it defines whether an element is isolated or not.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "justify-content",
			"values": [
				{
					"name": "center",
					"description": "Flex items are packed toward the center of the line."
				},
				{
					"name": "start",
					"description": "The items are packed flush to each other toward the start edge of the alignment container in the main axis."
				},
				{
					"name": "end",
					"description": "The items are packed flush to each other toward the end edge of the alignment container in the main axis."
				},
				{
					"name": "left",
					"description": "The items are packed flush to each other toward the left edge of the alignment container in the main axis."
				},
				{
					"name": "right",
					"description": "The items are packed flush to each other toward the right edge of the alignment container in the main axis."
				},
				{
					"name": "safe",
					"description": "If the size of the item overflows the alignment container, the item is instead aligned as if the alignment mode were start."
				},
				{
					"name": "unsafe",
					"description": "Regardless of the relative sizes of the item and alignment container, the given alignment value is honored."
				},
				{
					"name": "stretch",
					"description": "If the combined size of the alignment subjects is less than the size of the alignment container, any auto-sized alignment subjects have their size increased equally (not proportionally), while still respecting the constraints imposed by max-height/max-width (or equivalent functionality), so that the combined size exactly fills the alignment container."
				},
				{
					"name": "space-evenly",
					"description": "The items are evenly distributed within the alignment container along the main axis."
				},
				{
					"name": "flex-end",
					"description": "Flex items are packed toward the end of the line."
				},
				{
					"name": "flex-start",
					"description": "Flex items are packed toward the start of the line."
				},
				{
					"name": "space-around",
					"description": "Flex items are evenly distributed in the line, with half-size spaces on either end."
				},
				{
					"name": "space-between",
					"description": "Flex items are evenly distributed in the line."
				},
				{
					"name": "baseline",
					"description": "Specifies participation in first-baseline alignment."
				},
				{
					"name": "first baseline",
					"description": "Specifies participation in first-baseline alignment."
				},
				{
					"name": "last baseline",
					"description": "Specifies participation in last-baseline alignment."
				}
			],
			"syntax": "normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ]",
			"relevance": 86,
			"description": "Aligns flex items along the main axis of the current line of the flex container.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "kerning",
			"values": [
				{
					"name": "auto",
					"description": "Indicates that the user agent should adjust inter-glyph spacing based on kerning tables that are included in the font that will be used."
				}
			],
			"relevance": 50,
			"description": "Indicates whether the user agent should adjust inter-glyph spacing based on kerning tables that are included in the relevant font or instead disable auto-kerning and set inter-character spacing to a specific length.",
			"restrictions": [
				"length",
				"enum"
			]
		},
		{
			"name": "left",
			"values": [
				{
					"name": "auto",
					"description": "For non-replaced elements, the effect of this value depends on which of related properties have the value 'auto' as well"
				}
			],
			"syntax": "<length> | <percentage> | auto",
			"relevance": 95,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/left"
				}
			],
			"description": "Specifies how far an absolutely positioned box's left margin edge is offset to the right of the left edge of the box's 'containing block'.",
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
			"name": "lighting-color",
			"browsers": [
				"E",
				"C5",
				"FF3",
				"IE10",
				"O9",
				"S6"
			],
			"relevance": 50,
			"description": "Defines the color of the light source for filter primitives 'feDiffuseLighting' and 'feSpecularLighting'.",
			"restrictions": [
				"color"
			]
		},
		{
			"name": "line-break",
			"values": [
				{
					"name": "auto",
					"description": "The UA determines the set of line-breaking restrictions to use for CJK scripts, and it may vary the restrictions based on the length of the line; e.g., use a less restrictive set of line-break rules for short lines."
				},
				{
					"name": "loose",
					"description": "Breaks text using the least restrictive set of line-breaking rules. Typically used for short lines, such as in newspapers."
				},
				{
					"name": "normal",
					"description": "Breaks text using the most common set of line-breaking rules."
				},
				{
					"name": "strict",
					"description": "Breaks CJK scripts using a more restrictive set of line-breaking rules than 'normal'."
				}
			],
			"syntax": "auto | loose | normal | strict | anywhere",
			"relevance": 51,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/line-break"
				}
			],
			"description": "Specifies what set of line breaking restrictions are in effect within the element.",
			"restrictions": [
				"enum"
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
			"name": "list-style",
			"values": [
				{
					"name": "armenian"
				},
				{
					"name": "circle",
					"description": "A hollow circle."
				},
				{
					"name": "decimal"
				},
				{
					"name": "decimal-leading-zero"
				},
				{
					"name": "disc",
					"description": "A filled circle."
				},
				{
					"name": "georgian"
				},
				{
					"name": "inside",
					"description": "The marker box is outside the principal block box, as described in the section on the ::marker pseudo-element below."
				},
				{
					"name": "lower-alpha"
				},
				{
					"name": "lower-greek"
				},
				{
					"name": "lower-latin"
				},
				{
					"name": "lower-roman"
				},
				{
					"name": "none"
				},
				{
					"name": "outside",
					"description": "The ::marker pseudo-element is an inline element placed immediately before all ::before pseudo-elements in the principal block box, after which the element's content flows."
				},
				{
					"name": "square",
					"description": "A filled square."
				},
				{
					"name": "symbols()",
					"description": "Allows a counter style to be defined inline."
				},
				{
					"name": "upper-alpha"
				},
				{
					"name": "upper-latin"
				},
				{
					"name": "upper-roman"
				},
				{
					"name": "url()"
				}
			],
			"syntax": "<'list-style-type'> || <'list-style-position'> || <'list-style-image'>",
			"relevance": 86,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/list-style"
				}
			],
			"description": "Shorthand for setting 'list-style-type', 'list-style-position' and 'list-style-image'",
			"restrictions": [
				"image",
				"enum",
				"url"
			]
		},
		{
			"name": "list-style-image",
			"values": [
				{
					"name": "none",
					"description": "The default contents of the of the list item’s marker are given by 'list-style-type' instead."
				}
			],
			"syntax": "<image> | none",
			"relevance": 52,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/list-style-image"
				}
			],
			"description": "Sets the image that will be used as the list item marker. When the image is available, it will replace the marker set with the 'list-style-type' marker.",
			"restrictions": [
				"image"
			]
		},
		{
			"name": "list-style-position",
			"values": [
				{
					"name": "inside",
					"description": "The marker box is outside the principal block box, as described in the section on the ::marker pseudo-element below."
				},
				{
					"name": "outside",
					"description": "The ::marker pseudo-element is an inline element placed immediately before all ::before pseudo-elements in the principal block box, after which the element's content flows."
				}
			],
			"syntax": "inside | outside",
			"relevance": 55,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/list-style-position"
				}
			],
			"description": "Specifies the position of the '::marker' pseudo-element's box in the list item.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "list-style-type",
			"values": [
				{
					"name": "armenian",
					"description": "Traditional uppercase Armenian numbering."
				},
				{
					"name": "circle",
					"description": "A hollow circle."
				},
				{
					"name": "decimal",
					"description": "Western decimal numbers."
				},
				{
					"name": "decimal-leading-zero",
					"description": "Decimal numbers padded by initial zeros."
				},
				{
					"name": "disc",
					"description": "A filled circle."
				},
				{
					"name": "georgian",
					"description": "Traditional Georgian numbering."
				},
				{
					"name": "lower-alpha",
					"description": "Lowercase ASCII letters."
				},
				{
					"name": "lower-greek",
					"description": "Lowercase classical Greek."
				},
				{
					"name": "lower-latin",
					"description": "Lowercase ASCII letters."
				},
				{
					"name": "lower-roman",
					"description": "Lowercase ASCII Roman numerals."
				},
				{
					"name": "none",
					"description": "No marker"
				},
				{
					"name": "square",
					"description": "A filled square."
				},
				{
					"name": "symbols()",
					"description": "Allows a counter style to be defined inline."
				},
				{
					"name": "upper-alpha",
					"description": "Uppercase ASCII letters."
				},
				{
					"name": "upper-latin",
					"description": "Uppercase ASCII letters."
				},
				{
					"name": "upper-roman",
					"description": "Uppercase ASCII Roman numerals."
				}
			],
			"syntax": "<counter-style> | <string> | none",
			"relevance": 75,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/list-style-type"
				}
			],
			"description": "Used to construct the default contents of a list item’s marker",
			"restrictions": [
				"enum",
				"string"
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
			"name": "margin-block-end",
			"browsers": [
				"E79",
				"FF41",
				"S12.1",
				"C69",
				"O56"
			],
			"values": [
				{
					"name": "auto"
				}
			],
			"syntax": "<'margin-left'>",
			"relevance": 53,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/margin-block-end"
				}
			],
			"description": "Logical 'margin-bottom'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			"name": "margin-block-start",
			"browsers": [
				"E79",
				"FF41",
				"S12.1",
				"C69",
				"O56"
			],
			"values": [
				{
					"name": "auto"
				}
			],
			"syntax": "<'margin-left'>",
			"relevance": 53,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/margin-block-start"
				}
			],
			"description": "Logical 'margin-top'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
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
			"name": "margin-inline-end",
			"browsers": [
				"E79",
				"FF41",
				"S12.1",
				"C69",
				"O56"
			],
			"values": [
				{
					"name": "auto"
				}
			],
			"syntax": "<'margin-left'>",
			"relevance": 51,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/margin-inline-end"
				}
			],
			"description": "Logical 'margin-right'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			"name": "margin-inline-start",
			"browsers": [
				"E79",
				"FF41",
				"S12.1",
				"C69",
				"O56"
			],
			"values": [
				{
					"name": "auto"
				}
			],
			"syntax": "<'margin-left'>",
			"relevance": 51,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/margin-inline-start"
				}
			],
			"description": "Logical 'margin-left'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
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
			"name": "marker",
			"values": [
				{
					"name": "none",
					"description": "Indicates that no marker symbol will be drawn at the given vertex or vertices."
				},
				{
					"name": "url()",
					"description": "Indicates that the <marker> element referenced will be used."
				}
			],
			"relevance": 50,
			"description": "Specifies the marker symbol that shall be used for all points on the sets the value for all vertices on the given ‘path’ element or basic shape.",
			"restrictions": [
				"url"
			]
		},
		{
			"name": "marker-end",
			"values": [
				{
					"name": "none",
					"description": "Indicates that no marker symbol will be drawn at the given vertex or vertices."
				},
				{
					"name": "url()",
					"description": "Indicates that the <marker> element referenced will be used."
				}
			],
			"relevance": 50,
			"description": "Specifies the marker that will be drawn at the last vertices of the given markable element.",
			"restrictions": [
				"url"
			]
		},
		{
			"name": "marker-mid",
			"values": [
				{
					"name": "none",
					"description": "Indicates that no marker symbol will be drawn at the given vertex or vertices."
				},
				{
					"name": "url()",
					"description": "Indicates that the <marker> element referenced will be used."
				}
			],
			"relevance": 50,
			"description": "Specifies the marker that will be drawn at all vertices except the first and last.",
			"restrictions": [
				"url"
			]
		},
		{
			"name": "marker-start",
			"values": [
				{
					"name": "none",
					"description": "Indicates that no marker symbol will be drawn at the given vertex or vertices."
				},
				{
					"name": "url()",
					"description": "Indicates that the <marker> element referenced will be used."
				}
			],
			"relevance": 50,
			"description": "Specifies the marker that will be drawn at the first vertices of the given markable element.",
			"restrictions": [
				"url"
			]
		},
		{
			"name": "mask-image",
			"browsers": [
				"E79",
				"FF53",
				"S4",
				"C1",
				"O15"
			],
			"values": [
				{
					"name": "none",
					"description": "Counts as a transparent black image layer."
				},
				{
					"name": "url()",
					"description": "Reference to a <mask element or to a CSS image."
				}
			],
			"syntax": "<mask-reference>#",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/mask-image"
				}
			],
			"description": "Sets the mask layer image of an element.",
			"restrictions": [
				"url",
				"image",
				"enum"
			]
		},
		{
			"name": "mask-mode",
			"browsers": [
				"FF53"
			],
			"values": [
				{
					"name": "alpha",
					"description": "Alpha values of the mask layer image should be used as the mask values."
				},
				{
					"name": "auto",
					"description": "Use alpha values if 'mask-image' is an image, luminance if a <mask> element or a CSS image."
				},
				{
					"name": "luminance",
					"description": "Luminance values of the mask layer image should be used as the mask values."
				}
			],
			"syntax": "<masking-mode>#",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/mask-mode"
				}
			],
			"description": "Indicates whether the mask layer image is treated as luminance mask or alpha mask.",
			"restrictions": [
				"url",
				"image",
				"enum"
			]
		},
		{
			"name": "mask-origin",
			"browsers": [
				"E79",
				"FF53",
				"S4",
				"C1",
				"O15"
			],
			"syntax": "<geometry-box>#",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/mask-origin"
				}
			],
			"description": "Specifies the mask positioning area.",
			"restrictions": [
				"geometry-box",
				"enum"
			]
		},
		{
			"name": "mask-position",
			"browsers": [
				"E79",
				"FF53",
				"S3.1",
				"C1",
				"O15"
			],
			"syntax": "<position>#",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/mask-position"
				}
			],
			"description": "Specifies how mask layer images are positioned.",
			"restrictions": [
				"position",
				"length",
				"percentage"
			]
		},
		{
			"name": "mask-repeat",
			"browsers": [
				"E79",
				"FF53",
				"S3.1",
				"C1",
				"O15"
			],
			"syntax": "<repeat-style>#",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/mask-repeat"
				}
			],
			"description": "Specifies how mask layer images are tiled after they have been sized and positioned.",
			"restrictions": [
				"repeat"
			]
		},
		{
			"name": "mask-size",
			"browsers": [
				"E79",
				"FF53",
				"S4",
				"C4",
				"O15"
			],
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
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/mask-size"
				}
			],
			"description": "Specifies the size of the mask layer images.",
			"restrictions": [
				"length",
				"percentage",
				"enum"
			]
		},
		{
			"name": "mask-type",
			"browsers": [
				"E79",
				"FF35",
				"S7",
				"C24",
				"O15"
			],
			"values": [
				{
					"name": "alpha",
					"description": "Indicates that the alpha values of the mask should be used."
				},
				{
					"name": "luminance",
					"description": "Indicates that the luminance values of the mask should be used."
				}
			],
			"syntax": "luminance | alpha",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/mask-type"
				}
			],
			"description": "Defines whether the content of the <mask> element is treated as as luminance mask or alpha mask.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "max-block-size",
			"browsers": [
				"E79",
				"FF41",
				"S12.1",
				"C57",
				"O44"
			],
			"values": [
				{
					"name": "none",
					"description": "No limit on the width of the box."
				}
			],
			"syntax": "<'max-width'>",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/max-block-size"
				}
			],
			"description": "Maximum size of an element in the direction opposite that of the direction specified by 'writing-mode'.",
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
			"name": "max-inline-size",
			"browsers": [
				"E79",
				"FF41",
				"S12.1",
				"C57",
				"O44"
			],
			"values": [
				{
					"name": "none",
					"description": "No limit on the height of the box."
				}
			],
			"syntax": "<'max-width'>",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/max-inline-size"
				}
			],
			"description": "Maximum size of an element in the direction specified by 'writing-mode'.",
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
			"name": "min-block-size",
			"browsers": [
				"E79",
				"FF41",
				"S12.1",
				"C57",
				"O44"
			],
			"syntax": "<'min-width'>",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/min-block-size"
				}
			],
			"description": "Minimal size of an element in the direction opposite that of the direction specified by 'writing-mode'.",
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
			"name": "min-inline-size",
			"browsers": [
				"E79",
				"FF41",
				"S12.1",
				"C57",
				"O44"
			],
			"syntax": "<'min-width'>",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/min-inline-size"
				}
			],
			"description": "Minimal size of an element in the direction specified by 'writing-mode'.",
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
			"name": "mix-blend-mode",
			"browsers": [
				"E79",
				"FF32",
				"S8",
				"C41",
				"O28"
			],
			"values": [
				{
					"name": "normal",
					"description": "Default attribute which specifies no blending"
				},
				{
					"name": "multiply",
					"description": "The source color is multiplied by the destination color and replaces the destination."
				},
				{
					"name": "screen",
					"description": "Multiplies the complements of the backdrop and source color values, then complements the result."
				},
				{
					"name": "overlay",
					"description": "Multiplies or screens the colors, depending on the backdrop color value."
				},
				{
					"name": "darken",
					"description": "Selects the darker of the backdrop and source colors."
				},
				{
					"name": "lighten",
					"description": "Selects the lighter of the backdrop and source colors."
				},
				{
					"name": "color-dodge",
					"description": "Brightens the backdrop color to reflect the source color."
				},
				{
					"name": "color-burn",
					"description": "Darkens the backdrop color to reflect the source color."
				},
				{
					"name": "hard-light",
					"description": "Multiplies or screens the colors, depending on the source color value."
				},
				{
					"name": "soft-light",
					"description": "Darkens or lightens the colors, depending on the source color value."
				},
				{
					"name": "difference",
					"description": "Subtracts the darker of the two constituent colors from the lighter color.."
				},
				{
					"name": "exclusion",
					"description": "Produces an effect similar to that of the Difference mode but lower in contrast."
				},
				{
					"name": "hue",
					"browsers": [
						"E79",
						"FF32",
						"S8",
						"C41",
						"O28"
					],
					"description": "Creates a color with the hue of the source color and the saturation and luminosity of the backdrop color."
				},
				{
					"name": "saturation",
					"browsers": [
						"E79",
						"FF32",
						"S8",
						"C41",
						"O28"
					],
					"description": "Creates a color with the saturation of the source color and the hue and luminosity of the backdrop color."
				},
				{
					"name": "color",
					"browsers": [
						"E79",
						"FF32",
						"S8",
						"C41",
						"O28"
					],
					"description": "Creates a color with the hue and saturation of the source color and the luminosity of the backdrop color."
				},
				{
					"name": "luminosity",
					"browsers": [
						"E79",
						"FF32",
						"S8",
						"C41",
						"O28"
					],
					"description": "Creates a color with the luminosity of the source color and the hue and saturation of the backdrop color."
				}
			],
			"syntax": "<blend-mode>",
			"relevance": 52,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/mix-blend-mode"
				}
			],
			"description": "Defines the formula that must be used to mix the colors with the backdrop.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "motion",
			"browsers": [
				"C46",
				"O33"
			],
			"values": [
				{
					"name": "none",
					"description": "No motion path gets created."
				},
				{
					"name": "path()",
					"description": "Defines an SVG path as a string, with optional 'fill-rule' as the first argument."
				},
				{
					"name": "auto",
					"description": "Indicates that the object is rotated by the angle of the direction of the motion path."
				},
				{
					"name": "reverse",
					"description": "Indicates that the object is rotated by the angle of the direction of the motion path plus 180 degrees."
				}
			],
			"relevance": 50,
			"description": "Shorthand property for setting 'motion-path', 'motion-offset' and 'motion-rotation'.",
			"restrictions": [
				"url",
				"length",
				"percentage",
				"angle",
				"shape",
				"geometry-box",
				"enum"
			]
		},
		{
			"name": "motion-offset",
			"browsers": [
				"C46",
				"O33"
			],
			"relevance": 50,
			"description": "A distance that describes the position along the specified motion path.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			"name": "motion-path",
			"browsers": [
				"C46",
				"O33"
			],
			"values": [
				{
					"name": "none",
					"description": "No motion path gets created."
				},
				{
					"name": "path()",
					"description": "Defines an SVG path as a string, with optional 'fill-rule' as the first argument."
				}
			],
			"relevance": 50,
			"description": "Specifies the motion path the element gets positioned at.",
			"restrictions": [
				"url",
				"shape",
				"geometry-box",
				"enum"
			]
		},
		{
			"name": "motion-rotation",
			"browsers": [
				"C46",
				"O33"
			],
			"values": [
				{
					"name": "auto",
					"description": "Indicates that the object is rotated by the angle of the direction of the motion path."
				},
				{
					"name": "reverse",
					"description": "Indicates that the object is rotated by the angle of the direction of the motion path plus 180 degrees."
				}
			],
			"relevance": 50,
			"description": "Defines the direction of the element while positioning along the motion path.",
			"restrictions": [
				"angle"
			]
		},
		{
			"name": "nav-down",
			"browsers": [
				"O9.5"
			],
			"values": [
				{
					"name": "auto",
					"description": "The user agent automatically determines which element to navigate the focus to in response to directional navigational input."
				},
				{
					"name": "current",
					"description": "Indicates that the user agent should target the frame that the element is in."
				},
				{
					"name": "root",
					"description": "Indicates that the user agent should target the full window."
				}
			],
			"relevance": 50,
			"description": "Provides an way to control directional focus navigation.",
			"restrictions": [
				"enum",
				"identifier",
				"string"
			]
		},
		{
			"name": "nav-index",
			"browsers": [
				"O9.5"
			],
			"values": [
				{
					"name": "auto",
					"description": "The element's sequential navigation order is assigned automatically by the user agent."
				}
			],
			"relevance": 50,
			"description": "Provides an input-method-neutral way of specifying the sequential navigation order (also known as 'tabbing order').",
			"restrictions": [
				"number"
			]
		},
		{
			"name": "nav-left",
			"browsers": [
				"O9.5"
			],
			"values": [
				{
					"name": "auto",
					"description": "The user agent automatically determines which element to navigate the focus to in response to directional navigational input."
				},
				{
					"name": "current",
					"description": "Indicates that the user agent should target the frame that the element is in."
				},
				{
					"name": "root",
					"description": "Indicates that the user agent should target the full window."
				}
			],
			"relevance": 50,
			"description": "Provides an way to control directional focus navigation.",
			"restrictions": [
				"enum",
				"identifier",
				"string"
			]
		},
		{
			"name": "nav-right",
			"browsers": [
				"O9.5"
			],
			"values": [
				{
					"name": "auto",
					"description": "The user agent automatically determines which element to navigate the focus to in response to directional navigational input."
				},
				{
					"name": "current",
					"description": "Indicates that the user agent should target the frame that the element is in."
				},
				{
					"name": "root",
					"description": "Indicates that the user agent should target the full window."
				}
			],
			"relevance": 50,
			"description": "Provides an way to control directional focus navigation.",
			"restrictions": [
				"enum",
				"identifier",
				"string"
			]
		},
		{
			"name": "nav-up",
			"browsers": [
				"O9.5"
			],
			"values": [
				{
					"name": "auto",
					"description": "The user agent automatically determines which element to navigate the focus to in response to directional navigational input."
				},
				{
					"name": "current",
					"description": "Indicates that the user agent should target the frame that the element is in."
				},
				{
					"name": "root",
					"description": "Indicates that the user agent should target the full window."
				}
			],
			"relevance": 50,
			"description": "Provides an way to control directional focus navigation.",
			"restrictions": [
				"enum",
				"identifier",
				"string"
			]
		},
		{
			"name": "negative",
			"browsers": [
				"FF33"
			],
			"syntax": "<symbol> <symbol>?",
			"relevance": 50,
			"description": "@counter-style descriptor. Defines how to alter the representation when the counter value is negative.",
			"restrictions": [
				"image",
				"identifier",
				"string"
			]
		},
		{
			"name": "object-fit",
			"browsers": [
				"E79",
				"FF36",
				"S10",
				"C32",
				"O19"
			],
			"values": [
				{
					"name": "contain",
					"description": "The replaced content is sized to maintain its aspect ratio while fitting within the element’s content box: its concrete object size is resolved as a contain constraint against the element's used width and height."
				},
				{
					"name": "cover",
					"description": "The replaced content is sized to maintain its aspect ratio while filling the element's entire content box: its concrete object size is resolved as a cover constraint against the element’s used width and height."
				},
				{
					"name": "fill",
					"description": "The replaced content is sized to fill the element’s content box: the object's concrete object size is the element's used width and height."
				},
				{
					"name": "none",
					"description": "The replaced content is not resized to fit inside the element's content box"
				},
				{
					"name": "scale-down",
					"description": "Size the content as if ‘none’ or ‘contain’ were specified, whichever would result in a smaller concrete object size."
				}
			],
			"syntax": "fill | contain | cover | none | scale-down",
			"relevance": 69,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/object-fit"
				}
			],
			"description": "Specifies how the contents of a replaced element should be scaled relative to the box established by its used height and width.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "object-position",
			"browsers": [
				"E79",
				"FF36",
				"S10",
				"C32",
				"O19"
			],
			"syntax": "<position>",
			"relevance": 54,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/object-position"
				}
			],
			"description": "Determines the alignment of the replaced element inside its box.",
			"restrictions": [
				"position",
				"length",
				"percentage"
			]
		},
		{
			"name": "offset-block-end",
			"browsers": [
				"FF41"
			],
			"values": [
				{
					"name": "auto",
					"description": "For non-replaced elements, the effect of this value depends on which of related properties have the value 'auto' as well."
				}
			],
			"relevance": 50,
			"description": "Logical 'bottom'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			"name": "offset-block-start",
			"browsers": [
				"FF41"
			],
			"values": [
				{
					"name": "auto",
					"description": "For non-replaced elements, the effect of this value depends on which of related properties have the value 'auto' as well."
				}
			],
			"relevance": 50,
			"description": "Logical 'top'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			"name": "offset-inline-end",
			"browsers": [
				"FF41"
			],
			"values": [
				{
					"name": "auto",
					"description": "For non-replaced elements, the effect of this value depends on which of related properties have the value 'auto' as well."
				}
			],
			"relevance": 50,
			"description": "Logical 'right'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			"name": "offset-inline-start",
			"browsers": [
				"FF41"
			],
			"values": [
				{
					"name": "auto",
					"description": "For non-replaced elements, the effect of this value depends on which of related properties have the value 'auto' as well."
				}
			],
			"relevance": 50,
			"description": "Logical 'left'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			"name": "outline",
			"values": [
				{
					"name": "auto",
					"description": "Permits the user agent to render a custom outline style, typically the default platform style."
				},
				{
					"name": "invert",
					"description": "Performs a color inversion on the pixels on the screen."
				}
			],
			"syntax": "[ <'outline-color'> || <'outline-style'> || <'outline-width'> ]",
			"relevance": 88,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/outline"
				}
			],
			"description": "Shorthand property for 'outline-style', 'outline-width', and 'outline-color'.",
			"restrictions": [
				"length",
				"line-width",
				"line-style",
				"color",
				"enum"
			]
		},
		{
			"name": "outline-color",
			"values": [
				{
					"name": "invert",
					"description": "Performs a color inversion on the pixels on the screen."
				}
			],
			"syntax": "<color> | invert",
			"relevance": 54,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/outline-color"
				}
			],
			"description": "The color of the outline.",
			"restrictions": [
				"enum",
				"color"
			]
		},
		{
			"name": "outline-offset",
			"browsers": [
				"E15",
				"FF1.5",
				"S1.2",
				"C1",
				"O9.5"
			],
			"syntax": "<length>",
			"relevance": 68,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/outline-offset"
				}
			],
			"description": "Offset the outline and draw it beyond the border edge.",
			"restrictions": [
				"length"
			]
		},
		{
			"name": "outline-style",
			"values": [
				{
					"name": "auto",
					"description": "Permits the user agent to render a custom outline style, typically the default platform style."
				}
			],
			"syntax": "auto | <'border-style'>",
			"relevance": 61,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/outline-style"
				}
			],
			"description": "Style of the outline.",
			"restrictions": [
				"line-style",
				"enum"
			]
		},
		{
			"name": "outline-width",
			"syntax": "<line-width>",
			"relevance": 61,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/outline-width"
				}
			],
			"description": "Width of the outline.",
			"restrictions": [
				"length",
				"line-width"
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
			"name": "overflow-wrap",
			"values": [
				{
					"name": "break-word",
					"description": "An otherwise unbreakable sequence of characters may be broken at an arbitrary point if there are no otherwise-acceptable break points in the line."
				},
				{
					"name": "normal",
					"description": "Lines may break only at allowed break points."
				}
			],
			"syntax": "normal | break-word | anywhere",
			"relevance": 64,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/overflow-wrap"
				}
			],
			"description": "Specifies whether the UA may break within a word to prevent overflow when an otherwise-unbreakable string is too long to fit within the line box.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "overflow-x",
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
			"syntax": "visible | hidden | clip | scroll | auto",
			"relevance": 82,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/overflow-x"
				}
			],
			"description": "Specifies the handling of overflow in the horizontal direction.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "overflow-y",
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
			"syntax": "visible | hidden | clip | scroll | auto",
			"relevance": 83,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/overflow-y"
				}
			],
			"description": "Specifies the handling of overflow in the vertical direction.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "pad",
			"browsers": [
				"FF33"
			],
			"syntax": "<integer> && <symbol>",
			"relevance": 50,
			"description": "@counter-style descriptor. Specifies a “fixed-width” counter style, where representations shorter than the pad value are padded with a particular <symbol>",
			"restrictions": [
				"integer",
				"image",
				"string",
				"identifier"
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
			"name": "padding-block-end",
			"browsers": [
				"E79",
				"FF41",
				"S12.1",
				"C69",
				"O56"
			],
			"syntax": "<'padding-left'>",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/padding-block-end"
				}
			],
			"description": "Logical 'padding-bottom'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			"name": "padding-block-start",
			"browsers": [
				"E79",
				"FF41",
				"S12.1",
				"C69",
				"O56"
			],
			"syntax": "<'padding-left'>",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/padding-block-start"
				}
			],
			"description": "Logical 'padding-top'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			"name": "padding-inline-end",
			"browsers": [
				"E79",
				"FF41",
				"S12.1",
				"C69",
				"O56"
			],
			"syntax": "<'padding-left'>",
			"relevance": 51,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/padding-inline-end"
				}
			],
			"description": "Logical 'padding-right'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			"name": "padding-inline-start",
			"browsers": [
				"E79",
				"FF41",
				"S12.1",
				"C69",
				"O56"
			],
			"syntax": "<'padding-left'>",
			"relevance": 51,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/padding-inline-start"
				}
			],
			"description": "Logical 'padding-left'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
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
			"name": "page-break-after",
			"values": [
				{
					"name": "always",
					"description": "Always force a page break after the generated box."
				},
				{
					"name": "auto",
					"description": "Neither force nor forbid a page break after generated box."
				},
				{
					"name": "avoid",
					"description": "Avoid a page break after the generated box."
				},
				{
					"name": "left",
					"description": "Force one or two page breaks after the generated box so that the next page is formatted as a left page."
				},
				{
					"name": "right",
					"description": "Force one or two page breaks after the generated box so that the next page is formatted as a right page."
				}
			],
			"syntax": "auto | always | avoid | left | right | recto | verso",
			"relevance": 52,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/page-break-after"
				}
			],
			"description": "Defines rules for page breaks after an element.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "page-break-before",
			"values": [
				{
					"name": "always",
					"description": "Always force a page break before the generated box."
				},
				{
					"name": "auto",
					"description": "Neither force nor forbid a page break before the generated box."
				},
				{
					"name": "avoid",
					"description": "Avoid a page break before the generated box."
				},
				{
					"name": "left",
					"description": "Force one or two page breaks before the generated box so that the next page is formatted as a left page."
				},
				{
					"name": "right",
					"description": "Force one or two page breaks before the generated box so that the next page is formatted as a right page."
				}
			],
			"syntax": "auto | always | avoid | left | right | recto | verso",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/page-break-before"
				}
			],
			"description": "Defines rules for page breaks before an element.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "page-break-inside",
			"values": [
				{
					"name": "auto",
					"description": "Neither force nor forbid a page break inside the generated box."
				},
				{
					"name": "avoid",
					"description": "Avoid a page break inside the generated box."
				}
			],
			"syntax": "auto | avoid",
			"relevance": 53,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/page-break-inside"
				}
			],
			"description": "Defines rules for page breaks inside an element.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "paint-order",
			"browsers": [
				"E17",
				"FF60",
				"S8",
				"C35",
				"O22"
			],
			"values": [
				{
					"name": "fill"
				},
				{
					"name": "markers"
				},
				{
					"name": "normal",
					"description": "The element is painted with the standard order of painting operations: the 'fill' is painted first, then its 'stroke' and finally its markers."
				},
				{
					"name": "stroke"
				}
			],
			"syntax": "normal | [ fill || stroke || markers ]",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/paint-order"
				}
			],
			"description": "Controls the order that the three paint operations that shapes and text are rendered with: their fill, their stroke and any markers they might have.",
			"restrictions": [
				"enum"
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
			"name": "pointer-events",
			"values": [
				{
					"name": "all",
					"description": "The given element can be the target element for pointer events whenever the pointer is over either the interior or the perimeter of the element."
				},
				{
					"name": "fill",
					"description": "The given element can be the target element for pointer events whenever the pointer is over the interior of the element."
				},
				{
					"name": "none",
					"description": "The given element does not receive pointer events."
				},
				{
					"name": "painted",
					"description": "The given element can be the target element for pointer events when the pointer is over a \"painted\" area. "
				},
				{
					"name": "stroke",
					"description": "The given element can be the target element for pointer events whenever the pointer is over the perimeter of the element."
				},
				{
					"name": "visible",
					"description": "The given element can be the target element for pointer events when the ‘visibility’ property is set to visible and the pointer is over either the interior or the perimeter of the element."
				},
				{
					"name": "visibleFill",
					"description": "The given element can be the target element for pointer events when the ‘visibility’ property is set to visible and when the pointer is over the interior of the element."
				},
				{
					"name": "visiblePainted",
					"description": "The given element can be the target element for pointer events when the ‘visibility’ property is set to visible and when the pointer is over a ‘painted’ area."
				},
				{
					"name": "visibleStroke",
					"description": "The given element can be the target element for pointer events when the ‘visibility’ property is set to visible and when the pointer is over the perimeter of the element."
				}
			],
			"syntax": "auto | none | visiblePainted | visibleFill | visibleStroke | visible | painted | fill | stroke | all | inherit",
			"relevance": 83,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/pointer-events"
				}
			],
			"description": "Specifies under what circumstances a given element can be the target element for a pointer event.",
			"restrictions": [
				"enum"
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
			"name": "prefix",
			"browsers": [
				"FF33"
			],
			"syntax": "<symbol>",
			"relevance": 50,
			"description": "@counter-style descriptor. Specifies a <symbol> that is prepended to the marker representation.",
			"restrictions": [
				"image",
				"string",
				"identifier"
			]
		},
		{
			"name": "quotes",
			"values": [
				{
					"name": "none",
					"description": "The 'open-quote' and 'close-quote' values of the 'content' property produce no quotations marks, as if they were 'no-open-quote' and 'no-close-quote' respectively."
				}
			],
			"syntax": "none | auto | [ <string> <string> ]+",
			"relevance": 54,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/quotes"
				}
			],
			"description": "Specifies quotation marks for any number of embedded quotations.",
			"restrictions": [
				"string"
			]
		},
		{
			"name": "range",
			"browsers": [
				"FF33"
			],
			"values": [
				{
					"name": "auto",
					"description": "The range depends on the counter system."
				},
				{
					"name": "infinite",
					"description": "If used as the first value in a range, it represents negative infinity; if used as the second value, it represents positive infinity."
				}
			],
			"syntax": "[ [ <integer> | infinite ]{2} ]# | auto",
			"relevance": 50,
			"description": "@counter-style descriptor. Defines the ranges over which the counter style is defined.",
			"restrictions": [
				"integer",
				"enum"
			]
		},
		{
			"name": "resize",
			"browsers": [
				"E79",
				"FF4",
				"S3",
				"C1",
				"O12.1"
			],
			"values": [
				{
					"name": "both",
					"description": "The UA presents a bidirectional resizing mechanism to allow the user to adjust both the height and the width of the element."
				},
				{
					"name": "horizontal",
					"description": "The UA presents a unidirectional horizontal resizing mechanism to allow the user to adjust only the width of the element."
				},
				{
					"name": "none",
					"description": "The UA does not present a resizing mechanism on the element, and the user is given no direct manipulation mechanism to resize the element."
				},
				{
					"name": "vertical",
					"description": "The UA presents a unidirectional vertical resizing mechanism to allow the user to adjust only the height of the element."
				}
			],
			"syntax": "none | both | horizontal | vertical | block | inline",
			"relevance": 60,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/resize"
				}
			],
			"description": "Specifies whether or not an element is resizable by the user, and if so, along which axis/axes.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "right",
			"values": [
				{
					"name": "auto",
					"description": "For non-replaced elements, the effect of this value depends on which of related properties have the value 'auto' as well"
				}
			],
			"syntax": "<length> | <percentage> | auto",
			"relevance": 92,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/right"
				}
			],
			"description": "Specifies how far an absolutely positioned box's right margin edge is offset to the left of the right edge of the box's 'containing block'.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			"name": "ruby-align",
			"browsers": [
				"FF38"
			],
			"values": [
				{
					"name": "auto",
					"browsers": [
						"FF38"
					],
					"description": "The user agent determines how the ruby contents are aligned. This is the initial value."
				},
				{
					"name": "center",
					"description": "The ruby content is centered within its box."
				},
				{
					"name": "distribute-letter",
					"browsers": [
						"FF38"
					],
					"description": "If the width of the ruby text is smaller than that of the base, then the ruby text contents are evenly distributed across the width of the base, with the first and last ruby text glyphs lining up with the corresponding first and last base glyphs. If the width of the ruby text is at least the width of the base, then the letters of the base are evenly distributed across the width of the ruby text."
				},
				{
					"name": "distribute-space",
					"browsers": [
						"FF38"
					],
					"description": "If the width of the ruby text is smaller than that of the base, then the ruby text contents are evenly distributed across the width of the base, with a certain amount of white space preceding the first and following the last character in the ruby text. That amount of white space is normally equal to half the amount of inter-character space of the ruby text."
				},
				{
					"name": "left",
					"description": "The ruby text content is aligned with the start edge of the base."
				},
				{
					"name": "line-edge",
					"browsers": [
						"FF38"
					],
					"description": "If the ruby text is not adjacent to a line edge, it is aligned as in 'auto'. If it is adjacent to a line edge, then it is still aligned as in auto, but the side of the ruby text that touches the end of the line is lined up with the corresponding edge of the base."
				},
				{
					"name": "right",
					"browsers": [
						"FF38"
					],
					"description": "The ruby text content is aligned with the end edge of the base."
				},
				{
					"name": "start",
					"browsers": [
						"FF38"
					],
					"description": "The ruby text content is aligned with the start edge of the base."
				},
				{
					"name": "space-between",
					"browsers": [
						"FF38"
					],
					"description": "The ruby content expands as defined for normal text justification (as defined by 'text-justify'),"
				},
				{
					"name": "space-around",
					"browsers": [
						"FF38"
					],
					"description": "As for 'space-between' except that there exists an extra justification opportunities whose space is distributed half before and half after the ruby content."
				}
			],
			"status": "experimental",
			"syntax": "start | center | space-between | space-around",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/ruby-align"
				}
			],
			"description": "Specifies how text is distributed within the various ruby boxes when their contents do not exactly fill their respective boxes.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "ruby-overhang",
			"browsers": [
				"FF10",
				"IE5"
			],
			"values": [
				{
					"name": "auto",
					"description": "The ruby text can overhang text adjacent to the base on either side. This is the initial value."
				},
				{
					"name": "end",
					"description": "The ruby text can overhang the text that follows it."
				},
				{
					"name": "none",
					"description": "The ruby text cannot overhang any text adjacent to its base, only its own base."
				},
				{
					"name": "start",
					"description": "The ruby text can overhang the text that precedes it."
				}
			],
			"relevance": 50,
			"description": "Determines whether, and on which side, ruby text is allowed to partially overhang any adjacent text in addition to its own base, when the ruby text is wider than the ruby base.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "ruby-position",
			"browsers": [
				"E84",
				"FF38",
				"S7",
				"C84",
				"O70"
			],
			"values": [
				{
					"name": "after",
					"description": "The ruby text appears after the base. This is a relatively rare setting used in ideographic East Asian writing systems, most easily found in educational text."
				},
				{
					"name": "before",
					"description": "The ruby text appears before the base. This is the most common setting used in ideographic East Asian writing systems."
				},
				{
					"name": "inline"
				},
				{
					"name": "right",
					"description": "The ruby text appears on the right of the base. Unlike 'before' and 'after', this value is not relative to the text flow direction."
				}
			],
			"status": "experimental",
			"syntax": "[ alternate || [ over | under ] ] | inter-character",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/ruby-position"
				}
			],
			"description": "Used by the parent of elements with display: ruby-text to control the position of the ruby text with respect to its base.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "ruby-span",
			"browsers": [
				"FF10"
			],
			"values": [
				{
					"name": "attr(x)",
					"description": "The value of attribute 'x' is a string value. The string value is evaluated as a <number> to determine the number of ruby base elements to be spanned by the annotation element."
				},
				{
					"name": "none",
					"description": "No spanning. The computed value is '1'."
				}
			],
			"relevance": 50,
			"description": "Determines whether, and on which side, ruby text is allowed to partially overhang any adjacent text in addition to its own base, when the ruby text is wider than the ruby base.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "scrollbar-3dlight-color",
			"browsers": [
				"IE5"
			],
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/scrollbar-3dlight-color"
				}
			],
			"description": "Determines the color of the top and left edges of the scroll box and scroll arrows of a scroll bar.",
			"restrictions": [
				"color"
			]
		},
		{
			"name": "scrollbar-arrow-color",
			"browsers": [
				"IE5"
			],
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/scrollbar-arrow-color"
				}
			],
			"description": "Determines the color of the arrow elements of a scroll arrow.",
			"restrictions": [
				"color"
			]
		},
		{
			"name": "scrollbar-base-color",
			"browsers": [
				"IE5"
			],
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/scrollbar-base-color"
				}
			],
			"description": "Determines the color of the main elements of a scroll bar, which include the scroll box, track, and scroll arrows.",
			"restrictions": [
				"color"
			]
		},
		{
			"name": "scrollbar-darkshadow-color",
			"browsers": [
				"IE5"
			],
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/scrollbar-darkshadow-color"
				}
			],
			"description": "Determines the color of the gutter of a scroll bar.",
			"restrictions": [
				"color"
			]
		},
		{
			"name": "scrollbar-face-color",
			"browsers": [
				"IE5"
			],
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/scrollbar-face-color"
				}
			],
			"description": "Determines the color of the scroll box and scroll arrows of a scroll bar.",
			"restrictions": [
				"color"
			]
		},
		{
			"name": "scrollbar-highlight-color",
			"browsers": [
				"IE5"
			],
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/scrollbar-highlight-color"
				}
			],
			"description": "Determines the color of the top and left edges of the scroll box and scroll arrows of a scroll bar.",
			"restrictions": [
				"color"
			]
		},
		{
			"name": "scrollbar-shadow-color",
			"browsers": [
				"IE5"
			],
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/scrollbar-shadow-color"
				}
			],
			"description": "Determines the color of the bottom and right edges of the scroll box and scroll arrows of a scroll bar.",
			"restrictions": [
				"color"
			]
		},
		{
			"name": "scrollbar-track-color",
			"browsers": [
				"IE6"
			],
			"relevance": 50,
			"description": "Determines the color of the track element of a scroll bar.",
			"restrictions": [
				"color"
			]
		},
		{
			"name": "scroll-behavior",
			"browsers": [
				"E79",
				"FF36",
				"Spreview",
				"C61",
				"O48"
			],
			"values": [
				{
					"name": "auto",
					"description": "Scrolls in an instant fashion."
				},
				{
					"name": "smooth",
					"description": "Scrolls in a smooth fashion using a user-agent-defined timing function and time period."
				}
			],
			"syntax": "auto | smooth",
			"relevance": 53,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/scroll-behavior"
				}
			],
			"description": "Specifies the scrolling behavior for a scrolling box, when scrolling happens due to navigation or CSSOM scrolling APIs.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "scroll-snap-coordinate",
			"browsers": [
				"FF39"
			],
			"values": [
				{
					"name": "none",
					"description": "Specifies that this element does not contribute a snap point."
				}
			],
			"status": "obsolete",
			"syntax": "none | <position>#",
			"relevance": 0,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/scroll-snap-coordinate"
				}
			],
			"description": "Defines the x and y coordinate within the element which will align with the nearest ancestor scroll container’s snap-destination for the respective axis.",
			"restrictions": [
				"position",
				"length",
				"percentage",
				"enum"
			]
		},
		{
			"name": "scroll-snap-destination",
			"browsers": [
				"FF39"
			],
			"status": "obsolete",
			"syntax": "<position>",
			"relevance": 0,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/scroll-snap-destination"
				}
			],
			"description": "Define the x and y coordinate within the scroll container’s visual viewport which element snap points will align with.",
			"restrictions": [
				"position",
				"length",
				"percentage"
			]
		},
		{
			"name": "scroll-snap-points-x",
			"browsers": [
				"FF39",
				"S9"
			],
			"values": [
				{
					"name": "none",
					"description": "No snap points are defined by this scroll container."
				},
				{
					"name": "repeat()",
					"description": "Defines an interval at which snap points are defined, starting from the container’s relevant start edge."
				}
			],
			"status": "obsolete",
			"syntax": "none | repeat( <length-percentage> )",
			"relevance": 0,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/scroll-snap-points-x"
				}
			],
			"description": "Defines the positioning of snap points along the x axis of the scroll container it is applied to.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "scroll-snap-points-y",
			"browsers": [
				"FF39",
				"S9"
			],
			"values": [
				{
					"name": "none",
					"description": "No snap points are defined by this scroll container."
				},
				{
					"name": "repeat()",
					"description": "Defines an interval at which snap points are defined, starting from the container’s relevant start edge."
				}
			],
			"status": "obsolete",
			"syntax": "none | repeat( <length-percentage> )",
			"relevance": 0,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/scroll-snap-points-y"
				}
			],
			"description": "Defines the positioning of snap points along the y axis of the scroll container it is applied to.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "scroll-snap-type",
			"values": [
				{
					"name": "none",
					"description": "The visual viewport of this scroll container must ignore snap points, if any, when scrolled."
				},
				{
					"name": "mandatory",
					"description": "The visual viewport of this scroll container is guaranteed to rest on a snap point when there are no active scrolling operations."
				},
				{
					"name": "proximity",
					"description": "The visual viewport of this scroll container may come to rest on a snap point at the termination of a scroll at the discretion of the UA given the parameters of the scroll."
				}
			],
			"syntax": "none | [ x | y | block | inline | both ] [ mandatory | proximity ]?",
			"relevance": 52,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type"
				}
			],
			"description": "Defines how strictly snap points are enforced on the scroll container.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "shape-image-threshold",
			"browsers": [
				"E79",
				"FF62",
				"S10.1",
				"C37",
				"O24"
			],
			"syntax": "<alpha-value>",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/shape-image-threshold"
				}
			],
			"description": "Defines the alpha channel threshold used to extract the shape using an image. A value of 0.5 means that the shape will enclose all the pixels that are more than 50% opaque.",
			"restrictions": [
				"number"
			]
		},
		{
			"name": "shape-margin",
			"browsers": [
				"E79",
				"FF62",
				"S10.1",
				"C37",
				"O24"
			],
			"syntax": "<length-percentage>",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/shape-margin"
				}
			],
			"description": "Adds a margin to a 'shape-outside'. This defines a new shape that is the smallest contour that includes all the points that are the 'shape-margin' distance outward in the perpendicular direction from a point on the underlying shape.",
			"restrictions": [
				"url",
				"length",
				"percentage"
			]
		},
		{
			"name": "shape-outside",
			"browsers": [
				"E79",
				"FF62",
				"S10.1",
				"C37",
				"O24"
			],
			"values": [
				{
					"name": "margin-box",
					"description": "The background is painted within (clipped to) the margin box."
				},
				{
					"name": "none",
					"description": "The float area is unaffected."
				}
			],
			"syntax": "none | [ <shape-box> || <basic-shape> ] | <image>",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/shape-outside"
				}
			],
			"description": "Specifies an orthogonal rotation to be applied to an image before it is laid out.",
			"restrictions": [
				"image",
				"box",
				"shape",
				"enum"
			]
		},
		{
			"name": "shape-rendering",
			"values": [
				{
					"name": "auto",
					"description": "Suppresses aural rendering."
				},
				{
					"name": "crispEdges",
					"description": "Emphasize the contrast between clean edges of artwork over rendering speed and geometric precision."
				},
				{
					"name": "geometricPrecision",
					"description": "Emphasize geometric precision over speed and crisp edges."
				},
				{
					"name": "optimizeSpeed",
					"description": "Emphasize rendering speed over geometric precision and crisp edges."
				}
			],
			"relevance": 50,
			"description": "Provides hints about what tradeoffs to make as it renders vector graphics elements such as <path> elements and basic shapes such as circles and rectangles.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "size",
			"browsers": [
				"C",
				"O8"
			],
			"syntax": "<length>{1,2} | auto | [ <page-size> || [ portrait | landscape ] ]",
			"relevance": 53,
			"description": "The size CSS at-rule descriptor, used with the @page at-rule, defines the size and orientation of the box which is used to represent a page. Most of the time, this size corresponds to the target size of the printed page if applicable.",
			"restrictions": [
				"length"
			]
		},
		{
			"name": "src",
			"values": [
				{
					"name": "url()",
					"description": "Reference font by URL"
				},
				{
					"name": "format()",
					"description": "Optional hint describing the format of the font resource."
				},
				{
					"name": "local()",
					"description": "Format-specific string that identifies a locally available copy of a given font."
				}
			],
			"syntax": "[ <url> [ format( <string># ) ]? | local( <family-name> ) ]#",
			"relevance": 87,
			"description": "@font-face descriptor. Specifies the resource containing font data. It is required, whether the font is downloadable or locally installed.",
			"restrictions": [
				"enum",
				"url",
				"identifier"
			]
		},
		{
			"name": "stop-color",
			"relevance": 51,
			"description": "Indicates what color to use at that gradient stop.",
			"restrictions": [
				"color"
			]
		},
		{
			"name": "stop-opacity",
			"relevance": 50,
			"description": "Defines the opacity of a given gradient stop.",
			"restrictions": [
				"number(0-1)"
			]
		},
		{
			"name": "stroke",
			"values": [
				{
					"name": "url()",
					"description": "A URL reference to a paint server element, which is an element that defines a paint server: ‘hatch’, ‘linearGradient’, ‘mesh’, ‘pattern’, ‘radialGradient’ and ‘solidcolor’."
				},
				{
					"name": "none",
					"description": "No paint is applied in this layer."
				}
			],
			"relevance": 64,
			"description": "Paints along the outline of the given graphical element.",
			"restrictions": [
				"color",
				"enum",
				"url"
			]
		},
		{
			"name": "stroke-dasharray",
			"values": [
				{
					"name": "none",
					"description": "Indicates that no dashing is used."
				}
			],
			"relevance": 58,
			"description": "Controls the pattern of dashes and gaps used to stroke paths.",
			"restrictions": [
				"length",
				"percentage",
				"number",
				"enum"
			]
		},
		{
			"name": "stroke-dashoffset",
			"relevance": 58,
			"description": "Specifies the distance into the dash pattern to start the dash.",
			"restrictions": [
				"percentage",
				"length"
			]
		},
		{
			"name": "stroke-linecap",
			"values": [
				{
					"name": "butt",
					"description": "Indicates that the stroke for each subpath does not extend beyond its two endpoints."
				},
				{
					"name": "round",
					"description": "Indicates that at each end of each subpath, the shape representing the stroke will be extended by a half circle with a radius equal to the stroke width."
				},
				{
					"name": "square",
					"description": "Indicates that at the end of each subpath, the shape representing the stroke will be extended by a rectangle with the same width as the stroke width and whose length is half of the stroke width."
				}
			],
			"relevance": 53,
			"description": "Specifies the shape to be used at the end of open subpaths when they are stroked.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "stroke-linejoin",
			"values": [
				{
					"name": "bevel",
					"description": "Indicates that a bevelled corner is to be used to join path segments."
				},
				{
					"name": "miter",
					"description": "Indicates that a sharp corner is to be used to join path segments."
				},
				{
					"name": "round",
					"description": "Indicates that a round corner is to be used to join path segments."
				}
			],
			"relevance": 50,
			"description": "Specifies the shape to be used at the corners of paths or basic shapes when they are stroked.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "stroke-miterlimit",
			"relevance": 50,
			"description": "When two line segments meet at a sharp angle and miter joins have been specified for 'stroke-linejoin', it is possible for the miter to extend far beyond the thickness of the line stroking the path.",
			"restrictions": [
				"number"
			]
		},
		{
			"name": "stroke-opacity",
			"relevance": 52,
			"description": "Specifies the opacity of the painting operation used to stroke the current object.",
			"restrictions": [
				"number(0-1)"
			]
		},
		{
			"name": "stroke-width",
			"relevance": 61,
			"description": "Specifies the width of the stroke on the current object.",
			"restrictions": [
				"percentage",
				"length"
			]
		},
		{
			"name": "suffix",
			"browsers": [
				"FF33"
			],
			"syntax": "<symbol>",
			"relevance": 50,
			"description": "@counter-style descriptor. Specifies a <symbol> that is appended to the marker representation.",
			"restrictions": [
				"image",
				"string",
				"identifier"
			]
		},
		{
			"name": "system",
			"browsers": [
				"FF33"
			],
			"values": [
				{
					"name": "additive",
					"description": "Represents “sign-value” numbering systems, which, rather than using reusing digits in different positions to change their value, define additional digits with much larger values, so that the value of the number can be obtained by adding all the digits together."
				},
				{
					"name": "alphabetic",
					"description": "Interprets the list of counter symbols as digits to an alphabetic numbering system, similar to the default lower-alpha counter style, which wraps from \"a\", \"b\", \"c\", to \"aa\", \"ab\", \"ac\"."
				},
				{
					"name": "cyclic",
					"description": "Cycles repeatedly through its provided symbols, looping back to the beginning when it reaches the end of the list."
				},
				{
					"name": "extends",
					"description": "Use the algorithm of another counter style, but alter other aspects."
				},
				{
					"name": "fixed",
					"description": "Runs through its list of counter symbols once, then falls back."
				},
				{
					"name": "numeric",
					"description": "interprets the list of counter symbols as digits to a \"place-value\" numbering system, similar to the default 'decimal' counter style."
				},
				{
					"name": "symbolic",
					"description": "Cycles repeatedly through its provided symbols, doubling, tripling, etc. the symbols on each successive pass through the list."
				}
			],
			"syntax": "cyclic | numeric | alphabetic | symbolic | additive | [ fixed <integer>? ] | [ extends <counter-style-name> ]",
			"relevance": 50,
			"description": "@counter-style descriptor. Specifies which algorithm will be used to construct the counter’s representation based on the counter value.",
			"restrictions": [
				"enum",
				"integer"
			]
		},
		{
			"name": "symbols",
			"browsers": [
				"FF33"
			],
			"syntax": "<symbol>+",
			"relevance": 50,
			"description": "@counter-style descriptor. Specifies the symbols used by the marker-construction algorithm specified by the system descriptor.",
			"restrictions": [
				"image",
				"string",
				"identifier"
			]
		},
		{
			"name": "table-layout",
			"values": [
				{
					"name": "auto",
					"description": "Use any automatic table layout algorithm."
				},
				{
					"name": "fixed",
					"description": "Use the fixed table layout algorithm."
				}
			],
			"syntax": "auto | fixed",
			"relevance": 60,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/table-layout"
				}
			],
			"description": "Controls the algorithm used to lay out the table cells, rows, and columns.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "tab-size",
			"browsers": [
				"E79",
				"FF91",
				"S7",
				"C21",
				"O15"
			],
			"syntax": "<integer> | <length>",
			"relevance": 51,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/tab-size"
				}
			],
			"description": "Determines the width of the tab character (U+0009), in space characters (U+0020), when rendered.",
			"restrictions": [
				"integer",
				"length"
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
			"name": "text-align-last",
			"browsers": [
				"E12",
				"FF49",
				"C47",
				"IE5.5",
				"O34"
			],
			"values": [
				{
					"name": "auto",
					"description": "Content on the affected line is aligned per 'text-align' unless 'text-align' is set to 'justify', in which case it is 'start-aligned'."
				},
				{
					"name": "center",
					"description": "The inline contents are centered within the line box."
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
				}
			],
			"syntax": "auto | start | end | left | right | center | justify",
			"relevance": 51,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/text-align-last"
				}
			],
			"description": "Describes how the last line of a block or a line right before a forced line break is aligned when 'text-align' is set to 'justify'.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "text-anchor",
			"values": [
				{
					"name": "end",
					"description": "The rendered characters are aligned such that the end of the resulting rendered text is at the initial current text position."
				},
				{
					"name": "middle",
					"description": "The rendered characters are aligned such that the geometric middle of the resulting rendered text is at the initial current text position."
				},
				{
					"name": "start",
					"description": "The rendered characters are aligned such that the start of the resulting rendered text is at the initial current text position."
				}
			],
			"relevance": 50,
			"description": "Used to align (start-, middle- or end-alignment) a string of text relative to a given point.",
			"restrictions": [
				"enum"
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
			"name": "text-decoration-color",
			"browsers": [
				"E79",
				"FF36",
				"S12.1",
				"C57",
				"O44"
			],
			"syntax": "<color>",
			"relevance": 52,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/text-decoration-color"
				}
			],
			"description": "Specifies the color of text decoration (underlines overlines, and line-throughs) set on the element with text-decoration-line.",
			"restrictions": [
				"color"
			]
		},
		{
			"name": "text-decoration-line",
			"browsers": [
				"E79",
				"FF36",
				"S12.1",
				"C57",
				"O44"
			],
			"values": [
				{
					"name": "line-through",
					"description": "Each line of text has a line through the middle."
				},
				{
					"name": "none",
					"description": "Neither produces nor inhibits text decoration."
				},
				{
					"name": "overline",
					"description": "Each line of text has a line above it."
				},
				{
					"name": "underline",
					"description": "Each line of text is underlined."
				}
			],
			"syntax": "none | [ underline || overline || line-through || blink ] | spelling-error | grammar-error",
			"relevance": 51,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/text-decoration-line"
				}
			],
			"description": "Specifies what line decorations, if any, are added to the element.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "text-decoration-style",
			"browsers": [
				"E79",
				"FF36",
				"S12.1",
				"C57",
				"O44"
			],
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
					"name": "none",
					"description": "Produces no line."
				},
				{
					"name": "solid",
					"description": "Produces a solid line."
				},
				{
					"name": "wavy",
					"description": "Produces a wavy line."
				}
			],
			"syntax": "solid | double | dotted | dashed | wavy",
			"relevance": 51,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/text-decoration-style"
				}
			],
			"description": "Specifies the line style for underline, line-through and overline text decoration.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "text-indent",
			"values": [],
			"syntax": "<length-percentage> && hanging? && each-line?",
			"relevance": 68,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/text-indent"
				}
			],
			"description": "Specifies the indentation applied to lines of inline content in a block. The indentation only affects the first line of inline content in the block unless the 'hanging' keyword is specified, in which case it affects all lines except the first.",
			"restrictions": [
				"percentage",
				"length"
			]
		},
		{
			"name": "text-justify",
			"browsers": [
				"E12",
				"FF55",
				"C32",
				"IE11",
				"O19"
			],
			"values": [
				{
					"name": "auto",
					"description": "The UA determines the justification algorithm to follow, based on a balance between performance and adequate presentation quality."
				},
				{
					"name": "distribute",
					"description": "Justification primarily changes spacing both at word separators and at grapheme cluster boundaries in all scripts except those in the connected and cursive groups. This value is sometimes used in e.g. Japanese, often with the 'text-align-last' property."
				},
				{
					"name": "distribute-all-lines"
				},
				{
					"name": "inter-cluster",
					"description": "Justification primarily changes spacing at word separators and at grapheme cluster boundaries in clustered scripts. This value is typically used for Southeast Asian scripts such as Thai."
				},
				{
					"name": "inter-ideograph",
					"description": "Justification primarily changes spacing at word separators and at inter-graphemic boundaries in scripts that use no word spaces. This value is typically used for CJK languages."
				},
				{
					"name": "inter-word",
					"description": "Justification primarily changes spacing at word separators. This value is typically used for languages that separate words using spaces, like English or (sometimes) Korean."
				},
				{
					"name": "kashida",
					"description": "Justification primarily stretches Arabic and related scripts through the use of kashida or other calligraphic elongation."
				},
				{
					"name": "newspaper"
				}
			],
			"syntax": "auto | inter-character | inter-word | none",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/text-justify"
				}
			],
			"description": "Selects the justification algorithm used when 'text-align' is set to 'justify'. The property applies to block containers, but the UA may (but is not required to) also support it on inline elements.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "text-orientation",
			"browsers": [
				"E79",
				"FF41",
				"S14",
				"C48",
				"O35"
			],
			"values": [
				{
					"name": "sideways",
					"browsers": [
						"E79",
						"FF41",
						"S14",
						"C48",
						"O35"
					],
					"description": "This value is equivalent to 'sideways-right' in 'vertical-rl' writing mode and equivalent to 'sideways-left' in 'vertical-lr' writing mode."
				},
				{
					"name": "sideways-right",
					"browsers": [
						"E79",
						"FF41",
						"S14",
						"C48",
						"O35"
					],
					"description": "In vertical writing modes, this causes text to be set as if in a horizontal layout, but rotated 90° clockwise."
				},
				{
					"name": "upright",
					"description": "In vertical writing modes, characters from horizontal-only scripts are rendered upright, i.e. in their standard horizontal orientation."
				}
			],
			"syntax": "mixed | upright | sideways",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/text-orientation"
				}
			],
			"description": "Specifies the orientation of text within a line.",
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
			"name": "text-rendering",
			"browsers": [
				"E79",
				"FF1",
				"S5",
				"C4",
				"O15"
			],
			"values": [
				{
					"name": "auto"
				},
				{
					"name": "geometricPrecision",
					"description": "Indicates that the user agent shall emphasize geometric precision over legibility and rendering speed."
				},
				{
					"name": "optimizeLegibility",
					"description": "Indicates that the user agent shall emphasize legibility over rendering speed and geometric precision."
				},
				{
					"name": "optimizeSpeed",
					"description": "Indicates that the user agent shall emphasize rendering speed over legibility and geometric precision."
				}
			],
			"syntax": "auto | optimizeSpeed | optimizeLegibility | geometricPrecision",
			"relevance": 68,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/text-rendering"
				}
			],
			"description": "The creator of SVG content might want to provide a hint to the implementation about what tradeoffs to make as it renders text. The ‘text-rendering’ property provides these hints.",
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
			"name": "text-underline-position",
			"values": [
				{
					"name": "above"
				},
				{
					"name": "auto",
					"description": "The user agent may use any algorithm to determine the underline’s position. In horizontal line layout, the underline should be aligned as for alphabetic. In vertical line layout, if the language is set to Japanese or Korean, the underline should be aligned as for over."
				},
				{
					"name": "below",
					"description": "The underline is aligned with the under edge of the element’s content box."
				}
			],
			"syntax": "auto | from-font | [ under || [ left | right ] ]",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/text-underline-position"
				}
			],
			"description": "Sets the position of an underline specified on the same element: it does not affect underlines specified by ancestor elements. This property is typically used in vertical writing contexts such as in Japanese documents where it often desired to have the underline appear 'over' (to the right of) the affected run of text",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "top",
			"values": [
				{
					"name": "auto",
					"description": "For non-replaced elements, the effect of this value depends on which of related properties have the value 'auto' as well"
				}
			],
			"syntax": "<length> | <percentage> | auto",
			"relevance": 95,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/top"
				}
			],
			"description": "Specifies how far an absolutely positioned box's top margin edge is offset below the top edge of the box's 'containing block'.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			"name": "touch-action",
			"values": [
				{
					"name": "auto",
					"description": "The user agent may determine any permitted touch behaviors for touches that begin on the element."
				},
				{
					"name": "cross-slide-x"
				},
				{
					"name": "cross-slide-y"
				},
				{
					"name": "double-tap-zoom"
				},
				{
					"name": "manipulation",
					"description": "The user agent may consider touches that begin on the element only for the purposes of scrolling and continuous zooming."
				},
				{
					"name": "none",
					"description": "Touches that begin on the element must not trigger default touch behaviors."
				},
				{
					"name": "pan-x",
					"description": "The user agent may consider touches that begin on the element only for the purposes of horizontally scrolling the element’s nearest ancestor with horizontally scrollable content."
				},
				{
					"name": "pan-y",
					"description": "The user agent may consider touches that begin on the element only for the purposes of vertically scrolling the element’s nearest ancestor with vertically scrollable content."
				},
				{
					"name": "pinch-zoom"
				}
			],
			"syntax": "auto | none | [ [ pan-x | pan-left | pan-right ] || [ pan-y | pan-up | pan-down ] || pinch-zoom ] | manipulation",
			"relevance": 68,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/touch-action"
				}
			],
			"description": "Determines whether touch input may trigger default behavior supplied by user agent.",
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
			"name": "transform-style",
			"browsers": [
				"E12",
				"FF16",
				"S9",
				"C36",
				"O23"
			],
			"values": [
				{
					"name": "flat",
					"description": "All children of this element are rendered flattened into the 2D plane of the element."
				},
				{
					"name": "preserve-3d",
					"browsers": [
						"E12",
						"FF16",
						"S9",
						"C36",
						"O23"
					],
					"description": "Flattening is not performed, so children maintain their position in 3D space."
				}
			],
			"syntax": "flat | preserve-3d",
			"relevance": 55,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/transform-style"
				}
			],
			"description": "Defines how nested elements are rendered in 3D space.",
			"restrictions": [
				"enum"
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
			"name": "unicode-bidi",
			"values": [
				{
					"name": "bidi-override",
					"description": "Inside the element, reordering is strictly in sequence according to the 'direction' property; the implicit part of the bidirectional algorithm is ignored."
				},
				{
					"name": "embed",
					"description": "If the element is inline-level, this value opens an additional level of embedding with respect to the bidirectional algorithm. The direction of this embedding level is given by the 'direction' property."
				},
				{
					"name": "isolate",
					"description": "The contents of the element are considered to be inside a separate, independent paragraph."
				},
				{
					"name": "isolate-override",
					"description": "This combines the isolation behavior of 'isolate' with the directional override behavior of 'bidi-override'"
				},
				{
					"name": "normal",
					"description": "The element does not open an additional level of embedding with respect to the bidirectional algorithm. For inline-level elements, implicit reordering works across element boundaries."
				},
				{
					"name": "plaintext",
					"description": "For the purposes of the Unicode bidirectional algorithm, the base directionality of each bidi paragraph for which the element forms the containing block is determined not by the element's computed 'direction'."
				}
			],
			"syntax": "normal | embed | isolate | bidi-override | isolate-override | plaintext",
			"relevance": 57,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/unicode-bidi"
				}
			],
			"description": "The level of embedding with respect to the bidirectional algorithm.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "unicode-range",
			"values": [
				{
					"name": "U+26",
					"description": "Ampersand."
				},
				{
					"name": "U+20-24F, U+2B0-2FF, U+370-4FF, U+1E00-1EFF, U+2000-20CF, U+2100-23FF, U+2500-26FF, U+E000-F8FF, U+FB00–FB4F",
					"description": "WGL4 character set (Pan-European)."
				},
				{
					"name": "U+20-17F, U+2B0-2FF, U+2000-206F, U+20A0-20CF, U+2100-21FF, U+2600-26FF",
					"description": "The Multilingual European Subset No. 1. Latin. Covers ~44 languages."
				},
				{
					"name": "U+20-2FF, U+370-4FF, U+1E00-20CF, U+2100-23FF, U+2500-26FF, U+FB00-FB4F, U+FFF0-FFFD",
					"description": "The Multilingual European Subset No. 2. Latin, Greek, and Cyrillic. Covers ~128 language."
				},
				{
					"name": "U+20-4FF, U+530-58F, U+10D0-10FF, U+1E00-23FF, U+2440-245F, U+2500-26FF, U+FB00-FB4F, U+FE20-FE2F, U+FFF0-FFFD",
					"description": "The Multilingual European Subset No. 3. Covers all characters belonging to European scripts."
				},
				{
					"name": "U+00-7F",
					"description": "Basic Latin (ASCII)."
				},
				{
					"name": "U+80-FF",
					"description": "Latin-1 Supplement. Accented characters for Western European languages, common punctuation characters, multiplication and division signs."
				},
				{
					"name": "U+100-17F",
					"description": "Latin Extended-A. Accented characters for for Czech, Dutch, Polish, and Turkish."
				},
				{
					"name": "U+180-24F",
					"description": "Latin Extended-B. Croatian, Slovenian, Romanian, Non-European and historic latin, Khoisan, Pinyin, Livonian, Sinology."
				},
				{
					"name": "U+1E00-1EFF",
					"description": "Latin Extended Additional. Vietnamese, German captial sharp s, Medievalist, Latin general use."
				},
				{
					"name": "U+250-2AF",
					"description": "International Phonetic Alphabet Extensions."
				},
				{
					"name": "U+370-3FF",
					"description": "Greek and Coptic."
				},
				{
					"name": "U+1F00-1FFF",
					"description": "Greek Extended. Accented characters for polytonic Greek."
				},
				{
					"name": "U+400-4FF",
					"description": "Cyrillic."
				},
				{
					"name": "U+500-52F",
					"description": "Cyrillic Supplement. Extra letters for Komi, Khanty, Chukchi, Mordvin, Kurdish, Aleut, Chuvash, Abkhaz, Azerbaijani, and Orok."
				},
				{
					"name": "U+00-52F, U+1E00-1FFF, U+2200–22FF",
					"description": "Latin, Greek, Cyrillic, some punctuation and symbols."
				},
				{
					"name": "U+530–58F",
					"description": "Armenian."
				},
				{
					"name": "U+590–5FF",
					"description": "Hebrew."
				},
				{
					"name": "U+600–6FF",
					"description": "Arabic."
				},
				{
					"name": "U+750–77F",
					"description": "Arabic Supplement. Additional letters for African languages, Khowar, Torwali, Burushaski, and early Persian."
				},
				{
					"name": "U+8A0–8FF",
					"description": "Arabic Extended-A. Additional letters for African languages, European and Central Asian languages, Rohingya, Tamazight, Arwi, and Koranic annotation signs."
				},
				{
					"name": "U+700–74F",
					"description": "Syriac."
				},
				{
					"name": "U+900–97F",
					"description": "Devanagari."
				},
				{
					"name": "U+980–9FF",
					"description": "Bengali."
				},
				{
					"name": "U+A00–A7F",
					"description": "Gurmukhi."
				},
				{
					"name": "U+A80–AFF",
					"description": "Gujarati."
				},
				{
					"name": "U+B00–B7F",
					"description": "Oriya."
				},
				{
					"name": "U+B80–BFF",
					"description": "Tamil."
				},
				{
					"name": "U+C00–C7F",
					"description": "Telugu."
				},
				{
					"name": "U+C80–CFF",
					"description": "Kannada."
				},
				{
					"name": "U+D00–D7F",
					"description": "Malayalam."
				},
				{
					"name": "U+D80–DFF",
					"description": "Sinhala."
				},
				{
					"name": "U+118A0–118FF",
					"description": "Warang Citi."
				},
				{
					"name": "U+E00–E7F",
					"description": "Thai."
				},
				{
					"name": "U+1A20–1AAF",
					"description": "Tai Tham."
				},
				{
					"name": "U+AA80–AADF",
					"description": "Tai Viet."
				},
				{
					"name": "U+E80–EFF",
					"description": "Lao."
				},
				{
					"name": "U+F00–FFF",
					"description": "Tibetan."
				},
				{
					"name": "U+1000–109F",
					"description": "Myanmar (Burmese)."
				},
				{
					"name": "U+10A0–10FF",
					"description": "Georgian."
				},
				{
					"name": "U+1200–137F",
					"description": "Ethiopic."
				},
				{
					"name": "U+1380–139F",
					"description": "Ethiopic Supplement. Extra Syllables for Sebatbeit, and Tonal marks"
				},
				{
					"name": "U+2D80–2DDF",
					"description": "Ethiopic Extended. Extra Syllables for Me'en, Blin, and Sebatbeit."
				},
				{
					"name": "U+AB00–AB2F",
					"description": "Ethiopic Extended-A. Extra characters for Gamo-Gofa-Dawro, Basketo, and Gumuz."
				},
				{
					"name": "U+1780–17FF",
					"description": "Khmer."
				},
				{
					"name": "U+1800–18AF",
					"description": "Mongolian."
				},
				{
					"name": "U+1B80–1BBF",
					"description": "Sundanese."
				},
				{
					"name": "U+1CC0–1CCF",
					"description": "Sundanese Supplement. Punctuation."
				},
				{
					"name": "U+4E00–9FD5",
					"description": "CJK (Chinese, Japanese, Korean) Unified Ideographs. Most common ideographs for modern Chinese and Japanese."
				},
				{
					"name": "U+3400–4DB5",
					"description": "CJK Unified Ideographs Extension A. Rare ideographs."
				},
				{
					"name": "U+2F00–2FDF",
					"description": "Kangxi Radicals."
				},
				{
					"name": "U+2E80–2EFF",
					"description": "CJK Radicals Supplement. Alternative forms of Kangxi Radicals."
				},
				{
					"name": "U+1100–11FF",
					"description": "Hangul Jamo."
				},
				{
					"name": "U+AC00–D7AF",
					"description": "Hangul Syllables."
				},
				{
					"name": "U+3040–309F",
					"description": "Hiragana."
				},
				{
					"name": "U+30A0–30FF",
					"description": "Katakana."
				},
				{
					"name": "U+A5, U+4E00-9FFF, U+30??, U+FF00-FF9F",
					"description": "Japanese Kanji, Hiragana and Katakana characters plus Yen/Yuan symbol."
				},
				{
					"name": "U+A4D0–A4FF",
					"description": "Lisu."
				},
				{
					"name": "U+A000–A48F",
					"description": "Yi Syllables."
				},
				{
					"name": "U+A490–A4CF",
					"description": "Yi Radicals."
				},
				{
					"name": "U+2000-206F",
					"description": "General Punctuation."
				},
				{
					"name": "U+3000–303F",
					"description": "CJK Symbols and Punctuation."
				},
				{
					"name": "U+2070–209F",
					"description": "Superscripts and Subscripts."
				},
				{
					"name": "U+20A0–20CF",
					"description": "Currency Symbols."
				},
				{
					"name": "U+2100–214F",
					"description": "Letterlike Symbols."
				},
				{
					"name": "U+2150–218F",
					"description": "Number Forms."
				},
				{
					"name": "U+2190–21FF",
					"description": "Arrows."
				},
				{
					"name": "U+2200–22FF",
					"description": "Mathematical Operators."
				},
				{
					"name": "U+2300–23FF",
					"description": "Miscellaneous Technical."
				},
				{
					"name": "U+E000-F8FF",
					"description": "Private Use Area."
				},
				{
					"name": "U+FB00–FB4F",
					"description": "Alphabetic Presentation Forms. Ligatures for latin, Armenian, and Hebrew."
				},
				{
					"name": "U+FB50–FDFF",
					"description": "Arabic Presentation Forms-A. Contextual forms / ligatures for Persian, Urdu, Sindhi, Central Asian languages, etc, Arabic pedagogical symbols, word ligatures."
				},
				{
					"name": "U+1F600–1F64F",
					"description": "Emoji: Emoticons."
				},
				{
					"name": "U+2600–26FF",
					"description": "Emoji: Miscellaneous Symbols."
				},
				{
					"name": "U+1F300–1F5FF",
					"description": "Emoji: Miscellaneous Symbols and Pictographs."
				},
				{
					"name": "U+1F900–1F9FF",
					"description": "Emoji: Supplemental Symbols and Pictographs."
				},
				{
					"name": "U+1F680–1F6FF",
					"description": "Emoji: Transport and Map Symbols."
				}
			],
			"syntax": "<unicode-range>#",
			"relevance": 73,
			"description": "@font-face descriptor. Defines the set of Unicode codepoints that may be supported by the font face for which it is declared.",
			"restrictions": [
				"unicode-range"
			]
		},
		{
			"name": "user-select",
			"values": [
				{
					"name": "all",
					"description": "The content of the element must be selected atomically"
				},
				{
					"name": "auto"
				},
				{
					"name": "contain",
					"description": "UAs must not allow a selection which is started in this element to be extended outside of this element."
				},
				{
					"name": "none",
					"description": "The UA must not allow selections to be started in this element."
				},
				{
					"name": "text",
					"description": "The element imposes no constraint on the selection."
				}
			],
			"syntax": "auto | text | none | contain | all",
			"relevance": 78,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/user-select"
				}
			],
			"description": "Controls the appearance of selection.",
			"restrictions": [
				"enum"
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
			"name": "widows",
			"browsers": [
				"E12",
				"S1.3",
				"C25",
				"IE8",
				"O9.2"
			],
			"syntax": "<integer>",
			"relevance": 51,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/widows"
				}
			],
			"description": "Specifies the minimum number of line boxes of a block container that must be left in a fragment after a break.",
			"restrictions": [
				"integer"
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
			"name": "will-change",
			"browsers": [
				"E79",
				"FF36",
				"S9.1",
				"C36",
				"O24"
			],
			"values": [
				{
					"name": "auto",
					"description": "Expresses no particular intent."
				},
				{
					"name": "contents",
					"description": "Indicates that the author expects to animate or change something about the element’s contents in the near future."
				},
				{
					"name": "scroll-position",
					"description": "Indicates that the author expects to animate or change the scroll position of the element in the near future."
				}
			],
			"syntax": "auto | <animateable-feature>#",
			"relevance": 64,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/will-change"
				}
			],
			"description": "Provides a rendering hint to the user agent, stating what kinds of changes the author expects to perform on the element.",
			"restrictions": [
				"enum",
				"identifier"
			]
		},
		{
			"name": "word-break",
			"values": [
				{
					"name": "break-all",
					"description": "Lines may break between any two grapheme clusters for non-CJK scripts."
				},
				{
					"name": "keep-all",
					"description": "Block characters can no longer create implied break points."
				},
				{
					"name": "normal",
					"description": "Breaks non-CJK scripts according to their own rules."
				}
			],
			"syntax": "normal | break-all | keep-all | break-word",
			"relevance": 75,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/word-break"
				}
			],
			"description": "Specifies line break opportunities for non-CJK scripts.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "word-spacing",
			"values": [
				{
					"name": "normal",
					"description": "No additional spacing is applied. Computes to zero."
				}
			],
			"syntax": "normal | <length>",
			"relevance": 57,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/word-spacing"
				}
			],
			"description": "Specifies additional spacing between “words”.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			"name": "word-wrap",
			"values": [
				{
					"name": "break-word",
					"description": "An otherwise unbreakable sequence of characters may be broken at an arbitrary point if there are no otherwise-acceptable break points in the line."
				},
				{
					"name": "normal",
					"description": "Lines may break only at allowed break points."
				}
			],
			"syntax": "normal | break-word",
			"relevance": 78,
			"description": "Specifies whether the UA may break within a word to prevent overflow when an otherwise-unbreakable string is too long to fit.",
			"restrictions": [
				"enum"
			]
		},
		{
			"name": "writing-mode",
			"values": [
				{
					"name": "horizontal-tb",
					"description": "Top-to-bottom block flow direction. The writing mode is horizontal."
				},
				{
					"name": "sideways-lr",
					"description": "Left-to-right block flow direction. The writing mode is vertical, while the typographic mode is horizontal."
				},
				{
					"name": "sideways-rl",
					"description": "Right-to-left block flow direction. The writing mode is vertical, while the typographic mode is horizontal."
				},
				{
					"name": "vertical-lr",
					"description": "Left-to-right block flow direction. The writing mode is vertical."
				},
				{
					"name": "vertical-rl",
					"description": "Right-to-left block flow direction. The writing mode is vertical."
				}
			],
			"syntax": "horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/writing-mode"
				}
			],
			"description": "This is a shorthand property for both 'direction' and 'block-progression'.",
			"restrictions": [
				"enum"
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
		},
		{
			"name": "zoom",
			"browsers": [
				"E12",
				"S3.1",
				"C1",
				"IE5.5",
				"O15"
			],
			"values": [
				{
					"name": "normal"
				}
			],
			"syntax": "auto | <number> | <percentage>",
			"relevance": 68,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/zoom"
				}
			],
			"description": "Non-standard. Specifies the magnification scale of the object. See 'transform: scale()' for a standards-based alternative.",
			"restrictions": [
				"enum",
				"integer",
				"number",
				"percentage"
			]
		},
		{
			"name": "accent-color",
			"syntax": "auto | <color>",
			"relevance": 50,
			"browsers": [
				"E93",
				"FF92",
				"Spreview",
				"C93",
				"O79"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/accent-color"
				}
			],
			"description": "Sets the color of the elements accent"
		},
		{
			"name": "align-tracks",
			"status": "experimental",
			"syntax": "[ normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position> ]#",
			"relevance": 50,
			"browsers": [
				"FF77"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/align-tracks"
				}
			],
			"description": "The align-tracks CSS property sets the alignment in the masonry axis for grid containers that have masonry in their block axis."
		},
		{
			"name": "appearance",
			"status": "experimental",
			"syntax": "none | auto | textfield | menulist-button | <compat-auto>",
			"relevance": 62,
			"browsers": [
				"E84",
				"FF80",
				"Spreview",
				"C84",
				"O70"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/appearance"
				}
			],
			"description": "Changes the appearance of buttons and other controls to resemble native controls."
		},
		{
			"name": "aspect-ratio",
			"status": "experimental",
			"syntax": "auto | <ratio>",
			"relevance": 53,
			"browsers": [
				"E88",
				"FF89",
				"S15",
				"C88",
				"O74"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/aspect-ratio"
				}
			],
			"description": "The aspect-ratio   CSS property sets a preferred aspect ratio for the box, which will be used in the calculation of auto sizes and some other layout functions."
		},
		{
			"name": "azimuth",
			"status": "obsolete",
			"syntax": "<angle> | [ [ left-side | far-left | left | center-left | center | center-right | right | far-right | right-side ] || behind ] | leftwards | rightwards",
			"relevance": 0,
			"description": "In combination with elevation, the azimuth CSS property enables different audio sources to be positioned spatially for aural presentation. This is important in that it provides a natural way to tell several voices apart, as each can be positioned to originate at a different location on the sound stage. Stereo output produce a lateral sound stage, while binaural headphones and multi-speaker setups allow for a fully three-dimensional stage."
		},
		{
			"name": "backdrop-filter",
			"syntax": "none | <filter-function-list>",
			"relevance": 53,
			"browsers": [
				"E17",
				"FF70",
				"S9",
				"C76",
				"O63"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/backdrop-filter"
				}
			],
			"description": "The backdrop-filter CSS property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything behind the element, to see the effect you must make the element or its background at least partially transparent."
		},
		{
			"name": "border-block",
			"syntax": "<'border-top-width'> || <'border-top-style'> || <color>",
			"relevance": 50,
			"browsers": [
				"E87",
				"FF66",
				"S14.1",
				"C87",
				"O73"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-block"
				}
			],
			"description": "The border-block CSS property is a shorthand property for setting the individual logical block border property values in a single place in the style sheet."
		},
		{
			"name": "border-block-color",
			"syntax": "<'border-top-color'>{1,2}",
			"relevance": 50,
			"browsers": [
				"E87",
				"FF66",
				"S14.1",
				"C87",
				"O73"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-block-color"
				}
			],
			"description": "The border-block-color CSS property defines the color of the logical block borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-color and border-bottom-color, or border-right-color and border-left-color property depending on the values defined for writing-mode, direction, and text-orientation."
		},
		{
			"name": "border-block-style",
			"syntax": "<'border-top-style'>",
			"relevance": 50,
			"browsers": [
				"E87",
				"FF66",
				"S14.1",
				"C87",
				"O73"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-block-style"
				}
			],
			"description": "The border-block-style CSS property defines the style of the logical block borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-style and border-bottom-style, or border-left-style and border-right-style properties depending on the values defined for writing-mode, direction, and text-orientation."
		},
		{
			"name": "border-block-width",
			"syntax": "<'border-top-width'>",
			"relevance": 50,
			"browsers": [
				"E87",
				"FF66",
				"S14.1",
				"C87",
				"O73"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-block-width"
				}
			],
			"description": "The border-block-width CSS property defines the width of the logical block borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-width and border-bottom-width, or border-left-width, and border-right-width property depending on the values defined for writing-mode, direction, and text-orientation."
		},
		{
			"name": "border-end-end-radius",
			"syntax": "<length-percentage>{1,2}",
			"relevance": 50,
			"browsers": [
				"E89",
				"FF66",
				"S15",
				"C89",
				"O75"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-end-end-radius"
				}
			],
			"description": "The border-end-end-radius CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on on the element's writing-mode, direction, and text-orientation."
		},
		{
			"name": "border-end-start-radius",
			"syntax": "<length-percentage>{1,2}",
			"relevance": 50,
			"browsers": [
				"E89",
				"FF66",
				"S15",
				"C89",
				"O75"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-end-start-radius"
				}
			],
			"description": "The border-end-start-radius CSS property defines a logical border radius on an element, which maps to a physical border radius depending on the element's writing-mode, direction, and text-orientation."
		},
		{
			"name": "border-inline",
			"syntax": "<'border-top-width'> || <'border-top-style'> || <color>",
			"relevance": 50,
			"browsers": [
				"E87",
				"FF66",
				"S14.1",
				"C87",
				"O73"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-inline"
				}
			],
			"description": "The border-inline CSS property is a shorthand property for setting the individual logical inline border property values in a single place in the style sheet."
		},
		{
			"name": "border-inline-color",
			"syntax": "<'border-top-color'>{1,2}",
			"relevance": 50,
			"browsers": [
				"E87",
				"FF66",
				"S14.1",
				"C87",
				"O73"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-inline-color"
				}
			],
			"description": "The border-inline-color CSS property defines the color of the logical inline borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-color and border-bottom-color, or border-right-color and border-left-color property depending on the values defined for writing-mode, direction, and text-orientation."
		},
		{
			"name": "border-inline-style",
			"syntax": "<'border-top-style'>",
			"relevance": 50,
			"browsers": [
				"E87",
				"FF66",
				"S14.1",
				"C87",
				"O73"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-inline-style"
				}
			],
			"description": "The border-inline-style CSS property defines the style of the logical inline borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-style and border-bottom-style, or border-left-style and border-right-style properties depending on the values defined for writing-mode, direction, and text-orientation."
		},
		{
			"name": "border-inline-width",
			"syntax": "<'border-top-width'>",
			"relevance": 50,
			"browsers": [
				"E87",
				"FF66",
				"S14.1",
				"C87",
				"O73"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-inline-width"
				}
			],
			"description": "The border-inline-width CSS property defines the width of the logical inline borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-width and border-bottom-width, or border-left-width, and border-right-width property depending on the values defined for writing-mode, direction, and text-orientation."
		},
		{
			"name": "border-start-end-radius",
			"syntax": "<length-percentage>{1,2}",
			"relevance": 50,
			"browsers": [
				"E89",
				"FF66",
				"S15",
				"C89",
				"O75"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-start-end-radius"
				}
			],
			"description": "The border-start-end-radius CSS property defines a logical border radius on an element, which maps to a physical border radius depending on the element's writing-mode, direction, and text-orientation."
		},
		{
			"name": "border-start-start-radius",
			"syntax": "<length-percentage>{1,2}",
			"relevance": 50,
			"browsers": [
				"E89",
				"FF66",
				"S15",
				"C89",
				"O75"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/border-start-start-radius"
				}
			],
			"description": "The border-start-start-radius CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on the element's writing-mode, direction, and text-orientation."
		},
		{
			"name": "box-align",
			"status": "nonstandard",
			"syntax": "start | center | end | baseline | stretch",
			"relevance": 0,
			"browsers": [
				"E12",
				"FF1",
				"S3",
				"C1",
				"O15"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/box-align"
				}
			],
			"description": "The box-align CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box."
		},
		{
			"name": "box-direction",
			"status": "nonstandard",
			"syntax": "normal | reverse | inherit",
			"relevance": 0,
			"browsers": [
				"E12",
				"FF1",
				"S3",
				"C1",
				"O15"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/box-direction"
				}
			],
			"description": "The box-direction CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge)."
		},
		{
			"name": "box-flex",
			"status": "nonstandard",
			"syntax": "<number>",
			"relevance": 0,
			"browsers": [
				"E12",
				"FF1",
				"S3",
				"C1",
				"O15"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/box-flex"
				}
			],
			"description": "The -moz-box-flex and -webkit-box-flex CSS properties specify how a -moz-box or -webkit-box grows to fill the box that contains it, in the direction of the containing box's layout."
		},
		{
			"name": "box-flex-group",
			"status": "nonstandard",
			"syntax": "<integer>",
			"relevance": 0,
			"browsers": [
				"S3",
				"C1",
				"O15"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/box-flex-group"
				}
			],
			"description": "The box-flex-group CSS property assigns the flexbox's child elements to a flex group."
		},
		{
			"name": "box-lines",
			"status": "nonstandard",
			"syntax": "single | multiple",
			"relevance": 0,
			"browsers": [
				"S3",
				"C1",
				"O15"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/box-lines"
				}
			],
			"description": "The box-lines CSS property determines whether the box may have a single or multiple lines (rows for horizontally oriented boxes, columns for vertically oriented boxes)."
		},
		{
			"name": "box-ordinal-group",
			"status": "nonstandard",
			"syntax": "<integer>",
			"relevance": 0,
			"browsers": [
				"E12",
				"FF1",
				"S3",
				"C1",
				"O15"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/box-ordinal-group"
				}
			],
			"description": "The box-ordinal-group CSS property assigns the flexbox's child elements to an ordinal group."
		},
		{
			"name": "box-orient",
			"status": "nonstandard",
			"syntax": "horizontal | vertical | inline-axis | block-axis | inherit",
			"relevance": 0,
			"browsers": [
				"E12",
				"FF1",
				"S3",
				"C1",
				"O15"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/box-orient"
				}
			],
			"description": "The box-orient CSS property specifies whether an element lays out its contents horizontally or vertically."
		},
		{
			"name": "box-pack",
			"status": "nonstandard",
			"syntax": "start | center | end | justify",
			"relevance": 0,
			"browsers": [
				"E12",
				"FF1",
				"S3",
				"C1",
				"O15"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/box-pack"
				}
			],
			"description": "The -moz-box-pack and -webkit-box-pack CSS properties specify how a -moz-box or -webkit-box packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box."
		},
		{
			"name": "color-adjust",
			"syntax": "economy | exact",
			"relevance": 50,
			"browsers": [
				"E79",
				"FF48",
				"S6",
				"C49",
				"O15"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/color-adjust"
				}
			],
			"description": "The color-adjust property is a non-standard CSS extension that can be used to force printing of background colors and images in browsers based on the WebKit engine."
		},
		{
			"name": "color-scheme",
			"syntax": "normal | [ light | dark | <custom-ident> ]+ && only?",
			"relevance": 51,
			"browsers": [
				"E81",
				"FF96",
				"S13",
				"C81",
				"O68"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/color-scheme"
				}
			],
			"description": "The color-scheme CSS property allows an element to indicate which color schemes it can comfortably be rendered in."
		},
		{
			"name": "content-visibility",
			"syntax": "visible | auto | hidden",
			"relevance": 52,
			"browsers": [
				"E85",
				"C85",
				"O71"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/content-visibility"
				}
			],
			"description": "Controls whether or not an element renders its contents at all, along with forcing a strong set of containments, allowing user agents to potentially omit large swathes of layout and rendering work until it becomes needed."
		},
		{
			"name": "counter-set",
			"syntax": "[ <counter-name> <integer>? ]+ | none",
			"relevance": 50,
			"browsers": [
				"E85",
				"FF68",
				"C85",
				"O71"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/counter-set"
				}
			],
			"description": "The counter-set CSS property sets a CSS counter to a given value. It manipulates the value of existing counters, and will only create new counters if there isn't already a counter of the given name on the element."
		},
		{
			"name": "font-optical-sizing",
			"syntax": "auto | none",
			"relevance": 50,
			"browsers": [
				"E17",
				"FF62",
				"S11",
				"C79",
				"O66"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/font-optical-sizing"
				}
			],
			"description": "The font-optical-sizing CSS property allows developers to control whether browsers render text with slightly differing visual representations to optimize viewing at different sizes, or not. This only works for fonts that have an optical size variation axis."
		},
		{
			"name": "font-variation-settings",
			"syntax": "normal | [ <string> <number> ]#",
			"relevance": 50,
			"browsers": [
				"E17",
				"FF62",
				"S11",
				"C62",
				"O49"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/font-variation-settings"
				}
			],
			"description": "The font-variation-settings CSS property provides low-level control over OpenType or TrueType font variations, by specifying the four letter axis names of the features you want to vary, along with their variation values."
		},
		{
			"name": "font-smooth",
			"status": "nonstandard",
			"syntax": "auto | never | always | <absolute-size> | <length>",
			"relevance": 0,
			"browsers": [
				"E79",
				"FF25",
				"S4",
				"C5",
				"O15"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/font-smooth"
				}
			],
			"description": "The font-smooth CSS property controls the application of anti-aliasing when fonts are rendered."
		},
		{
			"name": "forced-color-adjust",
			"status": "experimental",
			"syntax": "auto | none",
			"relevance": 51,
			"browsers": [
				"E79",
				"C89",
				"IE10"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/forced-color-adjust"
				}
			],
			"description": "Allows authors to opt certain elements out of forced colors mode. This then restores the control of those values to CSS"
		},
		{
			"name": "gap",
			"syntax": "<'row-gap'> <'column-gap'>?",
			"relevance": 53,
			"browsers": [
				"E84",
				"FF63",
				"S14.1",
				"C84",
				"O70"
			],
			"description": "The gap CSS property is a shorthand property for row-gap and column-gap specifying the gutters between grid rows and columns."
		},
		{
			"name": "hanging-punctuation",
			"syntax": "none | [ first || [ force-end | allow-end ] || last ]",
			"relevance": 50,
			"browsers": [
				"S10"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/hanging-punctuation"
				}
			],
			"description": "The hanging-punctuation CSS property specifies whether a punctuation mark should hang at the start or end of a line of text. Hanging punctuation may be placed outside the line box."
		},
		{
			"name": "hyphenate-character",
			"syntax": "auto | <string>",
			"relevance": 50,
			"description": "A hyphenate character used at the end of a line."
		},
		{
			"name": "image-resolution",
			"status": "experimental",
			"syntax": "[ from-image || <resolution> ] && snap?",
			"relevance": 50,
			"description": "The image-resolution property specifies the intrinsic resolution of all raster images used in or on the element. It affects both content images (e.g. replaced elements and generated content) and decorative images (such as background-image). The intrinsic resolution of an image is used to determine the image’s intrinsic dimensions."
		},
		{
			"name": "initial-letter",
			"status": "experimental",
			"syntax": "normal | [ <number> <integer>? ]",
			"relevance": 50,
			"browsers": [
				"S9"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/initial-letter"
				}
			],
			"description": "The initial-letter CSS property specifies styling for dropped, raised, and sunken initial letters."
		},
		{
			"name": "initial-letter-align",
			"status": "experimental",
			"syntax": "[ auto | alphabetic | hanging | ideographic ]",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/initial-letter-align"
				}
			],
			"description": "The initial-letter-align CSS property specifies the alignment of initial letters within a paragraph."
		},
		{
			"name": "input-security",
			"syntax": "auto | none",
			"relevance": 50,
			"description": "Enables or disables the obscuring a sensitive test input."
		},
		{
			"name": "inset",
			"syntax": "<'top'>{1,4}",
			"relevance": 51,
			"browsers": [
				"E87",
				"FF66",
				"S14.1",
				"C87",
				"O73"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/inset"
				}
			],
			"description": "The inset CSS property defines the logical block and inline start and end offsets of an element, which map to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the top and bottom, or right and left properties depending on the values defined for writing-mode, direction, and text-orientation."
		},
		{
			"name": "inset-block",
			"syntax": "<'top'>{1,2}",
			"relevance": 50,
			"browsers": [
				"E87",
				"FF63",
				"S14.1",
				"C87",
				"O73"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/inset-block"
				}
			],
			"description": "The inset-block CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the top and bottom, or right and left properties depending on the values defined for writing-mode, direction, and text-orientation."
		},
		{
			"name": "inset-block-end",
			"syntax": "<'top'>",
			"relevance": 50,
			"browsers": [
				"E87",
				"FF63",
				"S14.1",
				"C87",
				"O73"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/inset-block-end"
				}
			],
			"description": "The inset-block-end CSS property defines the logical block end offset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the top, right, bottom, or left property depending on the values defined for writing-mode, direction, and text-orientation."
		},
		{
			"name": "inset-block-start",
			"syntax": "<'top'>",
			"relevance": 50,
			"browsers": [
				"E87",
				"FF63",
				"S14.1",
				"C87",
				"O73"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/inset-block-start"
				}
			],
			"description": "The inset-block-start CSS property defines the logical block start offset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the top, right, bottom, or left property depending on the values defined for writing-mode, direction, and text-orientation."
		},
		{
			"name": "inset-inline",
			"syntax": "<'top'>{1,2}",
			"relevance": 50,
			"browsers": [
				"E87",
				"FF63",
				"S14.1",
				"C87",
				"O73"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/inset-inline"
				}
			],
			"description": "The inset-inline CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the top and bottom, or right and left properties depending on the values defined for writing-mode, direction, and text-orientation."
		},
		{
			"name": "inset-inline-end",
			"syntax": "<'top'>",
			"relevance": 50,
			"browsers": [
				"E87",
				"FF63",
				"S14.1",
				"C87",
				"O73"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/inset-inline-end"
				}
			],
			"description": "The inset-inline-end CSS property defines the logical inline end inset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the top, right, bottom, or left property depending on the values defined for writing-mode, direction, and text-orientation."
		},
		{
			"name": "inset-inline-start",
			"syntax": "<'top'>",
			"relevance": 50,
			"browsers": [
				"E87",
				"FF63",
				"S14.1",
				"C87",
				"O73"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/inset-inline-start"
				}
			],
			"description": "The inset-inline-start CSS property defines the logical inline start inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the top, right, bottom, or left property depending on the values defined for writing-mode, direction, and text-orientation."
		},
		{
			"name": "justify-tracks",
			"status": "experimental",
			"syntax": "[ normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ] ]#",
			"relevance": 50,
			"browsers": [
				"FF77"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/justify-tracks"
				}
			],
			"description": "The justify-tracks CSS property sets the alignment in the masonry axis for grid containers that have masonry in their inline axis"
		},
		{
			"name": "line-clamp",
			"status": "experimental",
			"syntax": "none | <integer>",
			"relevance": 50,
			"description": "The line-clamp property allows limiting the contents of a block container to the specified number of lines; remaining content is fragmented away and neither rendered nor measured. Optionally, it also allows inserting content into the last line box to indicate the continuity of truncated/interrupted content."
		},
		{
			"name": "line-height-step",
			"status": "experimental",
			"syntax": "<length>",
			"relevance": 50,
			"browsers": [
				"E79",
				"C60",
				"O47"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/line-height-step"
				}
			],
			"description": "The line-height-step CSS property defines the step units for line box heights. When the step unit is positive, line box heights are rounded up to the closest multiple of the unit. Negative values are invalid."
		},
		{
			"name": "margin-block",
			"syntax": "<'margin-left'>{1,2}",
			"relevance": 50,
			"browsers": [
				"E87",
				"FF66",
				"S14.1",
				"C87",
				"O73"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/margin-block"
				}
			],
			"description": "The margin-block CSS property defines the logical block start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation."
		},
		{
			"name": "margin-inline",
			"syntax": "<'margin-left'>{1,2}",
			"relevance": 50,
			"browsers": [
				"E87",
				"FF66",
				"S14.1",
				"C87",
				"O73"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/margin-inline"
				}
			],
			"description": "The margin-inline CSS property defines the logical inline start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation."
		},
		{
			"name": "margin-trim",
			"status": "experimental",
			"syntax": "none | in-flow | all",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/margin-trim"
				}
			],
			"description": "The margin-trim property allows the container to trim the margins of its children where they adjoin the container’s edges."
		},
		{
			"name": "mask",
			"syntax": "<mask-layer>#",
			"relevance": 50,
			"browsers": [
				"E79",
				"FF2",
				"S3.1",
				"C1",
				"O15"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/mask"
				}
			],
			"description": "The mask CSS property alters the visibility of an element by either partially or fully hiding it. This is accomplished by either masking or clipping the image at specific points."
		},
		{
			"name": "mask-border",
			"syntax": "<'mask-border-source'> || <'mask-border-slice'> [ / <'mask-border-width'>? [ / <'mask-border-outset'> ]? ]? || <'mask-border-repeat'> || <'mask-border-mode'>",
			"relevance": 50,
			"browsers": [
				"E79",
				"S3.1",
				"C1",
				"O15"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/mask-border"
				}
			],
			"description": "The mask-border CSS property lets you create a mask along the edge of an element's border.\n\nThis property is a shorthand for mask-border-source, mask-border-slice, mask-border-width, mask-border-outset, mask-border-repeat, and mask-border-mode. As with all shorthand properties, any omitted sub-values will be set to their initial value."
		},
		{
			"name": "mask-border-mode",
			"syntax": "luminance | alpha",
			"relevance": 50,
			"description": "The mask-border-mode CSS property specifies the blending mode used in a mask border."
		},
		{
			"name": "mask-border-outset",
			"syntax": "[ <length> | <number> ]{1,4}",
			"relevance": 50,
			"browsers": [
				"E79",
				"S3.1",
				"C1",
				"O15"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/mask-border-outset"
				}
			],
			"description": "The mask-border-outset CSS property specifies the distance by which an element's mask border is set out from its border box."
		},
		{
			"name": "mask-border-repeat",
			"syntax": "[ stretch | repeat | round | space ]{1,2}",
			"relevance": 50,
			"browsers": [
				"E79",
				"S3.1",
				"C1",
				"O15"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/mask-border-repeat"
				}
			],
			"description": "The mask-border-repeat CSS property defines how the edge regions of a source image are adjusted to fit the dimensions of an element's mask border."
		},
		{
			"name": "mask-border-slice",
			"syntax": "<number-percentage>{1,4} fill?",
			"relevance": 50,
			"browsers": [
				"E79",
				"S3.1",
				"C1",
				"O15"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/mask-border-slice"
				}
			],
			"description": "The mask-border-slice CSS property divides the image specified by mask-border-source into regions. These regions are used to form the components of an element's mask border."
		},
		{
			"name": "mask-border-source",
			"syntax": "none | <image>",
			"relevance": 50,
			"browsers": [
				"E79",
				"S3.1",
				"C1",
				"O15"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/mask-border-source"
				}
			],
			"description": "The mask-border-source CSS property specifies the source image used to create an element's mask border.\n\nThe mask-border-slice property is used to divide the source image into regions, which are then dynamically applied to the final mask border."
		},
		{
			"name": "mask-border-width",
			"syntax": "[ <length-percentage> | <number> | auto ]{1,4}",
			"relevance": 50,
			"browsers": [
				"E79",
				"S3.1",
				"C1",
				"O15"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/mask-border-width"
				}
			],
			"description": "The mask-border-width CSS property specifies the width of an element's mask border."
		},
		{
			"name": "mask-clip",
			"syntax": "[ <geometry-box> | no-clip ]#",
			"relevance": 50,
			"browsers": [
				"E79",
				"FF53",
				"S4",
				"C1",
				"O15"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/mask-clip"
				}
			],
			"description": "The mask-clip CSS property determines the area, which is affected by a mask. The painted content of an element must be restricted to this area."
		},
		{
			"name": "mask-composite",
			"syntax": "<compositing-operator>#",
			"relevance": 50,
			"browsers": [
				"E18",
				"FF53"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/mask-composite"
				}
			],
			"description": "The mask-composite CSS property represents a compositing operation used on the current mask layer with the mask layers below it."
		},
		{
			"name": "masonry-auto-flow",
			"status": "experimental",
			"syntax": "[ pack | next ] || [ definite-first | ordered ]",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/masonry-auto-flow"
				}
			],
			"description": "The masonry-auto-flow CSS property modifies how items are placed when using masonry in CSS Grid Layout."
		},
		{
			"name": "math-style",
			"syntax": "normal | compact",
			"relevance": 50,
			"browsers": [
				"FF83",
				"S14.1",
				"C83"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/math-style"
				}
			],
			"description": "The math-style property indicates whether MathML equations should render with normal or compact height."
		},
		{
			"name": "max-lines",
			"status": "experimental",
			"syntax": "none | <integer>",
			"relevance": 50,
			"description": "The max-liens property forces a break after a set number of lines"
		},
		{
			"name": "offset",
			"syntax": "[ <'offset-position'>? [ <'offset-path'> [ <'offset-distance'> || <'offset-rotate'> ]? ]? ]! [ / <'offset-anchor'> ]?",
			"relevance": 50,
			"browsers": [
				"E79",
				"FF72",
				"C55",
				"O42"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/offset"
				}
			],
			"description": "The offset CSS property is a shorthand property for animating an element along a defined path."
		},
		{
			"name": "offset-anchor",
			"syntax": "auto | <position>",
			"relevance": 50,
			"browsers": [
				"E79",
				"FF72",
				"C79"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/offset-anchor"
				}
			],
			"description": "Defines an anchor point of the box positioned along the path. The anchor point specifies the point of the box which is to be considered as the point that is moved along the path."
		},
		{
			"name": "offset-distance",
			"syntax": "<length-percentage>",
			"relevance": 50,
			"browsers": [
				"E79",
				"FF72",
				"C55",
				"O42"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/offset-distance"
				}
			],
			"description": "The offset-distance CSS property specifies a position along an offset-path."
		},
		{
			"name": "offset-path",
			"syntax": "none | ray( [ <angle> && <size> && contain? ] ) | <path()> | <url> | [ <basic-shape> || <geometry-box> ]",
			"relevance": 50,
			"browsers": [
				"E79",
				"FF72",
				"C55",
				"O45"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/offset-path"
				}
			],
			"description": "The offset-path CSS property specifies the offset path where the element gets positioned. The exact element’s position on the offset path is determined by the offset-distance property. An offset path is either a specified path with one or multiple sub-paths or the geometry of a not-styled basic shape. Each shape or path must define an initial position for the computed value of \"0\" for offset-distance and an initial direction which specifies the rotation of the object to the initial position.\n\nIn this specification, a direction (or rotation) of 0 degrees is equivalent to the direction of the positive x-axis in the object’s local coordinate system. In other words, a rotation of 0 degree points to the right side of the UA if the object and its ancestors have no transformation applied."
		},
		{
			"name": "offset-position",
			"status": "experimental",
			"syntax": "auto | <position>",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/offset-position"
				}
			],
			"description": "Specifies the initial position of the offset path. If position is specified with static, offset-position would be ignored."
		},
		{
			"name": "offset-rotate",
			"syntax": "[ auto | reverse ] || <angle>",
			"relevance": 50,
			"browsers": [
				"E79",
				"FF72",
				"C56",
				"O43"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/offset-rotate"
				}
			],
			"description": "The offset-rotate CSS property defines the direction of the element while positioning along the offset path."
		},
		{
			"name": "overflow-anchor",
			"syntax": "auto | none",
			"relevance": 52,
			"browsers": [
				"E79",
				"FF66",
				"C56",
				"O43"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/overflow-anchor"
				}
			],
			"description": "The overflow-anchor CSS property provides a way to opt out browser scroll anchoring behavior which adjusts scroll position to minimize content shifts."
		},
		{
			"name": "overflow-block",
			"syntax": "visible | hidden | clip | scroll | auto",
			"relevance": 50,
			"browsers": [
				"FF69"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/overflow-block"
				}
			],
			"description": "The overflow-block CSS media feature can be used to test how the output device handles content that overflows the initial containing block along the block axis."
		},
		{
			"name": "overflow-clip-box",
			"status": "nonstandard",
			"syntax": "padding-box | content-box",
			"relevance": 0,
			"browsers": [
				"FF29"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Mozilla/Gecko/Chrome/CSS/overflow-clip-box"
				}
			],
			"description": "The overflow-clip-box CSS property specifies relative to which box the clipping happens when there is an overflow. It is short hand for the overflow-clip-box-inline and overflow-clip-box-block properties."
		},
		{
			"name": "overflow-clip-margin",
			"syntax": "<visual-box> || <length [0,∞]>",
			"relevance": 50,
			"browsers": [
				"E90",
				"C90",
				"O76"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/overflow-clip-margin"
				}
			],
			"description": "The overflow-clip-margin CSS property determines how far outside its bounds an element with overflow: clip may be painted before being clipped."
		},
		{
			"name": "overflow-inline",
			"syntax": "visible | hidden | clip | scroll | auto",
			"relevance": 50,
			"browsers": [
				"FF69"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/overflow-inline"
				}
			],
			"description": "The overflow-inline CSS media feature can be used to test how the output device handles content that overflows the initial containing block along the inline axis."
		},
		{
			"name": "overscroll-behavior",
			"syntax": "[ contain | none | auto ]{1,2}",
			"relevance": 50,
			"browsers": [
				"E18",
				"FF59",
				"C63",
				"O50"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior"
				}
			],
			"description": "The overscroll-behavior CSS property is shorthand for the overscroll-behavior-x and overscroll-behavior-y properties, which allow you to control the browser's scroll overflow behavior — what happens when the boundary of a scrolling area is reached."
		},
		{
			"name": "overscroll-behavior-block",
			"syntax": "contain | none | auto",
			"relevance": 50,
			"browsers": [
				"E79",
				"FF73",
				"C77",
				"O64"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-block"
				}
			],
			"description": "The overscroll-behavior-block CSS property sets the browser's behavior when the block direction boundary of a scrolling area is reached."
		},
		{
			"name": "overscroll-behavior-inline",
			"syntax": "contain | none | auto",
			"relevance": 50,
			"browsers": [
				"E79",
				"FF73",
				"C77",
				"O64"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-inline"
				}
			],
			"description": "The overscroll-behavior-inline CSS property sets the browser's behavior when the inline direction boundary of a scrolling area is reached."
		},
		{
			"name": "overscroll-behavior-x",
			"syntax": "contain | none | auto",
			"relevance": 50,
			"browsers": [
				"E18",
				"FF59",
				"C63",
				"O50"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-x"
				}
			],
			"description": "The overscroll-behavior-x CSS property is allows you to control the browser's scroll overflow behavior — what happens when the boundary of a scrolling area is reached — in the x axis direction."
		},
		{
			"name": "overscroll-behavior-y",
			"syntax": "contain | none | auto",
			"relevance": 50,
			"browsers": [
				"E18",
				"FF59",
				"C63",
				"O50"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-y"
				}
			],
			"description": "The overscroll-behavior-y CSS property is allows you to control the browser's scroll overflow behavior — what happens when the boundary of a scrolling area is reached — in the y axis direction."
		},
		{
			"name": "padding-block",
			"syntax": "<'padding-left'>{1,2}",
			"relevance": 50,
			"browsers": [
				"E87",
				"FF66",
				"S14.1",
				"C87",
				"O73"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/padding-block"
				}
			],
			"description": "The padding-block CSS property defines the logical block start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation."
		},
		{
			"name": "padding-inline",
			"syntax": "<'padding-left'>{1,2}",
			"relevance": 50,
			"browsers": [
				"E87",
				"FF66",
				"S14.1",
				"C87",
				"O73"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/padding-inline"
				}
			],
			"description": "The padding-inline CSS property defines the logical inline start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation."
		},
		{
			"name": "place-content",
			"syntax": "<'align-content'> <'justify-content'>?",
			"relevance": 50,
			"browsers": [
				"E79",
				"FF45",
				"S9",
				"C59",
				"O46"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/place-content"
				}
			],
			"description": "The place-content CSS shorthand property sets both the align-content and justify-content properties."
		},
		{
			"name": "place-items",
			"syntax": "<'align-items'> <'justify-items'>?",
			"relevance": 50,
			"browsers": [
				"E79",
				"FF45",
				"S11",
				"C59",
				"O46"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/place-items"
				}
			],
			"description": "The CSS place-items shorthand property sets both the align-items and justify-items properties. The first value is the align-items property value, the second the justify-items one. If the second value is not present, the first value is also used for it."
		},
		{
			"name": "place-self",
			"syntax": "<'align-self'> <'justify-self'>?",
			"relevance": 50,
			"browsers": [
				"E79",
				"FF45",
				"S11",
				"C59",
				"O46"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/place-self"
				}
			],
			"description": "The place-self CSS property is a shorthand property sets both the align-self and justify-self properties. The first value is the align-self property value, the second the justify-self one. If the second value is not present, the first value is also used for it."
		},
		{
			"name": "rotate",
			"syntax": "none | <angle> | [ x | y | z | <number>{3} ] && <angle>",
			"relevance": 50,
			"browsers": [
				"FF72",
				"S14.1"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/rotate"
				}
			],
			"description": "The rotate CSS property allows you to specify rotation transforms individually and independently of the transform property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the transform value."
		},
		{
			"name": "row-gap",
			"syntax": "normal | <length-percentage>",
			"relevance": 50,
			"browsers": [
				"E84",
				"FF63",
				"S14.1",
				"C84",
				"O70"
			],
			"description": "The row-gap CSS property specifies the gutter between grid rows."
		},
		{
			"name": "ruby-merge",
			"status": "experimental",
			"syntax": "separate | collapse | auto",
			"relevance": 50,
			"description": "This property controls how ruby annotation boxes should be rendered when there are more than one in a ruby container box: whether each pair should be kept separate, the annotations should be collapsed and rendered as a group, or the separation should be determined based on the space available."
		},
		{
			"name": "scale",
			"syntax": "none | <number>{1,3}",
			"relevance": 50,
			"browsers": [
				"FF72",
				"S14.1"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/scale"
				}
			],
			"description": "The scale CSS property allows you to specify scale transforms individually and independently of the transform property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the transform value."
		},
		{
			"name": "scrollbar-color",
			"syntax": "auto | <color>{2}",
			"relevance": 50,
			"browsers": [
				"FF64"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/scrollbar-color"
				}
			],
			"description": "The scrollbar-color CSS property sets the color of the scrollbar track and thumb."
		},
		{
			"name": "scrollbar-gutter",
			"syntax": "auto | stable && both-edges?",
			"relevance": 50,
			"browsers": [
				"E94",
				"FF97",
				"C94",
				"O80"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/scrollbar-gutter"
				}
			],
			"description": "The scrollbar-gutter CSS property allows authors to reserve space for the scrollbar, preventing unwanted layout changes as the content grows while also avoiding unnecessary visuals when scrolling isn't needed."
		},
		{
			"name": "scrollbar-width",
			"syntax": "auto | thin | none",
			"relevance": 50,
			"browsers": [
				"FF64"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/scrollbar-width"
				}
			],
			"description": "The scrollbar-width property allows the author to set the maximum thickness of an element’s scrollbars when they are shown. "
		},
		{
			"name": "scroll-margin",
			"syntax": "<length>{1,4}",
			"relevance": 50,
			"browsers": [
				"E79",
				"FF90",
				"S14.1",
				"C69",
				"O56"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/scroll-margin"
				}
			],
			"description": "The scroll-margin property is a shorthand property which sets all of the scroll-margin longhands, assigning values much like the margin property does for the margin-* longhands."
		},
		{
			"name": "scroll-margin-block",
			"syntax": "<length>{1,2}",
			"relevance": 50,
			"browsers": [
				"E79",
				"FF68",
				"S14.1",
				"C69",
				"O56"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block"
				}
			],
			"description": "The scroll-margin-block property is a shorthand property which sets the scroll-margin longhands in the block dimension."
		},
		{
			"name": "scroll-margin-block-start",
			"syntax": "<length>",
			"relevance": 50,
			"browsers": [
				"E79",
				"FF68",
				"S14.1",
				"C69",
				"O56"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-start"
				}
			],
			"description": "The scroll-margin-block-start property defines the margin of the scroll snap area at the start of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets."
		},
		{
			"name": "scroll-margin-block-end",
			"syntax": "<length>",
			"relevance": 50,
			"browsers": [
				"E79",
				"FF68",
				"S14.1",
				"C69",
				"O56"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-end"
				}
			],
			"description": "The scroll-margin-block-end property defines the margin of the scroll snap area at the end of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets."
		},
		{
			"name": "scroll-margin-bottom",
			"syntax": "<length>",
			"relevance": 50,
			"browsers": [
				"E79",
				"FF68",
				"S14.1",
				"C69",
				"O56"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/scroll-margin-bottom"
				}
			],
			"description": "The scroll-margin-bottom property defines the bottom margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets."
		},
		{
			"name": "scroll-margin-inline",
			"syntax": "<length>{1,2}",
			"relevance": 50,
			"browsers": [
				"E79",
				"FF68",
				"S14.1",
				"C69",
				"O56"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline"
				}
			],
			"description": "The scroll-margin-inline property is a shorthand property which sets the scroll-margin longhands in the inline dimension."
		},
		{
			"name": "scroll-margin-inline-start",
			"syntax": "<length>",
			"relevance": 50,
			"browsers": [
				"E79",
				"FF68",
				"S14.1",
				"C69",
				"O56"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-start"
				}
			],
			"description": "The scroll-margin-inline-start property defines the margin of the scroll snap area at the start of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets."
		},
		{
			"name": "scroll-margin-inline-end",
			"syntax": "<length>",
			"relevance": 50,
			"browsers": [
				"E79",
				"FF68",
				"S14.1",
				"C69",
				"O56"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-end"
				}
			],
			"description": "The scroll-margin-inline-end property defines the margin of the scroll snap area at the end of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets."
		},
		{
			"name": "scroll-margin-left",
			"syntax": "<length>",
			"relevance": 50,
			"browsers": [
				"E79",
				"FF68",
				"S14.1",
				"C69",
				"O56"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/scroll-margin-left"
				}
			],
			"description": "The scroll-margin-left property defines the left margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets."
		},
		{
			"name": "scroll-margin-right",
			"syntax": "<length>",
			"relevance": 50,
			"browsers": [
				"E79",
				"FF68",
				"S14.1",
				"C69",
				"O56"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/scroll-margin-right"
				}
			],
			"description": "The scroll-margin-right property defines the right margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets."
		},
		{
			"name": "scroll-margin-top",
			"syntax": "<length>",
			"relevance": 50,
			"browsers": [
				"E79",
				"FF68",
				"S14.1",
				"C69",
				"O56"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/scroll-margin-top"
				}
			],
			"description": "The scroll-margin-top property defines the top margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets."
		},
		{
			"name": "scroll-padding",
			"syntax": "[ auto | <length-percentage> ]{1,4}",
			"relevance": 50,
			"browsers": [
				"E79",
				"FF68",
				"S14.1",
				"C69",
				"O56"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/scroll-padding"
				}
			],
			"description": "The scroll-padding property is a shorthand property which sets all of the scroll-padding longhands, assigning values much like the padding property does for the padding-* longhands."
		},
		{
			"name": "scroll-padding-block",
			"syntax": "[ auto | <length-percentage> ]{1,2}",
			"relevance": 50,
			"browsers": [
				"E79",
				"FF68",
				"S15",
				"C69",
				"O56"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block"
				}
			],
			"description": "The scroll-padding-block property is a shorthand property which sets the scroll-padding longhands for the block dimension."
		},
		{
			"name": "scroll-padding-block-start",
			"syntax": "auto | <length-percentage>",
			"relevance": 50,
			"browsers": [
				"E79",
				"FF68",
				"S15",
				"C69",
				"O56"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-start"
				}
			],
			"description": "The scroll-padding-block-start property defines offsets for the start edge in the block dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targeted element and the edges of the scrollport."
		},
		{
			"name": "scroll-padding-block-end",
			"syntax": "auto | <length-percentage>",
			"relevance": 50,
			"browsers": [
				"E79",
				"FF68",
				"S15",
				"C69",
				"O56"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-end"
				}
			],
			"description": "The scroll-padding-block-end property defines offsets for the end edge in the block dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targeted element and the edges of the scrollport."
		},
		{
			"name": "scroll-padding-bottom",
			"syntax": "auto | <length-percentage>",
			"relevance": 50,
			"browsers": [
				"E79",
				"FF68",
				"S14.1",
				"C69",
				"O56"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/scroll-padding-bottom"
				}
			],
			"description": "The scroll-padding-bottom property defines offsets for the bottom of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targeted element and the edges of the scrollport."
		},
		{
			"name": "scroll-padding-inline",
			"syntax": "[ auto | <length-percentage> ]{1,2}",
			"relevance": 50,
			"browsers": [
				"E79",
				"FF68",
				"S15",
				"C69",
				"O56"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline"
				}
			],
			"description": "The scroll-padding-inline property is a shorthand property which sets the scroll-padding longhands for the inline dimension."
		},
		{
			"name": "scroll-padding-inline-start",
			"syntax": "auto | <length-percentage>",
			"relevance": 50,
			"browsers": [
				"E79",
				"FF68",
				"S15",
				"C69",
				"O56"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-start"
				}
			],
			"description": "The scroll-padding-inline-start property defines offsets for the start edge in the inline dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targeted element and the edges of the scrollport."
		},
		{
			"name": "scroll-padding-inline-end",
			"syntax": "auto | <length-percentage>",
			"relevance": 50,
			"browsers": [
				"E79",
				"FF68",
				"S15",
				"C69",
				"O56"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-end"
				}
			],
			"description": "The scroll-padding-inline-end property defines offsets for the end edge in the inline dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targeted element and the edges of the scrollport."
		},
		{
			"name": "scroll-padding-left",
			"syntax": "auto | <length-percentage>",
			"relevance": 50,
			"browsers": [
				"E79",
				"FF68",
				"S14.1",
				"C69",
				"O56"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/scroll-padding-left"
				}
			],
			"description": "The scroll-padding-left property defines offsets for the left of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targeted element and the edges of the scrollport."
		},
		{
			"name": "scroll-padding-right",
			"syntax": "auto | <length-percentage>",
			"relevance": 50,
			"browsers": [
				"E79",
				"FF68",
				"S14.1",
				"C69",
				"O56"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/scroll-padding-right"
				}
			],
			"description": "The scroll-padding-right property defines offsets for the right of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targeted element and the edges of the scrollport."
		},
		{
			"name": "scroll-padding-top",
			"syntax": "auto | <length-percentage>",
			"relevance": 51,
			"browsers": [
				"E79",
				"FF68",
				"S14.1",
				"C69",
				"O56"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/scroll-padding-top"
				}
			],
			"description": "The scroll-padding-top property defines offsets for the top of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targeted element and the edges of the scrollport."
		},
		{
			"name": "scroll-snap-align",
			"syntax": "[ none | start | end | center ]{1,2}",
			"relevance": 53,
			"browsers": [
				"E79",
				"FF68",
				"S11",
				"C69",
				"O56"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/scroll-snap-align"
				}
			],
			"description": "The scroll-snap-align property specifies the box’s snap position as an alignment of its snap area (as the alignment subject) within its snap container’s snapport (as the alignment container). The two values specify the snapping alignment in the block axis and inline axis, respectively. If only one value is specified, the second value defaults to the same value."
		},
		{
			"name": "scroll-snap-stop",
			"syntax": "normal | always",
			"relevance": 50,
			"browsers": [
				"E79",
				"S15",
				"C75",
				"O62"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/scroll-snap-stop"
				}
			],
			"description": "The scroll-snap-stop CSS property defines whether the scroll container is allowed to \"pass over\" possible snap positions."
		},
		{
			"name": "scroll-snap-type-x",
			"status": "obsolete",
			"syntax": "none | mandatory | proximity",
			"relevance": 0,
			"browsers": [
				"FF39",
				"S9"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type-x"
				}
			],
			"description": "The scroll-snap-type-x CSS property defines how strictly snap points are enforced on the horizontal axis of the scroll container in case there is one.\n\nSpecifying any precise animations or physics used to enforce those snap points is not covered by this property but instead left up to the user agent."
		},
		{
			"name": "scroll-snap-type-y",
			"status": "obsolete",
			"syntax": "none | mandatory | proximity",
			"relevance": 0,
			"browsers": [
				"FF39"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type-y"
				}
			],
			"description": "The scroll-snap-type-y CSS property defines how strictly snap points are enforced on the vertical axis of the scroll container in case there is one.\n\nSpecifying any precise animations or physics used to enforce those snap points is not covered by this property but instead left up to the user agent."
		},
		{
			"name": "text-combine-upright",
			"syntax": "none | all | [ digits <integer>? ]",
			"relevance": 50,
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/text-combine-upright"
				}
			],
			"description": "The text-combine-upright CSS property specifies the combination of multiple characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.\n\nThis is used to produce an effect that is known as tate-chū-yoko (縦中横) in Japanese, or as 直書橫向 in Chinese."
		},
		{
			"name": "text-decoration-skip",
			"status": "experimental",
			"syntax": "none | [ objects || [ spaces | [ leading-spaces || trailing-spaces ] ] || edges || box-decoration ]",
			"relevance": 52,
			"browsers": [
				"S12.1",
				"C57",
				"O44"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip"
				}
			],
			"description": "The text-decoration-skip CSS property specifies what parts of the element’s content any text decoration affecting the element must skip over. It controls all text decoration lines drawn by the element and also any text decoration lines drawn by its ancestors."
		},
		{
			"name": "text-decoration-skip-ink",
			"syntax": "auto | all | none",
			"relevance": 50,
			"browsers": [
				"E79",
				"FF70",
				"Spreview",
				"C64",
				"O50"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip-ink"
				}
			],
			"description": "The text-decoration-skip-ink CSS property specifies how overlines and underlines are drawn when they pass over glyph ascenders and descenders."
		},
		{
			"name": "text-decoration-thickness",
			"syntax": "auto | from-font | <length> | <percentage> ",
			"relevance": 50,
			"browsers": [
				"E89",
				"FF70",
				"S12.1",
				"C89",
				"O75"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/text-decoration-thickness"
				}
			],
			"description": "The text-decoration-thickness CSS property sets the thickness, or width, of the decoration line that is used on text in an element, such as a line-through, underline, or overline."
		},
		{
			"name": "text-emphasis",
			"syntax": "<'text-emphasis-style'> || <'text-emphasis-color'>",
			"relevance": 50,
			"browsers": [
				"E79",
				"FF46",
				"S7",
				"C25",
				"O15"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/text-emphasis"
				}
			],
			"description": "The text-emphasis CSS property is a shorthand property for setting text-emphasis-style and text-emphasis-color in one declaration. This property will apply the specified emphasis mark to each character of the element's text, except separator characters, like spaces,  and control characters."
		},
		{
			"name": "text-emphasis-color",
			"syntax": "<color>",
			"relevance": 50,
			"browsers": [
				"E79",
				"FF46",
				"S7",
				"C25",
				"O15"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/text-emphasis-color"
				}
			],
			"description": "The text-emphasis-color CSS property defines the color used to draw emphasis marks on text being rendered in the HTML document. This value can also be set and reset using the text-emphasis shorthand."
		},
		{
			"name": "text-emphasis-position",
			"syntax": "[ over | under ] && [ right | left ]",
			"relevance": 50,
			"browsers": [
				"E79",
				"FF46",
				"S7",
				"C25",
				"O15"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/text-emphasis-position"
				}
			],
			"description": "The text-emphasis-position CSS property describes where emphasis marks are drawn at. The effect of emphasis marks on the line height is the same as for ruby text: if there isn't enough place, the line height is increased."
		},
		{
			"name": "text-emphasis-style",
			"syntax": "none | [ [ filled | open ] || [ dot | circle | double-circle | triangle | sesame ] ] | <string>",
			"relevance": 50,
			"browsers": [
				"E79",
				"FF46",
				"S7",
				"C25",
				"O15"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/text-emphasis-style"
				}
			],
			"description": "The text-emphasis-style CSS property defines the type of emphasis used. It can also be set, and reset, using the text-emphasis shorthand."
		},
		{
			"name": "text-size-adjust",
			"status": "experimental",
			"syntax": "none | auto | <percentage>",
			"relevance": 57,
			"browsers": [
				"E79",
				"C54",
				"O41"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/text-size-adjust"
				}
			],
			"description": "The text-size-adjust CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property."
		},
		{
			"name": "text-underline-offset",
			"syntax": "auto | <length> | <percentage> ",
			"relevance": 50,
			"browsers": [
				"E87",
				"FF70",
				"S12.1",
				"C87",
				"O73"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/text-underline-offset"
				}
			],
			"description": "The text-underline-offset CSS property sets the offset distance of an underline text decoration line (applied using text-decoration) from its original position."
		},
		{
			"name": "transform-box",
			"syntax": "content-box | border-box | fill-box | stroke-box | view-box",
			"relevance": 50,
			"browsers": [
				"E79",
				"FF55",
				"S11",
				"C64",
				"O51"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/transform-box"
				}
			],
			"description": "The transform-box CSS property defines the layout box to which the transform and transform-origin properties relate."
		},
		{
			"name": "translate",
			"syntax": "none | <length-percentage> [ <length-percentage> <length>? ]?",
			"relevance": 50,
			"browsers": [
				"FF72",
				"S14.1"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/translate"
				}
			],
			"description": "The translate CSS property allows you to specify translation transforms individually and independently of the transform property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the transform value."
		},
		{
			"name": "speak-as",
			"syntax": "auto | bullets | numbers | words | spell-out | <counter-style-name>",
			"relevance": 50,
			"description": "The speak-as descriptor specifies how a counter symbol constructed with a given @counter-style will be represented in the spoken form. For example, an author can specify a counter symbol to be either spoken as its numerical value or just represented with an audio cue."
		},
		{
			"name": "ascent-override",
			"status": "experimental",
			"syntax": "normal | <percentage>",
			"relevance": 50,
			"description": "Describes the ascent metric of a font."
		},
		{
			"name": "descent-override",
			"status": "experimental",
			"syntax": "normal | <percentage>",
			"relevance": 50,
			"description": "Describes the descent metric of a font."
		},
		{
			"name": "font-display",
			"status": "experimental",
			"syntax": "[ auto | block | swap | fallback | optional ]",
			"relevance": 71,
			"description": "The font-display descriptor determines how a font face is displayed based on whether and when it is downloaded and ready to use."
		},
		{
			"name": "line-gap-override",
			"status": "experimental",
			"syntax": "normal | <percentage>",
			"relevance": 50,
			"description": "Describes the line-gap metric of a font."
		},
		{
			"name": "size-adjust",
			"status": "experimental",
			"syntax": "<percentage>",
			"relevance": 50,
			"description": "A multiplier for glyph outlines and metrics of a font."
		},
		{
			"name": "bleed",
			"syntax": "auto | <length>",
			"relevance": 50,
			"description": "The bleed CSS at-rule descriptor, used with the @page at-rule, specifies the extent of the page bleed area outside the page box. This property only has effect if crop marks are enabled using the marks property."
		},
		{
			"name": "marks",
			"syntax": "none | [ crop || cross ]",
			"relevance": 50,
			"description": "The marks CSS at-rule descriptor, used with the @page at-rule, adds crop and/or cross marks to the presentation of the document. Crop marks indicate where the page should be cut. Cross marks are used to align sheets."
		},
		{
			"name": "syntax",
			"status": "experimental",
			"syntax": "<string>",
			"relevance": 50,
			"description": "Specifies the syntax of the custom property registration represented by the @property rule, controlling how the property’s value is parsed at computed value time."
		},
		{
			"name": "inherits",
			"status": "experimental",
			"syntax": "true | false",
			"relevance": 50,
			"description": "Specifies the inherit flag of the custom property registration represented by the @property rule, controlling whether or not the property inherits by default."
		},
		{
			"name": "initial-value",
			"status": "experimental",
			"syntax": "<string>",
			"relevance": 50,
			"description": "Specifies the initial value of the custom property registration represented by the @property rule, controlling the property’s initial value."
		},
		{
			"name": "max-zoom",
			"syntax": "auto | <number> | <percentage>",
			"relevance": 50,
			"description": "The max-zoom CSS descriptor sets the maximum zoom factor of a document defined by the @viewport at-rule. The browser will not zoom in any further than this, whether automatically or at the user's request.\n\nA zoom factor of 1.0 or 100% corresponds to no zooming. Larger values are zoomed in. Smaller values are zoomed out."
		},
		{
			"name": "min-zoom",
			"syntax": "auto | <number> | <percentage>",
			"relevance": 50,
			"description": "The min-zoom CSS descriptor sets the minimum zoom factor of a document defined by the @viewport at-rule. The browser will not zoom out any further than this, whether automatically or at the user's request.\n\nA zoom factor of 1.0 or 100% corresponds to no zooming. Larger values are zoomed in. Smaller values are zoomed out."
		},
		{
			"name": "orientation",
			"syntax": "auto | portrait | landscape",
			"relevance": 50,
			"description": "The orientation CSS @media media feature can be used to apply styles based on the orientation of the viewport (or the page box, for paged media)."
		},
		{
			"name": "user-zoom",
			"syntax": "zoom | fixed",
			"relevance": 50,
			"description": "The user-zoom CSS descriptor controls whether or not the user can change the zoom factor of a document defined by @viewport."
		},
		{
			"name": "viewport-fit",
			"syntax": "auto | contain | cover",
			"relevance": 50,
			"description": "The border-block-style CSS property defines the style of the logical block borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation."
		}
	],
	"atDirectives": [
		{
			"name": "@charset",
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/@charset"
				}
			],
			"description": "Defines character set of the document."
		},
		{
			"name": "@counter-style",
			"browsers": [
				"E91",
				"FF33",
				"C91",
				"O77"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/@counter-style"
				}
			],
			"description": "Defines a custom counter style."
		},
		{
			"name": "@font-face",
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/@font-face"
				}
			],
			"description": "Allows for linking to fonts that are automatically activated when needed. This permits authors to work around the limitation of 'web-safe' fonts, allowing for consistent rendering independent of the fonts available in a given user's environment."
		},
		{
			"name": "@font-feature-values",
			"browsers": [
				"FF34",
				"S9.1"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/@font-feature-values"
				}
			],
			"description": "Defines named values for the indices used to select alternate glyphs for a given font family."
		},
		{
			"name": "@import",
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/@import"
				}
			],
			"description": "Includes content of another file."
		},
		{
			"name": "@keyframes",
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/@keyframes"
				}
			],
			"description": "Defines set of animation key frames."
		},
		{
			"name": "@media",
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/@media"
				}
			],
			"description": "Defines a stylesheet for a particular media type."
		},
		{
			"name": "@namespace",
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/@namespace"
				}
			],
			"description": "Declares a prefix and associates it with a namespace name."
		},
		{
			"name": "@page",
			"browsers": [
				"E12",
				"FF19",
				"C2",
				"IE8",
				"O6"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/@page"
				}
			],
			"description": "Directive defines various page parameters."
		},
		{
			"name": "@supports",
			"browsers": [
				"E12",
				"FF22",
				"S9",
				"C28",
				"O12.1"
			],
			"references": [
				{
					"name": "MDN Reference",
					"url": "https://developer.mozilla.org/docs/Web/CSS/@supports"
				}
			],
			"description": "A conditional group rule whose condition tests whether the user agent supports CSS property:value pairs."
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