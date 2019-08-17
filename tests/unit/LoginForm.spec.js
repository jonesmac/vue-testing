import { shallowMount } from '@vue/test-utils'
import LoginForm from '@/views/LoginForm.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(LoginForm, {})
    const email = wrapper.find('input[name=email]');
    email.element.value = 'test@gmail.com';
    email.trigger('input');
    expect(wrapper.vm.payload.email).toEqual('test@gmail.com')
  });
});