import React from "react";

function Page(props) {
  return (
    <div>
      <header>
        <h2>{props.title}</h2>
      </header>
      <main>{props.children}</main>
      <footer>
        &copy; All Right Reserved
      </footer>
    </div>
  );
}

export default Page;
