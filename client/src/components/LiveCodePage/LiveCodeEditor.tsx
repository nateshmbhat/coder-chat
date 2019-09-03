import React, { useState, useEffect, Suspense, createContext, useContext } from 'react';
import { Button, Dropdown, Icon, Message, Popup } from 'semantic-ui-react';
import { ACE_EDITOR_LANGUAGES, ACE_EDITOR_THEMES, senderToLiveCodeMap, GlobalStoreType } from '../../types/types';
import { useStoreState } from '../../store/globalStore';
import { useMessage } from '../../hooks/useMessage';
import { saveAs } from 'file-saver';
import { BigLoaderCentered } from '../Misc';

const AceEditorComponent = React.lazy(() => import('./AceEditor'));


export const EditorContext = createContext({ theme: 'monokai', vimEnabled: false, codeLanguage: 'java', showSettings: false, fontSize: 18 })

const LiveCodeEditor = () => {

    const [liveCodeText, activeLiveCodePeerId, liveCodePeersToCodeMap, myUsername] = useStoreState(state => [state.liveCodeText, state.activeLiveCodePeerId, state.liveCodePeersToCodeMap, state.myUsername]);
    const { popupMessage, showInfoMessage } = useMessage();

    const [theme, setTheme] = useState('monokai');
    const [vimEnabled, setVimEnabled] = useState(false);
    const [codeLanguage, setCodeLanguage] = useState('java');
    const [showSettings, setShowSettings] = useState(false);
    const [fontSize, setFontSize] = useState(18);

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

            <Popup trigger={

                <Button toggle active={vimEnabled} onClick={e => setVimEnabled(!vimEnabled)}>Vim</Button>
            }
            >Toggle Vim mode</Popup>
            <Popup trigger={

                <Button onClick={e => {
                    var blob = new Blob([activePeer == null ? liveCodeText : liveCodePeersToCodeMap[activePeer].msg], { type: "text/plain;charset=utf-8" });
                    saveAs(blob, `${activePeer || myUsername}-${codeLanguage}`);
                }} icon={<Icon name='download' />} />

            }
            >Download Code</Popup>
            <Popup position='bottom center' trigger={

                <Button.Group>
                    <Button icon={<Icon name='plus' />} onClick={() => setFontSize(fontSize + 1)}></Button>
                    <Button.Or />
                    <Button icon='minus' onClick={() => setFontSize(fontSize - 1)}></Button>
                </Button.Group>
            }>
                Change Font Size
            </Popup>

        </div >
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

                <Suspense fallback={<BigLoaderCentered />}>
                    <EditorContext.Provider value={
                        {
                            theme: theme,
                            vimEnabled: vimEnabled,
                            codeLanguage: codeLanguage,
                            showSettings: showSettings,
                            fontSize: fontSize
                        }
                    }  >
                        <AceEditorComponent setShowSettings={setShowSettings} />
                    </EditorContext.Provider>
                </Suspense>

            </div>
        </>

    );
};


export default (LiveCodeEditor); 