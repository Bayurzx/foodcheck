import React from 'react'
import ReactMarkdown from 'react-markdown';


const MarkdownPage = () => {

    const dummyMarkdownContent = `
## Warnings

- Discontinue use if you experience any adverse effects
- Reduce the dosage if the product causes an increase in your normal bowel movements

## Advice

It's important to be cautious with this product given your medical conditions and medications. It's best to consult with a healthcare professional before use.

## Food_facts

### Stinging nettle

May cause allergic reactions in some individuals, especially those with a history of allergies to plants like ragweed, marigolds, daisies, and chrysanthemums.

### Pygeum, Saw palmetto, Viscum album

Limited research on the safety and efficacy of these ingredients, especially in combination with your medical conditions and medications.

`
    return (
        <div className='prose dark:prose-invert'>
            <ReactMarkdown>{dummyMarkdownContent}</ReactMarkdown>
        </div>

    )
}

export default MarkdownPage;