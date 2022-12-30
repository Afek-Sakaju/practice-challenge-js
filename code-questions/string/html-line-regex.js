/* Q: Write a function that accepts html code and returns its 
attributes such as: "style", "name", "required" using regex 

Example:

input:
<h3 style="color=red" name="afek" required> Hi </h3>

output:

{style: "color=red",
name:"afek",
required=true} */

function regexHtmlLine(line) {
    const attributes = {};

    const [style] = new RegExp(/style=".*?"/gm).exec(line);
    attributes.style = style.split('style=')[1].replaceAll('"', '');

    const [name] = new RegExp(/name=".*?"/gm).exec(line);
    attributes.name = name.split('name=')[1].replaceAll('"', '');

    const [required] = new RegExp(/\brequired\b/gm).exec(line);
    attributes.required = required !== '';

    return attributes;
}

const str = '<h3 style="color=red" name="afek" required> Hi </h3>';
const res = regexHtmlLine(str);

console.log(`result: ${JSON.stringify(res)}`);
