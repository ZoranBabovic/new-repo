import React from 'react';
import { Image, Link, Text, ImageField, LinkField, TextField } from '@sitecore-jss/sitecore-jss-react';

export type OutlineProps = {
  fields: {
    image: ImageField;
    callout: LinkField;
    title: TextField;
  };
};

const Outline: React.FC<OutlineProps> = ({ fields }) => (
  <div className="outline-component">
    {fields.title && <Text field={fields.title} tag="h2" />}
    {fields.image && <Image field={fields.image} />}
    {fields.callout && <Link field={fields.callout} />}
  </div>
);

export default Outline;
//test comment
