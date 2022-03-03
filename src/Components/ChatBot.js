import React from 'react'

export default function ChatBot() {

    (function(d, m){
        var kommunicateSettings = 
            {"appId":"957978dc4c6c13b72e88e36c713ffc2b","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});

  return (
    <div className='d-none'>ChatBot</div>
  )
}
