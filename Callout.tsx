import React from 'react';
import {
  Field,
  LinkField,
  ImageField,
  Text,
  RichText,
  Link,
  Image,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface CalloutProps {
  fields: {
    image?: ImageField; // Optional image field
    title: Field<string>; // Required title field
    description?: Field<string>; // Optional description field
    button?: LinkField; // Optional button link field
    backgroundColor: Field<string>; // Dropdown for background color
  };
}

const Callout = ({ fields }: CalloutProps): JSX.Element => {
  const backgroundClass =
    fields.backgroundColor?.value === 'Primary' ? 'callout-primary' : 'callout-secondary';

  return (
    <div className={`callout-component ${backgroundClass}`}>
      <div className="callout-content">
        {fields.image && (
          <Image field={fields.image} alt={fields.title.value} className="callout-image" />
        )}
        <Text tag="h2" field={fields.title} className="callout-title" />
        {fields.description && (
          <RichText field={fields.description} className="callout-description" />
        )}
        {fields.button && (
          <Link field={fields.button} className="callout-button">
            {fields.button.value?.text}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Callout;
