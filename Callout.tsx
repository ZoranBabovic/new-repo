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
    image?: ImageField;
    title: Field<string>;
    description?: Field<string>;
    button?: LinkField;
    backgroundColor: Field<string>;
  };
}

const Callout = ({ fields }: CalloutProps) => {
  const backgroundClass = fields.backgroundColor?.value || 'primary';

  return (
    <div
      className={`component callout flex flex-col items-center gap-20 mx-auto md:flex-row md:w-11/12 padding-callout ${backgroundClass}`}
    >
      {fields.image && (
        <div className="flex-none">
          <Image field={fields.image} alt={fields.title.value} className="w-70 h-70" />
        </div>
      )}
      <div className="text-center md:text-left grow">
        <Text tag="h2" field={fields.title} className="mb-8 title5" />
        {fields.description && <RichText field={fields.description} className="body2" />}
      </div>
      {fields.button && (
        <div className="flex-none w-full sm:w-fit">
          <Link field={fields.button} className={`mx-auto mt-0`} />
        </div>
      )}
    </div>
  );
};

export default Callout;
