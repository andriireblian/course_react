import React from 'react';
import {Button} from '../app/components/Button'

describe('Button component', () => {
    it('should render', function () {
        const component = shallow(<Button/>);
        expect(component).toMatchSnapshot();
    });

})