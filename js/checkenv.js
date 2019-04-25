
if(!Object.observe) {
}else{
  // 强制使用http
  if(location.protocol == 'https:'){
    location.href = 'http' + location.href.substr(5);
  }
}

