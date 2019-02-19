/* eslint-disable max-nested-callbacks */
import Tooltip from './tooltip';
import { build } from 'vuenit';

describe('components', () => {
    describe('atoms', () => {
        describe('tooltip', () => {
            const mount = build(Tooltip);

            it('should render a tooltip with a block property', () => {
                const vm = mount({
                        props: {
                            block: 'test',
                        },
                    }).$mount();

                const objAttributes = vm.$el.attributes;
                expect(objAttributes['class'].value).toContain('test__tooltip');
                vm.$destroy();
            });
        });
    });
});