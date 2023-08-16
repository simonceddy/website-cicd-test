function PageContent({ children }) {
  return (
    <div className="w-full p-2 col justify-start items-start flex-1">
      {children}
    </div>
  );
}

export default PageContent;
