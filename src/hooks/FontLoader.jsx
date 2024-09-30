// The Web Font Loader is a JavaScript library that gives you more control over font loading than the Google Fonts API provides.
// The Web Font Loader also lets you use multiple web font providers. It was co-developed by Google and Typekit.
// https://github.com/typekit/webfontloader

import { useEffect } from 'react';
import WebFont from 'webfontloader';

export const FontLoader = () => {
    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Roboto Flex', 'Righteous']
          }
        });
    }, []);
};