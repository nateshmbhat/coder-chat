import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CodeMirror from 'react-codemirror';
import { ActionType } from '../types/reducerTypes';
import { Dispatch } from 'redux';
import { CodeMirrorThemeToCSS, CodeMirrorLanguageToMIMEType, CodeMirrorLanguageToModePaths } from '../types/mytypes';
import { Button, Dropdown, Icon } from 'semantic-ui-react';
import { sendLiveCodeText } from '../handlers/chat/sender';

require('codemirror/lib/codemirror.css');

require('codemirror/mode/clike/clike');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/htmlmixed/htmlmixed');
require('codemirror/mode/python/python');

require('codemirror/addon/mode/loadmode');
require('codemirror/addon/edit/closebrackets');
require('codemirror/addon/hint/show-hint');
require('codemirror/keymap/vim');


interface LiveCodeEditorProps {
    liveCodeText : string,
    setLiveCodeText: (text: string) => void
}

const LiveCodeEditor = (props: LiveCodeEditorProps) => {
    const [theme, setTheme] = useState('dracula');
    const [vimEnabled, setVimEnabled] = useState(false);
    const [codeLanguage, setCodeLanguage] = useState('cpp');
    const [showSettings, setShowSettings] = useState(false);

    const loadTheme = async (theme: string) => require(`codemirror/theme/${theme}.css`);

    const codemirrorChangeHandler = (newValue: string, change: CodeMirror.EditorChange) => {
        props.setLiveCodeText(newValue) ; 
        if(newValue!==props.liveCodeText){
                //If the user has entered something new , then send this to the server
                sendLiveCodeText(newValue) ;   
        }
    }

    const EditorSettingsPanel = () => (
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                opacity:0.95
            }}>

                <Dropdown placeholder='Theme' value={theme} search selection options={
                    Object.keys(CodeMirrorThemeToCSS).map(key => ({
                        text: key, value: CodeMirrorThemeToCSS[key]
                    }))
                } onChange={(e, data) => {
                    if (typeof data.value == 'string')
                        setTheme(data.value)
                }
                } />


                <Dropdown placeholder='Language' value={codeLanguage} selection options={
                    Object.keys(CodeMirrorLanguageToMIMEType).map(key => ({
                        text: key, value: key
                    }))
                } onChange={(e, data) => {
                    if (typeof data.value == 'string')
                        setCodeLanguage(data.value)
                }
                } />

                <Button toggle active={vimEnabled} onClick={e => setVimEnabled(!vimEnabled)}>Vim</Button>
            </div>
    );

    useEffect(() => {
        loadTheme(theme);
    }, [theme])

    const options = {
        lineNumbers: true,
        mode: CodeMirrorLanguageToMIMEType[codeLanguage],
        matchBrackets: true,
        autoCloseBrackets: true,
        theme: theme,
        keyMap: vimEnabled ? 'vim' : 'default',
        autoSave: true,
    }

    return (
        <>
            <div style={{ display: 'relative', height: '100%' }}>
                <div style={{ opacity:0.8 , position: 'absolute', zIndex: 10, textAlign:'right' ,width:'100%' }}>
                    <Button toggle active={showSettings} onClick={e=>setShowSettings(!showSettings)} circular icon>
                        <Icon name='setting' />
                    </Button>
                    {showSettings && <EditorSettingsPanel/>}
                </div>
                <CodeMirror autoFocus onChange={codemirrorChangeHandler} value={props.liveCodeText} options={options} />
            </div>
        </>

    );
};

const mapStateToProps = (state: LiveCodeEditorProps) => {
    return {
        liveCodeText: state.liveCodeText
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setLiveCodeText: (text: string) => dispatch({ type: ActionType.SET_LIVECODE_TEXT, payload: text })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LiveCodeEditor); 