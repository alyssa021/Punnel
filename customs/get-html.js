const request = require("request-promise");

/** getHTML JS Module
 *  Fetches HTML Source
 *  of the site
**/

module.exports = async function getHTML(keyword){
  let url = "https://thepiratebay10.org/search/" + keyword;
  let html = await request(url); 

  return html;
}
