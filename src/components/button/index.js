import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './button.css';

export default class Button extends PureComponent {
    static propTypes = {
        children: PropTypes.node.isRequired,
        loading: PropTypes.bool,
        onClick: PropTypes.func,
        disabled: PropTypes.bool,
        type: PropTypes.string
    };

    static defaultProps = {
        design: 'default',
        size: 'l',
        type: 'button'
    };

    render() {
        const {
            children,
            type,
            design,
            size,
            loading,
            disabled,
            onClick
        } = this.props;

        const buttonClass = classNames('button', `button_size-${size}`, `button_design-${design}`, {
            'button_disabled': disabled,
            'button_loading': loading
        });

        return (
            <button
                type={type}
                className={buttonClass}
                onClick={onClick}>
                {children}
            </button>
        );
    }
}
