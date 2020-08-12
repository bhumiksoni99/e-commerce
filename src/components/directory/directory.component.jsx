import React from 'react'
import {connect} from 'react-redux';
import './directory.scss'

import MenuItem from '../menu-item/menu-item.component';

import selectDirectorySections from '../../redux/directory/directory.selectors';

const Directory = ({sections}) => (

    <div className='directory-menu'>
        {
        sections.map(({id,imageUrl,title,size,linkUrl }) => ( 
        <MenuItem key={id} imageUrl={imageUrl} size={size} title={title} linkUrl={linkUrl} />
                ))
        }
    </div>
)   


const mapStateToProps = state => ({
    sections:selectDirectorySections(state)
})

export default connect(mapStateToProps)(Directory) 