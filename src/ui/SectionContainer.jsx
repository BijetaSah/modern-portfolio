function SectionContainer({ sectionId, children }) {
  return (
    <section className="py-24 md:py-32 relative" id={sectionId}>
      {children}
    </section>
  );
}

export default SectionContainer;
