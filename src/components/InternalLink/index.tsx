import React, { forwardRef } from 'react';
import Link from 'next/link';
import { InternalLinkProps } from './types';

const InternalLink = (
    {
        href,
        children,
        ...props
    }: InternalLinkProps,
    ref: any
) => (
    <Link
        href={`${href}`}
        ref={ref}
        {...props}
    >
        {children}
    </Link>
);

export default forwardRef(InternalLink);
