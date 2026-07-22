function Container({ children, style }) {
  return (
    <div
      className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:py-10 py-6 ${style}`}
    >
      {children}
    </div>
  );
}
export default Container;
