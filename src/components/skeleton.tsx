import React, {CSSProperties} from 'react';
import './skeleton.styles.css'

interface SkeletonProps {
    type?: 'rectangle' | 'square' | 'circle',
    size?: string,
    className?: string,

    height?: string,
    width?: string,
    borderRadius?: string,    

    style?: CSSProperties,
}

const Skeleton = ({
    type='rectangle',
    className,
    height='100%',
    width='100%',
    size='50px',
    borderRadius,
    style,
}: SkeletonProps): JSX.Element => {
    const customStyle: CSSProperties = {
        ...style,
        // backgroundColor: 'blue',
        height,
        width,
        borderRadius,
    }

    if (type === 'circle') {
        customStyle.width = customStyle.height = size;
        customStyle.borderRadius = '50%';
    } else if (type === 'square') {
        customStyle.width = customStyle.height = size;
    }

    let customClassName: string = `skeleton ${type}`;
    if (className) customClassName += ` ${customClassName}`;

    return <div className={customClassName} style={customStyle}></div>
}

export default Skeleton;
