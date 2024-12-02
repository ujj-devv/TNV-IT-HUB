import ShadTabs from '@/components/ui/Tabs/ShadTabs'
import React from 'react'

const triggerList = [
    { value: 'account', label: 'Account' },
    { value: 'password', label: 'Password' },
    { value: 'settings', label: 'Settings' },
]

const contentList = [
    { value: 'account', content: 'Make changes to your account here.' },
    { value: 'password', content: 'Change your password here.' },
    { value: 'settings', content: 'Adjust your settings here.' },
]

const ApproachSection = () => {
    return (
        <div className='my-4 mx-auto flex flex-col justify-center items-center'>
            <div>
                <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-12">
                    Sectors
                </h2>
            </div>
            <ShadTabs triggerList={triggerList} contentList={contentList} />
        </div>
    )
}

export default ApproachSection
