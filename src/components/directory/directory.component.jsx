import React from 'react';
import { useSelector } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selector';


import MenuItem from '../menu-item/menu-item.component';

import { DirectoryMenu }  from './directory-menu.styles.jsx';

const Directory = () => {
    const sections = useSelector(selectDirectorySections)
    
    return(
    <DirectoryMenu>
        {sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps}/>
            ))}
    </DirectoryMenu>
)};



export default Directory;