import Image from 'next/image';
import { ImageProps } from './types';

const ImageItem = ({ src, width, height, alt, ...props }: ImageProps) => {
    let assetURL = src;
    let assetWidth = width ? width : 200;
    let assetHeight = height ? height : 200;
    let altText = alt ? alt : 'No alt text provided'

    return <Image src={assetURL} alt={altText} width={assetWidth} height={assetHeight} {...props} />;
};

export default ImageItem;