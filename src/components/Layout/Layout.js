const Layout = (props) => {
  return (
    <section style={{ background: "yellow", maxWidth: "45rem", margin: "0 auto" }}>
      {props.children}
    </section>
  );
};

export default Layout;
