function SubHeading({ children }) {
  return (
    <h2 className="font-orbitron text-4xl md:text-5xl font-bold uppercase tracking-wide text-foreground flex items-center gap-2">
      {children}
    </h2>
  );
}
export default SubHeading;
