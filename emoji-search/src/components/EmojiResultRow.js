import React from 'react'
import '../style/EmojiResultRow.css'

function EmojiResultRow (props) {
    const codePointHex = props.emoji.codePointAt(0).toString(16);
    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png `

    return (
        <div className="component-emoji-result-row">
            <img
                alt={ props.title }
                src={ src }
            />
            <span className='title'>
                { props.title }
            </span>
        </div>
    )
}

export default EmojiResultRow
