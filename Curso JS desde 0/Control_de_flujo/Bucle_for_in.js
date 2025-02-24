let user = {
    id: 1,
    name: 'Manolo',
    age:54,
}

for (let prop in user){
    // Prop imprime las keys y user[prop] los valores
    console.log(prop, user[prop]);
}