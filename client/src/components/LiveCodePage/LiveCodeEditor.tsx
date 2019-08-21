import React, { useState, useEffect, Suspense } from 'react';
import { Button, Dropdown, Icon, Modal, Header, Message } from 'semantic-ui-react';
import { ACE_EDITOR_LANGUAGES, ACE_EDITOR_THEMES, senderToLiveCodeMap, GlobalStoreType } from '../../types/types';
import { useStoreState } from '../../store/globalStore';
import { useMessage } from '../../hooks/useMessage';
import { saveAs } from 'file-saver';
import { BigLoaderCentered } from '../Misc';

const AceEditorComponent  = React.lazy(()=>import('./AceEditor')); 

const LiveCodeEditor = () => {

    const [liveCodeText, activeLiveCodePeerId, liveCodePeersToCodeMap, myUsername] = useStoreState(state => [state.liveCodeText, state.activeLiveCodePeerId, state.liveCodePeersToCodeMap, state.myUsername]);
    const { popupMessage, showInfoMessage } = useMessage();

    const [theme, setTheme] = useState('monokai');
    const [vimEnabled, setVimEnabled] = useState(false);
    const [codeLanguage, setCodeLanguage] = useState('java');
    const [showSettings, setShowSettings] = useState(false);


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
                var blob = new Blob([activePeer == null ? liveCodeText : liveCodePeersToCodeMap[activePeer].msg], { type: "text/plain;charset=utf-8" });
                saveAs(blob, `${activePeer || myUsername}-${codeLanguage}`);
            }} icon={<Icon name='download' />} />
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

                <Suspense fallback={<BigLoaderCentered/>}>
                    <AceEditorComponent
                        codeLanguage={codeLanguage}
                        setShowSettings={setShowSettings}
                        theme={theme}
                        vimEnabled={vimEnabled}
                    />
                </Suspense>

            </div>

        </>

    );
};


export default (LiveCodeEditor); 