import { CSSProperties } from 'react'
import Skeleton from './skeleton'

interface TextAreaSkeletonProps {
    count?: number, 
    gap?: string,
    className?: string,
}

const TextAreaSkeleton = ({gap='10px', className}: TextAreaSkeletonProps): JSX.Element => {
    const customStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gap: gap,
    }

    let customClassName: string = `skeleton`;
    if (className) customClassName += ` ${customClassName}`;

    return <div className='text-area-skeleton' style={customStyle}>
        <Skeleton height='30px'/> 
        <Skeleton height='30px'/> 
        <Skeleton height='30px' width='50%'/> 
    </div>
}

export default TextAreaSkeleton;
