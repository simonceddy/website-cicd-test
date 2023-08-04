function PageLayout({ children }) {
  return (
    <div className="h-full w-full col justify-start items-center">
      {children}
    </div>
  );
}

export default PageLayout;
