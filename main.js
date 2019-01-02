const request = require("request-promise");

// Include Custom Modules
const colors = require("./customs/colors");
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
    for(i = 0; i < compiledStuff.length; i++){
      console.log(colors.Bright + colors.FgYellow + compiledStuff[i][1]);
      console.log(colors.FgWhite + compiledStuff[i][3]);
      console.log(colors.FgCyan + colors.Dim + compiledStuff[i][4]);
      console.log(colors.Reset);
    }
  }

  console.log(colors.Reset);
}

// Calling Main (Haha! just a habit)
main();
