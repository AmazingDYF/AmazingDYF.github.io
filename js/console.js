if (window.console) {
    Function.prototype.makeMulti = function() {
        let l = new String(this);
        l = l.substring(l.indexOf("/*") + 3, l.lastIndexOf("*/"));
        return l;
    };
    let string = function() {
        /*
    ___ ___                                                                    .___             
 /   |   \_____  ______ ______ ___.__.   _______  __ ___________ ___.__.   __| _/____  ___.__.
/    ~    \__  \ \____ \\____ <   |  | _/ __ \  \/ // __ \_  __ <   |  |  / __ |\__  \<   |  |
\    Y    // __ \|  |_> >  |_> >___  | \  ___/\   /\  ___/|  | \/\___  | / /_/ | / __ \\___  |
 \___|_  /(____  /   __/|   __// ____|  \___  >\_/  \___  >__|   / ____| \____ |(____  / ____|
       \/      \/|__|   |__|   \/           \/          \/       \/           \/     \/\/     
      */
    };
    console.log(string.makeMulti());
    console.log("欢迎访问忆语的博客", "color:#1fc7b6;font-weight:bold");
}