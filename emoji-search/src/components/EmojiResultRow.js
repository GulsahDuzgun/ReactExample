import React from 'react'

function EmojiResultRow (props) {
    const codePointHex = props.emoji.codePointAt(0).toString(16);
    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png `

    return (
        <div>
        <img
            alt={ props.title }
            src={ src }
            />
            <span>
            {props.title}
            </span>
        </div>
    )
}

export default EmojiResultRow
