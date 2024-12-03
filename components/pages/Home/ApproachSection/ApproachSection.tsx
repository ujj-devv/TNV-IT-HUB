import Paragraph from '@/components/global/Paragraph/Paragraph'
import React from 'react'
import HoverVerticalTabs from '@/components/global/VerticalTabs/VerticalTabs'

const ApproachSection = () => {
    return (
        <div className='px-8 lg:px-16 py-8'>
            <div className='flex flex-col gap-4 mb-12 justify-center items-center lg:justify-start lg:items-start'>
                <h2 className='font-bold text-5xl text-[#1E293B]'>
                    <span className='text-blue-700 '>Cutting-Edge</span>{" "}
                    Approach
                </h2>
                <Paragraph
                        text='Experience unmatched security with our groundbreaking 8-step approach. 
                Our advanced techniques and innovative solutions provide unparalleled protection against emerging 
                threats and vulnerabilities, taking security to new heights. Revolutionize your security measures with us.'
                />
            </div>
            <HoverVerticalTabs />
        </div>
    )
}

export default ApproachSection
