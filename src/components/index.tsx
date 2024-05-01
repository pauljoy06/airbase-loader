import {useState} from 'react';

import Skeleton from './skeleton';
import SkeletonGroup from './cardSkeletonGroup';
import TextAreaSkeleton from './textAreaSkeleton';
import TableSkeleton from './tableSkeleton';
import CardSkeletonGroup from './cardSkeletonGroup';

import './index.style.css'

/*
* This component serves as the default configuration for the assignment.
* It defines a simple structure that displays skeletons for an image and its description
* until the content is fully loaded.
*/
const AssignmentDefaultConfig = (): JSX.Element => {
    // State 'loaded' is used to manage the visibility of skeleton screens. Initially set to 'false' 
    // to show the skeleton while the content is not yet loaded. The aim was to
    // keep the logic as simple as possible.
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

// Component for displaying a group of card skeletons.
const CardsConfig = (): JSX.Element => {
    // State 'loaded' controls the display of card skeletons.
    const [loaded] = useState<boolean>(false);

    return <div className='cards-config'>
        {!loaded && <CardSkeletonGroup  count={6} gap='40px' cardWidth='400px'/>}
    </div>
} 

// Component for displaying a table skeleton.
const TableConfig = (): JSX.Element => {
    // State 'loaded' controls the display of the table skeleton.
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
