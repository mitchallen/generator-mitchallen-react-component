/*
    Module: <%= fullPackageName %>
    Author: <%= npmAuthor %>
*/

import React from 'react';
// import PropTypes from 'prop-types';

class <%= reactClassName %> extends React.Component {
  render() {
    return (
    	<div>
      		<div>Package: <%= fullPackageName %></div>
      		<div>Component: <%= reactClassName %></div>
      	</div>
    );
  }
}

// <%= reactClassName %>.propTypes = {
//   // someProp: PropTypes.isRequired,
// };

export default <%= reactClassName %>;