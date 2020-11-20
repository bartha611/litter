import React, { Suspense} from 'react';


export function WaitComponent(Component) {
  return props => (
    <Suspense fallback={<div>...Loading</div>}>
      <Component {...props} />
    </Suspense>
  );
}