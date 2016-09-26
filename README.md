# BreakPointer

Breakpointer is a Chrome extension which generates media queries for selected elements
at defined breakpoints.

Problems that it solves:
* No need to write media queries tags by hand
* Displays all the media tags defined for selected element on a bar

Wut, how?
1. Activate the plugin
2. Attach styles.scss
3. Resize the browser
4. Mark an element and add the breakpoint.
5. Watch as CSS media queries append themselves to the selected element's CSS definition.

## To-Do:
* Webpack and project structure
* The whole plugin

## Future:
First iteration should contain only breakpointer. Later on I have plans to add buttons for various
standart widths classes' appending (full width, half width etc.). 