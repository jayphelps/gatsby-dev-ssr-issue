import * as React from 'react';
import '@jayphelps/fake-package-for-gatsby-dev-ssr-issue';

export default function Index() {
  return (
    <>
      <p>
        To reproduce the issue, edit this src/pages/index.js component, then do
        a full page refresh.
      </p>
      <pre>
        globalThis.fakePackageHasBeenImportedCount ==={' '}
        {String(globalThis.fakePackageHasBeenImported)}
      </pre>
    </>
  );
}
