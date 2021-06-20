const greetings = (name = 'there!') => {
    if(typeof name == 'string' && name == name.toUpperCase()){
        return `HELLO ${name}`;
    };
    if(Array.isArray(name)){
        let names = 'Hello '
        name.forEach(n => {
            names += `${n}, `;
        });
        names = names.slice(0, -2);
        return names;
    };
    return `Hello ${name}`;
}
module.exports = greetings;