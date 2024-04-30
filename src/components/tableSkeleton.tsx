import Skeleton from "./skeleton"
import { getRandomInt } from "../helpers"

import './tableSkeleton.styles.css'

const TableSkeleton = () => {
    return <div className='table-skeleton'>
        {[1, 2, 3, 4].map(item => <TableColumnSkeleton />)}
    </div>
}

const TableColumnSkeleton = () => {
    return <div className='table-column-skeleton'>
        <div className='header'>
            <Skeleton height='35px'  />
        </div>
        <div className='rows'>
            {[1, 2, 3, 4, 5, 6].map(() => <Skeleton height='15px' width={`${getRandomInt(30, 100)}%`} />)}
        </div>
    </div>
}



export default TableSkeleton;
