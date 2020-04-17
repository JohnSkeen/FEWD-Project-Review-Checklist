document.getElementById('createForumPost').addEventListener('click', function(){
  let allInputs = document.getElementsByTagName('input');
  let meetsRequirements;
  let needsWork;
  console.log(allInputs);
  for (let i = 0; i < allInputs.length; i++)


    if(allInputs[i].checked) {
      meetsRequirements = ':heavy-check-mark: ' + allInputs[i].nextSibling.innerHTML + `<br />`;
    } else {
      needsWork = ':x: ' + allInputs[i].nextSibling.innerHTML + `<br />`;
    }

    let copyTextArea = document.getElementById('textToCopy');
    copyTextArea.value = meetsRequirements + `<br/>` + needsWork;
    console.log(copyTextArea);
    copyTextArea.focus();
    copyTextArea.select();

    try {
      var succesful = document.execCommand('copy');
      var msg = successful ? 'sucessful' : 'unsuccessful';
      console.log('Copying text command was ' + msg);
    } catch (err) {
      console.log('Oops, unable to copy');
    }
});
