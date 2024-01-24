import React, { useEffect } from 'react';
import sdk from '@stackblitz/sdk';
const embedProject = () => {
    sdk.embedProjectId('embed', 'css-custom-prop-color-values', {
      openFile: 'index.ts',
    });
  };

const StackBlitzComponent = () => {
  useEffect(() => {

  }, []);

  return <div id="embed">Loading StackBlitz...</div>;
};

export default StackBlitzComponent;
