const request = require("request-promise");

// getKeyword Function
function getKeyword(){
  let _args = process.argv;
  if(_args[0].search("node") != -1){
    delete _args[0];
    delete _args[1];

  } else {
    delete _args[0];

  }

  _args = _args.filter(Boolean);
  return _args.join(" ");
}

// getHTML Function
async function getHTML(keyword){
  let url = "https://thepiratebay10.org/search/" + keyword;
  let html = await request(url); 

  return html;
}

function extract(html){
  let _pattern = /<div class="detName">\s+<a href="(.*?)" class="detLink" title="(.*?)">(.*?)<\/a>/gi
  let _matches = html.match(_pattern);

  _matches = _matches.map((_val) => {
    return _pattern.exec(_val);
  });
  console.log(_matches);
}

async function main(){
  let keyword = getKeyword();

  if(keyword == ""){

    console.log("Please provide search keyword");
  } else {

    let html = await getHTML(keyword);
    let compiledStuff = extract(html);
  }
}

// Calling Main (Haha! just a habit)
main();
