// add solution here
function theBeatlesPlay(musician,instrument){
  var arry=[];
  for(var i=0;i<musician.length;i++){
    arry.push(musician[i]+" plays "+instrument[i]);
  }
  return arry;
}