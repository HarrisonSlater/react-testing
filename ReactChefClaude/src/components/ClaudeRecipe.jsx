import Markdown from 'react-markdown';

export default function ClaudeRecipe({text}) {
    return (
        <section class="recipe-result">
        <h2>Chef Gemini Recommends:</h2>
        
        <Markdown>{text}</Markdown>

    </section>
    )
}