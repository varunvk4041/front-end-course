const list = document.getElementById('list')
const add = document.getElementById('add')
const remove = document.getElementById('remove')
const resetbtn = document.getElementById('resetbtn')
let count=0
function adder(){
    count++
    // Creating the element
    const list_item = document.createElement('li')

    // Creating a TextNode
    const text = document.createTextNode('Sentence: ')

    // Making text bold
    const text2 = document.createTextNode(count)
    const bold = document.createElement('b')

    bold.appendChild(text)          // text goes in bold
    list_item.appendChild(bold)     // bold text goes in li
    list_item.appendChild(text2)    // count text goes in li

    // //  Alternate method using innerHTML 

    // list_item.innerHTML = "<b>Sentence: </b>" + count
    
    // Adding data-counter attribute to button add
        list_item.setAttribute('data',count)

    // Setting styles explicitly by using .style attribute
    if(count%2!==0)
    {list_item.style.backgroundColor = 'red'
    list_item.style.border = 'solid white 5px'
    list_item.style.padding = '10px'}

    else
    list_item.style.backgroundColor = 'yellow'

    // Appending the element in ordered list
    list.appendChild(list_item)     // li goes in list

}
function remover(){
    if(count!==0)
    {
        const li = list.querySelector("[data='"+count+"']")
        li.remove()
        count--
    }
}
function reset(){
    let temp
    for(let i=count;i>0;i--)
    {
        temp = list.querySelector("[data='"+i+"']")
        temp.remove()
    }
    count = 0 
}
remove.addEventListener('click',remover)
add.addEventListener('click',adder)
resetbtn.addEventListener('click',reset)