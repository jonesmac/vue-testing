import { shallowMount } from '@vue/test-utils'
import LoginFormErrors from '@/components/LoginFormErrors.vue'

describe('LoginFormErrors.vue', () => {
  it('should handle errors as a prop', () => {
    const wrapper = shallowMount(LoginFormErrors, {});

    wrapper.setProps({ errors: ['test 1', 'test 2'] });
    const error1 = wrapper.findAll('li').at(0);
    const error2 = wrapper.findAll('li').at(1);

    expect(error1.text()).toEqual('test 1');
    expect(error2.text()).toEqual('test 2');
    
  });
});