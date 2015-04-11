
function randomInt(from, to){
  return Math.floor(Math.random() * (to - from) + from);
}

function genSearchStr(){
  var sstr = '';
  tags.forEach(function(tag){
    sstr += tag.tags[randomInt(0, tag.tags.length)];
    sstr += ' ';
  })
  return sstr;
}

//https://www.youtube.com/results?search_query=Beethoven+string
//
function genLink(searchStr, longOnly, source){
  switch (source) {
    case 'YouTube':
      var longStr = "";
      if (longOnly) {
        longStr = "&filters=long&lclk=long";
      }
      var baseStr = 'https://www.youtube.com/results?search_query=';
      var searchStrUrl = searchStr.replace(/ /g,'+');
      return baseStr + searchStrUrl + longStr;
      break;
    
    default:
      return null;
  }
  
}

function luckyBtn(){
  var searchStr = genSearchStr();
  var longOnly = document.getElementById('longOnly').checked
  var url = genLink(searchStr, longOnly, 'YouTube');
  var win = window.open(url);
  //New Tab version
  //var win = window.open(url, '_blank');
  //win.focus();
}


