import { Vue, Component, Prop } from 'vue-property-decorator';
import { ModalWizardProps } from './modal-wizard.models';
import WithRender from './modal-wizard.vue.html';

@WithRender
@Component({
    name: 'ModalWizard',
})

export class ModalWizard extends Vue implements ModalWizardProps {
    @Prop({ type: String, required: true }) title!: ModalWizardProps['title'];
    @Prop({ type: Array, required: true }) steps!: ModalWizardProps['steps'];

    activeStep: number = 0;

    showNextStep() {
        if (this.steps && this.steps.length > this.activeStep + 1) {
            this.activeStep += 1;
        }
    }
}
