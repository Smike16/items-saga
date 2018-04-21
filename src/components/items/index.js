import React, { PureComponent } from 'react';
import Item from '../../containers/item';
import Logo from '../logo';
import Loader from '../loader';
import Button from '../button';
import './items.css';

export default class Items extends PureComponent {
    componentDidMount() {
        this.props.onFetchItems();
    }

    render() {
        return (
            <div className='root'>
                <Logo />
                {this.renderContent()}
                {this.renderButton()}
                {this.renderError()}
            </div>
        );
    }

    renderContent() {
        const { isLoading, items } = this.props;

        if (isLoading && !items.length) {
            return (
                <Loader />
            );
        }

        return (
            <div className='items'>
                {items.map(item => (
                    <Item
                        key={item.id}
                        {...item} />
                ))}
            </div>
        );
    }

    renderButton() {
        const { isLoading, items, allLoaded } = this.props;

        if (!items.length || allLoaded) {
            return null;
        }

        return (
            <Button loading={isLoading} onClick={this.props.onFetchItems}>
                Ещё объявления
            </Button>
        );
    }

    renderError() {
        const { error } = this.props;

        if (!error) {
            return null;
        }

        return (
            <div>{error.message}</div>
        );
    }
}
