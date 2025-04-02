process.env.MY_VAR = 'Hi there!';

console.log(__dirname);
console.log(process.env.MY_VAR);
console.log('filename:', __filename);
console.log('module:', module);
console.log('Node version:', process.version);
