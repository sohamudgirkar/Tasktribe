const handleKeyPress = (event, id) => {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById(id).click();
    }
  };
  
  export default handleKeyPress;