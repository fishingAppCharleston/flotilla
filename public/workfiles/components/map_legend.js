import React from 'react';

import Search from './search';

export default (props) => {
    return (
        <Search onSubmit={ props.onSubmit } />
    );
}
