import * as React from 'react';
import '@jayphelps/fake-package-for-gatsby-dev-ssr-issue';

export default function Index() {
  return (
    <>
      <p>
        Demo that can showing the expected behavior. Edit this
        nextjs-app/pages/index.js component, then do a full page refresh to
        confirm it does not cause issues.
      </p>
      <pre>
        globalThis.fakePackageHasBeenImported ==={' '}
        {String(globalThis.fakePackageHasBeenImported)}
      </pre>
    </>
  );
}
