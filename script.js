function hashNoHistory(link){
    var a = document.createElement("a");
    a.href = link.href;
    location.replace(a.href);
    return false;
  }
















