import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const PageWrapper = ({ Page, pageProps }: any) => (
  <React.StrictMode>
    <Page {...pageProps} />
  </React.StrictMode>
);
