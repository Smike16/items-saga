import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './icon.css';

export const ICON_TYPES = [
    'help',
    'star',
    'star-fill'
];

export default class Icon extends PureComponent {
    static propTypes = {
        type: PropTypes.oneOf(ICON_TYPES).isRequired,
        className: PropTypes.string,
        disabled: PropTypes.bool,
        onClick: PropTypes.func
    };

    render() {
        const { className, type, disabled, onClick } = this.props;
        const classes = classNames(
            className,
            'icon',
            `icon_type-${type}`,
            {
                icon_disabled: disabled
            }
        );

        return (
            <i className={classes} onClick={onClick} />
        );
    }
}
