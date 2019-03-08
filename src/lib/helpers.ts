import { memoize } from 'lodash';

export const classesHelper = styles => {
  return memoize(classes => {
    const classesArr = classes.split(' ');
    return classesArr
      .reduce((acc, className) => {
        if (!styles[className]) {
          return acc;
        }
        return [...acc, styles[className]];
      }, [])
      .join(' ');
  });
};
