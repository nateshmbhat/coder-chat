import AceEditor from 'react-ace';
import React, { Suspense } from 'react'
import { ACE_EDITOR_LANGUAGES, ACE_EDITOR_THEMES } from '../../types/types';
import { BigLoaderCentered } from '../Misc';
import 'brace/keybinding/vim';
import { LiveCodePeerToCodeMap } from '../../../../server/src/types/types';
import { useMessage } from '../../hooks/useMessage';
import { sendLiveCodeText } from '../../handlers/chat/sender';
import { useStoreActions, useStoreState } from '../../store/globalStore';


ACE_EDITOR_LANGUAGES.forEach(lang => {
    require(`brace/mode/${lang}`);
    require(`brace/snippets/${lang}`);
});

ACE_EDITOR_THEMES.forEach(theme => {
    require(`brace/theme/${theme}`);
});


const AceEditorComponent = (props : {
    vimEnabled : boolean , 
    setShowSettings : (v:boolean)=>void , 
    theme : string , 
    codeLanguage : string , 
}) => {


    const [liveCodeText, activeLiveCodePeerId, liveCodePeersToCodeMap] = useStoreState(state => [state.liveCodeText, state.activeLiveCodePeerId, state.liveCodePeersToCodeMap]);

    const setLiveCodeText = useStoreActions(actions => actions.setLiveCodeText)

    const {vimEnabled , setShowSettings , theme , codeLanguage} = props

    const codeChangeHandler = (value: string, event: any) => {
        setLiveCodeText(value);
        if (value !== liveCodeText) {
            //If the user has entered something new , then send this to the server
            sendLiveCodeText(value, codeLanguage);
        }
    }


    const { popupMessage, showInfoMessage } = useMessage();


    return <AceEditor
            mode={codeLanguage}
            theme={theme}
            name="my-code-editor-main"
            value={activeLiveCodePeerId == null ? liveCodeText : liveCodePeersToCodeMap[activeLiveCodePeerId].msg}
            style={{ height: '100%', width: '100%', }}
            onChange={codeChangeHandler}
            onFocus={(e: any) => setShowSettings(false)}
            onCopy={(e: any) => showInfoMessage('Code copied', 'Info')}
            focus
            keyboardHandler={vimEnabled ? 'vim' : 'default'}
            readOnly={activeLiveCodePeerId != null}
            setOptions={{
                animatedScroll: true,
                displayIndentGuides: true,
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                fontSize: 18,
            }}
        />


}

export default AceEditorComponent ; 