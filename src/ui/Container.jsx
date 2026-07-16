function Container({ children, style }) {
  return (
    <div className={`relative z-10 max-w-7xl mx-auto px-6 py-10 ${style}`}>
      {children}
    </div>
  );
}
export default Container;
