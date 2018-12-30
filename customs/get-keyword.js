/*
* Returns string made of words
* give in the argument
* after executing command
*/

module.exports = function getKeyword(){
  let _args = process.argv;

  // node main.js OR npm start
  if(_args[0].search("node") != -1){
    delete _args[0];
    delete _args[1];

  // ./main.js OR punnel
  } else {
    delete _args[0];
  }

  // Remove bloat
  _args = _args.filter(Boolean);

  return _args.join(" ");
}
