/* eslint-disable max-nested-callbacks */
import FlyoutSection from './flyout-section';
import {build} from 'vuenit';

describe('components', () => {
    describe('molecules', () => {
        describe('flyout-section', () => {
            const fixture = require('./flyout-section.unit.spec.json'),
                mount = build(FlyoutSection, {
                    components: {
                        'content-link': `<div><slot></slot></div>`
                    }
                });

            it('should render a "flyout-section"', () => {
                const vm = mount({});

                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });

            it('should render a title', () => {
                const vm = mount({
                        props: {
                            title: fixture.title
                        }
                    }),
                    title = vm.$el.querySelector('.flyout__title');

                expect(title).toBeTruthy();
                expect(title.textContent).toEqual(vm.title);
                vm.$destroy();
            });

            it('should render a list of links', () => {
                const vm = mount({
                        props: {
                            links: fixture.links,
                            bottomLinks: fixture.bottomLinks
                        }
                    }),
                    links = vm.$el.querySelectorAll('.flyout__link'),
                    bottomLinks = vm.$el.querySelectorAll('.flyout__link--cta-mini');

                expect(links.length).toBe(fixture.links.length);
                expect(bottomLinks.length).toBe(fixture.bottomLinks.length);
                expect(links[0].textContent).toEqual(fixture.links[0].title);
                vm.$destroy();
            });

            it('should not have a toggle btn if amount of items is less or equal to max items', () => {
                const vm = mount({
                        props: {
                            links: [
                                {
                                    text: 'a link'
                                }
                            ]
                        }
                    }),
                    toggleBtn = vm.$el.querySelector('.flyout__toggle');

                expect(toggleBtn).toBeFalsy();
                vm.$destroy();
            });

            it('should render 1 column if amount of items is less or equal than max column items', () => {
                const vm = mount({
                    props: {
                        links: fixture.linksOneColumn
                    }
                });

                expect(vm.sectionClass).not.toContain(vm.columnClassDouble);
                expect(vm.sectionClass).not.toContain(vm.columnClassTriple);
                vm.$destroy();
            });

            it('should render 2 columns if amount of items is more than and less than double the amount of max column items', () => {
                const vm = mount({
                    props: {
                        links: fixture.linksTwoColumns
                    }
                });

                expect(vm.sectionClass).toContain(vm.columnClassDouble);
                expect(vm.sectionClass).not.toContain(vm.columnClassTriple);
                vm.$destroy();
            });

            it('should render 3 columns if amount of items is more than double the amount of max column items', () => {
                const vm = mount({
                    props: {
                        links: fixture.linksThreeColumns
                    }
                });

                expect(vm.sectionClass).not.toContain(vm.columnClassDouble);
                expect(vm.sectionClass).toContain(vm.columnClassTriple);
                vm.$destroy();
            });
        });
    });
});