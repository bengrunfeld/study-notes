# HTML5 Drag n Drop List

Creates an HtML5 Drag n Drop list. The code is at the end of this post, but here is a link to a full working JSFiddle anyway:

[http://jsfiddle.net/bengrunfeld/dt6ovvzc/](http://jsfiddle.net/bengrunfeld/dt6ovvzc/)

## What you need

For the simplest implementation of HTML5 drag n drop, you need to a minimum of 4 things.

1. Make the element draggable
2. Specify what should happen when the element is dragged
3. Specify a drop area
4. Specify what should happen when the element in dropped

### 1. Make the element draggable

Just add `draggable="true"` to your target element. E.g. `<div draggable="true"></div>`

### 2. Specify what should happen when the element is dragged

The `ondragstart` attribute calls a function (only once) when the User begins to drag the element.

    <div id="target" draggable="true" ondragstart="drag(event)">Hi</div>

The function that is called tells the browser what to do when the User begins to drag the element. In this case, it simply stores the `id` of the element being dragged.

    function drag(e) {
        e.dataTransfer.setData("text", e.target.id);
    }

### 3. Specify a drop area

By default, data and elements cannot be dropped in other elements. To allow a drop, we must prevent the default handling of our target drop-zone element.

    <div id="drop-zone" ondrop="drop(event)" ondragover="allowDrop(event)"></div>

    function allowDrop(e) {
        e.preventDefault();
    }
    
### 4. Specify what should happen when the element in dropped

A `drop` event is fired when you drop the element. Here's what we need to do:

* Prevent the default behavior of the browser for the event (i.e. opening a new tab).
* Retrieve the dragged data with the dataTransfer method
* Append the dragged data into the drop element's parent

## Issues

When you drop the element into a dropzone element that has children, it might target the children. Basically, the `dragenter` event is fired on child nodes before the `dragleave` event can be fired on the parent node. To get around this, [Kiran Reddy](http://stackoverflow.com/users/4046844/kiran-reddy) came up with the idea of [just targeting the parent](http://stackoverflow.com/questions/29553959/why-does-html5-drag-n-drop-target-child-sortable-list/29554280#29554280), for which I am grateful. This allows us to avoid the unsightly and extremely verbose method of turning of events for child nodes and [other such approaches](http://jsfiddle.net/theodorejb/j2fDt/8/).

## HTML

    <div class="list" id="list">
        <div id="1" 
             class="item drop-zone" 
             draggable="true"
             ondragstart="drag(event)"     
             ondrop="drop(event)"
             ondragover="allowDrop(event)">
           <p>1. Adam</p>
        </div>
        <div id="2" 
             class="item drop-zone"
             draggable="true"
             ondragstart="drag(event)"
             ondrop="drop(event)"
             ondragover="allowDrop(event)">
           <p>2. Ben</p>
        </div>
        <div id="3" 
             class="item drop-zone" 
             draggable="true"
             ondragstart="drag(event)"     
             ondrop="drop(event)"
             ondragover="allowDrop(event)">
           <p>3. Charles</p>
        </div>
    </div>

## Javascript 

    function allowDrop(e) {
        e.preventDefault();
    }
    
    function drag(e) {
        e.dataTransfer.setData("text", e.target.id);
    }
    
    function drop(e) {
        e.preventDefault();
    
        var data = e.dataTransfer.getData("text");
        var list = document.getElementById("list");
        list.insertBefore(document.getElementById(data), e.target.parentNode);
    }