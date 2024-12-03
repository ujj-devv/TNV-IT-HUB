import React from 'react'
import "./paragraph.scss"
import { ParagraphPropType } from './paragraph.types'


const Paragraph = ({ text }: ParagraphPropType) => {
    return (
        <div className='paragraph__wrapper'>
            <p className=''>
                {text}
            </p>
        </div>
    )
}

export default Paragraph
