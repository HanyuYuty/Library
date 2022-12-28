/*
1、当一段文本正在输入时，就会被触发。
2、例如，当用户使用拼音输入法开始输入汉字时，这个事件就会被触发。 
*/
element.addEventListener('compositionstart',(e)=>{
    //do some thing
})

//当一段文本输入完之后才会被触发。
element.addEventListener('compositionend',(e)=>{
    //do some thing
})



