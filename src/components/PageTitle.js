function PageTitle({ children }) {
  return (
    <h2 className="font-mono font-bold text-6xl w-full text-center border-b-2 border-black dark:border-teal-100 mb-2">
      {children}
    </h2>
  );
}

export default PageTitle;
