var tags = [
  {
    'name':'composers', 
    'tags':[
      'Bach',
      'Handel',
      'Beethoven'
    ]
  },
  {
    'name':'forms',
    'tags':[
      'concerto',
      'sonata',
      'quartet'
    ]
  },
  {
    'name':'instruments',
    'tags':[
      'violin',
      'piano',
      'string'
    ]
  }
]

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
function genLink(searchStr, source){
  switch (source) {
    case 'YouTube':
      var baseStr = 'https://www.youtube.com/results?search_query=';
      var searchStrUrl = searchStr.replace(/ /g,'+');
      return baseStr + searchStrUrl;
      break;
    
    default:
      return null;
  }
  
}

function luckyBtn(){
  var searchStr = genSearchStr();
  var url = genLink(searchStr, 'YouTube');
  var win = window.open(url);
  //New Tab version
  //var win = window.open(url, '_blank');
  //win.focus();
}


