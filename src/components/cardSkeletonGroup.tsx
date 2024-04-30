import { CSSProperties } from 'react'
import CardSkeleton from './cardSkeleton'

import './cardSkeleteonGroup.styles.css'

interface CardSkeletonGroupProps {
    count?: number, 
    gap?: string,
    cardWidth?: string,
}

const CardSkeletonGroup = ({count=1, gap='30px', cardWidth='300px'}: CardSkeletonGroupProps): JSX.Element => {
    const customStyle: CSSProperties = {
        gap,
    }

    if (count < 0) {
        throw new Error('\'count\' should be postive');
    }

    return <div className='card-skeleton-group' style={customStyle}>
        {Array.from({length: count}, (_, index) => index +1).map((_, index ) => <CardSkeleton
            width={cardWidth}
            key={index}
        />)}
    </div>
}



export default CardSkeletonGroup;

