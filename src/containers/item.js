import { connect } from 'react-redux';
import { updateFavourite } from '../actions/favourites';
import Item from '../components/item';

export default connect(
    (state, ownProps) => ({
        isFavourite: state.favourites.hash[ownProps.id],
        isFavouriteLoading: state.favourites.isLoading && state.favourites.itemId === ownProps.id
    }),
    {
        onUpdateFavourite: updateFavourite
    }
)(Item);
