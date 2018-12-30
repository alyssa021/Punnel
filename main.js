const request = require("request-promise");

// Include Custom Modules
const getHTML = require("./customs/get-html");
const getKeyword = require("./customs/get-keyword");
const extractMagnets = require("./customs/extract-magnets");

async function main(){
  let keyword = getKeyword();

  if(keyword == ""){

    console.log("Please provide search keyword");
  } else {

    let html = await getHTML(keyword);
    let compiledStuff = extractMagnets(html);
    console.log(compiledStuff);
  }
}

// Calling Main (Haha! just a habit)
main();
