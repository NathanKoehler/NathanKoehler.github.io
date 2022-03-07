import React from "react";
import "./Piano.css";

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

    const playNote = (note) => {
        const noteAudio = new Audio(document.getElementById(note).src);
        noteAudio.play();
    }
    
    const keyDown = (e, pianoKey) => {
        playNote(pianoKey);
    }

    return (
            <ul className="set">
                <li className="white b l" onMouseDown={(e) => keyDown(e, 'f')}></li>
                <li className="black as l" onMouseDown={(e) => keyDown(e, 'fs')}></li>
                <li className="white a l" onMouseDown={(e) => keyDown(e, 'g')}></li>
                <li className="black gs l" onMouseDown={(e) => keyDown(e, 'gs')}></li>
                <li className="white g l" onMouseDown={(e) => keyDown(e, 'a')}></li>
                <li className="black fs l" onMouseDown={(e) => keyDown(e, 'as')}></li>
                <li className="white f l" onMouseDown={(e) => keyDown(e, 'b')}></li>
                
                <li className="white e" onMouseDown={(e) => keyDown(e, 'ch')}></li>
                <li className="black ds" onMouseDown={(e) => keyDown(e, 'csh')}></li>
                <li className="white d" onMouseDown={(e) => keyDown(e, 'dh')}></li>
                <li className="black cs" onMouseDown={(e) => keyDown(e, 'dsh')}></li>
                <li className="white c" onMouseDown={(e) => keyDown(e, 'eh')}></li>

                <li className="white b h" onMouseDown={(e) => keyDown(e, 'fh')}></li>
                <li className="black as h" onMouseDown={(e) => keyDown(e, 'fsh')}></li>
                <li className="white a h" onMouseDown={(e) => keyDown(e, 'gh')}></li>
                <li className="black gs h" onMouseDown={(e) => keyDown(e, 'gsh')}></li>
                <li className="white g h" onMouseDown={(e) => keyDown(e, 'ah')}></li>
                <li className="black fs h" onMouseDown={(e) => keyDown(e, 'ash')}></li>
                <li className="white f h" onMouseDown={(e) => keyDown(e, 'bh')}></li>

                <li className="white e hh" onMouseDown={(e) => keyDown(e, 'chh')}></li>
                <li className="black ds hh" onMouseDown={(e) => keyDown(e, 'cshh')}></li>
                <li className="white d hh" onMouseDown={(e) => keyDown(e, 'dhh')}></li>
                <li className="black cs hh" onMouseDown={(e) => keyDown(e, 'dshh')}></li>
                <li className="white c hh" onMouseDown={(e) => keyDown(e, 'ehh')}></li>
                <li className="white b hh" onMouseDown={(e) => keyDown(e, 'fhh')}></li>
                <li className="black as hh" onMouseDown={(e) => keyDown(e, 'fshh')}></li>
                <li className="white a hh" onMouseDown={(e) => keyDown(e, 'ghh')}></li>
                <li className="black gs hh" onMouseDown={(e) => keyDown(e, 'gshh')}></li>
                <li className="white g hh" onMouseDown={(e) => keyDown(e, 'ahh')}></li>
                <li className="black fs hh" onMouseDown={(e) => keyDown(e, 'ashh')}></li>
                <li className="white f hh" onMouseDown={(e) => keyDown(e, 'bhh')}></li>
                {audioFiles}
            </ul>
                
    )
}

export default Piano;