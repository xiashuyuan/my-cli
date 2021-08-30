import React from 'react';
import cn from 'classnames';

import styles from './index.module.less';

export interface HelloProps {
  className?: string;
  name: string;
};

export function Hello({ className, name }: HelloProps) {
  return <div className={cn(styles.container, className)}>Hello {name}</div>;
}