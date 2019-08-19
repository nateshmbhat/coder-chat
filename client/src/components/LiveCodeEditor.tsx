import React, { useState, useEffect } from 'react';
import AceEditor from 'react-ace'
import { Button, Dropdown, Icon, Modal, Header, Message } from 'semantic-ui-react';
import { sendLiveCodeText } from '../handlers/chat/sender';
import { ACE_EDITOR_LANGUAGES, ACE_EDITOR_THEMES, senderToLiveCodeMap, GlobalStoreType } from '../types/types';
import 'brace/keybinding/vim';
import { useStoreActions, useStoreState } from '../store/globalStore';
import { useMessage } from '../hooks/useMessage';
import {saveAs} from 'file-saver' ; 

ACE_EDITOR_LANGUAGES.forEach(lang => {
    require(`brace/mode/${lang}`);
    require(`brace/snippets/${lang}`);
});

ACE_EDITOR_THEMES.forEach(theme => {
    require(`brace/theme/${theme}`);
});


const LiveCodeEditor = () => {

    const [liveCodeText, activeLiveCodePeerId, liveCodePeersToCodeMap, myUsername] = useStoreState(state => [state.liveCodeText, state.activeLiveCodePeerId, state.liveCodePeersToCodeMap , state.myUsername]);
    const setLiveCodeText = useStoreActions(actions=>actions.setLiveCodeText)
    const {popupMessage,showInfoMessage} = useMessage() ; 

    const [theme, setTheme] = useState('monokai');
    const [vimEnabled, setVimEnabled] = useState(false);
    const [codeLanguage, setCodeLanguage] = useState('java');
    const [showSettings, setShowSettings] = useState(false);


    const codeChangeHandler = (value: string, event: any) => {
        setLiveCodeText(value);
        if (value !== liveCodeText) {
            //If the user has entered something new , then send this to the server
            sendLiveCodeText(value, codeLanguage);
        }
    }
    const activePeer = activeLiveCodePeerId;

    const EditorSettingsPanel = () => (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
        }}>

            <Dropdown placeholder='Theme' value={theme} search selection options={
                ACE_EDITOR_THEMES.map(theme => ({
                    text: theme, value: theme
                }))
            } onChange={(e, data) => {
                if (typeof data.value == 'string')
                    setTheme(data.value)
            }
            } />


            <Dropdown placeholder='Language' value={activePeer != null ? liveCodePeersToCodeMap[activePeer].language : codeLanguage} selection options={
                ACE_EDITOR_LANGUAGES.map(lang => ({
                    text: lang, value: lang
                }))
            } onChange={(e, data) => {
                if (typeof data.value == 'string')
                    setCodeLanguage(data.value)
            }
            } />

            <Button toggle active={vimEnabled} onClick={e => setVimEnabled(!vimEnabled)}>Vim</Button>
            <Button onClick={e => {
                var blob = new Blob([ activePeer==null?liveCodeText:liveCodePeersToCodeMap[activePeer].msg], { type: "text/plain;charset=utf-8" });
                saveAs(blob, `${activePeer||myUsername}-${codeLanguage}` );
            }} icon={<Icon name='download'/>} />
        </div>
    );

    return (
        <>
            <Message hidden={popupMessage.hidden} header={popupMessage.header} content={popupMessage.message} />

            <div style={{ display: 'relative', height: '100%' }}>
                <div style={{ opacity: 0.8, position: 'absolute', zIndex: 10, textAlign: 'right', right: 0 }}>
                    <Button toggle active={showSettings} onClick={e => setShowSettings(!showSettings)} circular icon>
                        <Icon name='setting' />
                    </Button>
                    {showSettings && <EditorSettingsPanel />}
                </div>

                <AceEditor
                    mode={codeLanguage}
                    theme={theme}
                    name="my-code-editor-main"
                    value={activeLiveCodePeerId == null ? liveCodeText : liveCodePeersToCodeMap[activeLiveCodePeerId].msg}
                    style={{ height: '100%', width: '100%', marginTop: '3px' }}
                    onChange={codeChangeHandler}
                    onFocus={e => setShowSettings(false)}
                    onCopy={e => showInfoMessage('Code copied' , 'Info') }
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
            </div>
        </>

    );
};


export default (LiveCodeEditor); 