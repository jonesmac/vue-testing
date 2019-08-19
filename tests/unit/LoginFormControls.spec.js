import { shallowMount } from '@vue/test-utils'
import LoginFormControls from '@/components/LoginFormControls.vue'

describe('LoginFormControls.vue', () => {
  it('should emit on input', () => {
    const wrapper = shallowMount(LoginFormControls, {});
    const email = wrapper.find('input[name=email]');
    const password = wrapper.find('input[name=password]');
    const emitted = wrapper.emitted();

    email.setValue('test@gmail.com');
    password.setValue('foo');

    expect(emitted['input-event'][0][0]).toEqual({
      control: wrapper.vm.formFields.email,
      value: 'test@gmail.com'
    });

    expect(emitted['input-event'][1][0]).toEqual({
      control: wrapper.vm.formFields.password,
      value: 'foo'
    });
    
  });
});