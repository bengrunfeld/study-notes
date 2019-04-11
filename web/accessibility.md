# Accessibility

If you have a design that ONLY relies on color to differentiate between different elements on the page, then people with color blindness will not be able to see the difference between the elements. Consider using shapes AS WELL as colors, adding helpful text next to the elements to assist with differentiation, or text inside of the shapes or elements.

To check contrast between background and foreground:
https://contrast-ratio.com

Use the Straw Test to test for proximity in design for people who need to magnify their screens to 200% - 400%. This means that you look at your page through a straw and see if you can figure out what's going on when you make an action like clicking "Add to Card" and seeing that the total updates. 

## Outline

The presenter suggests that we use `outline: none`, and then thoughtfully build in what the outline will look like when you tab into the element. Do somehting better than what the browser natively provides.

## Keyboard Interaction

Many disabilities require interaction with a website through keyboard use.

The golden rule about this is: 

> You MUST be able to complete all tasks using a keyboard.

Being able to use a mouse on the website isn't enough.

A easy gotcha is that you can't tab to a `div`. Instead, you need to use something like an `<a>` which IS tabbable.

Links, buttons, and form fields are your friends in this.

Document the tab order for things, so the developer knows how the keyboard flow should work.

## Content Flow

To people with screen readers, they will hear whichever piece of content is first in the source order. This is especially troublesome for layouts with columns. Really consider how they would move through this content, only looking at one at a time, and then tabbing through it. Make sure they don't have to go backwards at some point to accomplish a task.

## Touch

Some people may never touch the screen, even though they're using an iPhone or tablet. They may use a bluetooth keyboard, or they may have other assistive technologies. Keep that in mind.

Make sure targets like buttons and checkboxes aren't too small. If someone has arthritis, uses their feet, or has parkinsons tries to hit small targets, they'll often miss. The solution is to make things a little bigger and spread out.

## Gestures

The definitive guides for gestures for accessibility is to read Apple, Google, and Microsoft's documentation.

## Text with Images

Media can be informational, functional (e.g. image that is clickable), or decorative.

Ask yourself, if this media (video, audio, image) was gone, would the meaning of the content or page be affected? If yes, then it needs a text equivalent. If no, you don't.

## Forms

Every form field needs a label

When you use a label, clicking the label should select and highlight the element.

With a 2 element form field, like street address that has 2 input boxes where you can enter different parts of your address, make a hidden label using aria.

Never use a label instead of a placeholder.

Use an error icon for errors - predictable. Make sure errors display close to the field that generated the error.

Place the error messages INTO the labels.











