// TO DO
document.addEventListener("DOMContentLoaded", function(){
  const statusLi = document.querySelectorAll('li')
  const statusSpan = document.querySelectorAll('li span')
  const suatusClose = document.querySelectorAll('.close')
  const statusUl = document.querySelector('ul')
  


  // 第一個
  statusLi.forEach(function(selectList){
    selectList.addEventListener('click', function(){
      selectList.classList.toggle('checked')
    })
  })



  // 第二個
  statusSpan.forEach(function(deleteList){
    deleteList.addEventListener('click', function(){
      deleteList.parentNode.remove()
    })
  })


  // 第三個
  document.querySelector('.addBtn').addEventListener('click', function(){

    // 產生一段文字
    // 將文字塞到li
    // 按下按鈕產生li
    // innerHTML vs textContent?
    // 選取<input> or class or id
    const nn = document.createElement('li')
    const suatusInput = document.getElementById('input')
    const sp = document.createElement('span')

    let iv = suatusInput.value
    nn.innerHTML = iv

    sp.className = 'close'
    sp.innerHTML = "x"

    nn.appendChild(sp)
    console.log(nn)

    document.querySelector('ul').appendChild(nn).appendChild(sp).addEventListener('mousedown', function(){
      uull
    })
    
    suatusInput.value = ''
    
    nn.addEventListener('click', function(){
      nn.classList.toggle('checked')
    })
    
    sp.addEventListener('click', function(){
      sp.parentNode.remove()
     })

  })


  //第四個
  uull = statusUl.addEventListener('mousedown',function(){

  const items = document.querySelectorAll('ul > li')

  items.forEach(function(item){
    item.setAttribute('draggable', true) //?給true

    item.addEventListener('dragstart', ddragstart)
    item.addEventListener('drag', ddrag)
    item.addEventListener('dragend', ddragend)
  })

  function ddragstart (e) {
    // e.dataTransfer.setData('text/plain')
    e.target.style.opacity = ".5";
    console.log(e)
  }




    
  function ddrag (e){
    let el = document.elementFromPoint(event.clientX,event.clientY)
    let current = e.target
    
    // console.log(e.offsetY)

    if(current !== el && e.offsetY >= 0){
      if(el.tagName === 'LI'){
        el.insertAdjacentElement('afterend',current)
      }
    }else if (current !== el && e.offsetY <=0){
      if(el.tagName === "LI"){
        el.insertAdjacentElement('beforebegin',current)
      }
      
    }
      


  }





  function ddragend (e) {
    e.target.style.opacity = "";
  }

  


  
})
})