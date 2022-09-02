window.addEventListener('mouseup', () => {
  const selected = document.getSelection();'
  '
  if (selected) {
    const text = selected.toString();
    console.log(text);
    const range = selected.getRangeAt(0);
    range.deleteContents();
    const newText = document.createElement('strong');
    newText.style.color = 'red';
    newText.innerHTML = text;
    range.insertNode(newText);

    function setdata(res) {
      let image = document.createElement("img")
      image.src = res.url
      const container = document.createElement('div');
      container.id = 'qr_container';
      container.style.position = 'fixed';
      container.style.display = 'flex';
      container.style.top = 0;
      container.style.bottom = 0;
      container.style.left = 0;
      container.style.right = '0';
      container.style.justifyContent = 'center';
      container.style.alignItems = 'center';
      container.appendChild(image);
      container.style.background = 'rgba(0,0,0,0.6)'
      container.addEventListener('click', () => {
        const cont = document.getElementById('qr_container');
        if (cont) {
          document.body.removeChild(cont);
        }
      })
      document.body.appendChild(container)
      const mainElement = document.getElementById('qr_extension_main');
      if (mainElement) {
        let ch = mainElement.lastElementChild;
        while (ch) {
          mainElement.removeChild(ch);
          ch = mainElement.lastElementChild;
        }
        mainElement.appendChild(image);
      }
    }

    async function getdata() {
      try {
        let res = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`)
        console.log(res, "d")
        setdata(res)
      }
      catch (err) {
        console.log("err:", err)
      }
    }
    getdata()
  }
})