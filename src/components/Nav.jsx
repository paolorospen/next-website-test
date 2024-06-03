const Nav = () => {
  return (
    <>
      <nav className="flex justify-between px-10 py-5 font-sans font-medium text-lg bg-white">
        <div className="uppercase text-2xl">Test</div>
        <ul className="flex gap-3">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/company">Company</a>
          </li>
          <li>
            <a href="/recruit">Recruit</a>
          </li>
          <li>
            <a href="/contact">Store</a>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Nav;
