import { Link } from "@tanstack/react-router";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <header className="p-2 flex gap-2">
        <Link to="/manuscript-strcount" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/manuscript-strcount/about" className="[&.active]:font-bold">
          About
        </Link>
      </header>
      <hr />
      {children}
    </main>
  );
};
