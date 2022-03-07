import React from "react";
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

    const audioFiles = NOTES.map((note, index) => {
        return (
            <audio
                id={note}
                key={index}
                src={`../../notes/${note}.mp3`}
            />
        );
    });

    const playSound = (e, note) => {
        const noteAudio = new Audio(document.getElementById(note).src);
        noteAudio.play();
    }
    
    const keyDown = (e, pianoKey) => {
        playSound(e, pianoKey);
    }

    return (
            <ul className="set">
                <Key defaultStyle="white b l" audio={playSound} note='f'></Key>
                <Key defaultStyle="black as l" audio={playSound} note='fs'></Key>
                <Key defaultStyle="white a l" audio={playSound} note='g'></Key>
                <Key defaultStyle="black gs l" audio={playSound} note='gs'></Key>
                <Key defaultStyle="white g l" audio={playSound} note='a'></Key>
                <Key defaultStyle="black fs l" audio={playSound} note='as'></Key>
                <Key defaultStyle="white f l" audio={playSound} note='b'></Key>
                
                <Key defaultStyle="white e" audio={playSound} note='ch'></Key>
                <Key defaultStyle="black ds" audio={playSound} note='csh'></Key>
                <Key defaultStyle="white d" audio={playSound} note='dh'></Key>
                <Key defaultStyle="black cs" audio={playSound} note='dsh'></Key>
                <Key defaultStyle="white c" audio={playSound} note='eh'></Key>

                <Key defaultStyle="white b h" audio={playSound} note='fh'></Key>
                <Key defaultStyle="black as h" audio={playSound} note='fsh'></Key>
                <Key defaultStyle="white a h" audio={playSound} note='gh'></Key>
                <Key defaultStyle="black gs h" audio={playSound} note='gsh'></Key>
                <Key defaultStyle="white g h" audio={playSound} note='ah'></Key>
                <Key defaultStyle="black fs h" audio={playSound} note='ash'></Key>
                <Key defaultStyle="white f h" audio={playSound} note='bh'></Key>

                <Key defaultStyle="white e hh" audio={playSound} note='chh'></Key>
                <Key defaultStyle="black ds hh" audio={playSound} note='cshh'></Key>
                <Key defaultStyle="white d hh" audio={playSound} note='dhh'></Key>
                <Key defaultStyle="black cs hh" audio={playSound} note='dshh'></Key>
                <Key defaultStyle="white c hh" audio={playSound} note='ehh'></Key>
                <Key defaultStyle="white b hh" audio={playSound} note='fhh'></Key>
                <Key defaultStyle="black as hh" audio={playSound} note='fshh'></Key>
                <Key defaultStyle="white a hh" audio={playSound} note='ghh'></Key>
                <Key defaultStyle="black gs hh" audio={playSound} note='gshh'></Key>
                <Key defaultStyle="white g hh" audio={playSound} note='ahh'></Key>
                <Key defaultStyle="black fs hh" audio={playSound} note='ashh'></Key>
                <Key defaultStyle="white f hh" audio={playSound} note='bhh'></Key>
                {audioFiles}
            </ul>
                
    )
}

export default Piano;