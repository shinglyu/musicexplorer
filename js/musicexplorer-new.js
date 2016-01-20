function randomInt(from, to){
  return Math.floor(Math.random() * (to - from) + from);
}

function genSearchStr(category_tags){
  var sstr = '';
  category_tags.forEach(function(tag){
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

function luckyBtn(category){
  console.log(category)
  
  var searchStr = genSearchStr(tags[category]);
  var longOnly = document.getElementById('longOnly').checked
  var url = genLink(searchStr, longOnly, 'YouTube');
  var win = window.open(url);
  //New Tab version
  //var win = window.open(url, '_blank');
  //win.focus();
}

var tags = {};
document.addEventListener("DOMContentLoaded", function(){
  Array.prototype.forEach.call(document.getElementsByClassName('luckyBtn'), function(elem){
    elem.onclick = function(){
      luckyBtn(elem.id);
    }
  })
});
