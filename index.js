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
    }
  } )
