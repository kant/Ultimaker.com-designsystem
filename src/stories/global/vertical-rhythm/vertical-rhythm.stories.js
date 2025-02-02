import { storiesOf } from '@storybook/vue';
import notes from './vertical-rhythm.stories.md';

storiesOf('global', module)
    .add(
        'Vertical rhythm',
        () => ({
            template: `<div class="demo-panel demo-rhythm">
                <h3>Why vertical rhythm?</h3>
                <p>To ensure a good reading experience and guide the reader through our content we design every pattern based on
                    vertical rhythm. The rhythm is based on multiples or divisions of our building unit.</p>
                <p>Ensure that the content is balanced on the baseline grid which you can use to test. Add
                    <em>'demo-rhythm'</em> to
                    check the rhythm of your pattern in Patternlab. Most patterns are on rhyhtm by default.</p>
                <p>It's not necessary to be on the baseline in every line of text, but in order to feel the balance it should be on
                    the grid within a couple of lines.</p>
            </div>`,
        }),
        {
            notes: { markdown: notes },
        },
    );
