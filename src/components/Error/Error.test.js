import React from 'react';

import { render } from '@testing-library/react';
import Error from './Error';

describe('Error', ()=>{

    it('should match snapshot', () => {
        const {asFragment} = render(<Error />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should render', () => {
        const txBasicWrapper = render(<Error errorMsg={'error'} />);
        const element = txBasicWrapper.container.firstElementChild;
        expect(element).toBeInTheDocument();
        expect(element).toHaveClass('errorMsg');
    });
});