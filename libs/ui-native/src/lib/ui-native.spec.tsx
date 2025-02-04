import React from 'react';
import { render } from '@testing-library/react-native';
import UINative from './ui-native';

describe('UINative', () => {
    it('should render correctly', () => {
        const { getByText } = render(<UINative />);
        expect(getByText('Hello, React Native!')).toBeTruthy();
    });

    it('should have the correct styles', () => {
        const { getByText } = render(<UINative />);
        const textElement = getByText('Hello, React Native!');
        expect(textElement.props.style).toMatchObject({
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
        });
    });
});