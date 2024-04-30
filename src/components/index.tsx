import {useState} from 'react';

import Skeleton from './skeleton';
import SkeletonGroup from './cardSkeletonGroup';
import TextAreaSkeleton from './textAreaSkeleton';

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

export {
    Skeleton,
    SkeletonGroup,
    TextAreaSkeleton,

    AssignmentDefaultConfig,
}
