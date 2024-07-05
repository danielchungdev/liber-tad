import { FC } from 'react'

interface TagProps {
    title: string
}

export const Tag: FC<TagProps> = ({ title }) => {
    return (
        <div className='border border-secondary rounded-full p-1 px-3 text-small-body bg-secondary text-white m-1'>
            <p>{title}</p>
        </div>
    )
}