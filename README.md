This was me, following along with https://app.pluralsight.com/library/courses/angularjs-directive-fundamentals/table-of-contents

I needed a better understanding of how to manipulate the DOM from an Angular controller, and I knew that Directives were the right path, so this is the deep dive. 

The modules from the code are broken into different folders named accordingly. 

**Directive Types**

Each has a different purpose
-Compenents:
-Component is the basic custom directive, combines data and display, and is almost always implemented as an element
--Also known as a widget. Compenents are often business case specific, but can be generic
-Decorators:
--Decorators are most common, and are typically added to existing directive, just like Angular's built-ins
--Decorators almost never have a template
-Structural:
--Structural directives manipulates the DOM structurally to change the display.
