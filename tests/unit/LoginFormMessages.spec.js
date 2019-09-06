import { shallowMount } from '@vue/test-utils'
import LoginFormMessages from '@/components/LoginFormMessages.vue'

describe('LoginFormMessages.vue', () => {
  it('should handle messages as a prop', () => {
    const wrapper = shallowMount(LoginFormMessages, {});

    wrapper.setProps({ messages: ['test 1', 'test 2'] });
    const message1 = wrapper.findAll('li').at(0);
    const message = wrapper.findAll('li').at(1);

    expect(message1.text()).toEqual('test 1');
    expect(message.text()).toEqual('test 2');
    
  });
  it('should handle a css class as a prop', () => {
    const wrapper = shallowMount(LoginFormMessages, {});

    wrapper.setProps({ 
      cssClass: 'test-class',
      messages: ['test 1']
    });

    const message1 = wrapper.findAll('li').at(0);
    expect(message1.classes()).toContain('test-class')
  })
});