import React from 'react';
 import CollectionsOverview from '../../components/collections-overview/collections-overview.component.jsx';
import '../../components/collection-preview/collection-preview.component';


const ShopPage = ({ collections }) => (
    <div className='shop-page'>
        <CollectionsOverview />
    </div>
);

export default ShopPage;