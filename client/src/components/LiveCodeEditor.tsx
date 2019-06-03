import React, { useState } from 'react';
import { connect } from 'react-redux';
import CodeMirror from 'react-codemirror';
import { ActionType } from '../types/reducerTypes';
import { Dispatch } from 'redux';
import styled from 'styled-components';
import ReactSelect from 'react-select' ; 
import { CodeMirrorThemeToCSS } from '../types/mytypes';
import {Button, Dropdown} from 'semantic-ui-react' ; 
require('codemirror/lib/codemirror.css');
require('codemirror/mode/clike/clike');
require('codemirror/addon/mode/loadmode');
require('codemirror/addon/edit/closebrackets');
require('codemirror/addon/hint/show-hint');
require('codemirror/keymap/vim');

const loadTheme = async (theme: string) => require(`codemirror/theme/${theme}.css`);

interface LiveCodeEditorProps {
    liveCodeText: string,
    setLiveCodeText: (text: string) => void
}

const updateHandler = (newValue: string, change: CodeMirror.EditorChange) => {
    console.log(newValue, change)
}

const LiveCodeEditor = (props: LiveCodeEditorProps) => {

    const [theme, setTheme] = useState('dracula');
    const [vimEnabled , setVimEnabled] = useState(false) ; 

    loadTheme(theme);
    const options = {
        lineNumbers: true,
        mode: 'text/x-java',
        matchBrackets: true,
        autoCloseBrackets: true,
        theme: theme,
        keyMap: vimEnabled?'vim':'default',
        autoSave: true,
    }

    return (
        <>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent : 'flex-end' , 
                    }}>
                        
                        <Dropdown placeholder='Theme' value={theme} search selection options={
                            Object.keys(CodeMirrorThemeToCSS).map(key=>({
                              text : key , value : CodeMirrorThemeToCSS[key]  
                            }))
                        } onChange={(e,data)=>{
                            if(typeof data.value=='string')
                                setTheme(data.value)}
                            } />
                        <Button toggle active={vimEnabled} onClick={e=>setVimEnabled(!vimEnabled)}>Vim</Button>
                        
                   </div>
                        <CodeMirror onChange={updateHandler} value={props.liveCodeText} options={options} />
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