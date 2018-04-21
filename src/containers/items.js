import { connect } from 'react-redux';
import { fetchItems } from '../actions/items';
import Items from '../components/items';

export default connect(
    state => ({
        isLoading: state.items.isLoading,
        items: state.items.list,
        error: state.items.error,
        allLoaded: state.items.total === state.items.list.length
    }),
    {
        onFetchItems: fetchItems
    }
)(Items);
