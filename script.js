var unloadCallback = (event) => {
  event.preventDefault();
  event.returnValue = "222";
  return "111";
};

var confirmation = () => {
  // alert("confirmation");
};
window.addEventListener("beforeunload", unloadCallback);
window.addEventListener("popstate", confirmation());
window.removeEventListener("beforeunload", unloadCallback);

//  TEST 2