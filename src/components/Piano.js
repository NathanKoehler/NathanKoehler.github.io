import React, { useEffect, useState } from "react";
import "./Piano.css";
import Key from "./Key";

function Piano() {
    const NOTES = [
        'b', 'as', 'a', 'gs',
        'g', 'fs', 'f', 'e',
        'ds', 'd', 'cs', 'c', 
        'bh', 'ash', 'ah', 'gsh', 
        'gh', 'fsh', 'fh', 'eh', 
        'dsh', 'dh', 'csh', 'ch', 
        'bhh', 'ashh', 'ahh', 'gshh', 
        'ghh', 'fshh', 'fhh', 'ehh', 
        'dshh', 'dhh', 'cshh', 'chh', 
    ];

const KEY_TO_NOTE = {
    'q': 'f',
    'w': 'g',
    'e': 'a',
    'r': 'b',
    't': 'ch',
    'y': 'dh',
    'u': 'eh',
    'i': 'fh',
    'o': 'gh',
    'p': 'ah',
    '[': 'bh',
    '2': 'fs',
    '3': 'gs',
    '4': 'as',
    '6': 'csh',
    '7': 'dsh',
    '9': 'fsh',
    '0': 'gsh',
    '-': 'ash',

    'z': 'chh',
    'x': 'dhh',
    'c': 'ehh',
    'v': 'fhh',
    'b': 'ghh',
    'n': 'ahh',
    'm': 'bhh',
    's': 'cshh',
    'd': 'dshh',
    'g': 'fshh',
    'h': 'gshh',
    'j': 'ashh',
  };

    const [pressedKeys, setKeys] = useState([]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
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
        const noteAudio = new Audio(document.getElementById(note).src);
        noteAudio.play();
    }

    const handleKeyDown = (event) => {
        event.preventDefault();
        if (event.repeat) {
          return;
        }
        const note = KEY_TO_NOTE[event.key];
        if (!pressedKeys.includes(note) && NOTES.includes(note)) {
            setKeys((oldKeys) => [...oldKeys, note]);
            playSound(note);
        }
      }
    
    const handleKeyUp = (event) => {
        const pressedNote = KEY_TO_NOTE[event.key];
        setKeys((oldKeys) => oldKeys.filter(note => note !== pressedNote));
    }

    return (
            <ul className="set">
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