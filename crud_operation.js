const fs = require('fs');

var args = process.argv;

if (args[2] == 'write') {
    const path = "files/" + args[3] + ".txt";
    fs.writeFileSync(path, args[4]);

} else if (args[2] == 'read') {
    const path = "files/" + args[3] + ".txt";
    let data = fs.readFileSync(path, 'utf8');
    console.log(data);
}
else if (args[2] == 'update') {
    const path = "files/" + args[3] + ".txt";
    fs.appendFileSync(path, args[4]);
}
else if (args[2] == 'delete') {
    const path = "files/" + args[3] + ".txt";
    fs.unlinkSync(path);
}

else {
    console.log('Invalid Command');
}