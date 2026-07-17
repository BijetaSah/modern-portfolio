function SectionContainer({ sectionId, children }) {
  return (
    <section className="py-10 md:py-20 lg:32 relative" id={sectionId}>
      {children}
    </section>
  );
}

export default SectionContainer;
