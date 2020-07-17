  function changePhoto()
{
  const e = document.getElementById("photos");
  const chooseImage = e.options[e.selectedIndex].value;
  console.log(chooseImage);
  document.getElementById("imagesimages").style.backgroundImage = "url("+chooseImage+")";
} 