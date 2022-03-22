import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import {
    CollectionPreviewContainer,
    CollectionPreviewTitleStyle,
    CollectionPreviewStyled
} from './collection-preview.styles';

const CollectionPreview = ( { title, items, }) =>(
<CollectionPreviewContainer>
    <CollectionPreviewTitleStyle>{title.toUpperCase()}</CollectionPreviewTitleStyle>
    <CollectionPreviewStyled>
        {
            items
            .filter((item, idx)=> idx < 4)
            .map(item => (
                <CollectionItem key={item.id} item={item}
                />
            ) )
        }
    </CollectionPreviewStyled>
</CollectionPreviewContainer>
)

export default CollectionPreview;