/*Script Number One:

The DOM API includes a convenient method called querySelectorAll, which allows you to get a collection containing all elements that match a specified selector.
The problem is that the returned collection is not an Array; it’s a NodeList. Despite its similarity to an array, it lacks many array methods. For example, it does not have the map(…) method, so you cannot do querySelectorAll.map(…) , and attempting this will result in an error.

Task: Extend the NodeList collection so that it includes a map() method, functioning similarly to the map method in an Array .

As a result, it should be possible to use the method as follows:

document.querySelectorAll('div').map(element => element.className);
// returns an array of class names of the elements
*/

if(typeof NodeList.prototype.map !== 'function') {
    NodeList.prototype.map = function(callback, thisArg){
        thisArg = thisArg || window
        let resultArray = []
        for(let i = 0; i < this.length; i++){
            resultArray.push(callback.call(thisArg, this[i], i, this))
        }
        return resultArray
    }
}
            
    document.addEventListener('DOMContentLoaded', (event) => {    
        innerHTMLs = document.querySelectorAll('div').map(element => element.className)
        console.log(innerHTMLs)
    })