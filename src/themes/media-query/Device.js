//
import React from 'react'

// This is for the component theming of device media query

const size = {
  mobileSize: '576px',
  tabletSize: '768px',
  desktopSize: '1200px'
}

const media = {
  mobile: `(min-width: ${size.mobileSize})`,
  tablet: `(min-width: ${size.tabletSize})`,
  desktop: `(min-width: ${size.desktopSize})`,
};

export default media;
