import { CSSProperties } from "react";

import TextAreaSkeleton from "./textAreaSkeleton";
import Skeleton from "./skeleton";

import './cardSkeleton.styles.css'

interface CardSkeletonProps {
    width?: string,
}

const CardSkeleton = ({width='300px'}: CardSkeletonProps): JSX.Element => {
    const customStyle: CSSProperties = {
        width,
    }

    // let customClassName: string = `skeleton`;
    // if (className) customClassName += ` ${customClassName}`;

    return <div className='card-skeleton' style={customStyle}> 
        <div className='top-row'>
            <div className='card-image'>
                <Skeleton type='circle'/>
            </div>
            <div className='card-primary-details'>
                <Skeleton height='30px'/>
            </div>
        </div>
        <div className='body'>
            <TextAreaSkeleton count={4} />
        </div>
    </div>
}

export default CardSkeleton;
