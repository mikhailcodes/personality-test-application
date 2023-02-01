import { LinkProps } from 'next/link';
import { ReactElement, FC } from 'react';

export interface InternalLinkProps extends LinkProps {
    children?: ReactElement | string | ReactElement[] | string[] | (string | ReactElement)[];
    [k: string]: any;
}
