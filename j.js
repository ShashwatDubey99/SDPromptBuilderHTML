function getSelectedOptions() {
    var selectedOptions = [];
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
    for (var i = 0; i < checkboxes.length; i++) {
      selectedOptions.push(checkboxes[i].value);
    }
    return selectedOptions.join("");
  }
  
  function copyToClipboard() {
    var output = getSelectedOptions();
    navigator.clipboard.writeText(output);
    alert("Output copied to clipboard: " + output);
  }