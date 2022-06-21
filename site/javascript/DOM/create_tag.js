const list = document.getElementById('list')
const add = document.getElementById('add')
let count=0
function adder(){

    // Creating the element
    const list_item = document.createElement('li')

    // // Creating a TextNode
    // const text = document.createTextNode('Sentence: ')

    // // Making text bold
    // const text2 = document.createTextNode(count++)
    // const bold = document.createElement('b')

    // bold.appendChild(text)          // text goes in bold
    // list_item.appendChild(bold)     // bold text goes in li
    // list_item.appendChild(text2)    // count text goes in li

    //  Alternate method using innerHTML 

    list_item.innerHTML = "<b>Sentence: </b>" + count++
    
    // Appending the element in ordered list
    list.appendChild(list_item)     // li goes in list

}
add.addEventListener('click',adder)
