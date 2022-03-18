import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selector';


import MenuItem from '../menu-item/menu-item.component';

// import './directory.styles.scss';

import { DirectoryMenu }  from './directory-menu.styles.jsx';

const Directory = ({ sections }) => (
    <DirectoryMenu>
        {sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps}/>
            ))}
    </DirectoryMenu>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);