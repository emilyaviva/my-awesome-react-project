import React from "react";

class Header extends React.Component {
  render() {
    return <header>© {new Date().getFullYear()} nobody in particular</header>;
  }
}

export default Header;
