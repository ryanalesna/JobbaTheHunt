var ListTemplate = /** @class */ (function () {
    function ListTemplate(container) {
        this.container = container;
    }
    ListTemplate.prototype.render = function (item, title) {
        var li = document.createElement('li');
        var h4 = document.createElement('h4');
        h4.innerText = title;
        li.append(h4);
        var p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        this.container.prepend(li);
    };
    return ListTemplate;
}());
export { ListTemplate };
/*
1. register a list container in the constructor
2. create a render method to render a new 'li' to the container
    -- accepts arguments: invoice or payment, a heading, a position
    -- create the html template (li, h4, p)
    -- add the 'li' template to the start/end of the list
*/
