/* Q: Write a function that accepts html code and returns its 
attributes such as: "style", "name", "required" using regex 

Example:

input:
<h3 style="color=red" name="afek" required> Hi </h3>

output:

{
    style: "color=red",
    name:"afek",
    required=true
} */

//refactor to detect any attribute
function regexHtmlLine(line) {
    const reg1 = new RegExp(/<.*?>/gm);
    const firstHalf = line.match(reg1)[0];

    const attributes = {};
    const reg2 = new RegExp(
        /(\w*?)="(.*?)"|(?<!<)\s([a-zA-Z]+)[\s|>](?!<)/gm
    );
    const res = [...firstHalf.matchAll(reg2)];

    res.forEach((e) => {
        if (e[1]) attributes[e[1]] = e[2] ? e[2] : e[1];
        else attributes[e[3]] = true;
    });

    return attributes;
}

const str = '<h3 style="color=red" name="afek" required> Hi </h3>';

console.log(regexHtmlLine(str));
