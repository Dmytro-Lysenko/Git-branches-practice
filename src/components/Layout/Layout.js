const Layout = (props) => {
  return (
    <section style={{ background: "yellow", maxWidth: "50rem", margin: "0 auto" }}>
      {props.children}
    </section>
  );
};

export default Layout;
