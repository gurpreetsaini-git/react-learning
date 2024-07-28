const heading = React.createElement(
    'div', 
    { id: "parent"}, 
    [
        React.createElement('div', {id: "child1"}, [
            React.createElement('h1', {}, 'I am an H1 tag!'),
            React.createElement('h2', {}, 'I am an H2 tag!')
        ]),
        React.createElement('div', {id: "child2"}, [
            React.createElement('h1', {}, 'I am an H3 tag!'),
            React.createElement('h2', {}, 'I am an H4 tag!')
        ])
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);


/** 
 * 
 * <div id="parent">
 *      <div id="child1">
 *          <h1>I am an H1 tag.</h1>
 *          <h2>I am an H2 tag.</h2>
 *      </div>
 *      <div id="child2">
 *          <h1>I am an H1 tag.</h1>
 *          <h2>I am an H2 tag.</h2>
 *      </div>
 * </div>
 */