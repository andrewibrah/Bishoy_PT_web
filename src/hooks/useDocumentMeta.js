import { useEffect } from 'react';

const DESCRIPTION_SELECTOR = 'meta[name="description"]';

export function useDocumentMeta({ title, description, structuredData } = {}) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      let descriptionTag = document.querySelector(DESCRIPTION_SELECTOR);
      if (!descriptionTag) {
        descriptionTag = document.createElement('meta');
        descriptionTag.setAttribute('name', 'description');
        document.head.appendChild(descriptionTag);
      }
      descriptionTag.setAttribute('content', description);
    }

    const existingStructuredData = document.querySelectorAll('script[data-dynamic-structured-data="true"]');
    existingStructuredData.forEach((node) => node.parentNode?.removeChild(node));

    if (!structuredData) {
      return undefined;
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.dataset.dynamicStructuredData = 'true';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      script.parentNode?.removeChild(script);
    };
  }, [title, description, structuredData]);
}
