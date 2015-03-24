function replaceATag(str){
    var str = '<ul>\n<li>\n <a href=http://softuni.bg>SoftUni</a>\n</li>\n</ul>';
    str=str.replace('<a href=http://softuni.bg>','[URL href=http://softuni.bg]');
    str=str.replace('</a>','[/URL]');
    console.log(str);
}

replaceATag();








