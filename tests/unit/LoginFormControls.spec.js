import { shallowMount } from '@vue/test-utils'
import LoginFormControls from '@/components/LoginFormControls.vue'

describe('LoginFormControls.vue', () => {
  it('should emit on input', () => {
    const wrapper = shallowMount(LoginFormControls, {});
    const email = wrapper.find('input[name=email]');
    const password = wrapper.find('input[name=password]');
    const emitted = wrapper.emitted();
    const payload = {
      email: 'test@gmail.com',
      password: 'foo'
    }

    email.setValue(payload.email);
    password.setValue(payload.password);

    expect(emitted['input'][1][0]).toEqual(payload);
    
  });
});