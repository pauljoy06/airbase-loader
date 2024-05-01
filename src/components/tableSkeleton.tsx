import Skeleton from "./skeleton"
import { getRandomInt } from "../helpers"

import './tableSkeleton.styles.css'
import { count } from "console";

interface TableSkeletonProps {
    rowCount?: number,
    columnCount?: number,
}

const TableSkeleton = ({rowCount=6, columnCount=4}: TableSkeletonProps) => {
    if (rowCount < 0) {
        throw new Error('\'rowCount\' should be postive');
    }
    if (columnCount < 0) {
        throw new Error('\'columnCount\' should be postive');
    }

    return <div className='table-skeleton'>
        {Array.from({length: columnCount}, (_, index) => index +1)
            .map(item => <TableColumnSkeleton rowCount={7} key={item} />)}
    </div>
}

/*
 * TableColumnSkeleton component that takes a rowCount prop.
 * Renders a column skeleton with a header and multiple rows.
*/
const TableColumnSkeleton = ({rowCount=6}) => {
    return <div className='table-column-skeleton'>
        <div className='header'>
            <Skeleton height='35px' />
        </div>
        <div className='rows'>
            {Array.from({length: rowCount}, (_, index) => index +1)
                .map((_, index) => <Skeleton height='15px' width={`${getRandomInt(30, 100)}%`} key={index} />)}
        </div>
    </div>
}



export default TableSkeleton;
