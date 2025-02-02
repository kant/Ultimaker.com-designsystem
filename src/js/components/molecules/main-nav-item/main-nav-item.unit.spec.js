/* eslint-disable max-nested-callbacks */
import { build } from 'vuenit';
import MainNavItem from './main-nav-item';
import BrowserCapabilities from 'utils/browser-capabilities';

describe('components', () => {
    describe('molecules', () => {
        describe('main-nav-item', () => {
            const fixture = require('./main-nav-item.unit.spec.json');
            const mount = build(MainNavItem, { props: fixture });

            it('should be in a closed state by default', () => {
                const vm = mount();

                expect(vm.flyoutIsOpen).toEqual(false);
                vm.$destroy();
            });

            it('should be able to toggle the openState', async (done) => {
                const vm = mount();

                await vm.showFlyout();
                expect(vm.flyoutIsOpen).toEqual(true);

                vm.hideFlyout();
                expect(vm.flyoutIsOpen).toEqual(false);

                vm.toggleFlyout();
                expect(vm.flyoutIsOpen).toEqual(true);

                const delayPromise = vm.delayHideFlyout();

                expect(vm.hideTimeout).not.toEqual(null);
                expect(vm.flyoutIsOpen).toEqual(true);

                await delayPromise;
                expect(vm.hideTimeout).toEqual(null);
                expect(vm.flyoutIsOpen).toEqual(false);

                vm.$destroy();
                done();
            });

            it('should not close the flyout when reopened within a short period of time', async (done) => {
                const vm = mount();

                await vm.showFlyout();
                vm.delayHideFlyout();
                expect(vm.flyoutIsOpen).toEqual(true);
                await vm.showFlyout();
                expect(vm.flyoutIsOpen).toEqual(true);
                vm.$destroy();
                done();
            });

            it('should emit a tab events when next or previous should be selected', () => {
                const vm = mount();

                spyOn(vm, '$emit');

                vm.selectNextNavItem();
                expect(vm.$emit).toHaveBeenCalledWith('tab');

                vm.selectPrevNavItem();
                expect(vm.$emit).toHaveBeenCalledWith('shifttab');

                vm.$destroy();
            });

            it('should be able to focus on parent element', async (done) => {
                const vm = mount();

                vm.flyoutIsOpen = true;
                vm.$refs.parent = {
                    $el: jasmine.createSpyObj('parent', {
                        focus: jasmine.createSpy(),
                    }),
                };
                vm.selectParent();
                await vm.$nextTick();
                expect(vm.$refs.parent.$el.focus).toHaveBeenCalled();
                expect(vm.flyoutIsOpen).toEqual(false);

                done();
                vm.$destroy();
            });

            it('should display a toggle for touch desktop devices', () => {
                spyOnProperty(BrowserCapabilities, 'supportsTouch', 'get').and.returnValue(true);

                const vm = mount({
                    props: {
                        items: [],
                        isCompact: false,
                    },
                });

                expect(vm.toggleIsVisible).toBeTruthy();

                vm.$destroy();
            });

            it('should focus on first link when opened', async (done) => {
                const vm = mount();

                vm.$refs.flyout = jasmine.createSpyObj('autocomplete', {
                    selectFirstLink: jasmine.createSpy(),
                });

                await vm.selectFlyoutFirstLink();

                expect(vm.$refs.flyout.selectFirstLink).toHaveBeenCalled();
                vm.$destroy();
                done();
            });
        });
    });
});
