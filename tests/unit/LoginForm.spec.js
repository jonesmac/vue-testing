import { shallowMount } from '@vue/test-utils'
import LoginForm from '@/components/LoginForm.vue'

describe('LoginForm.vue', () => {
  it('validates the form on submit and shows error messages', () => {    
    const wrapper = shallowMount(LoginForm, {});
    const form = wrapper.find('form');

    expect(wrapper.find('.errors').exists()).toBe(false);
    form.trigger('submit');
    expect(wrapper.find('.errors').isVisible()).toBe(true);
    
    const errors = wrapper.findAll('.error-message');
    const firstError = errors.at(0);
    const secondError = errors.at(1);

    expect(errors.length).toBe(2);
    expect(firstError.text()).toEqual(wrapper.vm.errorMessages.emailRequired);
    expect(secondError.text()).toEqual(wrapper.vm.errorMessages.passwordRequired);
  });
});