import React from 'react';
import { RichText } from 'prismic-reactjs';
import { quoteStyles } from 'styles';

function Quote({ slice }) {
  return (
    <section className="content-section quote">
      <blockquote>{RichText.asText(slice.primary.quote_text)}</blockquote>
      <style jsx global>
        {quoteStyles}
      </style>
    </section>
  );
}

export default Quote;
