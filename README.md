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

A `scope: true` property on a directive definition creates an inherited scope. A directive with inherited scope can have access the outer scope, but also define isolated scope objects

If you `console.log` an inherited $scope will have a parent property that indicates where the scope was inherited from, along with the parents member properties. 

Btw, really interesting discovery... when the containing scope and the directive both define a method of the same name, the last one wins. Sort of makes sense. This has more naming consequences.

**Isolated Scope**

When defining a directive, set the scope property to an object to define an isolated scope. In this new object, you can create property bindings that will get their value from the parent scope. Kinda crazy, but it would look like this: 
```javascript
function directiveWithIsolatedScope() {
    return {

        templateUrl: "directiveWithInheritedScope.html",
        restrict: "E",
        //Set scope to an object to make an isolated scope
        scope: {
            //notice the syntax below that makes the binding work
            duser: '='
        },
        controller: function ($scope) {
            $scope.logScope = function () {
                console.log($scope);
            }
        }
    }
}
```

and the html to wire it up

```html
<directive-with-isolated-scope duser="user"></directive-with-isolated-scope>
```
The attribute "duser" is in the directive's scope. The value, "user", is the property on the parent scope that it is bound to. 

Let me save you 15 minutes of hair pulling: HTML is case-insensitive, while javascript is case senstive. A property like 'dUser' in your directive's scope def will never get assigned, because an attribute 'dUser' in the HTML is going to get flattened to 'duser', and it will think there is no corresponding 'duser' property in the directive's scope definition. Duh!

The back and forth checking of the wiring is probably the most frustrating part of Angular. Project Idea: Angular IDE?

**Multiple Scopes**

Angular does not allow for multiple isolated scopes on the same directive, e.g. one scope defined by the element, another by an attribute. Multiple inheritance is possible, but advice is, whenever creating attributes that could be shared scopes, it's best to stick with shared scopes. 

Also, an element with multiple directives can only have one template defined. 