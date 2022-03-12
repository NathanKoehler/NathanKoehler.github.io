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

const VALID_KEYS = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 
                    'o', 'p', '[', '2', '3', '4', '6', '7', 
                    '9', '0', '-', 'z', 'x', 'c' ,'v', 'b', 
                    'n', 'm' ,'s', 'd', 'g', 'h', 'j'];

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
    const [keyPressed, setPressed] = useState({});

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        }
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
        let note = KEY_TO_NOTE[event.key];
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
                <Key defaultStyle="white f l" pressedKeys={pressedKeys} audio={playSound} note='f' keyboard='Q'></Key>
                <Key defaultStyle="black fs l" pressedKeys={pressedKeys} audio={playSound} note='fs' keyboard='2'></Key>
                <Key defaultStyle="white g l" pressedKeys={pressedKeys} audio={playSound} note='g' keyboard='W'></Key>
                <Key defaultStyle="black gs l" pressedKeys={pressedKeys} audio={playSound} note='gs' keyboard='3'></Key>
                <Key defaultStyle="white a l" pressedKeys={pressedKeys} audio={playSound} note='a' keyboard='E'></Key>
                <Key defaultStyle="black as l" pressedKeys={pressedKeys} audio={playSound} note='as' keyboard='4'></Key>
                <Key defaultStyle="white b l" pressedKeys={pressedKeys} audio={playSound} note='b' keyboard='R'></Key>
                
                <Key defaultStyle="white c" pressedKeys={pressedKeys} audio={playSound} note='ch' keyboard='T'></Key>
                <Key defaultStyle="black cs" pressedKeys={pressedKeys} audio={playSound} note='csh' keyboard='6'></Key>
                <Key defaultStyle="white d" pressedKeys={pressedKeys} audio={playSound} note='dh' keyboard='Y'></Key>
                <Key defaultStyle="black ds" pressedKeys={pressedKeys} audio={playSound} note='dsh' keyboard='7'></Key>
                <Key defaultStyle="white e" pressedKeys={pressedKeys} audio={playSound} note='eh' keyboard='U'></Key>

                <Key defaultStyle="white f h" pressedKeys={pressedKeys} audio={playSound} note='fh' keyboard='I'></Key>
                <Key defaultStyle="black fs h" pressedKeys={pressedKeys} audio={playSound} note='fsh' keyboard='9'></Key>
                <Key defaultStyle="white g h" pressedKeys={pressedKeys} audio={playSound} note='gh' keyboard='O'></Key>
                <Key defaultStyle="black gs h" pressedKeys={pressedKeys} audio={playSound} note='gsh' keyboard='0'></Key>
                <Key defaultStyle="white a h" pressedKeys={pressedKeys} audio={playSound} note='ah' keyboard='P'></Key>
                <Key defaultStyle="black as h" pressedKeys={pressedKeys} audio={playSound} note='ash' keyboard='-'></Key>
                <Key defaultStyle="white b h" pressedKeys={pressedKeys} audio={playSound} note='bh' keyboard='['></Key>

                <Key defaultStyle="white c hh" pressedKeys={pressedKeys} audio={playSound} note='chh' keyboard='Z'></Key>
                <Key defaultStyle="black cs hh" pressedKeys={pressedKeys} audio={playSound} note='cshh' keyboard='S'></Key>
                <Key defaultStyle="white d hh" pressedKeys={pressedKeys} audio={playSound} note='dhh' keyboard='X'></Key>
                <Key defaultStyle="black ds hh" pressedKeys={pressedKeys} audio={playSound} note='dshh' keyboard='D'></Key>
                <Key defaultStyle="white e hh" pressedKeys={pressedKeys} audio={playSound} note='ehh' keyboard='C'></Key>
                <Key defaultStyle="white f hh" pressedKeys={pressedKeys} audio={playSound} note='fhh' keyboard='V'></Key>
                <Key defaultStyle="black fs hh" pressedKeys={pressedKeys} audio={playSound} note='fshh' keyboard='G'></Key>
                <Key defaultStyle="white g hh" pressedKeys={pressedKeys} audio={playSound} note='ghh' keyboard='B'></Key>
                <Key defaultStyle="black gs hh" pressedKeys={pressedKeys} audio={playSound} note='gshh' keyboard='H'></Key>
                <Key defaultStyle="white a hh" pressedKeys={pressedKeys} audio={playSound} note='ahh' keyboard='N'></Key>
                <Key defaultStyle="black as hh" pressedKeys={pressedKeys} audio={playSound} note='ashh' keyboard='J'></Key>
                <Key defaultStyle="white b hh" pressedKeys={pressedKeys} audio={playSound} note='bhh' keyboard='M'></Key>
                {audioFiles}
            </ul>
                
    )
}

export default Piano;