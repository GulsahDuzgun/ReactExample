import React from 'react'
import EmojiResultRow from './EmojiResultRow'
import '../style/EmojiResults.css'

function EmojiResults(props) {
    return (
        <div className='component-emoji-results'>
            {props.emojiData.map((item, index) => 
                <EmojiResultRow title={ item.title } emoji={ item.symbol } key={ index }/>
            )}
        </div>
    )
}

export default EmojiResults
