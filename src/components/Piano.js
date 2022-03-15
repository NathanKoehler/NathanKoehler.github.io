import React, { useEffect, useState } from "react";
import "./Piano.css";
import Key from "./Key";

const NOTES = [
    'b00', 'a01', 'a00', 'g01',
    'g00', 'f01', 'f00', 'e00',
    'd01', 'd00', 'c01', 'c00', 
    'b10', 'a11', 'a10', 'g11', 
    'g10', 'f11', 'f10', 'e10', 
    'd11', 'd10', 'c11', 'c10', 
    'b20', 'a21', 'a20', 'g21', 
    'g20', 'f21', 'f20', 'e20', 
    'd21', 'd20', 'c21', 'c20', 
];

const KEY_TO_NOTE = {
'q': 'f00',
'w': 'g00',
'e': 'a00',
'r': 'b00',
't': 'c10',
'y': 'd10',
'u': 'e10',
'i': 'f10',
'o': 'g10',
'p': 'a10',
'[': 'b10',
'2': 'f01',
'3': 'g01',
'4': 'a01',
'6': 'c11',
'7': 'd11',
'9': 'f11',
'0': 'g11',
'-': 'a11',

'z': 'c20',
'x': 'd20',
'c': 'e20',
'v': 'f20',
'b': 'g20',
'n': 'a20',
'm': 'b20',
's': 'c21',
'd': 'd21',
'g': 'f21',
'h': 'g21',
'j': 'a21',
};

function Piano() {
    const [pressedKeys, setKeys] = useState([]);
    const [fadeIn, setFadeIn] = useState("");

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        setFadeIn("active");
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    

    const audioFiles = NOTES.map((note, index) => {
        return (
            <audio
                id={note}
                key={index}
                src={`../../notes/${note}.mp3`}
            />
        );
    });

    const playSound = (note) => {
        if (window.scrollY < 900) { // likely impossible if piano is out of view, failsafe
            const noteAudio = new Audio(document.getElementById(note).src);
            noteAudio.play();
        }
    }

    const handleKeyDown = (event) => {
        event.preventDefault();
        if (event.repeat) {
          return; // key down does not repeat and key returns if no visible
        }
        if (window.scrollY < 900) {
            const note = KEY_TO_NOTE[event.key];
            if (!pressedKeys.includes(note) && NOTES.includes(note)) {
                setKeys((oldKeys) => [...oldKeys, note]);
                playSound(note);
            }
        }

      }
    
    const handleKeyUp = (event) => {
        const pressedNote = KEY_TO_NOTE[event.key];
        setKeys((oldKeys) => oldKeys.filter(note => note !== pressedNote));
    }

    return (
            <ul className={`set ${fadeIn}`}>
                <Key pressedKeys={pressedKeys} audio={playSound} keyboard='q'></Key>
                <Key pressedKeys={pressedKeys} audio={playSound} keyboard='2'></Key>
                <Key pressedKeys={pressedKeys} audio={playSound} keyboard='w'></Key>
                <Key pressedKeys={pressedKeys} audio={playSound} keyboard='3'></Key>
                <Key pressedKeys={pressedKeys} audio={playSound} keyboard='e'></Key>
                <Key pressedKeys={pressedKeys} audio={playSound} keyboard='4'></Key>
                <Key pressedKeys={pressedKeys} audio={playSound} keyboard='r'></Key>
                <Key pressedKeys={pressedKeys} audio={playSound} keyboard='t'></Key>
                <Key pressedKeys={pressedKeys} audio={playSound} keyboard='6'></Key>
                <Key pressedKeys={pressedKeys} audio={playSound} keyboard='y'></Key>
                <Key pressedKeys={pressedKeys} audio={playSound} keyboard='7'></Key>
                <Key pressedKeys={pressedKeys} audio={playSound} keyboard='u'></Key>

                <Key pressedKeys={pressedKeys} audio={playSound} keyboard='i'></Key>
                <Key pressedKeys={pressedKeys} audio={playSound} keyboard='9'></Key>
                <Key pressedKeys={pressedKeys} audio={playSound} keyboard='o'></Key>
                <Key pressedKeys={pressedKeys} audio={playSound} keyboard='0'></Key>
                <Key pressedKeys={pressedKeys} audio={playSound} keyboard='p'></Key>
                <Key pressedKeys={pressedKeys} audio={playSound} keyboard='-'></Key>
                <Key pressedKeys={pressedKeys} audio={playSound} keyboard='['></Key>

                <Key pressedKeys={pressedKeys} audio={playSound} keyboard='z'></Key>
                <Key pressedKeys={pressedKeys} audio={playSound} keyboard='s'></Key>
                <Key pressedKeys={pressedKeys} audio={playSound} keyboard='x'></Key>
                <Key pressedKeys={pressedKeys} audio={playSound} keyboard='d'></Key>
                <Key pressedKeys={pressedKeys} audio={playSound} keyboard='c'></Key>
                <Key pressedKeys={pressedKeys} audio={playSound} keyboard='v'></Key>
                <Key pressedKeys={pressedKeys} audio={playSound} keyboard='g'></Key>
                <Key pressedKeys={pressedKeys} audio={playSound} keyboard='b'></Key>
                <Key pressedKeys={pressedKeys} audio={playSound} keyboard='h'></Key>
                <Key pressedKeys={pressedKeys} audio={playSound} keyboard='n'></Key>
                <Key pressedKeys={pressedKeys} audio={playSound} keyboard='j'></Key>
                <Key pressedKeys={pressedKeys} audio={playSound} keyboard='m'></Key>
                {audioFiles}
            </ul>
    )
}

export default Piano;