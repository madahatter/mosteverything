var rootdiv = document.getElementById('root');
var elem = React.createElement(
  "div",
  null,
  React.createElement(
    "a",
    { href: "www.google.com" },
    "Google.com"
  ),
  React.createElement(
    "div",
    { id: "somedivid" },
    "somediv"
  )
);

ReactDOM.render(elem, rootdiv);
