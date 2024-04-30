import {useState} from 'react';

import Skeleton from './skeleton';
import SkeletonGroup from './cardSkeletonGroup';
import TextAreaSkeleton from './textAreaSkeleton';
import TableSkeleton from './tableSkeleton';
import CardSkeletonGroup from './cardSkeletonGroup';

import './index.style.css'

const AssignmentDefaultConfig = (): JSX.Element => {
    const [loaded] = useState<boolean>(false);

    return <div className='assignment-default-config'>
        <div className='image'>
            {!loaded && <Skeleton />}
        </div>
        <div className='description-about-image'>
            {!loaded && <TextAreaSkeleton />}
        </div>
    </div>
}

const CardsConfig = (): JSX.Element => {
    const [loaded] = useState<boolean>(false);

    return <div className='cards-config'>
        {!loaded && <CardSkeletonGroup  count={6} gap='40px' cardWidth='400px'/>}
    </div>
} 

const TableConfig = (): JSX.Element => {
    const [loaded] = useState<boolean>(false);

    return <div className='table-config'>
        {!loaded && <TableSkeleton />}
    </div>
}


export {
    Skeleton,
    SkeletonGroup,
    TextAreaSkeleton,
    
    CardsConfig,
    TableConfig,
    AssignmentDefaultConfig,
}
