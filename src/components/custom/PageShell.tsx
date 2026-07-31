import { ReactNode } from "react";

const PageShell = ({ children }: { children: ReactNode }) => (
  <main className="mx-auto max-w-4xl px-4 pb-24 sm:px-6">
    {children}
  </main>
);

export default PageShell;
