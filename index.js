


window.addEventListener('mouseup', () => {
    const selected = document.getSelection();
    if(selected) {
      const text = selected.toString();
      console.log(text);
      const range = selected.getRangeAt(0);
      range.deleteContents();
      const newText = document.createElement('strong');
      newText.style.color = 'red';
      newText.innerHTML = text;
      range.insertNode(newText);

      // document.querySelector("#qr").addEventListener('click',()=>{

      // })
      async function getdata(){
        try{  
          let res=await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`)
          console.log(res,"d")
        getdata1(res)
        }
        catch(err){
    console.log("err:",err)
        }
        }
        getdata()
        } 
      function getdata1(res){
        let image=document.createElement("img")
        image.src=res.url
        let divv=document.querySelector("#main").append(image)
    }
  } )
