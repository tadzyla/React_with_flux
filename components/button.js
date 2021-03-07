import React from 'react';

export default class Button extends React.Component {
    render() {
        const {className, children, ...rest} = this.props;
        const cn = ('btn ' + className).split(' -').join(' btn-');
        

        return <button type="button" className={cn} {...rest}>{children}</button>;
    }
}