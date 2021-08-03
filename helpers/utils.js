function templateStr(tmp, attributes) {
    let prop;
    for(prop in attributes) {
        if(attributes.hasOwnProperty(prop)) {
            tmp = tmp.replace('{{' + prop + '}}', attributes[prop]);
        }
    }
    return tmp;
}