enum SocketEvents {
    CHATMESSAGE = 'chat-message',
    LIVECODEMESSAGE = 'live-code-message'
};

enum CodeMirrorThemes {
    abcef = 'abcdef',
    ambiance = 'ambiance',
    base16dark = 'base16-dark',
    base16light = 'base16-light',
    bespin = 'bespin',
    blackboard = "blackboard",
    cobalt = "cobalt",
    colorforth = "colorforth",
    darcula = "darcula",
    dracula = "dracula",
    duotonedark = "duotone-dark",
    duotonelight = "duotone-light",
    eclipse = "eclipse",
    elegant = "elegant",
    erlangdark = "erlang-dark",
    gruvboxdark = "gruvbox-dark",
    hopscotch = "hopscotch",
    icecoder = "icecoder",
    idea = "idea",
    isotope = "isotope",
    lesserdark = "lesser-dark",
    liquibyte = "liquibyte",
    lucario = "lucario",
    material = "material",
    mbo = "mbo",
    mdnlike = "mdn-like",
    midnight = "midnight",
    monokai = "monokai",
    neat = "neat",
    neo = "neo",
    night = "night",
    nord = "nord",
    oceanicnext = "oceanic-next",
    pandasyntax = "panda-syntax",
    paraisodark = "paraiso-dark",
    paraisolight = "paraiso-light",
    pastelondark = "pastel-on-dark",
    railscasts = "railscasts",
    rubyblue = "rubyblue",
    seti = "seti",
    shadowfox = "shadowfox",
    solarized = "solarized",
    ssms = "ssms",
    thematrix = "the-matrix",
    tomorrownightbright = "tomorrow-night-bright",
    tomorrownighteighties = "tomorrow-night-eighties",
    ttcn = "ttcn",
    twilight = "twilight",
    vibrantink = "vibrant-ink",
    xqdark = "xq-dark",
    xqlight = "xq-light",
    yeti = "yeti",
    yonce = "yonce",
    zenburn = "zenburn",
}

const CodeMirrorThemeToCSS: {[key:string] : string} = {
        abcef : 'abcdef',
        ambiance : 'ambiance',
        base16dark : 'base16-dark',
        base16light : 'base16-light',
        bespin : 'bespin',
        blackboard : "blackboard",
        cobalt : "cobalt",
        colorforth : "colorforth",
        darcula : "darcula",
        dracula : "dracula",
        duotonedark : "duotone-dark",
        duotonelight : "duotone-light",
        eclipse : "eclipse",
        elegant : "elegant",
        erlangdark : "erlang-dark",
        gruvboxdark : "gruvbox-dark",
        hopscotch : "hopscotch",
        icecoder : "icecoder",
        idea : "idea",
        isotope : "isotope",
        lesserdark : "lesser-dark",
        liquibyte : "liquibyte",
        lucario : "lucario",
        material : "material",
        mbo : "mbo",
        mdnlike : "mdn-like",
        midnight : "midnight",
        monokai : "monokai",
        neat : "neat",
        neo : "neo",
        night : "night",
        nord : "nord",
        oceanicnext : "oceanic-next",
        pandasyntax : "panda-syntax",
        paraisodark : "paraiso-dark",
        paraisolight : "paraiso-light",
        pastelondark : "pastel-on-dark",
        railscasts : "railscasts",
        rubyblue : "rubyblue",
        seti : "seti",
        shadowfox : "shadowfox",
        solarized : "solarized",
        ssms : "ssms",
        thematrix : "the-matrix",
        tomorrownightbright : "tomorrow-night-bright",
        tomorrownighteighties : "tomorrow-night-eighties",
        ttcn : "ttcn",
        twilight : "twilight",
        vibrantink : "vibrant-ink",
        xqdark : "xq-dark",
        xqlight : "xq-light",
        yeti : "yeti",
        yonce : "yonce",
        zenburn : "zenburn",
}

const CodeMirrorLanguageToModePaths : {[key:string] : string}= {
    java : 'codemirror/mode/clike/clike', 
    cpp: 'codemirror/mode/clike/clike' , 
    c : 'codemirror/mode/clike/clike' , 
    python : 'codemirror/mode/python/python' , 
    javascript : 'codemirror/mode/javascript/javascript' , 
    html : 'codemirror/mode/htmlmixed/htmlmixed' , 

}

const CodeMirrorLanguageToMIMEType : {[key:string] : string}= {
    java : 'text/x-java', 
    cpp: 'text/x-c++src' , 
    c : 'text/x-csrc' , 
    python : 'text/x-python' , 
    javascript : 'javascript' , 
    html : 'text/html' , 
}

export interface ChatMessageReceiveBody {
    senderid: string,
    sendername?: string,
    msg: string
};

export interface ChatMessageSendingBody { // This is how the message object should be sent
    senderid: string,
    sendername: string,
    msg: string
};

export interface ChatMessage { // data to be stored in redux store
    senderid: string,
    sendername: string,
    msg: string,
    time: Date,
    sessionid: string
};

export interface SessionType {
    id: string,
    date: Date
}

export { SocketEvents as ChatEvents , CodeMirrorThemes , CodeMirrorThemeToCSS  , CodeMirrorLanguageToMIMEType , CodeMirrorLanguageToModePaths}; 