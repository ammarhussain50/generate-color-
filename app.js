function generatecolor(){
      var random  = Math.floor(Math.random()* 16777215) 
      var randomcode = "#" + random.toString(16)
      console.log(random,randomcode)
      document.getElementById('color').innerHTML = randomcode
      main.style.backgroundColor = randomcode

}
var main = document.getElementById('main')
document.getElementById('btn').addEventListener('click',function(){
      generatecolor()
})
generatecolor()