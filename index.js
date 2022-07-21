// Write your code here!
const main = document.getElementById('main')
console.log(main)
const newHeader = document.createElement('h1')

main.remove();
newHeader.id = 'victory'
newHeader.innerHTML = 'Antonio is the champion'
document.body.append(newHeader)