import React from 'react'
import "./approach-card.scss"
import Paragraph from '@/components/global/Paragraph/Paragraph'
import { ApproachCardPropType } from './approach-card.types'



const ApproachCard = ({ title, icon, iconText, description }: ApproachCardPropType) => {
    return (
        <div className='approachCard__wrapper'>
            <h3 className='title'>{title}</h3>
            <div className='icon__wrapper'>
                <div className='font-semibold text-3xl text-blue-700'>

                    {icon}
                </div>
                {iconText}
            </div>
            <Paragraph text={description} />
        </div>
    )
}

export default ApproachCard
