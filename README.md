This was me, following along with https://app.pluralsight.com/library/courses/angularjs-directive-fundamentals/table-of-contents

I needed a better understanding of how to manipulate the DOM from an Angular controller, and I knew that Directives were the right path, so this is the deep dive. 

The modules from the code are broken into different folders named accordingly. 

#Module 1
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


**Naming**

Always prefix your directives to avoid custom collisions with possible future html or Angular spec, and to make it obvious that an element is a directive.

Keep the naming consistent, following Angular conventions
Organize your templates and javascript into their own folders

#Module 2

Maintain encapsulation of a directive by giving it its own controller. That way, the directive isn't relying on functionality of the enclosing controller scope.

By default, the directive will share the containing controller's scope.

A directive with inherited scope can have access the outer scope, but also define isolated scope objects

inherited scopes will have a parent property that indicates where the scope was inherited from, along with the parents member properties

Btw, really interesting discovery... when the containing scope and the directive both define a method of the same name, last one wins? Sort of makes sense. This has more naming consequences.