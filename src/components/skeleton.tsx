import  {CSSProperties} from 'react';
import './skeleton.styles.css'

// Define the properties accepted by the Skeleton component.
interface SkeletonProps {
    type?: 'rectangle' | 'square' | 'circle', // Shape of the skeleton component
    size?: string,          // Size to use when shape is square or circle
    className?: string,     // Additional classes for custom CSS styling

    height?: string,        // Height of the skeleton, defaults to 100%
    width?: string,         // Width of the skeleton, defaults to 100%
    borderRadius?: string,  // Border radius for rounded corners 

    style?: CSSProperties,  // Additional inline styles
}

const Skeleton = ({
    type='rectangle',       // Default shape to 'rectangle'
    className,
    height='100%',
    width='100%',
    size='50px',            // Default size for square and circle
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
