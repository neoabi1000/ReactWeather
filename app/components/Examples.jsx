var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Bhubaneswar'>Bhubaneswar, BBS</Link>
        </li>
        <li>
          <Link to='/?location=Hyderabad'>Hyderabad, HYD</Link>
        </li>
        <li>
          <Link to='/?location=Malé'>Maldives Malé</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
