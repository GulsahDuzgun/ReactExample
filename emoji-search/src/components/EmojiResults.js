import React from 'react'
import EmojiResultRow from './EmojiResultRow'

function EmojiResults(props) {
    return (
        <div>
            {props.emojiData.map((item, index) => 
                <EmojiResultRow title={item.title} emoji={item.symbol} key={index}/>
            )}
        </div>
    )
}

export default EmojiResults
