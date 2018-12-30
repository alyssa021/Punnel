/*
*  Magnet Extractor for Punnel
*/

module.exports = function extractMagnets(html){
  let _pattern = /<div class="detName">\s+<a href="(.*?)" class="detLink" title="(.*?)">(.*?)<\/a>\s+<\/div>\s+<a href="(.*?)"/;
  let _pattern_global = new RegExp(_pattern, "gi");
  let _pattern_local = new RegExp(_pattern, "i");
  let _matches = html.match(_pattern_global);

  _matches = _matches.map(function(_item){
    return _item.match(_pattern_local);
  });

  return _matches;
}
