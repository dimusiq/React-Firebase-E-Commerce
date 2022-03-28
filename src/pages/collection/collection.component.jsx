import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

import {
    CollectionPageContainer,
    CollectionPageTitle,
    CollectionPageItems
} from './collection.styles.jsx';

const CollectionPage = () => {
    const { collectionId } = useParams();
    const collection = useSelector(selectCollection(collectionId));
    const { title, items } = collection;


    return(
        <CollectionPageContainer>
            <CollectionPageTitle>{title}</CollectionPageTitle>
            <CollectionPageItems>
                {items.map((item) => ( 
                    <CollectionItem key={item.id} item={item}/>
                    ))}
            </CollectionPageItems>
        </CollectionPageContainer>
)
}

export default CollectionPage;