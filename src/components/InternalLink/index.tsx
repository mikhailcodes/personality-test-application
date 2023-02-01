import React, { forwardRef } from 'react';
import Link from 'next/link';
import { InternalLinkProps } from './types';

const InternalLink = (
    {
        href,
        as,
        replace,
        scroll,
        shallow,
        passHref,
        prefetch,
        locale,
        legacyBehavior,
        children,
        ...props
    }: InternalLinkProps,
    ref: any
) => (
    <Link
        href={href}
        as={as}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        passHref={passHref}
        prefetch={prefetch}
        locale={locale}
        legacyBehavior={legacyBehavior}
        ref={ref}
        {...props}
    >
        {children}
    </Link>
);

export default forwardRef(InternalLink);
